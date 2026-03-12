// Knowledge Base for Siddharth Aswal's Portfolio Chatbot
// This contains comprehensive information about Siddharth for the AI to reference

const knowledgeBase = {
    personalInfo: {
        name: "Siddharth Aswal",
        title: "Fullstack Engineer (Backend-Heavy)",
        experience: "4+ years",
        location: "Gurugram, India",
        email: "aswalsiddharth99@gmail.com",
        phone: "+91 9997490937",
        linkedin: "linkedin.com/in/siddharth-aswal",
        currentCompany: "TATA AIG General Insurance",
        availability: "Open to new opportunities"
    },

    summary: `Siddharth Aswal is a Fullstack Engineer (Backend-Heavy) with 4+ years of experience building scalable Node.js/TypeScript systems on AWS. Currently a Software Engineer at TATA AIG, he specializes in microservices, serverless, and high-throughput systems. He has delivered production platforms across Insurance and Web3 sectors.`,

    workExperience: [
        {
            title: "Software Engineer",
            company: "TATA AIG General Insurance",
            location: "Gurugram, India",
            period: "April 2024 - Present",
            duration: "Current",
            responsibilities: [
                "Implemented DocIT document generation service for MediCare Select (1M+ policyholders)",
                "Built high-throughput GC sync report download in Footprint (70k+ records/sec capabilities)",
                "Integrated IMS, Pace, and Bolt APIs using NestJS and React for centralized policy data",
                "Scaled Policy Issuing workflows processing 10M+ transactions/month with 99.9% availability"
            ],
            technologies: ["Node.js", "NestJS", "React", "AWS"]
        },
        {
            title: "Associate Consultant",
            company: "EY (Ernst & Young)",
            location: "Gurugram, India",
            period: "March 2023 - April 2024",
            duration: "1 year 1 month",
            responsibilities: [
                "Led backend development for Motor LOB (8,000+ crore revenue business)",
                "Implemented internal CRM System from scratch for tracking across Ops and UW",
                "Led development of Endorsement Module for policy modifications and workflow orchestration"
            ],
            technologies: ["Node.js", "Express.js", "MongoDB", "AWS"]
        },
        {
            title: "Node.js Developer",
            company: "Henceforth Solutions Pvt. Ltd.",
            location: "Mohali, India",
            period: "Nov 2021 - Feb 2023",
            duration: "1 year 4 months",
            responsibilities: [
                "Led backend for Web3 marketplaces and real-time chat apps",
                "Built 'Resale Force' platform using Puppeteer for sneaker authentication"
            ],
            technologies: ["Node.js", "Web3", "Puppeteer", "Socket.io"]
        }
    ],

    projects: [
        {
            name: "DocIT Service",
            description: "Automated policy document generation service for MediCare Select health insurance.",
            technologies: ["Node.js", "AWS"],
            highlights: ["Serves 1M+ policyholders", "High availability"]
        },
        {
            name: "Footprint Platform",
            description: "Centralized policy data platform with high-throughput reporting capabilities.",
            technologies: ["NestJS", "React", "microservices"],
            highlights: ["70k+ records export", "Centralized logging"]
        },
        {
            name: "Motor LOB System",
            description: "Backend system for private car, two-wheeler, and commercial vehicle insurance.",
            technologies: ["Node.js", "Express", "MongoDB"],
            highlights: ["Supports 8k crore revenue", "Endorsement module"]
        },
        {
            name: "Resale Force",
            description: "Sneaker authentication platform with AI-powered counterfeit detection.",
            technologies: ["Node.js", "Puppeteer", "Web scraping"],
            highlights: ["Automated authentication", "Web scraping pipelines"]
        }
    ],

    skills: {
        backend: ["Node.js", "Express.js", "NestJS", "Microservices", "REST APIs", "WebSockets"],
        languages: ["JavaScript", "TypeScript", "SQL"],
        security: ["JWT", "OAuth2", "Rate Limiting"],
        cloud: ["AWS Lambda", "SQS", "SNS", "S3", "IAM", "EC2", "CloudWatch"],
        databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
        devops: ["Docker", "CI/CD", "Git"],
        frontend: ["React.js"]
    },

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Graphic Era Hill University",
            period: "2019 - 2021"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "M.J.P.R.U",
            period: "2016 - 2019"
        }
    ],

    stats: {
        yearsExperience: "4+",
        projectsCompleted: "15+",
        mentorships: "Active"
    },

    suggestedQuestions: [
        "What is Siddharth's role at TATA AIG?",
        "Tell me about the DocIT project",
        "What tech stack does he use?",
        "Does he have experience with Microservices?",
        "Tell me about his time at EY"
    ]
};

// Generate a comprehensive system prompt from the knowledge base
function generateSystemPrompt() {
    return `You are an AI assistant for Siddharth Aswal's portfolio website. Your role is to help recruiters and visitors learn about Siddharth's professional background, skills, and experience.

## About Siddharth
${knowledgeBase.summary}

## Current Role
- **Position**: ${knowledgeBase.workExperience[0].title} at ${knowledgeBase.workExperience[0].company}
- **Location**: ${knowledgeBase.workExperience[0].location}
- **Duration**: ${knowledgeBase.workExperience[0].period}
- **Key Work**: ${knowledgeBase.workExperience[0].responsibilities.join("; ")}

## Previous Role
- **Position**: ${knowledgeBase.workExperience[1].title} at ${knowledgeBase.workExperience[1].company}
- **Duration**: ${knowledgeBase.workExperience[1].period}
- **Key Work**: ${knowledgeBase.workExperience[1].responsibilities.join("; ")}

## Technical Skills
- **Backend**: ${knowledgeBase.skills.backend.join(", ")}
- **Languages**: ${knowledgeBase.skills.languages.join(", ")}
- **Security**: ${knowledgeBase.skills.security.join(", ")}
- **Cloud (AWS)**: ${knowledgeBase.skills.cloud.join(", ")}
- **Databases**: ${knowledgeBase.skills.databases.join(", ")}
- **DevOps**: ${knowledgeBase.skills.devops.join(", ")}
- **Frontend**: ${knowledgeBase.skills.frontend.join(", ")}

## Notable Projects
${knowledgeBase.projects.map(p => `- **${p.name}**: ${p.description} (Tech: ${p.technologies.join(", ")})`).join("\n")}

## Education
${knowledgeBase.education.map(e => `- ${e.degree} from ${e.institution} (${e.period})`).join("\n")}

## Contact & Availability
- Email: ${knowledgeBase.personalInfo.email}
- Phone: ${knowledgeBase.personalInfo.phone}
- LinkedIn: ${knowledgeBase.personalInfo.linkedin}
- Status: ${knowledgeBase.personalInfo.availability}

## Response Guidelines
1. Be professional, friendly, and concise
2. Highlight relevant achievements when answering skill-related questions
3. For technical questions, provide specific examples from his projects or work experience
4. If asked about availability, mention he's open to opportunities
5. Keep responses focused and recruiter-friendly
6. If you don't have specific information, say so honestly rather than making things up
7. Use bullet points for listing multiple items
8. For salary or personal questions not covered, politely suggest contacting Siddharth directly`;
}

module.exports = { knowledgeBase, generateSystemPrompt };
