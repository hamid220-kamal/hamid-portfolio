export interface Certificate {
    id: number;
    title: string;
    provider: string;
    image: string;
    category: 'ai' | 'cloud' | 'development' | 'analytics' | 'other';
}

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "Oracle Cloud Infrastructure: AI Foundations Associate",
        provider: "Oracle",
        image: "/certificates/hamid-kamal-oracle-cloud-ai-foundations.jpg",
        category: "ai"
    },
    {
        id: 2,
        title: "Oracle Cloud Infrastructure: Generative AI Professional",
        provider: "Oracle",
        image: "/certificates/hamid-kamal-oracle-genai-professional.jpg",
        category: "ai"
    },
    {
        id: 3,
        title: "Oracle AI Agent Studio Certified Associate",
        provider: "Oracle",
        image: "/certificates/hamid-kamal-oracle-ai-agent-certified.jpg",
        category: "ai"
    },
    {
        id: 4,
        title: "Oracle AI Foundations Certified Professional",
        provider: "Oracle",
        image: "/certificates/hamid-kamal-oracle-ai-foundations-professional.jpg",
        category: "ai"
    },
    {
        id: 5,
        title: "AWS Solutions Architecture Job Simulation",
        provider: "Amazon Web Services (AWS)",
        image: "/certificates/hamid-kamal-aws-solutions-architect-sim.jpg",
        category: "cloud"
    },
    {
        id: 6,
        title: "Google Cloud Computing Foundations",
        provider: "Google Cloud",
        image: "/certificates/hamid-kamal-google-cloud-foundations.jpg",
        category: "cloud"
    },
    {
        id: 7,
        title: "IBM Enterprise Design Thinking Practitioner",
        provider: "IBM",
        image: "/certificates/hamid-kamal-ibm-design-thinking.jpg",
        category: "development"
    },
    {
        id: 8,
        title: "Critical Thinking in the Age of AI",
        provider: "HP Life",
        image: "/certificates/hamid-kamal-critical-thinking-ai.jpg",
        category: "ai"
    },
    {
        id: 9,
        title: "Cybersecurity Fundamentals",
        provider: "Tata Consultancy Services",
        image: "/certificates/hamid-kamal-cybersecurity-fundamentals-tcs.jpg",
        category: "other"
    },
    {
        id: 10,
        title: "Advanced Prompt Engineering for AI",
        provider: "Simplilearn",
        image: "/certificates/hamid-kamal-advanced-prompt-engineering.jpg",
        category: "ai"
    },
    {
        id: 11,
        title: "Digital Experience & UX Design",
        provider: "Lloyds Banking Group",
        image: "/certificates/hamid-kamal-digital-experience-ux.jpg",
        category: "development"
    },
    {
        id: 12,
        title: "Data Analytics & Visualization",
        provider: "Quantium",
        image: "/certificates/hamid-kamal-quantium-data-analytics.jpg",
        category: "analytics"
    },
    {
        id: 13,
        title: "Problem Solving Certification",
        provider: "HackerRank",
        image: "/certificates/hamid-kamal-hackerrank-problem-solving.jpg",
        category: "development"
    },
    {
        id: 14,
        title: "Artificial Intelligence Internship",
        provider: "Codec Technologies",
        image: "/certificates/hamid-kamal-codec-ai-internship.jpg",
        category: "other"
    },
    {
        id: 15,
        title: "Generative AI for Data Analytics",
        provider: "Tata Consultancy Services",
        image: "/certificates/hamid-kamal-tata-generative-ai.jpg",
        category: "analytics"
    },
    {
        id: 16,
        title: "Software Engineering Virtual Experience",
        provider: "Electronic Arts",
        image: "/certificates/hamid-kamal-ea-software-engineering.jpg",
        category: "development"
    },
    {
        id: 17,
        title: "Generative AI Masterclass",
        provider: "LetsUpgrade & ITM Skills University",
        image: "/certificates/generative_ai_masterclass.png",
        category: "ai"
    },
    {
        id: 18,
        title: "Intro to Data Science",
        provider: "Analytics Vidhya",
        image: "/certificates/ANALYTICS VIDHYA.png",
        category: "analytics"
    }
];
