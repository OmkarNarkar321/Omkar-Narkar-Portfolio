import React, { useState, useEffect } from 'react';
import ThreeBackground from './../Components/ThreeBackground.jsx';

export default function Resume() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const textColor = 'hsla(39, 93%, 95%, 1)';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/OmkarNarkarFull_Stack_Developer.pdf'; // Update this path to your PDF location
    link.download = 'Omkar_Narkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Three.js'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Advanced Java', 'RESTful APIs'] },
    { category: 'Database', items: ['MongoDB', 'SQL', 'Data Modeling', 'Query Optimization'] },
    { category: 'Tools', items: ['Git/GitHub', 'VS Code', 'AI-Powered Development', 'Agile Methodology'] }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: "Chetana's Hazarimal Somani College of Commerce and Economics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: 'HSC',
      institution: "Chetana's Hazarimal Somani College of Commerce and Economics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      name: 'E-Commerce Web Application',
      tech: 'Advanced Java (Servlet, JSP) & SQL Database',
      color: 'orange',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: 'CareerConnect | Web Platform',
      tech: 'React.js, Node.js, SQL Database (Currently in Development)',
      color: 'cyan',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Brand Reputation Tracker',
      tech: 'Real-time API Integration (YouTube API, Reddit API) - Tracks brand reputation across multiple platforms',
      color: 'green',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Omkar Narkar Portfolio',
      tech: 'React.js, Three.js, Tailwind CSS - Modern portfolio with 3D effects and animations',
      color: 'yellow',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      name: 'Online Shoe Store',
      tech: 'React.js - E-commerce application with product catalog and shopping cart',
      color: 'purple',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'To-Do List (React)',
      tech: 'React.js - Task management application with CRUD operations',
      color: 'blue',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      name: 'React Counter Application',
      tech: 'React.js - State management and component-based architecture',
      color: 'indigo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    {
      name: 'Pure JS To-Do List App',
      tech: 'Vanilla JavaScript, HTML, CSS - DOM manipulation and local storage',
      color: 'pink',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Pure JS Counter App',
      tech: 'Vanilla JavaScript, HTML, CSS - Fundamental JavaScript concepts',
      color: 'red',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    }
  ];

  const workExperience = [
    {
      company: 'Reunyte Services',
      position: 'Full Stack Developer',
      current: true,
      color: 'orange',
      responsibilities: [
        'Creating and developing the entire project architecture using React.js and Node.js',
        'Designing, building, and integrating RESTful APIs',
        'Managing MongoDB databases, handling data modeling, CRUD operations',
        'Collaborating with cross-functional teams to implement new features',
        'Focusing on clean, maintainable code and best development practices'
      ]
    },
    {
      company: 'SIB Infotech',
      position: 'Web Developer',
      current: false,
      color: 'cyan',
      responsibilities: [
        'Maintained and updated the live website of the digital marketing agency',
        'Designed and developed the admin dashboard for managing blog pages'
      ]
    },
    {
      company: 'My Country Mobile',
      position: 'Web Developer',
      current: false,
      color: 'green',
      responsibilities: [
        'Worked on the live website, maintained existing pages',
        'Developed multiple APIs including SMS gateway and user authentication APIs'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center space-y-8">
            <div 
              className={`transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="text-orange-500 text-sm tracking-wider font-medium">Professional Resume</span>
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
              Omkar <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Narkar</span>
            </h1>
            
            <p 
              className={`text-2xl md:text-3xl font-light transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                color: textColor, 
                opacity: 0.9,
                transitionDelay: '200ms'
              }}
            >
              Full Stack Developer
            </p>

            <div 
              className={`transition-all duration-700 ${
                pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button 
                onClick={handleDownloadResume}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-3 mx-auto"
                style={{ color: textColor }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>

            <div 
              className={`h-[2px] w-24 mx-auto bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-700 ${
                pageLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 px-6 lg:px-16 py-16 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Contact Information
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: textColor, opacity: 0.7 }}>Phone</p>
              <p className="text-base font-semibold" style={{ color: textColor }}>+937-261-5355</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: textColor, opacity: 0.7 }}>Email</p>
              <p className="text-base font-semibold break-all" style={{ color: textColor }}>narkaromkar65@gmail.com</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: textColor, opacity: 0.7 }}>Location</p>
              <p className="text-base font-semibold" style={{ color: textColor }}>Mumbai, India</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: textColor, opacity: 0.7 }}>LinkedIn</p>
              <a href="https://www.linkedin.com/in/omkarnarkar21" target="_blank" rel="noopener noreferrer" className="text-base font-semibold hover:text-yellow-500 transition-colors" style={{ color: textColor }}>View Profile</a>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm tracking-wider font-medium">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Profile Summary
            </h2>
          </div>
          
          <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-lg md:text-xl leading-relaxed text-center" style={{ color: textColor, opacity: 0.9 }}>
              I'm a Full Stack Developer with <span className="font-semibold text-orange-500">1 year and 5 months</span> of hands-on experience building responsive web applications using JavaScript, React.js, Node.js, and SQL. Along the way, I've worked on creating practical solutions like RESTful APIs for SMS gateways and user authentication, and even applied Advanced Java in one of my projects. I enjoy solving problems, picking up new technologies quickly, and building applications that are not only efficient but also easy for people to use.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Technical Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Skills & Technologies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-6" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-base" style={{ color: textColor, opacity: 0.9 }}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Leadership', 'Effective Communication', 'Critical Thinking', 'Problem Solving', 'Team Collaboration'].map((skill, index) => (
                <span key={index} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-base font-medium hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300" style={{ color: textColor }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      {job.position}
                    </h3>
                    <p className={`text-xl font-medium text-${job.color}-500 mb-2`}>
                      {job.company}
                    </p>
                  </div>
                  {job.current && (
                    <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-lg text-sm font-medium" style={{ color: textColor }}>
                      Current
                    </span>
                  )}
                </div>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              // Define color classes based on project.color
              const colorClasses = {
                orange: 'hover:border-orange-500/50 bg-orange-500/10 text-orange-500 border-orange-500/30',
                cyan: 'hover:border-cyan-500/50 bg-cyan-500/10 text-cyan-500 border-cyan-500/30',
                green: 'hover:border-green-500/50 bg-green-500/10 text-green-500 border-green-500/30',
                yellow: 'hover:border-yellow-500/50 bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
                purple: 'hover:border-purple-500/50 bg-purple-500/10 text-purple-500 border-purple-500/30',
                blue: 'hover:border-blue-500/50 bg-blue-500/10 text-blue-500 border-blue-500/30',
                indigo: 'hover:border-indigo-500/50 bg-indigo-500/10 text-indigo-500 border-indigo-500/30',
                pink: 'hover:border-pink-500/50 bg-pink-500/10 text-pink-500 border-pink-500/30',
                red: 'hover:border-red-500/50 bg-red-500/10 text-red-500 border-red-500/30'
              };

              const iconColorClasses = colorClasses[project.color]?.split(' ')[1] + ' ' + colorClasses[project.color]?.split(' ')[2];
              const borderColorClass = colorClasses[project.color]?.split(' ')[0];

              return (
                <div 
                  key={index} 
                  className={`p-8 bg-white/5 border border-white/10 rounded-2xl ${borderColorClass} transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${iconColorClasses} flex items-center justify-center mb-6`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                    {project.tech}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm tracking-wider font-medium">Academic Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-base" style={{ color: textColor, opacity: 0.8 }}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
            Let's Build Something Great Together
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: textColor, opacity: 0.9 }}>
            I'm available for freelance projects, full-time opportunities, and collaborative ventures.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-3"
              style={{ color: textColor }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
            <a 
              href="mailto:narkaromkar65@gmail.com"
              className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              style={{ color: textColor }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* CSS */}
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