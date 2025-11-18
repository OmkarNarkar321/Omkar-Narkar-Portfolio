import React, { useState, useEffect } from 'react';
import ThreeBackground from './../Components/ThreeBackground.jsx';

export default function Projects() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const textColor = 'hsla(39, 93%, 95%, 1)';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Full Stack', 'React', 'Vanilla JS', 'API Integration'];

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Web Application',
      category: 'Full Stack',
      description: 'A comprehensive e-commerce platform built with enterprise-level architecture. Features include product catalog, shopping cart, user authentication, order management, and admin dashboard. Implemented using MVC architecture with servlet-based backend.',
      technologies: ['Advanced Java', 'Servlet', 'JSP', 'SQL', 'HTML/CSS', 'JavaScript'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and checkout system',
        'Order management and tracking',
        'Admin dashboard for product management',
        'Secure payment integration'
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      liveLink: '#', // Add your actual link
      githubLink: '#', // Add your actual link
      image: '/ecommerce.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'CareerConnect | Web Platform',
      category: 'Full Stack',
      description: 'A modern career management platform currently in development. Designed to connect job seekers with employers through an intuitive interface. Features real-time job postings, application tracking, and profile management with a focus on user experience.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'SQL', 'RESTful APIs', 'JWT Authentication'],
      features: [
        'User profile creation and management',
        'Job posting and application system',
        'Real-time notifications',
        'Advanced search and filtering',
        'Application status tracking',
        'Responsive design for all devices'
      ],
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      liveLink: '#',
      githubLink: '#',
      image: '/careerconnect.jpg', // Add your project image here
      status: 'In Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Brand Reputation Tracker',
      category: 'API Integration',
      description: 'An advanced real-time brand monitoring system that aggregates data from multiple social media platforms. Tracks brand mentions, sentiment analysis, and engagement metrics across YouTube, Reddit, and other platforms using their respective APIs.',
      technologies: ['React.js', 'Node.js', 'YouTube API', 'Reddit API', 'REST APIs', 'Data Visualization'],
      features: [
        'Real-time brand mention tracking',
        'Multi-platform API integration',
        'Sentiment analysis dashboard',
        'Engagement metrics visualization',
        'Historical data analytics',
        'Custom alert notifications'
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      liveLink: 'https://brand-tracker-pearl.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/Brand-Reputation-Tracker',
      image: '/BrandTracker.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 4,
      name: 'Omkar Narkar Portfolio',
      category: 'React',
      description: 'A modern, interactive portfolio website showcasing my work and skills. Built with cutting-edge technologies including Three.js for stunning 3D background effects. Features smooth animations, responsive design, and an intuitive user interface.',
      technologies: ['React.js', 'Three.js', 'Tailwind CSS', 'React Router', 'CSS Animations', 'Responsive Design'],
      features: [
        '3D interactive background with Three.js',
        'Smooth page transitions and animations',
        'Fully responsive across all devices',
        'Dynamic project showcase',
        'Interactive contact forms',
        'Modern UI/UX design'
      ],
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500',
      liveLink: 'https://omkar-narkar.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/Omkar-Narkar-Portfolio',
      image: '/OmkarPortfolio.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 5,
      name: 'Online Shoe Store',
      category: 'React',
      description: 'A sleek e-commerce application specialized in footwear retail. Features an elegant product display, dynamic filtering system, shopping cart functionality, and seamless checkout experience. Built with React to ensure fast and responsive user interactions.',
      technologies: ['React.js', 'React Hooks', 'Context API', 'CSS3', 'Local Storage', 'Responsive Design'],
      features: [
        'Product catalog with filtering',
        'Shopping cart management',
        'Product detail views',
        'Size and color selection',
        'Wishlist functionality',
        'Mobile-first responsive design'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      liveLink: 'https://small-react-projects-beta.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/Small-React-Projects',
      image: '/shoestore.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      name: 'To-Do List (React)',
      category: 'React',
      description: 'A feature-rich task management application built with React. Demonstrates proficiency in state management, component lifecycle, and modern React patterns. Includes task creation, editing, deletion, and completion tracking with persistent storage.',
      technologies: ['React.js', 'React Hooks', 'useState', 'useEffect', 'Local Storage', 'CSS3'],
      features: [
        'Add, edit, and delete tasks',
        'Mark tasks as complete',
        'Filter tasks by status',
        'Persistent local storage',
        'Clean and intuitive UI',
        'Responsive design'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
      liveLink: 'https://small-react-projects-beta.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/Small-React-Projects',
      image: '/todolistreact.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      id: 7,
      name: 'React Counter Application',
      category: 'React',
      description: 'A foundational React project demonstrating core concepts including state management, event handling, and component architecture. Simple yet effective implementation showcasing React fundamentals and best practices.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Component Architecture'],
      features: [
        'Increment and decrement functionality',
        'Reset counter option',
        'State management with useState',
        'Clean component structure',
        'Responsive design',
        'Modern UI implementation'
      ],
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
      liveLink: 'https://small-react-projects-beta.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/Small-React-Projects',
      image: '/reactcounterapp.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      )
    },
    {
      id: 8,
      name: 'Pure JS To-Do List App',
      category: 'Vanilla JS',
      description: 'A vanilla JavaScript implementation of a task management system. Built without frameworks to demonstrate strong fundamental JavaScript skills including DOM manipulation, event handling, and data persistence using local storage.',
      technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'DOM Manipulation'],
      features: [
        'Pure JavaScript implementation',
        'DOM manipulation techniques',
        'Local storage integration',
        'CRUD operations',
        'Event delegation',
        'Cross-browser compatibility'
      ],
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500',
      liveLink: 'https://to-do-list-five-pearl-24.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/pure-js-To-Do-List-app',
      image: '/JsToDoList.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 9,
      name: 'Pure JS Counter App',
      category: 'Vanilla JS',
      description: 'A fundamental JavaScript project showcasing core programming concepts. Built entirely with vanilla JavaScript to demonstrate understanding of basic JavaScript operations, DOM manipulation, and event handling without relying on frameworks.',
      technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'ES6+'],
      features: [
        'Pure JavaScript logic',
        'Event handling',
        'DOM manipulation',
        'ES6+ syntax',
        'Clean code structure',
        'Responsive interface'
      ],
      color: 'red',
      gradient: 'from-red-500 to-orange-500',
      liveLink: 'https://to-do-list-using-react-navy.vercel.app/',
      githubLink: 'https://github.com/OmkarNarkar321/pure-js-counter-app',
      image: '/JsCounterapp.jpg', // Add your project image here
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              <span className="text-orange-500 text-sm tracking-wider font-medium">My Work</span>
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
              Featured <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Projects</span>
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
              A showcase of my development journey - from foundational JavaScript to full-stack applications
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

      {/* Filter Section */}
      <div className="relative z-10 px-6 lg:px-16 py-12 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30'
                }`}
                style={{ color: textColor }}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-center mt-6 text-base" style={{ color: textColor, opacity: 0.7 }}>
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Image/Icon Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 aspect-video flex items-center justify-center hover:border-orange-500/50 transition-all duration-500">
                    {/* Project Image */}
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback Icon (shows if image fails to load or is not provided) */}
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-center"
                      style={{ display: project.image ? 'none' : 'flex' }}
                    >
                      {/* Gradient Overlay - Only for fallback */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      {/* Icon */}
                      <div className={`relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <div className="absolute inset-0 flex items-center justify-center" style={{ color: textColor }}>
                          {React.cloneElement(project.icon, { className: 'w-20 h-20' })}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute top-6 right-6 z-10">
                        <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-sm font-medium backdrop-blur-sm" style={{ color: textColor }}>
                          {project.status}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                            style={{ color: textColor }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span 
                            className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20"
                            style={{ color: textColor }}
                          >
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                  <div>
                    <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ color: textColor, fontFamily: "'DM Serif Display', serif" }}>
                      {project.name}
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: textColor }}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                          style={{ color: textColor }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: textColor }}>
                      Key Features
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm" style={{ color: textColor, opacity: 0.9 }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 py-4 bg-gradient-to-r ${project.gradient} font-medium rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2`}
                      style={{ color: textColor }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Project
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                      style={{ color: textColor }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
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
            Interested in Working Together?
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: textColor, opacity: 0.9 }}>
            I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:narkaromkar65@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              style={{ color: textColor }}
            >
              Start a Project
            </a>
            <a
              href="/resume"
              className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              style={{ color: textColor }}
            >
              Download Resume
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