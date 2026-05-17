export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  logo?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Design Swiftly (CNC)",
    description: "An elite industrial-grade CAD/CAM control engine engineered for the modern web. Enables direct hardware execution via Web Serial API with high-fidelity 3D simulation and Gemini-integrated design intelligence.",
    logo: "/images/design-swiftly-logo.webp",
    tags: ["Web Serial API", "React", "Gemini AI", "Canvas", "CAD/CAM"],
    demo: "https://cnc.jugaaadi.com/",
    featured: true
  },
  {
    id: 2,
    title: "Learn Quran",
    description: "A global socio-educational ecosystem facilitating accessible spiritual learning. Built on a low-latency communication protocol to connect madrasa teachers with a worldwide student base across continents.",
    logo: "/images/learnquran-logo.webp",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "EdTech"],
    demo: "https://learnquran.app/",
    featured: true
  },
  {
    id: 3,
    title: "AI Traffic Management",
    description: "A visionary urban automation system utilizing YOLOv8 computer vision for real-time traffic density analysis. Engineered to optimize signal control logic and reduce metropolitan congestion through predictive AI.",
    image: "/images/projects/traffic.webp",
    tags: ["YOLOv8", "FastAPI", "OpenCV", "React", "Computer Vision"],
    github: "https://github.com/hamid220-kamal/AI-traffic-management-system",
    demo: "https://ai-traffic-management-system-henna.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "OverR1de Cybersecurity",
    description: "An advanced offensive security laboratory and offensive toolkit. Features custom automated exploitation logic and vulnerable target environments designed for rigorous penetration testing simulation.",
    image: "/images/projects/override.webp",
    tags: ["Cybersecurity", "Python", "Penetration Testing", "Ethical Hacking"],
    github: "https://github.com/hamid220-kamal/OverR1de",
    featured: true
  },
  {
    id: 5,
    title: "End-to-End AI Capstone",
    description: "A modular intelligence hub integrating biometric authentication, NLP-driven dialog systems, and deep system automation, wrapped in a high-fidelity glassmorphism interface.",
    image: "/images/projects/capstone.webp",
    tags: ["Python", "Flask", "OpenCV", "Glassmorphism", "AI Automation"],
    github: "https://github.com/hamid220-kamal/end-to-end-ai-capstone",
    featured: false
  },
  {
    id: 6,
    title: "Big Bazaar Retail",
    description: "A high-energy retail landing architecture for a 3-floor multi-department mall. Features integrated lead-generation automation and a responsive spatial navigation UX for inventory discovery.",
    image: "/images/projects/bigbazaar.webp",
    tags: ["React", "Animation", "Chatbot", "Retail UI"],
    github: "https://github.com/hamid220-kamal/bigg-bazar",
    demo: "https://hamid220-kamal.github.io/big-bazaar/",
    featured: false
  }
];
