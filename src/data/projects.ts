export interface Project {
  id: number;
  title: string;
  description: string;
  role?: string;
  image?: string;
  logo?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  category: 'ai' | 'venture' | 'client';
  gradient?: string;
  iconName?: string;
  architectureHighlights?: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════
  //  AI & MACHINE LEARNING
  // ═══════════════════════════════════════════════════════════
  {
    id: 1,
    title: "Multi-Agent AI System",
    role: "AI Systems Architect",
    description:
      "A multi-agent framework built with Python's native asyncio. Enables autonomous agents to coordinate tasks, maintain shared state graphs, and handle errors reliably without heavy external libraries.",
    image: "/images/projects/multi_agent_ai.webp",
    tags: ["Python", "LangChain", "Multi-Agent", "asyncio", "Pydantic v2", "ChromaDB"],
    github: "https://github.com/hamid220-kamal/Multi-Agent-AI-System",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Custom state-machine orchestration using native Python asyncio for deterministic concurrency without LangGraph latency overhead.",
      "Strict schema enforcement via Pydantic v2 with self-correcting validation loops for zero malformed LLM outputs.",
      "ChromaDB semantic vector memory layer for persistent multi-session agent context recall.",
      "Real-time Server-Sent Events (SSE) streaming with Human-In-The-Loop (HITL) approval gates."
    ],
    metrics: [
      { label: "Architecture", value: "Async State Graph" },
      { label: "Memory Layer", value: "ChromaDB Vector" },
      { label: "Validation", value: "Pydantic v2 Strict" }
    ]
  },
  {
    id: 2,
    title: "End-to-End MLOps & LLMOps Pipeline",
    role: "MLOps & Platform Engineer",
    description:
      "An end-to-end MLOps pipeline featuring automated model evaluation, OpenTelemetry tracing with Arize Phoenix, and Docker containerized deployment.",
    image: "/images/projects/mlops_pipeline.webp",
    tags: ["Python", "MLflow", "Docker", "OpenTelemetry", "FastAPI", "Arize Phoenix"],
    github: "https://github.com/hamid220-kamal/End-to-End-MLOps---LLMOps-Pipeline",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Distributed tracing & observability using OpenTelemetry instrumented with Arize Phoenix for LLM hallucination and cost tracking.",
      "Automated evaluation gates with synthetic test sets integrated into GitHub Actions CI/CD promotion workflows.",
      "Containerized multi-stage Docker build pipeline with automated health probes and graceful degradation.",
      "Model versioning, dataset artifact registration, and runtime metric tracking via MLflow."
    ],
    metrics: [
      { label: "Telemetry", value: "OpenTelemetry" },
      { label: "Observability", value: "Arize Phoenix" },
      { label: "Deployment", value: "Docker CI/CD" }
    ]
  },
  {
    id: 3,
    title: "Advanced Production RAG",
    role: "AI Search Engineer",
    description:
      "A practical Retrieval-Augmented Generation (RAG) system using hybrid vector search (BM25 + dense embeddings), cross-encoder reranking, and citation grounding.",
    image: "/images/projects/rag_system.webp",
    tags: ["Python", "LangChain", "Vector DB", "Hybrid Search", "Cross-Encoder", "RAG"],
    github: "https://github.com/hamid220-kamal/Advanced-production-RAG",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Hybrid dense + sparse retrieval combining BM25 keyword matching with high-dimensional vector embeddings.",
      "Cross-encoder neural reranking layer reducing context window token bloat while boosting top-k semantic precision.",
      "Multi-query decomposition & semantic chunking preventing out-of-context retrieval on complex documents.",
      "Citation-grounded response synthesis to completely mitigate hallucinations in mission-critical QA."
    ],
    metrics: [
      { label: "Retrieval", value: "Hybrid Dense/BM25" },
      { label: "Reranker", value: "Cross-Encoder" },
      { label: "Groundedness", value: "Strict Citations" }
    ]
  },
  {
    id: 4,
    title: "Fine-Tuning & Model Optimization",
    role: "AI / Deep Learning Engineer",
    description:
      "Comprehensive model adaptation pipeline supporting LoRA, QLoRA, and PEFT techniques, paired with GGUF quantization and memory-mapped CPU inference.",
    image: "/images/projects/fine_tuning.webp",
    tags: ["Python", "Transformers", "LoRA", "QLoRA", "PEFT", "GGUF", "llama.cpp"],
    github: "https://github.com/hamid220-kamal/Fine-Tuning---Model-Optimization-Pipeline",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Parameter-Efficient Fine-Tuning (PEFT/LoRA) on custom domain instruction datasets using HuggingFace Transformers.",
      "4-bit & 8-bit GGUF quantization pipeline targeting low-resource edge deployment with llama-cpp-python.",
      "Memory-mapped model execution allowing sub-1GB RAM CPU inference without GPU acceleration.",
      "Automated JSON schema reliability benchmarking with verifiable test harness."
    ],
    metrics: [
      { label: "Technique", value: "LoRA / QLoRA PEFT" },
      { label: "Quantization", value: "GGUF 4-bit/8-bit" },
      { label: "Runtime", value: "Low-RAM CPU Inference" }
    ]
  },
  {
    id: 5,
    title: "AI Traffic Management System",
    role: "Computer Vision Engineer",
    description:
      "Urban traffic optimization platform utilizing YOLOv8 computer vision for real-time vehicle density analysis, dynamic signal control logic, and telemetry streaming.",
    image: "/images/projects/ai_traffic_new.webp",
    tags: ["YOLOv8", "FastAPI", "OpenCV", "React", "Computer Vision", "WebSockets"],
    github: "https://github.com/hamid220-kamal/AI-traffic-management-system",
    demo: "https://ai-traffic-management-system-henna.vercel.app",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Custom YOLOv8 object detection model fine-tuned on diverse urban traffic camera streams.",
      "Real-time vehicle counting and density calculation with dynamic green-light duration calculation algorithms.",
      "FastAPI WebSocket streaming backend delivering live bounding box metadata to React dashboard.",
      "Asynchronous frame processing buffer maintaining sub-50ms inference latency."
    ],
    metrics: [
      { label: "Model", value: "YOLOv8 Vision" },
      { label: "Backend", value: "FastAPI WebSockets" },
      { label: "Live Demo", value: "Deployed on Vercel" }
    ]
  },
  {
    id: 6,
    title: "OverR1de Cybersecurity",
    role: "Security Researcher & Developer",
    description:
      "Offensive security laboratory and testing suite featuring custom automated penetration testing Python scripts, exploit verification logic, and simulated target environments.",
    image: "/images/projects/override_new.webp",
    tags: ["Cybersecurity", "Python", "Penetration Testing", "Ethical Hacking", "Network Scanners"],
    github: "https://github.com/hamid220-kamal/OverR1de",
    featured: true,
    category: "ai",
    architectureHighlights: [
      "Custom multi-threaded network scanner and banner grabbing engine for automated reconnaissance.",
      "Modular exploit simulation framework designed for ethical vulnerability research and hardening.",
      "Automated payload delivery and reverse shell session manager with encryption.",
      "Comprehensive security reporting engine producing structured vulnerability audits."
    ],
    metrics: [
      { label: "Domain", value: "Offensive Security" },
      { label: "Engine", value: "Multi-Threaded Python" },
      { label: "Compliance", value: "OSCP Guidelines" }
    ]
  },
  {
    id: 7,
    title: "End-to-End AI Capstone",
    role: "Full-Stack AI Developer",
    description:
      "Modular intelligence hub integrating biometric facial authentication, NLP-driven dialog systems, and deep system automation wrapped in a glassmorphism interface.",
    image: "/images/projects/capstone.webp",
    tags: ["Python", "Flask", "OpenCV", "Biometrics", "NLP", "Glassmorphism"],
    github: "https://github.com/hamid220-kamal/end-to-end-ai-capstone",
    category: "ai",
    architectureHighlights: [
      "Facial biometric authentication using OpenCV deep metric embeddings.",
      "Voice and text NLP assistant with dynamic command parsing and system automation routines.",
      "High-performance Flask backend with modular architecture for quick model swapping."
    ]
  },
  {
    id: 8,
    title: "Heart Disease Prediction",
    role: "Machine Learning Engineer",
    description:
      "Machine learning classification system for cardiac risk assessment using clinical patient data, feature engineering, and ensemble prediction models.",
    image: "/images/projects/heart_disease.webp",
    tags: ["Python", "Scikit-learn", "Pandas", "Ensemble ML", "Feature Engineering"],
    github: "https://github.com/hamid220-kamal/heart-disease-prediction",
    category: "ai",
    architectureHighlights: [
      "Clinical dataset normalization, outlier filtering, and correlation matrix feature selection.",
      "Ensemble classification (Random Forest, Gradient Boosting, Logistic Regression) with hyperparameter tuning.",
      "Comprehensive confusion matrix and ROC-AUC evaluation curves for reliable risk scoring."
    ]
  },
  {
    id: 9,
    title: "Face Recognition",
    role: "Computer Vision Engineer",
    description:
      "Real-time facial recognition and identity verification pipeline powered by deep metric learning, facial landmark detection, and 128D embedding comparisons.",
    image: "/images/projects/face_recognition.webp",
    tags: ["Python", "OpenCV", "Deep Learning", "dlib", "Biometric Embeddings"],
    github: "https://github.com/hamid220-kamal/Face-Recognition-",
    category: "ai",
    architectureHighlights: [
      "68-point facial landmark alignment with affine transformation for pose invariance.",
      "128-dimensional Euclidean distance embedding comparison for sub-second identity verification.",
      "Real-time multi-face video stream detection with bounding box tracking."
    ]
  },
  {
    id: 10,
    title: "Sentiment Analysis Tool",
    role: "NLP Engineer",
    description:
      "NLP-powered sentiment classification engine for analyzing text polarity and emotional tone across document corpora and customer feedback streams.",
    image: "/images/projects/sentiment_analysis.webp",
    tags: ["Python", "NLP", "ML", "NLTK", "TF-IDF", "Text Classification"],
    github: "https://github.com/hamid220-kamal/Sentiment_Analysis_Tool",
    category: "ai",
    architectureHighlights: [
      "Custom text preprocessing pipeline with tokenization, lemmatization, and TF-IDF vectorization.",
      "Multi-class sentiment classifier detecting positive, neutral, and negative sentiment distribution.",
      "Interactive data visualization charts for corpus-wide emotional polarity breakdowns."
    ]
  },
  {
    id: 11,
    title: "AI Speech-to-Text",
    role: "Audio AI Engineer",
    description:
      "Voice transcription engine converting speech audio streams into accurate text transcriptions using acoustic modeling and frequency spectrum analysis.",
    image: "/images/projects/speech_to_text.webp",
    tags: ["Python", "SpeechRecognition", "NLP", "Audio Signal Processing"],
    github: "https://github.com/hamid220-kamal/AI-Speech-to-Text",
    category: "ai",
    architectureHighlights: [
      "Acoustic noise cancellation and frequency filtering for clear signal isolation.",
      "Real-time microphone audio buffer streaming and chunked transcription synthesis.",
      "Export integration supporting SRT subtitles, raw text, and timestamped transcripts."
    ]
  },
  {
    id: 12,
    title: "AI Customer Chatbot",
    role: "Conversational AI Developer",
    description:
      "NLP-based intelligent customer service chatbot with context-aware responses, intent classification, and premium glassmorphism interface.",
    image: "/images/projects/ai_chatbot.webp",
    tags: ["Python", "NLP", "CSS", "Chatbot", "Intent Classification"],
    github: "https://github.com/hamid220-kamal/AI-Customer-Chatbot",
    category: "ai",
    architectureHighlights: [
      "Rule-based and intent-classified conversational routing for automated support triage.",
      "Session context retention across multi-turn dialog interactions.",
      "Responsive glassmorphism chat widget with instant typing indicators and fallback logic."
    ]
  },
  {
    id: 13,
    title: "Syntecxhub Expert System",
    role: "AI Engineering Intern",
    description:
      "Rule-based expert system with voice user interface and automated inference engine built during Syntecxhub AI internship.",
    image: "/images/projects/expert_system.webp",
    tags: ["JavaScript", "AI", "Expert System", "Inference Engine", "Voice UI"],
    github: "https://github.com/hamid220-kamal/Syntecxhub_Expert_System",
    category: "ai",
    architectureHighlights: [
      "Forward and backward chaining rule-based inference engine.",
      "Speech synthesis and voice recognition UI integration for hands-free queries.",
      "Interactive decision tree traversal and explanation trace generation."
    ]
  },
  {
    id: 14,
    title: "A* Maze Solver",
    role: "Algorithm Developer",
    description:
      "A* pathfinding algorithm implementation with interactive web visualization, heuristic cost calculations, and procedural maze generation.",
    image: "/images/projects/maze_solver.webp",
    tags: ["JavaScript", "HTML", "A* Algorithm", "Pathfinding", "Graph Theory"],
    github: "https://github.com/hamid220-kamal/Syntecxhub_Maze_Solver_AStar",
    category: "ai",
    architectureHighlights: [
      "Manhattan & Euclidean heuristic distance calculation options for optimal pathfinding.",
      "Procedural maze generation using randomized recursive backtracker algorithm.",
      "Real-time visual animation of open set, closed set, and final optimal trajectory."
    ]
  },
  {
    id: 15,
    title: "The Ultimate Python Course",
    role: "Author & Instructor",
    description:
      "Comprehensive structured curriculum and hands-on code repository covering modern Python from core primitives to advanced asynchronous architecture and data science.",
    image: "/images/projects/python_course.webp",
    tags: ["Python", "HTML", "Curriculum", "Data Structures", "Asyncio"],
    github: "https://github.com/hamid220-kamal/The-Ultimate-Python-Course",
    category: "ai",
    architectureHighlights: [
      "Modular exercise notebooks covering OOP, decorators, generators, and async programming.",
      "Real-world mini-projects and unit test suites for automated student code validation.",
      "Comprehensive cheat sheets and performance optimization guidelines."
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  FOUNDER VENTURES
  // ═══════════════════════════════════════════════════════════
  {
    id: 16,
    title: "Design Swiftly (CNC)",
    role: "Founder & Lead Architect",
    description:
      "A browser-based CAD/CAM tool that controls CNC hardware directly through the Web Serial API. Features real-time G-Code toolpath generation, 3D Canvas simulation, and automated design assistance.",
    image: "/images/projects/cnc_robot.webp",
    tags: ["Web Serial API", "Rust WASM", "Canvas 60fps", "CAD/CAM", "Microcontroller Comm"],
    demo: "https://cnc.jugaaadi.com/",
    featured: true,
    category: "venture",
    architectureHighlights: [
      "Direct browser-to-microcontroller hardware communication via Web Serial API with custom circular ring buffers and flow control.",
      "Custom G-Code parsing engine & state machine compiled with Rust WebAssembly for sub-millisecond execution loops.",
      "Real-time 60 FPS HTML5 Canvas toolpath renderer with 3D camera pan, zoom, and collision detection simulation.",
      "Integrated Gemini AI assistant for natural language toolpath parameter configuration and error diagnosis."
    ],
    metrics: [
      { label: "Hardware Protocol", value: "Web Serial API" },
      { label: "Engine Core", value: "Rust WASM" },
      { label: "Render Engine", value: "60 FPS Canvas" }
    ]
  },
  {
    id: 17,
    title: "Learn Quran",
    role: "CTO & Founding Architect",
    description:
      "An online EdTech platform connecting students with certified tutors globally. Features low-latency audio streaming, lesson scheduling, and interactive progress tracking.",
    image: "/images/projects/learn_quran_net.webp",
    tags: ["Next.js 15", "Node.js", "WebSockets", "Low-Latency Audio", "RBAC Auth", "EdTech"],
    demo: "https://learnquran.app/",
    featured: true,
    category: "venture",
    architectureHighlights: [
      "Full-stack Next.js 15 App Router architecture with Edge caching and SSR for international low-bandwidth accessibility.",
      "Custom real-time low-latency WebSocket communication protocol optimized for live audio instruction in emerging regions.",
      "Role-Based Access Control (RBAC) securely segregating Teacher, Student, and Administrator management consoles.",
      "High-availability relational database schema managing class schedules, lesson progress, and payment milestones."
    ],
    metrics: [
      { label: "Architecture", value: "Next.js 15 SSR / Edge" },
      { label: "Audio Protocol", value: "Low-Latency Sockets" },
      { label: "Global Access", value: "Multi-Continent Scale" }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  //  CLIENT PROJECTS
  // ═══════════════════════════════════════════════════════════
  {
    id: 18,
    title: "Ali Logistics",
    role: "Lead Full-Stack Developer",
    description:
      "Corporate web application built for a Sydney refrigerated transport company, featuring service catalogs, instant quote inquiries, and local SEO optimization.",
    image: "/images/projects/ali_logistics.webp",
    tags: ["React", "Vite", "Local SEO", "Cold Chain Logistics", "Mobile Responsive"],
    demo: "https://ali-logistics.vercel.app/",
    category: "client",
    architectureHighlights: [
      "Engineered high-conversion responsive corporate web platform tailored for Sydney cold chain freight clients.",
      "Implemented comprehensive Local Schema.org SEO geo-targeting (Wiley Park, Sydney, NSW) for top search rankings.",
      "Integrated instant quote dispatch automation and temperature-controlled service inquiry flows."
    ],
    metrics: [
      { label: "Client Sector", value: "Refrigerated Logistics" },
      { label: "Market", value: "Sydney, NSW (AU)" },
      { label: "Status", value: "Live Production" }
    ]
  },
  {
    id: 19,
    title: "Zoon Tourism",
    role: "Lead Frontend Engineer",
    description:
      "Tourism booking platform for Kashmir tour packages featuring destination galleries, curated itineraries, and seamless booking management.",
    image: "/images/projects/zoon_tourism.webp",
    tags: ["HTML", "CSS", "JavaScript", "Tourism UX", "Booking Engine"],
    demo: "https://zoontourism.vercel.app/",
    category: "client",
    architectureHighlights: [
      "Crafted immersive travel platform showcasing Kashmir luxury itineraries (Srinagar, Gulmarg, Pahalgam).",
      "Interactive destination galleries, dynamic datepicker booking UI, and testimonial carousel components.",
      "High-performance client routing with zero layout shift and automatic CDN asset caching."
    ],
    metrics: [
      { label: "Client Sector", value: "Tourism & Travel" },
      { label: "Region", value: "Kashmir, India" },
      { label: "Status", value: "Live Production" }
    ]
  },
  {
    id: 20,
    title: "PrimeEdge Engicon Pvt. Ltd.",
    role: "Web Architect & Consultant",
    description:
      "Corporate website built for an engineering and construction company in Bihar, featuring service catalogs, project showcases, and client inquiry forms.",
    image: "/images/projects/prime_edge.webp",
    tags: ["HTML", "Tailwind CSS", "Enterprise SEO", "Civil Engineering"],
    demo: "https://prime-edge-engicon-pvt-lt.vercel.app/",
    category: "client",
    architectureHighlights: [
      "Designed blueprint-themed corporate web presence for government-approved civil infrastructure contractors.",
      "Showcases technical survey credentials (DGPS, Total Station, DPR approvals) with interactive service breakdown.",
      "Fully optimized for mobile performance, enterprise client inquiry capture, and fast regional indexing."
    ],
    metrics: [
      { label: "Client Sector", value: "Civil & Surveying Authority" },
      { label: "Region", value: "Bihar & Eastern India" },
      { label: "Status", value: "Live Production" }
    ]
  },
];
