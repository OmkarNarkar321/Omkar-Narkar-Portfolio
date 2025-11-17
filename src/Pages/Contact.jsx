// Contact.jsx - Optimized Production Version (No Form)
import React, { useState, useEffect } from 'react';
import ThreeBackground from '../Components/ThreeBackground.jsx';

export default function Contact() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const textColor = 'hsla(39, 93%, 95%, 1)';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setPageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // TODO: Add your Upwork profile URL here
  const UPWORK_PROFILE_URL = 'https://www.upwork.com/freelancers/~010aa7a33bd23ca860?mp_source=share'; // Example: 'https://www.upwork.com/freelancers/~yourprofile'

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/omkarnarkar21/',
      icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    },
    {
      name: 'GitHub',
      href: 'https://github.com/OmkarNarkar321',
      icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    },
    {
      name: 'Upwork',
      href: UPWORK_PROFILE_URL,
      icon: <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
    },
    {
      name: 'Email',
      href: 'mailto:narkaromkar65@gmail.com',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Resume', href: '/resume' }
  ];

  const availabilityCards = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
      color: 'orange-500',
      title: 'Response Time',
      text: 'I typically respond within 24 hours'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
      color: 'cyan-500',
      title: 'Availability',
      text: 'Open to new projects and collaborations'
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />,
      color: 'green-500',
      title: 'Communication',
      text: 'Clear and regular project updates'
    }
  ];

  const contactMethods = [
    {
      title: 'Email',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      value: 'narkaromkar65@gmail.com',
      href: 'mailto:narkaromkar65@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      title: 'Phone',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
      value: '+91 937-261-5355',
      href: 'tel:+919372615355',
      description: 'Call me for immediate assistance'
    },
    {
      title: 'Location',
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
      value: 'Ambewadi, Golibar Road, Khar East, Mumbai 400055',
      href: null,
      description: 'Based in Mumbai, India'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      {/* Hero Section - Mobile Optimized */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
            <div className={`transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="text-orange-500 text-xs sm:text-sm tracking-wider font-medium">Contact</span>
            </div>
            
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ color: textColor, fontFamily: "'DM Serif Display', serif", transitionDelay: '100ms' }}
            >
              Get In Touch
            </h1>
            
            <p 
              className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ color: textColor, opacity: 0.9, transitionDelay: '200ms' }}
            >
              Let's collaborate and bring your ideas to life
            </p>

            <div 
              className={`h-[2px] w-16 sm:w-24 mx-auto bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-700 ${pageLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Section - Contact Information */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a2a2a] px-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Let's take your business to the next level
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#4a4a4a] max-w-3xl mx-auto px-4">
              Whether you need a full-stack web application, API development, SEO optimization, or digital marketing services, I'm here to help transform your vision into reality. Let's discuss how we can work together to achieve your goals.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#2a2a2a] mb-1">{method.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6a6a6a] mb-3">{method.description}</p>
                  </div>
                </div>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-sm sm:text-base text-[#4a4a4a] hover:text-orange-500 transition-colors duration-300 break-words block"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base text-[#4a4a4a] break-words">{method.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Two Column Layout for Social & Quick Links */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a] uppercase tracking-wide">Follow On Social</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gray-100 rounded-xl hover:bg-orange-500 transition-all duration-300 group hover:scale-110"
                    aria-label={social.name}
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#2a2a2a] group-hover:text-white transition-colors" fill={idx < 3 ? 'currentColor' : 'none'} stroke={idx === 3 ? 'currentColor' : 'none'} viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a] uppercase tracking-wide">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-100 rounded-xl text-[#2a2a2a] hover:bg-orange-500 hover:text-white transition-all duration-300 text-center font-medium text-sm sm:text-base hover:scale-105"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'hsla(39, 93%, 95%, 1)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {availabilityCards.map((card, idx) => (
              <div key={idx} className="text-center space-y-4 p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-${card.color}/10 flex items-center justify-center`}>
                  <svg className={`w-7 h-7 sm:w-8 sm:h-8 text-${card.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2a2a2a]">{card.title}</h3>
                <p className="text-sm sm:text-base text-[#4a4a4a]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
            Let's Create Something Amazing Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4" style={{ color: textColor, opacity: 0.9 }}>
            I'm always excited to discuss new projects and opportunities. Whether you have a fully formed idea or just a concept, let's chat and see how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4">
            {[
              { href: 'mailto:narkaromkar65@gmail.com', text: 'Send Email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', primary: true },
              { href: 'tel:+919372615355', text: 'Call Now', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              { href: '/projects', text: 'View My Work', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  btn.primary 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30' 
                    : 'bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40'
                }`}
                style={{ color: textColor }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={btn.icon} />
                </svg>
                {btn.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        h1, h2, h3, h4 { 
          font-family: 'DM Serif Display', serif; 
          font-weight: 400; 
        }
        
        body, p, span, button, a, li, input, textarea, label { 
          font-family: 'Inter', sans-serif; 
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          h1 {
            word-wrap: break-word;
            hyphens: auto;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}