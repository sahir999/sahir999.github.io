import React, { useState, type JSX } from 'react';
import { Mail, Phone, Linkedin, Github, Code, MapPin, Briefcase, GraduationCap, ExternalLink, Award, Terminal, Zap } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  title: string;
  technologies: string[];
  achievements: string[];
  gradient: string;
}

export default function OnlineCV(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'education'>('experience');

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <header className="relative border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SK SAHIR BOX
              </h1>
              <p className="text-2xl text-cyan-400 font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-6 h-6" />
                Frontend Software Engineer
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-gray-400">
                <a href="mailto:sksahirbox4@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Mail size={16} />
                  <span className="text-sm">sksahirbox4@gmail.com</span>
                </a>
                <a href="tel:+919800179809" className="flex items-center gap-2 hover:text-cyan-400 transition">
                  <Phone size={16} />
                  <span className="text-sm">+91 9800179809</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-sm">Kolkata, India</span>
                </span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <SocialLink href="https://linkedin.com/in/sk-sahir-box-3b611a228" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialLink href="https://github.com/sahir999" icon={<Github size={18} />} label="GitHub" />
                <SocialLink href="https://leetcode.com/u/Sahir2003" icon={<Code size={18} />} label="LeetCode" />
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300 leading-relaxed">
                Frontend Software Engineer with <span className="text-cyan-400 font-semibold">9+ months</span> of professional experience building responsive and scalable web applications
                using React.js, Next.js, and TypeScript. Proven track record of delivering production-ready applications with modern
                architecture, API integration, and state management. Strong expertise in JavaScript ecosystem, React Native, and AI-powered
                development tools.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12">

        {/* Technical Skills Grid */}
        <Section title="Technical Arsenal" icon={<Code className="w-6 h-6" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillGroup
              title="Frontend"
              skills={["React.js", "Next.js", "TypeScript", "React Native", "HTML5", "CSS3"]}
              color="cyan"
            />
            <SkillGroup
              title="State Management"
              skills={["Redux", "Zustand", "Context API", "TanStack Query"]}
              color="purple"
            />
            <SkillGroup
              title="Backend & APIs"
              skills={["Node.js", "Express.js", "RESTful APIs", "Axios"]}
              color="pink"
            />
            <SkillGroup
              title="Tools & AI"
              skills={["Git", "VS Code", "GitHub Copilot", "ChatGPT", "Firebase"]}
              color="green"
            />
          </div>
        </Section>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-2">
          <TabButton
            active={activeTab === 'experience'}
            onClick={() => setActiveTab('experience')}
            icon={<Briefcase className="w-4 h-4" />}
          >
            Experience
          </TabButton>
          <TabButton
            active={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
            icon={<Code className="w-4 h-4" />}
          >
            Projects
          </TabButton>
          <TabButton
            active={activeTab === 'education'}
            onClick={() => setActiveTab('education')}
            icon={<GraduationCap className="w-4 h-4" />}
          >
            Education
          </TabButton>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fadeIn">
              <ExperienceCard />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6 animate-fadeIn">
              <ProjectCard
                title="Gecko — AI Recruitment Agent Platform"
                technologies={["React.js", "TypeScript", "Zustand", "TanStack Query", "RESTful APIs"]}
                gradient="from-cyan-500 to-blue-500"
                achievements={[
                  "Built AI-powered recruitment platform enabling automated phone interviews for 500+ candidates monthly, reducing screening time by 60%",
                  "Developed responsive UI component system using React and TypeScript with strict type safety",
                  "Integrated real-time AI scoring engine, analytics dashboards, and performance-based reporting features",
                  "Implemented efficient state management with Zustand and optimized API data fetching using TanStack Query, reducing load times by 40%",
                  "Contributed to AI-driven candidate insights and intelligent sorting features to support better hiring decisions"
                ]}
              />

              <ProjectCard
                title="Hidromas — Enterprise CMS & Employee Management Platform"
                technologies={["React.js", "Next.js", "Redux", "Data Visualization", "Multi-tier Architecture"]}
                gradient="from-purple-500 to-pink-500"
                achievements={[
                  "Managed and enhanced centralized CMS platform supporting two mobile applications (HM We and HM Connect) with 2,000+ users",
                  "Designed and maintained frontend interfaces for employee data management and organizational hierarchy visualization",
                  "Implemented multi-level approval workflows for expense management based on role-based access control (RBAC)",
                  "Built comprehensive dashboards to track employee engagement metrics including hourly, monthly, and yearly activity analysis",
                  "Ensured scalable UI architecture to support high-volume enterprise data processing with optimal performance"
                ]}
              />
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6 animate-fadeIn">
              <EducationCard />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400">© 2026 SK Sahir Box · Built with React, TypeScript & Tailwind CSS</p>
          <p className="text-gray-600 text-sm mt-2">Crafted with passion and code ✨</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children, icon }: SectionProps): JSX.Element {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
        {icon && <span className="text-cyan-400">{icon}</span>}
        {title}
      </h2>
      {children}
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-cyan-400 hover:bg-slate-700 transition-all group"
    >
      <span className="text-gray-400 group-hover:text-cyan-400 transition">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
      <ExternalLink size={14} className="text-gray-600 group-hover:text-cyan-400 transition" />
    </a>
  );
}

function SkillGroup({ title, skills, color }: { title: string; skills: string[]; color: string }): JSX.Element {
  const colorMap: Record<string, string> = {
    cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
    pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/30',
    green: 'from-green-500/20 to-green-500/5 border-green-500/30'
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-5 backdrop-blur-sm hover:scale-105 transition-transform`}>
      <h3 className="font-bold text-white mb-3 text-lg">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-slate-800/70 text-gray-300 rounded-md border border-slate-700">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, children, icon }: { active: boolean; onClick: () => void; children: React.ReactNode; icon: React.ReactNode }): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${active
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
          : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
        }`}
    >
      {icon}
      {children}
    </button>
  );
}

function ExperienceCard(): JSX.Element {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Software Engineer</h3>
          <p className="text-cyan-400 font-semibold text-lg">Web Spiders (India) Pvt. Ltd.</p>
          <p className="text-gray-400 text-sm">Kolkata, West Bengal</p>
        </div>
        <span className="text-purple-400 font-medium mt-2 md:mt-0 px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
          April 2025 – Present
        </span>
      </div>
      <div className="space-y-3 mt-6">
        {[
          "Developed and maintained 5+ responsive web applications using React.js and Next.js, serving 10,000+ active users",
          "Implemented modular UI component library following modern architecture, reducing development time by 30%",
          "Integrated RESTful APIs and managed application state efficiently using Redux and Zustand",
          "Collaborated with cross-functional teams including designers, backend developers, and product managers",
          "Leveraged AI-assisted tools (GitHub Copilot, ChatGPT) to improve code quality by 25%"
        ].map((item, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, technologies, achievements, gradient }: ProjectCardProps): JSX.Element {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
      <div className={`bg-gradient-to-r ${gradient} p-6`}>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-lg text-sm font-medium border border-slate-600">
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering</h3>
            <p className="text-lg text-gray-300">Electronics & Communication Engineering</p>
            <p className="text-cyan-400 font-semibold">University Institute of Technology, Burdwan University</p>
          </div>
          <span className="text-green-400 font-medium mt-2 md:mt-0 px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/30">
            2020 – 2024
          </span>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400 font-bold text-lg">CGPA: 8.26/10.0</p>
          </div>
          <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-400 font-semibold">First Class with Honours</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 shadow-xl">
        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-purple-400" />
          Certifications & Achievements
        </h4>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">Frontend Development Certification (React.js & React Native) — EjobIndia</p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
            <p className="text-gray-300">Participated in SparkAR Community Hackathon — Meta/Facebook AR Development Competition</p>
          </div>
        </div>
      </div>
    </div>
  );
}