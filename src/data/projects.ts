export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Islamic Learning Platform",
        description: "A comprehensive enterprise-grade web application featuring 80,000+ lines of production code. Includes Quran reader with audio recitation, live Islamic radio streaming, accurate prayer times with Qibla compass, Hijri calendar integration, and personalized Hifz progress tracking system.",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=500&fit=crop",
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "REST APIs"],
        github: "https://github.com/hamid220-kamal/nextjs-quran-learn"
    },
    {
        id: 2,
        title: "SIFRA AI — Intelligent Voice Assistant",
        description: "An innovative multi-agent voice intelligence system designed as a personalized desktop companion. Features advanced natural language processing, contextual conversation handling, and seamless task automation using cutting-edge AI agent architecture.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        tags: ["Python", "Multi-Agent AI", "Voice Recognition", "NLP"],
        github: "https://github.com/hamid220-kamal/sifra-docs"
    },
    {
        id: 3,
        title: "AI-Powered Speech Recognition Tool",
        description: "A sophisticated speech-to-text transcription platform with real-time audio recording, multi-format file upload support, and an intuitive modern interface. Supports WAV, MP3, FLAC, and other audio formats with intelligent chunked transcription for long recordings.",
        image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=500&fit=crop",
        tags: ["Flask", "Python", "Speech AI", "JavaScript"],
        github: "https://github.com/hamid220-kamal/AI-Speech-to-Text"
    },
    {
        id: 4,
        title: "Intelligent Customer Support Chatbot",
        description: "An enterprise-ready conversational AI chatbot engineered for automated customer service. Leverages advanced natural language understanding for accurate query resolution, sentiment analysis, and seamless escalation workflows.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
        tags: ["Flask", "Machine Learning", "NLP", "REST API"],
        github: "https://github.com/hamid220-kamal/AI-Customer-Chatbot"
    },
    {
        id: 5,
        title: "Zoontourism — Travel & Tourism Platform",
        description: "A professionally crafted responsive website developed for a commercial travel client. Features mobile-first architecture, interactive booking interfaces, destination galleries, and optimized performance for enhanced user engagement and conversion.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "https://github.com/hamid220-kamal/zoontourism",
        demo: "https://zoontourism.com/"
    },
    {
        id: 6,
        title: "Interactive Quran Learning Application",
        description: "A feature-rich React-based learning platform designed to facilitate Quran education. Includes verse-by-verse audio playback, multiple translation options, bookmarking functionality, and comprehensive progress tracking for learners.",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=500&fit=crop",
        tags: ["React", "JavaScript", "API Integration", "UI/UX"],
        github: "https://github.com/hamid220-kamal/React-Learn-Quran-App-"
    },
    {
        id: 7,
        title: "Retail Analytics Dashboard",
        description: "A data-driven analytics solution developed during the Quantium Virtual Experience Program. Demonstrates expertise in statistical analysis, customer behavior insights, and interactive data visualization using Python's analytics ecosystem.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        tags: ["Python", "Pandas", "Dash", "Data Science"],
        github: "https://github.com/hamid220-kamal/quantium-starter-repo"
    },
    {
        id: 8,
        title: "Professional Portfolio Collection",
        description: "A curated collection of portfolio websites showcasing modern front-end development practices, clean UI/UX principles, and responsive design methodologies. Demonstrates proficiency in creating polished, professional web experiences.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        github: "https://github.com/hamid220-kamal/portfolio",
        demo: "https://hamid220-kamal.github.io/portfolio"
    }
];
