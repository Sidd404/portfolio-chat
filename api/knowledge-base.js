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

// ─── Answer Cache ────────────────────────────────────────────────────────────
// Pre-written answers for the most common questions. Returned instantly (0ms).

const answerCache = [
    {
        keywords: ["stack", "tech", "skill", "language", "tools", "expertise"],
        answer: `**Tech Stack:**
• **Languages:** TypeScript, JavaScript, SQL
• **Backend:** Node.js, NestJS, Express.js, REST APIs, WebSockets
• **Databases:** PostgreSQL, DynamoDB, MongoDB, MySQL, Redis
• **Cloud (AWS):** Lambda, SQS, SNS, S3, SES, EC2, CloudWatch
• **DevOps:** Docker, Git, CI/CD
• **Frontend:** React.js
• **Architecture:** Microservices, Serverless, Event-Driven Systems`
    },
    {
        keywords: ["tata aig", "tata", "aig", "current", "latest", "recent", "software engineer"],
        answer: `At **Tata AIG General Insurance** (Apr 2024 – Jan 2026), Siddharth was a Software Engineer:
• Built event-driven Lambda + SQS + SNS pipeline for the motor insurance vertical (₹8,000 Cr+ revenue) with 99.9% delivery reliability.
• Designed a reporting pipeline generating 70K+ record reports, reducing sync-failure detection time by 70%.
• Integrated a NestJS/ReactJS support portal with 3 core systems via real-time event streams, cutting MTTR by 40%.`
    },
    {
        keywords: ["ey", "ernst", "young", "associate", "consultant"],
        answer: `At **EY (Ernst & Young)** (Mar 2023 – Apr 2024), Siddharth was an Associate Consultant:
• Built microservices for quote generation across 5+ product lines, cutting turnaround from days to minutes.
• Delivered a full-stack CRM with rule-based orchestration and priority queues, improving resolution efficiency by 60%.
• Automated endorsement processing for millions of records, reducing manual intervention by 50%.`
    },
    {
        keywords: ["henceforth", "web3", "junior", "first", "jr"],
        answer: `At **Henceforth Solutions** (Mar 2021 – Feb 2023), Siddharth was a Jr. Node.js Engineer:
• Built backend services for 3 Web3 applications handling 50K+ monthly active users at 99% uptime.
• Set up Redis pub/sub WebSocket infrastructure achieving sub-50ms latency.
• Scaled a ride-hailing backend to 10K+ concurrent WebSocket connections with zero data loss.`
    },
    {
        keywords: ["project", "built", "work on", "worked on", "portfolio", "side project"],
        answer: `**Key Projects:**
• **Distributed Rate Limiter** – Redis + Lua scripting for atomic throttling; validated 1M+ req/s with Autocannon. (NestJS, Redis, Lua)
• **NFTwist** – NFT marketplace with 50K+ MAU. (Node.js, Web3, MongoDB)
• **SharedChat** – Real-time chat with sub-50ms latency, 10K+ concurrent connections. (Socket.io, Redis)
• **Resale Force** – Sneaker auth platform with automated scraping. (Node.js, Puppeteer)
• **Wardrobe** – Clothing rental platform with complex DB schema. (Node.js, PostgreSQL)`
    },
    {
        keywords: ["rate limiter", "rate limit", "lua", "redis lua", "distributed rate"],
        answer: `**Distributed Rate Limiter Service** (NestJS, Redis, Lua):
• Built a production-grade distributed rate limiter using Redis + Lua scripting to enforce atomic throttling across horizontally scaled microservices.
• Validated fault tolerance under load via Autocannon across multiple replicas, confirming **1M+ req/s capacity**.
• Lua scripts ensure atomicity — no race conditions across service replicas.`
    },
    {
        keywords: ["aws", "cloud", "lambda", "sqs", "sns", "serverless", "ec2", "s3"],
        answer: `**AWS Experience:**
• Lambda, SQS, SNS, S3, SES, EC2, CloudWatch — all used in production at Tata AIG.
• Built event-driven serverless pipelines for a motor insurance vertical serving thousands daily.
• Experience with serverless architectures, event-driven systems, and distributed cloud deployments.`
    },
    {
        keywords: ["microservice", "distributed", "event driven", "event-driven", "architecture"],
        answer: `Yes — Siddharth has strong microservices and distributed systems experience:
• Designed event-driven architectures using Lambda + SQS + SNS at Tata AIG.
• Built horizontally scalable microservices at EY for insurance quote generation.
• Implemented distributed rate limiting and Redis pub/sub systems for high-concurrency workloads.`
    },
    {
        keywords: ["open", "available", "opportunit", "hire", "looking", "job", "switch"],
        answer: `Yes! Siddharth is **open to new opportunities**. Feel free to reach out:
• 📧 **Email:** aswalsiddharth99@gmail.com
• 📞 **Phone:** +91 9997490937
• 💼 **LinkedIn:** linkedin.com/in/siddharth-aswal`
    },
    {
        keywords: ["education", "degree", "university", "college", "study", "mca", "bca"],
        answer: `**Education:**
• **MCA** – Graphic Era Hill University, Dehradun (2019–2021)
• **BCA** – MJP Rohilkhand University, Bareilly (2016–2019)`
    },
    {
        keywords: ["experience", "year", "background", "summary", "about", "who is"],
        answer: `Siddharth Aswal is a **Full Stack Developer** (Backend-Heavy) with **4 years of experience** building high-performance backend systems, APIs, and event-driven microservices.

**Stack:** TypeScript, NestJS, React.js, AWS
**Domains:** Insurance (Tata AIG, EY), Web3 (Henceforth Solutions)
**Specialties:** Microservices, Serverless, Distributed Systems, Event-Driven Architecture`
    },
    {
        keywords: ["strongest", "best at", "speciali", "expert", "core strength", "good at", "primary"],
        answer: `Siddharth's core strengths:
• **TypeScript + NestJS** — primary backend stack, used across production systems at Tata AIG and EY.
• **Event-Driven Architecture** — designing Lambda + SQS + SNS pipelines for high-throughput, reliable systems.
• **Distributed Systems** — Redis pub/sub, distributed rate limiting, WebSocket scaling to 10K+ connections.
• **AWS Serverless** — Lambda, SQS, SNS, S3, SES, EC2, CloudWatch all in production.`
    },
    {
        keywords: ["test", "jest", "unit test", "tdd", "testing", "quality", "coverage"],
        answer: `Siddharth has experience with **Jest** for unit and integration testing.
• Writes tests for backend services and microservices to ensure reliability.
• Familiar with test-driven practices in NestJS environments where Jest is the default testing framework.`
    },
    {
        keywords: ["agile", "scrum", "sprint", "standup", "kanban", "methodology", "team"],
        answer: `Yes — Siddharth has worked in **Agile/Scrum** environments throughout his career:
• Daily standups, sprint planning, and retrospectives at both Tata AIG and EY.
• Collaborated with business analysts, QA, and product teams to deliver iterative releases.
• Comfortable working in cross-functional teams across enterprise and startup settings.`
    },
    {
        keywords: ["notice", "join", "start", "immediate", "when can", "availability", "how soon", "onboard"],
        answer: `Siddharth is an **immediate joiner** — available to start right away.
• His last working day at Tata AIG was **January 30, 2026**.
• No notice period. Can join within days of an offer.
• 📧 **Email:** aswalsiddharth99@gmail.com | 📞 **Phone:** +91 9997490937`
    },
    {
        keywords: ["react", "frontend", "full stack", "fullstack", "ui", "client side", "front-end"],
        answer: `Siddharth has **full-stack capability** with a backend-heavy focus:
• **React.js** used in production — built and integrated a NestJS/ReactJS support portal at Tata AIG.
• Comfortable building functional UIs, dashboards, and integrating them with backend APIs.
• Primary strength is backend (Node.js, NestJS, APIs, AWS), but can own the full stack when needed.`
    },
    {
        keywords: ["system design", "design", "challenge", "achievement", "proud", "difficult", "complex", "hard problem", "toughest"],
        answer: `A strong example of Siddharth's system design work:

**Distributed Rate Limiter (personal project):**
Built a distributed rate limiter using Redis + Lua scripting to enforce atomic, race-condition-free throttling across horizontally scaled microservices — validated at **1M+ req/s** via Autocannon.

**At Tata AIG:**
Designed an event-driven Lambda + SQS + SNS document pipeline for a motor insurance vertical (₹8,000 Cr+ revenue), achieving **99.9% delivery reliability** with async processing and dead-letter queue handling.`
    }
];

/**
 * Returns a pre-written cached answer if the message matches known keywords.
 * Falls back to null (triggers Gemini API call) for novel questions.
 */
function getCachedAnswer(message) {
    const lower = message.toLowerCase();
    for (const entry of answerCache) {
        if (entry.keywords.some(kw => lower.includes(kw))) {
            return entry.answer;
        }
    }
    return null;
}

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
- For questions outside this data, say you don't have that info and suggest emailing Siddharth.`;
}

module.exports = { knowledgeBase, generateSystemPrompt, getCachedAnswer };
