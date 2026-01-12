import React from 'react';

export default function ATSResume() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">HAMID KAMAL</h1>
        <div className="text-sm space-y-1">
          <p>Hyderabad, India | +91 8332059777 | rahmani22052009@gmail.com</p>
          <p>
            LinkedIn: linkedin.com/in/hamid-kamal- | GitHub: github.com/hamid220-kamal
          </p>
          <p className="italic text-gray-700">Open to Remote International Internships</p>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed">
          Self-driven software developer and AI enthusiast with expertise in Next.js, TypeScript, and AI-assisted development. Proven track record building enterprise-scale applications with 80,000+ lines of code using prompt engineering and modern web technologies. Proficient in full-stack development, API integration, and rapid prototyping. Seeking international internship opportunities to contribute technical skills in AI engineering, web development, and software innovation.
        </p>
        <p className="text-sm mt-2 font-semibold">
          Notable Achievement: Architected and developed large-scale production applications at age 16
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Technical Skills
        </h2>
        <div className="text-sm space-y-2">
          <p>
            <span className="font-semibold">Programming Languages:</span> Python, Java, JavaScript, TypeScript, HTML5, CSS3
          </p>
          <p>
            <span className="font-semibold">Frameworks & Libraries:</span> Next.js 15, React, Tailwind CSS, Framer Motion
          </p>
          <p>
            <span className="font-semibold">AI & Development Tools:</span> Prompt Engineering, AI-Assisted Development, Claude AI, Large Language Models, GenAI Integration
          </p>
          <p>
            <span className="font-semibold">Web Technologies:</span> RESTful APIs, API Integration, Responsive Design, UI/UX Design Principles
          </p>
          <p>
            <span className="font-semibold">Developer Tools:</span> Git, GitHub, Version Control, GitHub Pages, Deployment Workflows
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Technical Projects
        </h2>
        
        <div className="mb-3">
          <h3 className="font-bold text-sm">Next.js Quran Learning Platform | Next.js, TypeScript, Tailwind CSS, Framer Motion</h3>
          <p className="text-xs italic text-gray-600 mb-1">In Progress</p>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Architected enterprise-level web application spanning 80,800+ lines of code across 414 files using AI-assisted development</li>
            <li>Engineered 7+ feature modules including Quran browser, live radio streaming, prayer times with Qibla locator, Hijri calendar, and Hifz progress tracker</li>
            <li>Implemented advanced UI/UX with Framer Motion animations and responsive design optimized for cross-device compatibility</li>
            <li>Leveraged prompt engineering and Claude AI for 100% AI-assisted development workflow, demonstrating efficiency in modern development practices</li>
            <li>Integrated multiple APIs for real-time data synchronization and Islamic content delivery</li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="font-bold text-sm">Zoontourism Client Website | HTML, CSS, JavaScript, AI Tools</h3>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Developed and delivered full-stack responsive tourism website for commercial client using AI-assisted development methodologies</li>
            <li>Implemented mobile-first responsive design ensuring seamless user experience across devices</li>
            <li>Successfully deployed production-ready application meeting client specifications and deadlines</li>
            <li>Integrated interactive features and optimized page load performance for enhanced user engagement</li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="font-bold text-sm">Portfolio Website | GitHub Pages, HTML, CSS, JavaScript</h3>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Designed and deployed personal portfolio website hosted on GitHub Pages showcasing technical projects and development journey</li>
            <li>Implemented clean, professional UI demonstrating front-end development capabilities and design sensibility</li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="font-bold text-sm">Vision Documentation Website | AI-Assisted Development</h3>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Built comprehensive documentation website independently using AI tools and prompt engineering techniques</li>
            <li>Demonstrated ability to rapidly prototype and deploy functional web applications</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Professional Experience
        </h2>
        <div>
          <h3 className="font-bold text-sm">AI Intern | Codectechnologies</h3>
          <p className="text-xs italic text-gray-600 mb-1">1 Month</p>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>Collaborated with AI development team on artificial intelligence projects and agent-based workflows</li>
            <li>Gained hands-on experience with AI tools, prompt engineering, and LLM integration in production environments</li>
            <li>Contributed to AI project workflows and assisted in testing and optimization of AI agents</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Certifications
        </h2>
        <ul className="text-sm space-y-1 list-disc list-inside ml-2">
          <li>Oracle OCI AI Foundations</li>
          <li>Oracle OCI Agent Fusion Foundation</li>
          <li>IBM Open Source Knowledge</li>
          <li>Tata Forage – GenAI Powered Data Analytics</li>
          <li>HackerRank Problem Solving (Basic)</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Education
        </h2>
        <div>
          <h3 className="font-bold text-sm">Class 11 (PCM Stream) | Vignan Junior College</h3>
          <p className="text-sm">Expected Graduation: 2032</p>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 mb-2 uppercase">
          Additional Competencies
        </h2>
        <p className="text-sm">
          <span className="font-semibold">Soft Skills:</span> Communication, Leadership, Teamwork, Problem Solving, Fast Learner, Self-Directed Learning
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-xs text-gray-600 text-center mt-6 pt-4 border-t border-gray-300">
        <p>References and portfolio samples available upon request</p>
      </div>
    </div>
  );
}
