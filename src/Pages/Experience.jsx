import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from './../Components/ThreeBackground.jsx';

export default function Experience() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const navigate = useNavigate();
  const textColor = 'hsla(39, 93%, 95%, 1)';

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      company: 'Reunyte Services',
      position: 'Full Stack Developer',
      period: 'Current',
      color: 'orange',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      responsibilities: [
        'Creating and developing the entire project architecture using React.js and Node.js, ensuring a seamless, high-performance, and responsive user experience across all modules',
        'Designing, building, and integrating RESTful APIs, including developing, calling, and managing multiple endpoints to connect the frontend and backend efficiently',
        'Managing MongoDB databases, handling data modeling, CRUD operations, and optimizing queries for scalability and performance',
        'Collaborating with cross-functional teams to implement new features, enhance performance, and ensure the application meets real-world business requirements effectively',
        'Focusing on clean, maintainable code and best development practices, ensuring long-term project stability and smooth deployment cycles'
      ]
    },
    {
      company: 'SIB Infotech',
      position: 'Web Developer',
      period: 'Previous',
      color: 'cyan',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      responsibilities: [
        'Maintained and updated the live website of the digital marketing agency, implementing design improvements and ensuring overall website stability and responsiveness',
        'Designed and developed the admin dashboard for managing blog pages, making content updates and publishing processes more efficient and user-friendly',
        'Implemented responsive design improvements to enhance user experience across different devices and browsers'
      ]
    },
    {
      company: 'My Country Mobile',
      position: 'Web Developer',
      period: 'Previous',
      color: 'green',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      responsibilities: [
        'Worked on the live website, maintained existing pages, and redesigned service pages for better user experience',
        'Developed multiple APIs, including SMS gateway APIs, user authentication APIs, and other practical APIs to enhance site functionality',
        'Enhanced overall site functionality through strategic API implementations and integrations'
      ]
    }
  ];

  const skills = [
    {
      title: 'Frontend',
      color: 'orange',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: ['React.js', 'JavaScript (ES6+)', 'Three.js', 'React 3D Effects', 'HTML5/CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      color: 'cyan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      items: ['Node.js', 'Express.js', 'Native JavaScript', 'Advanced Java', 'RESTful APIs', 'API Integration', 'Authentication']
    },
    {
      title: 'Database',
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      items: ['MongoDB', 'SQL', 'Data Modeling', 'CRUD Operations', 'Query Optimization', 'Database Design']
    },
    {
      title: 'Tools & Practices',
      color: 'yellow',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: ['Git Version Control', 'GitHub', 'AI-Powered Development', 'ChatGPT & Claude AI', 'Agile Development', 'Code Review', 'VS Code']
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-16 pt-32 pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <div 
              className={`transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <span className="text-orange-500 text-sm tracking-wider font-medium">Career Path</span>
            </div>
            
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                color: textColor,
                fontFamily: "'DM Serif Display', serif",
                transitionDelay: '100ms'
              }}
            >
              Professional <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Experience</span>
            </h1>
            
            <p 
              className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 px-4 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                color: textColor, 
                opacity: 0.9,
                transitionDelay: '200ms'
              }}
            >
              1.5 years of hands-on experience building production-ready applications
            </p>

            <div 
              className={`h-[2px] w-24 mx-auto bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-700 ${pageLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-16 sm:py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-[2px] bg-gradient-to-b from-white/20 to-transparent hidden lg:block"></div>
                )}

                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  <div className="lg:col-span-4 space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-${exp.color}-500/10 flex items-center justify-center text-${exp.color}-500 border border-${exp.color}-500/30`}>
                      {exp.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                        {exp.position}
                      </h3>
                      <p className={`text-lg sm:text-xl font-medium text-${exp.color}-500 mb-3`}>
                        {exp.company}
                      </p>
                      <span 
                        className={`inline-block px-4 py-2 bg-${exp.color}-500/20 border border-${exp.color}-500/50 rounded-lg text-sm font-medium`}
                        style={{ color: textColor }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                      <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: textColor }}>
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                              <svg className={`w-5 h-5 sm:w-6 sm:h-6 text-${exp.color}-500`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm sm:text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-16 sm:py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Technologies</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 px-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Skills Applied Across Roles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div key={skill.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-${skill.color}-500/10 flex items-center justify-center mb-4 text-${skill.color}-500`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: textColor }}>{skill.title}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="block text-sm" style={{ color: textColor, opacity: 0.8 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-16 sm:py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto px-4" style={{ color: textColor, opacity: 0.9 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-4 px-4">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30" 
              style={{ color: textColor }}
            >
              Get In Touch
            </button>
            <button 
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300" 
              style={{ color: textColor }}
            >
              View Projects
            </button>
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