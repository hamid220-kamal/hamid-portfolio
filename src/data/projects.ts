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
  category: 'ai' | 'venture' | 'client';
  gradient?: string;
  iconName?: string;
}

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════
  //  AI & MACHINE LEARNING
  // ═══════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Multi-Agent AI System",
    description:
      "Production-grade multi-agent orchestration framework with autonomous task delegation, inter-agent communication protocols, and collaborative problem-solving pipelines.",
    image: "/images/projects/multi_agent_ai.jpg",
    tags: ["Python", "LangChain", "Multi-Agent", "AI Orchestration"],
    github: "https://github.com/hamid220-kamal/Multi-Agent-AI-System",
    featured: true,
    category: "ai",
  },
  {
    id: 2,
    title: "End-to-End MLOps & LLMOps Pipeline",
    description:
      "Complete MLOps and LLMOps pipeline implementing CI/CD automation, model versioning, experiment tracking, and production deployment monitoring.",
    image: "/images/projects/mlops_pipeline.jpg",
    tags: ["Python", "MLflow", "Docker", "MLOps", "LLMOps"],
    github: "https://github.com/hamid220-kamal/End-to-End-MLOps---LLMOps-Pipeline",
    featured: true,
    category: "ai",
  },
  {
    id: 3,
    title: "Advanced Production RAG",
    description:
      "Enterprise-grade Retrieval Augmented Generation system with advanced chunking strategies, hybrid search, re-ranking, and production-ready vector database integration.",
    image: "/images/projects/rag_system.jpg",
    tags: ["Python", "LangChain", "Vector DB", "RAG", "LLM"],
    github: "https://github.com/hamid220-kamal/Advanced-production-RAG",
    featured: true,
    category: "ai",
  },
  {
    id: 4,
    title: "Fine-Tuning & Model Optimization",
    description:
      "Comprehensive fine-tuning pipeline supporting LoRA, QLoRA, and PEFT techniques for efficient LLM adaptation, quantization, and model compression.",
    image: "/images/projects/fine_tuning.jpg",
    tags: ["Python", "Transformers", "LoRA", "PEFT", "HuggingFace"],
    github: "https://github.com/hamid220-kamal/Fine-Tuning---Model-Optimization-Pipeline",
    featured: true,
    category: "ai",
  },
  {
    id: 5,
    title: "AI Traffic Management System",
    description:
      "Urban traffic optimization system utilizing YOLOv8 computer vision for real-time vehicle density analysis and intelligent signal control logic.",
    image: "/images/projects/ai_traffic_new.jpg",
    tags: ["YOLOv8", "FastAPI", "OpenCV", "React", "Computer Vision"],
    github: "https://github.com/hamid220-kamal/AI-traffic-management-system",
    demo: "https://ai-traffic-management-system-henna.vercel.app",
    featured: true,
    category: "ai",
  },
  {
    id: 6,
    title: "OverR1de Cybersecurity",
    description:
      "Offensive security laboratory featuring automated penetration testing Python scripts, custom exploit development logic, and vulnerable target environments for rigorous security simulation.",
    image: "/images/projects/override_new.jpg",
    tags: ["Cybersecurity", "Python", "Penetration Testing", "Ethical Hacking"],
    github: "https://github.com/hamid220-kamal/OverR1de",
    featured: true,
    category: "ai",
  },
  {
    id: 7,
    title: "End-to-End AI Capstone",
    description:
      "Modular intelligence hub integrating biometric authentication, NLP-driven dialog systems, and deep system automation wrapped in a glassmorphism interface.",
    image: "/images/projects/capstone.webp",
    tags: ["Python", "Flask", "OpenCV", "AI Automation"],
    github: "https://github.com/hamid220-kamal/end-to-end-ai-capstone",
    category: "ai",
  },
  {
    id: 8,
    title: "Heart Disease Prediction",
    description:
      "Machine learning classification system for cardiac risk assessment using clinical patient data and ensemble prediction models.",
    image: "/images/projects/heart_disease.jpg",
    tags: ["Python", "Scikit-learn", "Pandas", "ML Classification"],
    github: "https://github.com/hamid220-kamal/heart-disease-prediction",
    category: "ai",
  },
  {
    id: 9,
    title: "Face Recognition",
    description:
      "Real-time facial recognition system powered by deep learning with face detection, encoding, and identity verification pipelines.",
    image: "/images/projects/face_recognition.jpg",
    tags: ["Python", "OpenCV", "Deep Learning", "dlib"],
    github: "https://github.com/hamid220-kamal/Face-Recognition-",
    category: "ai",
  },
  {
    id: 10,
    title: "Sentiment Analysis Tool",
    description:
      "NLP-powered sentiment classification engine for analyzing text polarity and emotional tone across document corpora.",
    image: "/images/projects/sentiment_analysis.jpg",
    tags: ["Python", "NLP", "ML", "Text Analysis"],
    github: "https://github.com/hamid220-kamal/Sentiment_Analysis_Tool",
    category: "ai",
  },
  {
    id: 11,
    title: "AI Speech-to-Text",
    description:
      "Voice transcription engine converting speech audio into text using advanced speech recognition and language processing models.",
    image: "/images/projects/speech_to_text.jpg",
    tags: ["Python", "SpeechRecognition", "NLP", "Audio Processing"],
    github: "https://github.com/hamid220-kamal/AI-Speech-to-Text",
    category: "ai",
  },
  {
    id: 12,
    title: "AI Customer Chatbot",
    description:
      "NLP-based intelligent customer service chatbot with context-aware responses and premium glassmorphism user interface.",
    image: "/images/projects/ai_chatbot.jpg",
    tags: ["Python", "NLP", "CSS", "Chatbot"],
    github: "https://github.com/hamid220-kamal/AI-Customer-Chatbot",
    category: "ai",
  },
  {
    id: 13,
    title: "Syntecxhub Expert System",
    description:
      "Advanced rule-based expert system with voice user interface — built during Syntecxhub AI internship.",
    image: "/images/projects/expert_system.jpg",
    tags: ["JavaScript", "AI", "Expert System", "Voice UI"],
    github: "https://github.com/hamid220-kamal/Syntecxhub_Expert_System",
    category: "ai",
  },
  {
    id: 14,
    title: "A* Maze Solver",
    description:
      "A* pathfinding algorithm with interactive web visualization for maze generation and optimal path computation.",
    image: "/images/projects/maze_solver.jpg",
    tags: ["JavaScript", "HTML", "A* Algorithm", "Pathfinding"],
    github: "https://github.com/hamid220-kamal/Syntecxhub_Maze_Solver_AStar",
    category: "ai",
  },
  {
    id: 15,
    title: "The Ultimate Python Course",
    description:
      "Comprehensive Python programming course with structured modules, exercises, and real-world project examples.",
    image: "/images/projects/python_course.jpg",
    tags: ["Python", "HTML", "Education", "Programming"],
    github: "https://github.com/hamid220-kamal/The-Ultimate-Python-Course",
    category: "ai",
  },

  // ═══════════════════════════════════════════════════════════
  //  FOUNDER VENTURES
  // ═══════════════════════════════════════════════════════════
  {
    id: 16,
    title: "Design Swiftly (CNC)",
    description:
      "An elite industrial-grade CAD/CAM control engine for the modern web. Enables direct hardware execution via Web Serial API with high-fidelity 3D simulation and Gemini-integrated design intelligence.",
    image: "/images/projects/cnc_robot.jpg",
    tags: ["Web Serial API", "Rust WASM", "Canvas", "CAD/CAM"],
    demo: "https://cnc.jugaaadi.com/",
    featured: true,
    category: "venture",
  },
  {
    id: 17,
    title: "Learn Quran",
    description:
      "A global socio-educational ecosystem facilitating accessible spiritual learning. Built on a low-latency communication protocol to connect madrasa teachers with worldwide students across continents.",
    image: "/images/projects/learn_quran_net.jpg",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "EdTech"],
    demo: "https://learnquran.app/",
    featured: true,
    category: "venture",
  },

  // ═══════════════════════════════════════════════════════════
  //  CLIENT PROJECTS
  // ═══════════════════════════════════════════════════════════
  {
    id: 18,
    title: "Ali Logistics",
    description:
      "Full-stack logistics platform for Sydney's premier refrigerated transport & cold chain delivery company. Temperature-controlled courier management across Metropolitan Sydney & NSW.",
    image: "/images/projects/ali_logistics.jpg",
    tags: ["React", "Vite", "SEO", "Cold Chain Logistics"],
    demo: "https://ali-logistics.vercel.app/",
    category: "client",
  },
  {
    id: 19,
    title: "Zoon Tourism",
    description:
      "Tourism booking platform for Kashmir tour packages featuring destination galleries, curated itineraries, and seamless booking management.",
    image: "/images/projects/zoon_tourism.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Tourism"],
    demo: "https://zoontourism.vercel.app/",
    category: "client",
  },
  {
    id: 20,
    title: "PrimeEdge Engicon Pvt. Ltd.",
    description:
      "Corporate web architecture for Bihar's leading engineering & construction company. Specializing in infrastructure, DGPS/Total Station surveys, and turnkey industrial construction.",
    image: "/images/projects/prime_edge.jpg",
    tags: ["HTML", "Tailwind CSS", "SEO", "Engineering"],
    demo: "https://prime-edge-engicon-pvt-lt.vercel.app/",
    category: "client",
  },
];
