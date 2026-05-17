export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Founder' | 'Internship' | 'Full-time';
  location: string;
  partner?: string;
  partnerRole?: string;
  partnerLink?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CNC Jugaaadi",
    role: "Founder & Technical Architect",
    period: "Feb 2026 - Present",
    type: "Founder",
    location: "Remote / Hybrid",
    partner: "Mateen Ahmed Khan",
    partnerRole: "Main Founder & Lead Strategist",
    partnerLink: "https://www.linkedin.com/in/mateenahmedkhan/",
    description: [
      "Driving the technological evolution of the CNC ecosystem, establishing new benchmarks for industrial precision and AI-driven automation.",
      "Architected 'Design Swiftly', a groundbreaking browser-based CAD/CAM engine that eliminates the barrier between high-level design and hardware execution via Web Serial API.",
      "Engineered an autonomous Toolpath generation system integrated with Gemini 2.0 Flash, enabling natural language command of complex industrial machinery.",
      "Spearheading R&D efforts in Agentic AI control systems to redefine real-time 3D material removal simulation and G-Code logic."
    ]
  },
  {
    id: 2,
    company: "Learn Quran",
    role: "Founder & Lead Engineer",
    period: "Aug 2024 - Present",
    type: "Founder",
    location: "Remote",
    partner: "Danish Imran",
    partnerRole: "Main Founder & Lead Strategist",
    partnerLink: "https://www.linkedin.com/in/danishshiekh/",
    description: [
      "Designing and scaling the digital infrastructure for a global Islamic EdTech platform, fostering spiritual connectivity through modern technology.",
      "Pioneered high-availability real-time communication protocols that maintain low-latency connections for students and teachers across divergent network conditions.",
      "Leading the transition from traditional teaching methodologies to a data-driven, global learning ecosystem utilizing Next.js and robust cloud-native architectures.",
      "Strategizing long-term product roadmaps focused on accessibility, global outreach, and socio-educational impact."
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
      "Collaborated with cross-functional engineering teams to refine the organization's internal UI/UX standards and component libraries."
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
      "Architected data ingestion workflows to improve the accuracy and relevance of AI-generated responses for specialized domains."
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
      "Developed and validated computer vision algorithms for high-precision real-time object detection and classification.",
      "Implemented automated data augmentation pipelines to enhance the robustness of deep learning models against edge-case variances.",
      "Assisted in the integration of AI modules into client-facing automation suites, improving operational efficiency by 20%."
    ]
  }
];
