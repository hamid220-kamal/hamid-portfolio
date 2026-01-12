export interface Skill {
    name: string;
    icon?: string;
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        icon: "code",
        skills: [
            { name: "Python" },
            { name: "JavaScript (ES6+)" },
            { name: "TypeScript" },
            { name: "Java" },
            { name: "HTML5" },
            { name: "CSS3 / SCSS" }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: "layers",
        skills: [
            { name: "React.js" },
            { name: "Next.js 15" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
            { name: "Flask" },
            { name: "Node.js" }
        ]
    },
    {
        title: "Artificial Intelligence",
        icon: "brain",
        skills: [
            { name: "Prompt Engineering" },
            { name: "LLM Integration" },
            { name: "Multi-Agent Systems" },
            { name: "Natural Language Processing" },
            { name: "Voice AI" },
            { name: "Generative AI" }
        ]
    },
    {
        title: "Tools & Platforms",
        icon: "tools",
        skills: [
            { name: "Git & GitHub" },
            { name: "VS Code" },
            { name: "MongoDB" },
            { name: "RESTful APIs" },
            { name: "Vite" },
            { name: "Vercel" }
        ]
    }
];
