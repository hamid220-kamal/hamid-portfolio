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
        title: "A* Maze Solver & Visualizer",
        description: "I built this interactive tool to visualize how the A* algorithm finds the shortest path. You can draw your own mazes, watch the algorithm work in real-time, and even race different pathfinding methods. It was a big deep dive into graph theory and React animations!",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
        tags: ["JavaScript", "Pathfinding", "Algorithms", "React"],
        github: "https://github.com/hamid220-kamal/Syntecxhub_Maze_Solver_AStar"
    },
    {
        id: 2,
        title: "Rule-Based AI Expert System",
        description: "This is a diagnostic engine I developed that uses a structured knowledge base to solve complex problems. I added a Voice UI and NLP so you can actually talk to it. It's configured for automotive health right now, but you can swap out the JSON base for almost anything!",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
        tags: ["Python", "Inference Engine", "NLP", "Voice UI"],
        github: "https://github.com/hamid220-kamal/Syntecxhub_Expert_System"
    },
    {
        id: 3,
        title: "Next.js Islamic Learning Platform",
        description: "This is my biggest project so far—over 80,000 lines of code! I wanted to create a one-stop shop for Islamic learning, featuring a full Quran reader with audio, live radio streams, and a personalized progress tracker that I actually use every day.",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=500&fit=crop",
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "REST APIs"],
        github: "https://github.com/hamid220-kamal/nextjs-quran-learn"
    },
    {
        id: 4,
        title: "SIFRA AI Voice Assistant",
        description: "SIFRA is my take on a digital companion. Instead of just a simple bot, I built a multi-agent system that can handle complex conversations and tasks on my desktop. It's been a great way to learn about context handling and voice-to-action logic.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        tags: ["Python", "Multi-Agent AI", "Voice Recognition", "NLP"],
        github: "https://github.com/hamid220-kamal/sifra-docs"
    },
    {
        id: 5,
        title: "AI Speech-to-Text Tool",
        description: "I was tired of slow transcription tools, so I built my own. It handles everything from quick WAV notes to long FLAC recordings. I used chunked processing to make sure even hour-long audios get transcribed without crashing the app.",
        image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&h=500&fit=crop",
        tags: ["Flask", "Python", "Speech AI", "JavaScript"],
        github: "https://github.com/hamid220-kamal/AI-Speech-to-Text"
    },
    {
        id: 6,
        title: "Customer Support AI Chatbot",
        description: "I engineered this chatbot to handle customer queries automatically. It uses NLP to understand what users are asking and can even detect sentiment to know when it needs to hand things over to a real person.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
        tags: ["Flask", "Machine Learning", "NLP", "REST API"],
        github: "https://github.com/hamid220-kamal/AI-Customer-Chatbot"
    },
    {
        id: 7,
        title: "ZoonTourism Travel Site",
        description: "A real-world project I finished for a travel client. I focused heavily on the user experience—making sure the booking flow feels smooth and the site looks premium on any device. It's fully responsive and optimized for speed.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
        tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        github: "https://github.com/hamid220-kamal/zoontourism",
        demo: "https://zoontourism.com/"
    },
    {
        id: 8,
        title: "Interactive Quran Web App",
        description: "This was one of my earlier React projects where I learned how to handle complex audio states. Users can listen to different reciters, bookmark their progress, and switch translations on the fly. It's clean, simple, and does exactly what it needs to.",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=500&fit=crop",
        tags: ["React", "JavaScript", "API Integration", "UI/UX"],
        github: "https://github.com/hamid220-kamal/React-Learn-Quran-App-"
    },
    {
        id: 9,
        title: "Retail Analytics Dashboard",
        description: "Created during my Quantium virtual experience, this project was all about finding the 'why' behind the numbers. I used Python to analyze massive datasets and built visualizations that show actual customer behavior patterns.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        tags: ["Python", "Pandas", "Dash", "Data Science"],
        github: "https://github.com/hamid220-kamal/quantium-starter-repo"
    },
    {
        id: 10,
        title: "My Portfolio Collection",
        description: "This is a collection of different portfolio designs I've built while experimenting with UI/UX principles. It shows how my style has evolved from simple HTML sites to more complex, animated React applications.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        github: "https://github.com/hamid220-kamal/portfolio",
        demo: "https://hamid220-kamal.github.io/portfolio"
    }
];
