const { GoogleGenerativeAI } = require("@google/generative-ai");
const { generateSystemPrompt, knowledgeBase, getCachedAnswer } = require("./knowledge-base");

module.exports = async (req, res) => {
    // Add CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Handle GET request to return suggested questions
    if (req.method === 'GET') {
        return res.status(200).json({
            suggestedQuestions: knowledgeBase.suggestedQuestions,
            status: 'online'
        });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, history = [] } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("GEMINI_API_KEY is not set");
        return res.status(500).json({ error: 'Server configuration error. Please contact the site owner.' });
    }

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // ── Cache check: return instantly for common questions ──────────────────
    const cached = getCachedAnswer(message);
    if (cached) {
        return res.status(200).json({
            reply: cached,
            suggestedQuestions: knowledgeBase.suggestedQuestions.slice(0, 3)
        });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // Build conversation history from client
        const conversationHistory = [
            {
                role: "user",
                parts: [{ text: generateSystemPrompt() }]
            },
            {
                role: "model",
                parts: [{ text: "Understood! I'm Siddharth's AI assistant, ready to help recruiters and visitors learn about his professional background, skills, projects, and experience. I'll provide accurate, professional, and helpful responses based on his portfolio information. How can I help you today?" }]
            }
        ];

        // Add previous conversation history if provided
        if (history && history.length > 0) {
            history.forEach(msg => {
                conversationHistory.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.content }]
                });
            });
        }

        const chat = model.startChat({
            history: conversationHistory,
            generationConfig: {
                maxOutputTokens: 150,
                temperature: 0.4,
            },
        });

        const result = await chat.sendMessage(message);
        const text = result.response.text();

        return res.status(200).json({
            reply: text,
            suggestedQuestions: knowledgeBase.suggestedQuestions.slice(0, 3) // Return a few suggestions for follow-up
        });
    } catch (error) {
        console.error("Error communicating with Gemini:", error);

        // Provide user-friendly error messages
        if (error.message?.includes('API key')) {
            return res.status(500).json({ error: 'API configuration issue. Please try again later.' });
        }
        if (error.message?.includes('quota')) {
            return res.status(429).json({ error: 'Service is temporarily busy. Please try again in a moment.' });
        }

        return res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
};
