export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Generative AI' | 'Cloud & Architecture' | 'Cybersecurity & Hacking' | 'Software & Web Engineering' | 'Leadership & Industry';
  issueDate: string;
  credentialId: string;
  pdfPath: string;
  description: string;
  skills: string[];
  badgeColor: string;
}

export const certificatesData: Certificate[] = [
  {
    "id": "cert-qwq32b",
    "title": "Deep Dive Into QwQ-32B",
    "issuer": "Analytics Vidhya",
    "category": "AI & Generative AI",
    "issueDate": "Jan 17, 2026",
    "credentialId": "jegwbb8jwq",
    "pdfPath": "/certificates/analytics_vidhya_qwq_32b.pdf",
    "description": "Comprehensive technical mastery in QwQ-32B reasoning LLM architecture, prompt optimization, and open-weights deployment.",
    "skills": [
      "QwQ-32B",
      "LLM Reasoning",
      "Analytics Vidhya",
      "Generative AI"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-ai-training-codec",
    "title": "Artificial Intelligence Training",
    "issuer": "Codec Technologies (ICAC Recognized)",
    "category": "AI & Generative AI",
    "issueDate": "Jan 27, 2026",
    "credentialId": "E19E86-0116588288923",
    "pdfPath": "/certificates/codec_technologies_ai_training.pdf",
    "description": "In-depth artificial intelligence training covering neural network modeling, machine learning pipelines, and real-world deployment.",
    "skills": [
      "Artificial Intelligence",
      "Machine Learning",
      "Neural Networks",
      "Python"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-hp-life-critical-thinking",
    "title": "Critical Thinking in the AI Era",
    "issuer": "HP LIFE Initiative",
    "category": "AI & Generative AI",
    "issueDate": "Jan 2026",
    "credentialId": "HP-LIFE-AI-2026",
    "pdfPath": "/certificates/hp_life_critical_thinking_ai_era.pdf",
    "description": "Strategic framework for evaluating AI model outputs, ethical decision-making, bias mitigation, and prompt engineering precision.",
    "skills": [
      "Critical Thinking",
      "AI Ethics",
      "Decision Making",
      "Prompt Strategy"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-genai-masterclass",
    "title": "Generative AI Masterclass",
    "issuer": "LetsUpgrade & ITM Skills University (LISA AI)",
    "category": "AI & Generative AI",
    "issueDate": "Jan 17, 2026",
    "credentialId": "LU-GENAI-2026",
    "pdfPath": "/certificates/letsupgrade_genai_masterclass.pdf",
    "description": "Hands-on generative AI masterclass covering core GenAI concepts, practical LLM API integration, and real-world applications.",
    "skills": [
      "Generative AI",
      "LISA AI",
      "LLM Applications",
      "LetsUpgrade"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-gcp-innovating-ai",
    "title": "Innovating with Google Cloud AI",
    "issuer": "Google Cloud",
    "category": "Cloud & Architecture",
    "issueDate": "Jan 5, 2026",
    "credentialId": "9682341",
    "pdfPath": "/certificates/google_cloud_innovating_ai.pdf",
    "description": "Official Google Cloud certification on building and scaling AI solutions using Google Cloud Vertex AI, AutoML, and cloud infrastructure.",
    "skills": [
      "Google Cloud",
      "Vertex AI",
      "Cloud Infrastructure",
      "AutoML"
    ],
    "badgeColor": "#0284c7"
  },
  {
    "id": "cert-nasscom-yuva-ai",
    "title": "Yuva AI for All",
    "issuer": "NASSCOM FutureSkills Prime & MeitY",
    "category": "AI & Generative AI",
    "issueDate": "Jan 23, 2026",
    "credentialId": "66357-NASSCOM",
    "pdfPath": "/certificates/nasscom_yuva_ai_for_all.pdf",
    "description": "National digital skilling initiative by MeitY and NASSCOM covering foundational AI principles and digital literacy.",
    "skills": [
      "NASSCOM",
      "MeitY",
      "AI Literacy",
      "Digital Skilling"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-corizo-cybersecurity-internship",
    "title": "Cyber Security Internship",
    "issuer": "Corizo & IIT Bombay Mood Indigo",
    "category": "Cybersecurity & Hacking",
    "issueDate": "June 5, 2026",
    "credentialId": "CRZ001972",
    "pdfPath": "/certificates/corizo_cybersecurity_internship.pdf",
    "description": "Hands-on internship in cybersecurity operations, network vulnerability assessment, incident response, and threat mitigation.",
    "skills": [
      "Cyber Security",
      "Network Defense",
      "Vulnerability Assessment",
      "Incident Response"
    ],
    "badgeColor": "#dc2626"
  },
  {
    "id": "cert-corizo-ai-training",
    "title": "Artificial Intelligence Intensive Training",
    "issuer": "Corizo & IIT Bombay Mood Indigo",
    "category": "AI & Generative AI",
    "issueDate": "July 5, 2026",
    "credentialId": "CRZ158103",
    "pdfPath": "/certificates/corizo_ai_training.pdf",
    "description": "Comprehensive 1-month intensive training program on machine learning algorithms, model evaluation, and computer vision.",
    "skills": [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Computer Vision"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-ibm-open-source-ai",
    "title": "Open Source Origin Stories: Hybrid Cloud, AI Ethics & Open Source",
    "issuer": "IBM SkillsBuild & Credly",
    "category": "Cloud & Architecture",
    "issueDate": "Dec 28, 2025",
    "credentialId": "e2304945-b243-4813-9c80-c0e1eafadb86",
    "pdfPath": "/certificates/ibm_open_source_hybrid_cloud_ai.pdf",
    "description": "IBM badge recognizing expertise in open-source software governance, hybrid cloud deployment, and AI ethics frameworks.",
    "skills": [
      "IBM SkillsBuild",
      "Hybrid Cloud",
      "AI Ethics",
      "Open Source"
    ],
    "badgeColor": "#0284c7"
  },
  {
    "id": "cert-inside-mind-hacker",
    "title": "Inside the Mind of a Hacker",
    "issuer": "TechYoGeek Nirvana (TYGN)",
    "category": "Cybersecurity & Hacking",
    "issueDate": "Dec 2025",
    "credentialId": "TYGN-HACK-2025",
    "pdfPath": "/certificates/inside_the_mind_of_a_hacker.pdf",
    "description": "Live offensive security workshop covering penetration testing techniques, social engineering vectors, and defensive hardening.",
    "skills": [
      "Ethical Hacking",
      "Penetration Testing",
      "Offensive Security",
      "TYGN"
    ],
    "badgeColor": "#dc2626"
  },
  {
    "id": "cert-outskill-genai-mastermind",
    "title": "Generative AI Mastermind",
    "issuer": "Outskill",
    "category": "AI & Generative AI",
    "issueDate": "Jan 2026",
    "credentialId": "OUTSKILL-GENAI-2026",
    "pdfPath": "/certificates/outskill_genai_mastermind.pdf",
    "description": "Advanced certification in building agentic AI workflows, LLM orchestration, custom RAG pipelines, and automated prompt flows.",
    "skills": [
      "Agentic AI",
      "LLM Orchestration",
      "Outskill",
      "RAG Pipelines"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-nasscom-report-card",
    "title": "Yuva AI for All - Verified Report Card (100%)",
    "issuer": "NASSCOM & MeitY Digital India",
    "category": "AI & Generative AI",
    "issueDate": "Jan 23, 2026",
    "credentialId": "29657921",
    "pdfPath": "/certificates/nasscom_ai_for_all_reportcard.pdf",
    "description": "Official grade report card confirming 100% completion and perfect pass mark in NASSCOM Yuva AI skilling course.",
    "skills": [
      "NASSCOM",
      "AI Verification",
      "MeitY",
      "Report Card"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-oracle-score-report",
    "title": "Oracle Cloud Infrastructure 2025 AI Foundations - Score Report (93%)",
    "issuer": "Oracle University",
    "category": "Cloud & Architecture",
    "issueDate": "Dec 20, 2025",
    "credentialId": "OC7916215",
    "pdfPath": "/certificates/oracle_cloud_ai_score_report.pdf",
    "description": "Official Oracle score report confirming 93% score (Passing score 65%) in OCI 2025 AI Foundations Associate exam.",
    "skills": [
      "Oracle Cloud Infrastructure",
      "OCI AI",
      "Exam Distinction",
      "93% Score"
    ],
    "badgeColor": "#0284c7"
  },
  {
    "id": "cert-walmart-software-engineering",
    "title": "Advanced Software Engineering Job Simulation",
    "issuer": "Walmart Global Tech & Forage",
    "category": "Software & Web Engineering",
    "issueDate": "Jan 24, 2026",
    "credentialId": "pMZFvJZHkuH7YMbT2",
    "pdfPath": "/certificates/walmart_advanced_software_engineering.pdf",
    "description": "Practical simulation in advanced data structures, software architecture, relational database design, and data munging at enterprise scale.",
    "skills": [
      "Software Architecture",
      "Advanced Data Structures",
      "Database Design",
      "Walmart Global Tech"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-amdox-web-internship",
    "title": "Web Development Internship Certificate",
    "issuer": "Amdox Technologies",
    "category": "Software & Web Engineering",
    "issueDate": "Mar 22, 2026",
    "credentialId": "adx/8HtbPV37dgM",
    "pdfPath": "/certificates/amdox_web_development_internship.pdf",
    "description": "Full 1-month web development internship delivering production full-stack features, component architectures, and responsive UIs.",
    "skills": [
      "Web Development",
      "Full-Stack React",
      "Amdox Technologies",
      "ISO 9001:2015"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-aws-solutions-architecture",
    "title": "Solutions Architecture Job Simulation",
    "issuer": "AWS (Amazon Web Services) & Forage",
    "category": "Cloud & Architecture",
    "issueDate": "Jan 6, 2026",
    "credentialId": "ADKC35ZCJzNJN2SiE",
    "pdfPath": "/certificates/aws_solutions_architecture_simulation.pdf",
    "description": "Hands-on AWS simulation focused on designing simple, scalable, resilient web hosting architectures using core AWS services.",
    "skills": [
      "AWS",
      "Solutions Architecture",
      "Cloud Hosting",
      "Scalability"
    ],
    "badgeColor": "#0284c7"
  },
  {
    "id": "cert-gfg-campus-mantri",
    "title": "GeeksforGeeks Campus Mantri Completion",
    "issuer": "GeeksforGeeks (Sandeep Jain)",
    "category": "Leadership & Industry",
    "issueDate": "Jan 2026",
    "credentialId": "GfG#CM2026-0015",
    "pdfPath": "/certificates/geeksforgeeks_campus_mantri.pdf",
    "description": "Recognition for 1 year of leadership and community building as official Campus Mantri for GeeksforGeeks.",
    "skills": [
      "GeeksforGeeks",
      "Leadership",
      "Community Building",
      "Technical Mentorship"
    ],
    "badgeColor": "#7c3aed"
  },
  {
    "id": "cert-cybersecurity-analyst-forage",
    "title": "Cybersecurity Analyst Job Simulation",
    "issuer": "Mastercard / Forage Cybersecurity",
    "category": "Cybersecurity & Hacking",
    "issueDate": "Jan 1, 2026",
    "credentialId": "4BEgmosf6viDKS8bL",
    "pdfPath": "/certificates/cybersecurity_analyst_simulation.pdf",
    "description": "Practical simulation in Identity and Access Management (IAM) strategy, IAM risk assessment, and custom security integration.",
    "skills": [
      "Identity & Access Management",
      "IAM Strategy",
      "Cybersecurity",
      "Risk Assessment"
    ],
    "badgeColor": "#dc2626"
  },
  {
    "id": "cert-oracle-oci-ai-foundations",
    "title": "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "issuer": "Oracle University",
    "category": "Cloud & Architecture",
    "issueDate": "Dec 20, 2025",
    "credentialId": "324658677OCI25AICFA",
    "pdfPath": "/certificates/oracle_cloud_ai_foundations_associate.pdf",
    "description": "Official Oracle certification verifying expertise in Oracle Cloud Infrastructure AI services, Machine Learning, and Generative AI services.",
    "skills": [
      "Oracle Cloud",
      "OCI AI Foundations",
      "Machine Learning",
      "Oracle Certified"
    ],
    "badgeColor": "#0284c7"
  },
  {
    "id": "cert-ea-software-engineering",
    "title": "Software Engineering Job Simulation",
    "issuer": "Electronic Arts (EA) & Forage",
    "category": "Software & Web Engineering",
    "issueDate": "Jan 4, 2026",
    "credentialId": "LSuWLQhQeXpBC93KF",
    "pdfPath": "/certificates/electronic_arts_software_engineering.pdf",
    "description": "Software engineering simulation at EA focusing on feature proposals, game object class design, inventory systems, and live bug fixing.",
    "skills": [
      "Electronic Arts",
      "C++ / C# OOP",
      "Game Object Class",
      "Live Bugfix"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-ethical-hacking-workshop",
    "title": "Ethical Hacking & Network Security Workshop",
    "issuer": "Cyber Security Council",
    "category": "Cybersecurity & Hacking",
    "issueDate": "Mar 10, 2026",
    "credentialId": "EH-WS-2026",
    "pdfPath": "/certificates/ethical_hacking_workshop_certificate.pdf",
    "description": "Certified workshop in ethical hacking fundamentals, port scanning, network packet analysis, and system fortification.",
    "skills": [
      "Ethical Hacking",
      "Network Security",
      "Packet Analysis",
      "Port Scanning"
    ],
    "badgeColor": "#dc2626"
  },
  {
    "id": "cert-genai-data-analytics",
    "title": "GenAI Powered Data Analytics Job Simulation",
    "issuer": "Boston Consulting Group (BCG) / Forage",
    "category": "AI & Generative AI",
    "issueDate": "Dec 26, 2025",
    "credentialId": "3SFEgtXFGhhBTibKN",
    "pdfPath": "/certificates/genai_powered_data_analytics_simulation.pdf",
    "description": "Exploratory data analysis, AI-driven risk profiling, predictive delinquency modeling, and business data storytelling using GenAI.",
    "skills": [
      "GenAI Analytics",
      "Predictive Modeling",
      "Risk Profiling",
      "Data Storytelling"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-hackerrank-problem-solving",
    "title": "Problem Solving (Basic) Skill Certification",
    "issuer": "HackerRank",
    "category": "Software & Web Engineering",
    "issueDate": "Dec 29, 2025",
    "credentialId": "7BDF46201C7D",
    "pdfPath": "/certificates/hackerrank_problem_solving_basic.pdf",
    "description": "Official HackerRank certification verifying proficiency in core data structures, algorithms, space-time complexity analysis, and problem-solving.",
    "skills": [
      "HackerRank",
      "Data Structures",
      "Algorithms",
      "Problem Solving"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-prompt-engineering-apps",
    "title": "Prompt Engineering Applications",
    "issuer": "Google Cloud",
    "category": "AI & Generative AI",
    "issueDate": "Jan 5, 2026",
    "credentialId": "9681192",
    "pdfPath": "/certificates/prompt_engineering_applications_google.pdf",
    "description": "Official Google Cloud certification in advanced prompt engineering methodologies, zero-shot/few-shot prompting, and chain-of-thought logic.",
    "skills": [
      "Prompt Engineering",
      "Chain of Thought",
      "Google Cloud",
      "LLM Fine-Tuning"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-quantium-software-engineering",
    "title": "Software Engineering Job Simulation",
    "issuer": "Quantium & Forage",
    "category": "Software & Web Engineering",
    "issueDate": "Dec 31, 2025",
    "credentialId": "zJtN2Fy4GBzGYhJY3",
    "pdfPath": "/certificates/quantium_software_engineering_simulation.pdf",
    "description": "Building and testing interactive Dash analytics applications, automated test suite pipelines, and data processing algorithms.",
    "skills": [
      "Dash Applications",
      "Automated Testing",
      "Data Processing",
      "Quantium"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-syntecxhub-ai-internship",
    "title": "Artificial Intelligence Internship Program",
    "issuer": "Syntecxhub (Ministry of MSME, Govt of India)",
    "category": "AI & Generative AI",
    "issueDate": "Feb 15, 2026",
    "credentialId": "SH07AI1771243944994",
    "pdfPath": "/certificates/syntecxhub_ai_internship.pdf",
    "description": "Government of India MSME certified internship in building AI models, dataset preprocessing, and intelligent automation systems.",
    "skills": [
      "Artificial Intelligence",
      "MSME Govt of India",
      "Syntecxhub",
      "Machine Learning"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-anthropic-ai-fluency",
    "title": "Teaching AI Fluency",
    "issuer": "Anthropic (Claude AI)",
    "category": "AI & Generative AI",
    "issueDate": "Jan 2026",
    "credentialId": "ANTHROPIC-FLUENCY-2026",
    "pdfPath": "/certificates/anthropic_teaching_ai_fluency.pdf",
    "description": "Anthropic certification covering Claude AI capabilities, Constitutional AI principles, systemic AI safety, and AI pedagogy.",
    "skills": [
      "Anthropic",
      "Claude AI",
      "AI Fluency",
      "Constitutional AI"
    ],
    "badgeColor": "#2563eb"
  },
  {
    "id": "cert-amdox-web-training",
    "title": "Web Development Training Program",
    "issuer": "Amdox Technologies",
    "category": "Software & Web Engineering",
    "issueDate": "Mar 22, 2026",
    "credentialId": "adx/tyY9ODtPn6",
    "pdfPath": "/certificates/amdox_web_development_training.pdf",
    "description": "Comprehensive technical training in modern frontend frameworks, responsive UI principles, state management, and API integrations.",
    "skills": [
      "Web Development",
      "Frontend Engineering",
      "Amdox",
      "UI Architecture"
    ],
    "badgeColor": "#059669"
  },
  {
    "id": "cert-ux-design-advanced",
    "title": "UX Design Advanced Job Simulation",
    "issuer": "Accenture / Forage UX",
    "category": "Leadership & Industry",
    "issueDate": "Jan 2, 2026",
    "credentialId": "wy29qs9XyfDfACDGh",
    "pdfPath": "/certificates/ux_design_advanced_simulation.pdf",
    "description": "Advanced user experience research, customer spending habit analytics, value proposition mapping, and executive presentation design.",
    "skills": [
      "UX Research",
      "Customer Value Proposition",
      "UI/UX Architecture",
      "Accenture"
    ],
    "badgeColor": "#7c3aed"
  }
];
