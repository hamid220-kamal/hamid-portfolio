export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  file: string;
  category: 'Cybersecurity' | 'AI' | 'Cloud' | 'Other';
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Inside the Mind of a Hacker",
    issuer: "HackerOne",
    file: "INSIDE THE MIND  OF HACKER.pdf",
    category: "Cybersecurity"
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    issuer: "Workshop",
    file: "ethical hacking workshop.pdf",
    category: "Cybersecurity"
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    file: "cybersecurity.pdf",
    category: "Cybersecurity"
  },
  {
    id: 4,
    title: "GenAI Masterclass Certificate",
    issuer: "Industry Leaders",
    file: "GenAI_Masterclass_Certificate.pdf",
    category: "AI"
  },
  {
    id: 5,
    title: "Teaching AI Fluency",
    issuer: "Anthropic",
    file: "teaching ai fluency anthropic certificate.pdf",
    category: "AI"
  },
  {
    id: 6,
    title: "Prompt Engineering Specialist",
    issuer: "AI Institute",
    file: "prompt engineering.pdf",
    category: "AI"
  },
  {
    id: 7,
    title: "Google Cloud Foundations",
    issuer: "Google Cloud",
    file: "Google cloud.pdf",
    category: "Cloud"
  },
  {
    id: 8,
    title: "AWS Technical Essentials",
    issuer: "Amazon Web Services",
    file: "aws.pdf",
    category: "Cloud"
  },
  {
    id: 9,
    title: "Software Engineering Simulation",
    issuer: "Quantium",
    file: "quantium certificate.pdf",
    category: "Other"
  },
  {
    id: 10,
    title: "Walmart Global Tech Experience",
    issuer: "Walmart",
    file: "WALMART.pdf",
    category: "Other"
  },
  {
    id: 11,
    title: "Electronic Arts Software Engineering",
    issuer: "EA",
    file: "electronics arts.pdf",
    category: "Other"
  },
  {
    id: 12,
    title: "IBM Design Thinking",
    issuer: "IBM",
    file: "IBMDesign20251228-30-ea7gta.pdf",
    category: "Other"
  },
  {
    id: 13,
    title: "Critical Thinking in the AI Era",
    issuer: "LinkedIn",
    file: "Critical Thinking in the AI Era.pdf",
    category: "Other"
  },
  {
    id: 14,
    title: "AI & Robotics Engineer Training",
    issuer: "CORIZO",
    file: "Hamid_Kamal_Training_Certificate_Corizo_certificate.pdf",
    category: "AI"
  },
  {
    id: 15,
    title: "UX Design Specialization",
    issuer: "Design Institute",
    file: "ux  certificate.pdf",
    category: "Other"
  },
  {
    id: 16,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    file: "problem_solving_basic certificate.pdf",
    category: "Other"
  },
  {
    id: 17,
    title: "Oracle Cloud Infrastructure (OCI)",
    issuer: "Oracle",
    file: "OCI25AICFA.jpeg",
    category: "Cloud"
  }
];
