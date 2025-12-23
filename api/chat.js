const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    // Add CORS headers to allow requests from any origin (or restrict to your domain)
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

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("GEMINI_API_KEY is not set");
        return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "You are a helpful assistant for a portfolio website. Answer questions about the portfolio owner professionally and concisely." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I will answer questions about the portfolio owner professionally and concisely." }]
                }
            ],
        });

        const result = await chat.sendMessage(message);
        const text = result.response.text();

        return res.status(200).json({ reply: text });
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        return res.status(500).json({ error: 'Failed to generate response' });
    }
};
