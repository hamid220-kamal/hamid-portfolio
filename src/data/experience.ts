export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Executive' | 'Former Co-Founder' | 'Internship' | 'Full-time';
  location: string;
  partner?: string;
  partnerRole?: string;
  partnerLink?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Learn Quran",
    role: "Chief Technology Officer (CTO)",
    period: "Aug 2024 - Present",
    type: "Executive",
    location: "Remote",
    partner: "Danish Imran",
    partnerRole: "Main Founder & CEO",
    partnerLink: "https://www.linkedin.com/in/danishshiekh/",
    description: [
      "Serving as CTO, leading the core technical architecture, product engineering, and digital infrastructure for a global Islamic EdTech platform (learnquran.app).",
      "Pioneered high-availability real-time communication protocols that maintain low-latency audio sync for students and teachers across divergent global network conditions.",
      "Architected global learning ecosystem using Next.js 15, Node.js microservices, and robust cloud-native infrastructures.",
      "Overseeing technical strategy, engineering roadmaps, performance optimization, and platform security."
    ]
  },
  {
    id: 2,
    company: "CNC Jugaaadi",
    role: "Former Co-Founder & Lead Systems Engineer",
    period: "Feb 2026 - Present",
    type: "Former Co-Founder",
    location: "Remote / Hybrid",
    partner: "Mateen Ahmed Khan",
    partnerRole: "Main Founder & Lead Strategist",
    partnerLink: "https://www.linkedin.com/in/mateenahmedkhan/",
    description: [
      "Engineered 'Design Swiftly', a browser-based CAD/CAM engine that enables direct hardware communication via Web Serial API for CNC machinery.",
      "Engineered autonomous Toolpath generation systems integrated with Gemini 2.0 AI, enabling natural language translation into industrial machine execution.",
      "Spearheaded core R&D efforts in real-time 3D material removal simulation and G-Code parsing logic."
    ]
  },
  {
    id: 3,
    company: "Amdox Technologies",
    role: "Web Architecture Intern",
    period: "Feb 2026 - Mar 2026",
    type: "Internship",
    location: "India",
    description: [
      "Contributed to the development of enterprise-grade landing systems, focusing on performance optimization and technical SEO for high-traffic environments.",
      "Implemented advanced frontend patterns to ensure seamless UX across complex industrial client dashboards.",
      "Collaborated with cross-functional engineering teams to refine internal UI/UX standards and component libraries."
    ]
  },
  {
    id: 4,
    company: "Syntecxhub",
    role: "AI Systems Intern",
    period: "Jan 2026 - Feb 2026",
    type: "Internship",
    location: "Remote",
    description: [
      "Conducted research and implementation of RAG-based knowledge retrieval systems for automated document intelligence.",
      "Optimized the inference pipelines of lightweight LLMs to deliver real-time insights within constrained web environments.",
      "Architected data ingestion workflows to improve the accuracy and relevance of AI-generated responses."
    ]
  },
  {
    id: 5,
    company: "Codec Technologies India",
    role: "Computer Vision Intern",
    period: "Dec 2025 - Jan 2026",
    type: "Internship",
    location: "Remote",
    description: [
      "Developed and validated computer vision algorithms using YOLOv8 for high-precision real-time object detection and density tracking.",
      "Implemented automated data augmentation pipelines to enhance the robustness of deep learning models against edge-case variances.",
      "Assisted in the integration of AI modules into client-facing automation suites, improving operational efficiency by 20%."
    ]
  }
];
