export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Strategic Orchestration",
    description: "Aligning complex technical architectures with long-term venture objectives and global product strategy.",
    skills: [
      { name: "Product Engineering Strategy", level: 95 },
      { name: "Executive Technical Leadership", level: 90 },
      { name: "Cross-Border Venture Building", level: 85 },
      { name: "Global EdTech Infrastructure", level: 90 },
      { name: "Stakeholder Technical Alignment", level: 85 }
    ]
  },
  {
    title: "Defensive & Offensive Cyber-Security",
    description: "Specialized in identifying architectural vulnerabilities and implementing robust, multi-layer security protocols.",
    skills: [
      { name: "Elite Ethical Hacking", level: 95 },
      { name: "Vulnerability Landscape Analysis", level: 90 },
      { name: "Penetration Testing (OSCP Standard)", level: 85 },
      { name: "Secure Systems Architecture", level: 85 },
      { name: "Advanced Threat Simulation", level: 80 }
    ]
  },
  {
    title: "Full-Stack Software Architecture",
    description: "Building high-performance, resilient digital ecosystems using modern, production-grade technology stacks.",
    skills: [
      { name: "React 19 / Next.js 15 Ecosystems", level: 95 },
      { name: "TypeScript Production Patterns", level: 90 },
      { name: "High-Availability Node.js", level: 85 },
      { name: "Database Schema Optimization", level: 85 },
      { name: "Enterprise Tailwind CSS Architecture", level: 95 }
    ]
  },
  {
    title: "Industrial Intelligence & Agentic AI",
    description: "Pioneering the intersection of industrial hardware control and generative cognitive intelligence.",
    skills: [
      { name: "Agentic AI Orchestration", level: 95 },
      { name: "Gemini 2.0 / LLM RAG Pipelines", level: 90 },
      { name: "CAD/CAM Engine Development", level: 85 },
      { name: "Web Serial & Hardware Integration", level: 95 },
      { name: "G-Code Logic & Machine Control", level: 85 }
    ]
  }
];
