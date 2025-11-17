import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from './../Components/ThreeBackground.jsx';

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const textColor = 'hsla(39, 93%, 95%, 1)';
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 pt-24 pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-8">
              <div className="space-y-2">
                <span 
                  className={`text-sm md:text-base font-normal tracking-wider block transition-all duration-700 ${
                    pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ color: textColor, transitionDelay: '100ms' }}
                >
                  Hello, I'm
                </span>
                
                <h1 
                  className={`text-6xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-700 ${
                    pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ color: textColor, transitionDelay: '200ms' }}
                >
                  Omkar Narkar
                </h1>
              </div>
              
              <div 
                className={`transition-all duration-700 ${
                  pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4" style={{ color: textColor }}>
                  Full Stack Developer
                </h2>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-cyan-500"></div>
                  <span className="text-sm" style={{ color: textColor }}>Based in Mumbai, India</span>
                </div>
              </div>
              
              <div 
                className={`flex flex-wrap gap-3 transition-all duration-700 ${
                  pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300" style={{ color: textColor }}>
                  React.js
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300" style={{ color: textColor }}>
                  Node.js
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium hover:bg-white/10 hover:border-green-500/30 transition-all duration-300" style={{ color: textColor }}>
                  MongoDB
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm font-medium hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300" style={{ color: textColor }}>
                  SQL
                </span>
              </div>
              
              <p 
                className={`text-lg md:text-xl leading-relaxed max-w-2xl transition-all duration-700 ${
                  pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '500ms', color: textColor }}
              >
                Crafting responsive web applications with <span className="font-medium" style={{ color: textColor }}>1.5 years</span> of experience. 
                Passionate about building efficient, user-friendly solutions using modern technologies.
              </p>
              
              <div 
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                  pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <button 
                  onClick={() => navigate('/projects')}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30" 
                  style={{ color: textColor }}
                >
                  View My Work
                </button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300" 
                  style={{ color: textColor }}
                >
                  Let's Talk
                </button>
              </div>
              
              <div 
                className={`flex gap-4 pt-4 transition-all duration-700 ${
                  pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <a 
                  href="https://www.linkedin.com/in/omkarnarkar21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" style={{ color: textColor }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="mailto:narkaromkar65@gmail.com" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 group-hover:text-cyan-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: textColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                
                <a 
                  href="tel:+937-261-5355" 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-110 group"
                >
                  <svg className="w-5 h-5 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: textColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div 
              className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                pageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative group">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className="flex flex-col gap-3">
                    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-orange-500"></div>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></div>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-green-500"></div>
                  </div>
                </div>
                
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-cyan-500 to-green-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  {!imageError ? (
                    <img 
                    src="/me.jpg" 
                    alt="Omkar Narkar - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-700 relative z-10"
                    onError={() => setImageError(true)}
                  />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative z-10">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                          <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-sm" style={{ color: textColor }}>Replace with your professional photo</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-green-500 z-20"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 transition-all duration-700 ${
          pageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-wider" style={{ color: textColor }}>SCROLL</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: textColor }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <div id="about" className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute -left-4 top-0 space-y-2 opacity-20">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
                    style={{ width: `${300 - i * 15}px` }}
                  ></div>
                ))}
              </div>
              
              <div className="relative z-10 space-y-8">
                <span className="text-orange-500 text-sm tracking-wider font-medium">About</span>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: textColor }}>
                  Bringing Your Vision to Life with Code & Creativity.
                </h2>
                
                <button 
                  onClick={() => navigate('/about')}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 font-medium rounded-lg hover:bg-white/5 hover:border-orange-500/50 transition-all duration-300 cursor-pointer" 
                  style={{ color: textColor }}
                >
                  More About Me
                </button>
                
                <div className="flex gap-6 pt-4">
                  <a href="https://www.linkedin.com/in/omkarnarkar21" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" style={{ color: textColor }}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                    </svg>
                  </a>
                  
                  <a href="https://x.com/OmkarNarka?t=-rbAavSGo7kCPVu7Xg4_AQ&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" style={{ color: textColor }}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  
                  <a href="https://www.instagram.com/narkaromkar65" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" style={{ color: textColor }}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  
                  <a href="https://github.com/OmkarNarkar321/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" style={{ color: textColor }}>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                I'm a Full Stack Developer with <span className="font-semibold text-orange-500">1 year and 5 months</span> of hands-on experience building responsive web applications using JavaScript, React.js, Node.js, and SQL. Along the way, I've worked on creating practical solutions like RESTful APIs for SMS gateways and user authentication, and even applied Advanced Java in one of my projects.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                I enjoy solving problems, picking up new technologies quickly, and building applications that are not only efficient but also easy for people to use. My experience spans across multiple companies where I've maintained live websites, developed admin dashboards, and created entire project architectures from scratch.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                Currently, I'm focused on creating seamless, high-performance user experiences while managing MongoDB databases, designing RESTful APIs, and collaborating with cross-functional teams to deliver real-world business solutions. I believe in writing clean, maintainable code that stands the test of time.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      <div id="skills" className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-24">
              <div className="space-y-4">
                <span className="text-orange-500 text-sm tracking-wider font-medium">Expertise</span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: textColor }}>
                  My key areas of expertise.
                </h2>
                
                <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                  With over 1.5 years of experience in full-stack development, I specialize in building scalable web applications, 
                  RESTful APIs, and database management. I focus on creating efficient solutions that deliver real-world business value.
                </p>
              </div>
              
              <button 
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-transparent border-2 border-white/20 font-medium rounded-lg hover:bg-white/5 hover:border-orange-500/50 transition-all duration-300" 
                style={{ color: textColor }}
              >
                View All Services
              </button>
            </div>
            
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">
              
              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-orange-500 text-sm font-bold">01.</span>
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold" style={{ color: textColor }}>
                    Frontend Development
                  </h3>
                  
                  <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                    Building responsive and interactive user interfaces using React.js, with focus on modern UI/UX principles, 
                    performance optimization, and cross-browser compatibility.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>React.js</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>JavaScript</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>HTML/CSS</span>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-cyan-500 text-sm font-bold">02.</span>
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold" style={{ color: textColor }}>
                    Backend Development
                  </h3>
                  
                  <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                    Developing robust server-side applications and RESTful APIs using Node.js and Advanced Java, 
                    ensuring scalability, security, and efficient data management.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>Node.js</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>Advanced Java</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>RESTful APIs</span>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-green-500 text-sm font-bold">03.</span>
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold" style={{ color: textColor }}>
                    Database Management
                  </h3>
                  
                  <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                    Managing and optimizing databases with MongoDB and SQL, handling data modeling, CRUD operations, 
                    and query optimization for better performance and scalability.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>MongoDB</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>SQL</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>Database Design</span>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="text-yellow-500 text-sm font-bold">04.</span>
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold" style={{ color: textColor }}>
                    Full Stack Integration
                  </h3>
                  
                  <p className="text-sm leading-relaxed" style={{ color: textColor, opacity: 0.8 }}>
                    Creating complete project architectures, integrating frontend and backend seamlessly, 
                    implementing authentication systems, and deploying production-ready applications.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>API Integration</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>Authentication</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs" style={{ color: textColor }}>Deployment</span>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        h1, h2, h3 {
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
        }
        
        body, p, span, button, a {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}