// Knowledge Base for Siddharth Aswal's Portfolio Chatbot

const knowledgeBase = {
    personalInfo: {
        name: "Siddharth Aswal",
        title: "Full Stack Developer (Backend-Heavy)",
        experience: "4 years",
        location: "Gurugram, India",
        email: "aswalsiddharth99@gmail.com",
        phone: "+91 9997490937",
        linkedin: "linkedin.com/in/siddharth-aswal",
        currentCompany: "Tata AIG General Insurance",
        availability: "Open to new opportunities"
    },

    summary: `Siddharth Aswal is a Full Stack Developer with 4 years of experience building high-performance backend systems, APIs, and event-driven microservices using TypeScript, NestJS, React.js, and AWS. He specializes in microservices, serverless architectures, and distributed systems.`,

    workExperience: [
        {
            title: "Software Engineer",
            company: "Tata AIG General Insurance",
            location: "Gurugram, India",
            period: "April 2024 – January 2026",
            responsibilities: [
                "Built event-driven Lambda + SQS + SNS document pipeline for motor insurance vertical (8,000 Cr+ annual revenue), serving thousands of customers daily with 99.9% delivery reliability.",
                "Designed reporting pipeline generating 70K+ record reports, reducing sync-failure detection time by 70%.",
                "Integrated NestJS/ReactJS support portal with 3 core systems via real-time event streams, reducing MTTR by 40%."
            ],
            technologies: ["TypeScript", "Node.js", "NestJS", "React.js", "AWS Lambda", "SQS", "SNS", "S3", "SES", "EC2", "CloudWatch"]
        },
        {
            title: "Associate Consultant",
            company: "EY (Ernst & Young)",
            location: "Gurugram, India",
            period: "March 2023 – April 2024",
            responsibilities: [
                "Built server-side microservices for quote generation across 5+ product lines, cutting turnaround from days to minutes.",
                "Delivered full-stack CRM with rule-based orchestration and priority queues, improving resolution efficiency by 60%.",
                "Automated endorsement processing for millions of insurance records, reducing manual intervention by 50%."
            ],
            technologies: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "DynamoDB", "AWS"]
        },
        {
            title: "Jr. Node.js Engineer",
            company: "Henceforth Solutions Pvt. Ltd.",
            location: "Mohali, India",
            period: "March 2021 – February 2023",
            responsibilities: [
                "Built backend services for 3 Web3 applications from scratch, handling 50K+ monthly active users at 99% uptime.",
                "Set up Redis pub/sub WebSocket infrastructure for real-time messaging, hitting sub-50ms latency.",
                "Scaled ride-hailing backend to 10K+ concurrent WebSocket connections, ensuring zero data loss."
            ],
            technologies: ["Node.js", "Express.js", "WebSockets", "Redis", "MongoDB", "Web3", "Socket.io"]
        }
    ],

    projects: [
        {
            name: "Distributed Rate Limiter Service",
            description: "Production-grade distributed rate limiter using Redis + Lua scripting for atomic throttling across horizontally scaled microservices. Validated 1M+ req/s capacity via Autocannon load testing.",
            technologies: ["NestJS", "Redis", "Lua"],
            highlights: ["1M+ req/s throughput", "Atomic throttling via Lua", "Fault tolerance under load"]
        },
        {
            name: "NFTwist",
            description: "Complete NFT marketplace for creating, selling, auctioning, and buying NFTs from social posts, stories, reels, and videos.",
            technologies: ["Node.js", "Express.js", "MongoDB", "Web3"],
            highlights: ["50K+ monthly active users", "NFT minting from social content"]
        },
        {
            name: "Resale Force",
            description: "Sneaker authentication and resale platform with automated web scraping and AI-powered counterfeit detection.",
            technologies: ["Node.js", "Puppeteer", "MySQL"],
            highlights: ["Automated authentication", "Web scraping pipelines"]
        },
        {
            name: "SharedChat",
            description: "Real-time chat app supporting direct and group messaging with sub-50ms latency using Redis pub/sub WebSocket infrastructure.",
            technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
            highlights: ["Sub-50ms latency", "10K+ concurrent connections"]
        },
        {
            name: "Wardrobe",
            description: "Online clothing rental platform with inventory management and complex schema design in MongoDB and PostgreSQL.",
            technologies: ["Node.js", "MongoDB", "PostgreSQL", "TypeORM"],
            highlights: ["Complex schema design", "TypeORM integration"]
        }
    ],

    skills: {
        languages: ["TypeScript", "JavaScript", "SQL"],
        backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "WebSockets", "Microservices"],
        testing: ["Jest"],
        databases: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "Redis"],
        cloud: ["AWS Lambda", "SQS", "SNS", "S3", "SES", "EC2", "CloudWatch"],
        devops: ["Docker", "Git", "CI/CD"],
        frontend: ["React.js"],
        architecture: ["Microservices", "Serverless", "Event-Driven Systems", "Distributed Systems", "Caching"]
    },

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Graphic Era Hill University, Dehradun",
            period: "2019 – 2021"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "MJP Rohilkhand University, Bareilly",
            period: "2016 – 2019"
        }
    ],

    suggestedQuestions: [
        "What is Siddharth's tech stack?",
        "Tell me about the Distributed Rate Limiter project",
        "What's his AWS and cloud experience?",
        "Does he have microservices experience?",
        "Tell me about his time at Tata AIG",
        "Is he open to new opportunities?"
    ]
};

// ─── System Prompt ────────────────────────────────────────────────────────────

function generateSystemPrompt() {
    return `You are an AI assistant on Siddharth Aswal's portfolio. Help recruiters learn about his background concisely.

## Profile
Full Stack Developer (Backend-Heavy), 4 years experience. Stack: TypeScript, NestJS, React.js, AWS.
Currently open to new opportunities. Email: aswalsiddharth99@gmail.com | LinkedIn: linkedin.com/in/siddharth-aswal

## Experience
- **Tata AIG** (Apr 2024–Jan 2026): Event-driven Lambda/SQS/SNS pipeline (8,000 Cr+ revenue, 99.9% uptime), 70K+ record reports (70% faster detection), NestJS/React portal (40% MTTR reduction).
- **EY** (Mar 2023–Apr 2024): Quote generation microservices (5+ product lines, days→minutes), CRM with priority queues (60% efficiency gain), endorsement automation (50% less manual work).
- **Henceforth Solutions** (Mar 2021–Feb 2023): 3 Web3 apps (50K+ MAU, 99% uptime), Redis pub/sub WebSockets (sub-50ms), ride-hailing at 10K+ concurrent connections.

## Skills
Languages: TypeScript, JavaScript, SQL | Backend: Node.js, NestJS, Express.js, REST, WebSockets | DB: PostgreSQL, DynamoDB, MongoDB, MySQL, Redis | AWS: Lambda, SQS, SNS, S3, SES, EC2, CloudWatch | DevOps: Docker, Git, CI/CD | Frontend: React.js

## Key Project
Distributed Rate Limiter — NestJS + Redis + Lua, atomic throttling, 1M+ req/s validated via Autocannon.

## Rules
- Keep replies SHORT (3–5 bullet points max). Be factual, precise, recruiter-focused.
- Do NOT use any Markdown formatting (no **, no *, no _). Output only plain text.
- Use standard dashes (-) for bullet points, not bullet characters or asterisks.
- For questions outside this data, say you don't have that info and suggest emailing Siddharth.`;
}

module.exports = { knowledgeBase, generateSystemPrompt };
