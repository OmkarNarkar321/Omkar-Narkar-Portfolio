import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from './../Components/ThreeBackground.jsx';

export default function About() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const textColor = 'hsla(39, 93%, 95%, 1)';
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React.js', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'Node.js', level: 70, color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-yellow-600' },
    { name: 'MongoDB', level: 60, color: 'from-green-500 to-green-600' },
    { name: 'SQL', level: 50, color: 'from-blue-500 to-blue-600' },
    { name: 'Advanced Java', level: 65, color: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center space-y-8">
            <div 
              className={`transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="text-orange-500 text-sm tracking-wider font-medium">About</span>
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                color: textColor,
                fontFamily: "'DM Serif Display', serif",
                transitionDelay: '100ms'
              }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Omkar Narkar</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                color: textColor, 
                opacity: 0.9,
                transitionDelay: '200ms'
              }}
            >
              A Full Stack Developer crafting seamless digital experiences
            </p>

            <div 
              className={`h-[2px] w-24 mx-auto bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-700 ${
                pageLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2a2a2a]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Building Web Solutions That Actually Work.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-base leading-relaxed text-[#4a4a4a]">
                <p>
                  I'm a Full Stack Developer with <span className="font-semibold text-orange-500">1 year and 5 months</span> of hands-on experience building responsive web applications using JavaScript, React.js, Node.js, and SQL.
                </p>
                
                <p>
                  Along the way, I've worked on creating practical solutions like RESTful APIs for SMS gateways and user authentication, and even applied Advanced Java in one of my projects.
                </p>
                
                <p>
                  I enjoy solving problems, picking up new technologies quickly, and building applications that are not only efficient but also easy for people to use. My experience spans across multiple companies where I've maintained live websites, developed admin dashboards, and created entire project architectures from scratch.
                </p>
                
                <p>
                  Currently, I'm focused on creating seamless, high-performance user experiences while managing MongoDB databases, designing RESTful APIs, and collaborating with cross-functional teams to deliver real-world business solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {!imageError ? (
                <img 
                  src="/src/Assets/me.jpg" 
                  alt="Omkar Narkar - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto bg-white/30 rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">Replace with your professional photo</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-24" style={{ backgroundColor: 'hsla(39, 93%, 95%, 1)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2a2a2a]" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Skills & Expertise
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
            <div className="space-y-8">
              {skills.slice(0, 3).map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#2a2a2a]">{skill.name}</span>
                    <span className="text-sm text-[#666]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: pageLoaded ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {skills.slice(3, 6).map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#2a2a2a]">{skill.name}</span>
                    <span className="text-sm text-[#666]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#e0e0e0] rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: pageLoaded ? `${skill.level}%` : '0%',
                        transitionDelay: `${(index + 3) * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Core Principles & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                  Efficiency First
                </h3>
                <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                  I believe in writing clean, maintainable code that not only solves today's problems but stands the test of time. Every line of code should have a purpose, and every solution should be optimized for performance without sacrificing readability.
                </p>
              </div>
            </div>

            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                  User-Centric Approach
                </h3>
                <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                  Technology should serve people, not the other way around. I focus on building applications that are intuitive, accessible, and genuinely useful. Every feature I develop is designed with the end-user's experience in mind.
                </p>
              </div>
            </div>

            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                  Continuous Learning
                </h3>
                <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                  The tech world evolves rapidly, and I'm committed to staying ahead. I actively learn new technologies, frameworks, and best practices to ensure I'm always bringing the most effective solutions to every project I work on.
                </p>
              </div>
            </div>

            <div className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                  Collaborative Spirit
                </h3>
                <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                  Great software is built by great teams. I thrive in collaborative environments where ideas are shared freely, feedback is welcomed, and everyone works together toward a common goal. Communication and teamwork are at the heart of everything I do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Partnership</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              What Sets Me Apart
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      Full-Stack Versatility
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                      From database design to user interface, I handle every layer of your application. This comprehensive approach ensures seamless integration and consistent quality across your entire project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      Fast & Efficient Delivery
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                      I understand that time is money in business. My experience allows me to quickly understand requirements, identify the best solutions, and deliver production-ready code without compromising on quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      Clear Communication
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                      Technical jargon shouldn't be a barrier. I explain complex concepts in simple terms, provide regular updates, and ensure you're always informed about your project's progress and any important decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      Real-World Experience
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                      Having worked with multiple companies on live production websites, I bring practical, battle-tested solutions. I know what works in real business scenarios and what potential pitfalls to avoid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-2xl border border-white/10">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                    Whether you need a full-stack web application, API development, or a complete project from scratch, I'm here to help turn your vision into reality.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: textColor }}>1.5 years of production experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: textColor }}>Multiple successful projects delivered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: textColor }}>Expertise in modern tech stack</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30" 
                    style={{ color: textColor }}
                  >
                    Let's Start a Conversation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        h1, h2, h3, h4 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
        }
        
        body, p, span, button, a, li {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}