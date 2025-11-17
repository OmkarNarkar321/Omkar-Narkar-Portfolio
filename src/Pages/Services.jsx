import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from '../Components/ThreeBackground.jsx';

// Constants
const TEXT_COLOR = 'hsla(39, 93%, 95%, 1)';
const CATEGORIES = ['All', 'Full Stack Development', 'SEO & Digital Marketing'];

// Service Data
const SERVICES_DATA = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    category: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies. I build scalable, responsive, and high-performance applications from concept to deployment.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-orange-500 to-red-500',
    features: [
      'React.js & Node.js Development',
      'RESTful API Design & Integration',
      'MongoDB & SQL Database Management',
      'Responsive UI/UX Implementation',
      'Authentication & Authorization Systems',
      'Real-time Features & WebSockets'
    ],
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    id: 2,
    name: 'Frontend Development',
    category: 'Full Stack Development',
    description: 'Creating stunning, interactive user interfaces with modern frameworks. Focused on performance, accessibility, and seamless user experiences.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-cyan-500 to-blue-500',
    features: [
      'React.js Component Development',
      'State Management (Redux, Context API)',
      'Responsive Design & Mobile-First Approach',
      'CSS3 Animations & Transitions',
      'Single Page Applications (SPA)',
      'Cross-Browser Compatibility'
    ],
    tools: ['React.js', 'JavaScript', 'Tailwind CSS', 'CSS3', 'HTML5', 'Bootstrap']
  },
  {
    id: 3,
    name: 'Backend Development',
    category: 'Full Stack Development',
    description: 'Building robust server-side applications and APIs. Expertise in creating secure, scalable backend systems with efficient database management.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Node.js & Express.js Server Setup',
      'RESTful API Development',
      'Database Design & Optimization',
      'User Authentication (JWT, Sessions)',
      'Third-Party API Integration',
      'Server Security & Performance'
    ],
    tools: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Advanced Java', 'Servlet/JSP']
  },
  {
    id: 4,
    name: 'API Development & Integration',
    category: 'Full Stack Development',
    description: 'Designing and implementing powerful APIs for seamless data exchange. Expert in creating custom APIs and integrating third-party services.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Custom RESTful API Development',
      'SMS Gateway API Integration',
      'Payment Gateway Integration',
      'Social Media API Integration',
      'API Documentation & Testing',
      'Webhook Implementation'
    ],
    tools: ['REST APIs', 'Postman', 'JWT', 'OAuth', 'Swagger', 'Express.js']
  },
  {
    id: 5,
    name: 'E-Commerce Solutions',
    category: 'Full Stack Development',
    description: 'Complete e-commerce platform development with advanced features. From product catalogs to secure checkout systems.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    gradient: 'from-yellow-500 to-orange-500',
    features: [
      'Product Catalog Management',
      'Shopping Cart & Checkout',
      'Payment Integration',
      'Order Management System',
      'Admin Dashboard',
      'Inventory Management'
    ],
    tools: ['React.js', 'Node.js', 'SQL', 'Stripe/PayPal', 'Advanced Java']
  },
  {
    id: 6,
    name: 'Website Maintenance & Updates',
    category: 'Full Stack Development',
    description: 'Ongoing website maintenance, updates, and performance optimization. Keeping your site running smoothly with regular enhancements.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    gradient: 'from-indigo-500 to-purple-500',
    features: [
      'Regular Content Updates',
      'Bug Fixes & Troubleshooting',
      'Performance Optimization',
      'Security Updates',
      'Feature Enhancements',
      'Technical Support'
    ],
    tools: ['All Web Technologies', 'Git', 'GitHub', 'Debugging Tools']
  },
  {
    id: 7,
    name: 'SEO Optimization',
    category: 'SEO & Digital Marketing',
    description: 'Comprehensive SEO services to boost your organic traffic and search rankings. Data-driven strategies for sustainable growth.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    gradient: 'from-blue-500 to-indigo-500',
    features: [
      'On-Page SEO Optimization',
      'Off-Page SEO Strategies',
      'Keyword Research & Analysis',
      'Technical SEO Audits',
      'SEO Content Writing',
      'Meta Tags Optimization'
    ],
    tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Google Analytics']
  },
  {
    id: 8,
    name: 'Link Building & Backlinks',
    category: 'SEO & Digital Marketing',
    description: 'Strategic link building campaigns to increase your domain authority. Quality backlinks from high-authority websites.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    gradient: 'from-teal-500 to-cyan-500',
    features: [
      'High-Quality Backlink Building',
      'Link Exchange Strategies',
      'Guest Post Outreach',
      'Broken Link Building',
      'Competitor Backlink Analysis',
      'Link Profile Management'
    ],
    tools: ['SEMrush', 'Ahrefs', 'Moz', 'Link Building Tools']
  },
  {
    id: 9,
    name: 'WordPress Management',
    category: 'SEO & Digital Marketing',
    description: 'Complete WordPress website management including SEO optimization, content updates, and performance enhancement.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    gradient: 'from-emerald-500 to-green-500',
    features: [
      'WordPress SEO Optimization',
      'Page Speed Optimization',
      'Plugin Management',
      'Content Management',
      'Theme Customization',
      'Security & Backup'
    ],
    tools: ['WordPress', 'Yoast SEO', 'Rank Math', 'WP Rocket']
  },
  {
    id: 10,
    name: 'Content Writing & Strategy',
    category: 'SEO & Digital Marketing',
    description: 'SEO-optimized content creation that engages audiences and drives conversions. Strategic content planning for maximum impact.',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    gradient: 'from-rose-500 to-pink-500',
    features: [
      'SEO Blog Writing',
      'Website Copywriting',
      'Content Strategy Planning',
      'Keyword-Optimized Content',
      'Article & Guest Post Writing',
      'Content Editing & Proofreading'
    ],
    tools: ['Grammarly', 'Hemingway', 'Surfer SEO', 'Content Tools']
  },
  {
    id: 11,
    name: 'Digital Marketing',
    category: 'SEO & Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence. From strategy to execution and analytics.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Digital Marketing Strategy',
      'Campaign Planning & Execution',
      'Email Marketing',
      'PPC Campaign Management',
      'Conversion Rate Optimization',
      'Analytics & Reporting'
    ],
    tools: ['Google Analytics', 'Google Ads', 'Mailchimp', 'HubSpot']
  },
  {
    id: 12,
    name: 'Social Media Marketing',
    category: 'SEO & Digital Marketing',
    description: 'Strategic social media management to build your brand and engage with your audience across all major platforms.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    gradient: 'from-fuchsia-500 to-pink-500',
    features: [
      'Social Media Strategy',
      'Content Creation & Scheduling',
      'Community Management',
      'LinkedIn Marketing & Outreach',
      'Brand Awareness Campaigns',
      'Social Media Analytics'
    ],
    tools: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'Buffer', 'Hootsuite']
  },
  {
    id: 13,
    name: 'Website & Content Audit',
    category: 'SEO & Digital Marketing',
    description: 'Comprehensive website audits to identify issues and opportunities. Detailed analysis with actionable recommendations.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Technical SEO Audit',
      'Content Quality Analysis',
      'Site Speed Analysis',
      'Mobile Responsiveness Check',
      'Security Audit',
      'Detailed Audit Reports'
    ],
    tools: ['Google Search Console', 'SEMrush', 'Screaming Frog', 'GTmetrix']
  },
  {
    id: 14,
    name: 'Image & Video Generation',
    category: 'SEO & Digital Marketing',
    description: 'Creating engaging visual content for your digital marketing campaigns. Custom graphics and videos optimized for web.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-sky-500 to-blue-500',
    features: [
      'Custom Image Creation',
      'Social Media Graphics',
      'Video Content Production',
      'Infographic Design',
      'Banner & Ad Design',
      'Image Optimization for Web'
    ],
    tools: ['Canva', 'Adobe Tools', 'Figma', 'Video Editing Software']
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your requirements, goals, and target audience',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Creating a detailed roadmap and technical architecture',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Building your solution with clean, efficient code',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Testing, deployment, and ongoing support',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  }
];

const STATS = [
  {
    value: '1.5+ Years',
    label: 'Professional Experience',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    value: '15+',
    label: 'Projects Completed',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    value: 'Full Stack',
    label: 'Development Expertise',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    value: 'SEO Expert',
    label: 'Digital Marketing Pro',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const TECH_STACKS = {
  development: {
    title: 'Development Stack',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-orange-500 to-red-500',
    hoverColor: 'orange-500',
    items: [
      'React.js', 'Node.js', 'Express.js', 'JavaScript',
      'Three.js', 'Advanced Java', 'MongoDB', 'SQL', 'HTML5',
      'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git/GitHub',
      'RESTful APIs', 'JWT', 'Servlet/JSP'
    ]
  },
  marketing: {
    title: 'Marketing Tools',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-blue-500 to-indigo-500',
    hoverColor: 'cyan-500',
    items: [
      'SEMrush', 'Ahrefs', 'Google Analytics', 'Google Search Console',
      'WordPress', 'Yoast SEO', 'Rank Math', 'Screaming Frog',
      'Canva', 'LinkedIn', 'Social Media', 'Email Marketing',
      'Content Writing', 'Link Building', 'Site Audit', 'Backlinks'
    ]
  }
};

// Reusable Components
const IconSVG = ({ path }) => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const SmallIconSVG = ({ path, className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ServiceCard = ({ service }) => (
  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center mb-6 group-hover:opacity-30 transition-opacity duration-300`}>
      <div className="absolute" style={{ color: TEXT_COLOR }}>
        <IconSVG path={service.icon} />
      </div>
    </div>

    <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
      {service.name}
    </h3>

    <p className="text-base leading-relaxed mb-6" style={{ color: TEXT_COLOR, opacity: 0.8 }}>
      {service.description}
    </p>

    <div className="space-y-3 mb-6">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckIcon />
          <span className="text-sm" style={{ color: TEXT_COLOR, opacity: 0.9 }}>
            {feature}
          </span>
        </div>
      ))}
    </div>

    <div className="border-t border-white/10 pt-6">
      <p className="text-sm font-medium mb-3" style={{ color: TEXT_COLOR, opacity: 0.7 }}>
        Tools & Technologies:
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tools.map((tool, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10"
            style={{ color: TEXT_COLOR }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
  </div>
);

const StatCard = ({ stat }) => (
  <div className="text-center space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.gradient} opacity-20 flex items-center justify-center`}>
      <SmallIconSVG path={stat.icon} />
    </div>
    <h3 className="text-2xl font-bold" style={{ color: TEXT_COLOR }}>{stat.value}</h3>
    <p className="text-sm" style={{ color: TEXT_COLOR, opacity: 0.8 }}>{stat.label}</p>
  </div>
);

const ProcessCard = ({ process, showArrow }) => (
  <div className="relative">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 h-full">
      <div className="text-orange-500 text-4xl font-bold mb-4 opacity-30">{process.step}</div>
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-cyan-500 opacity-20 flex items-center justify-center mb-6">
        <div className="absolute" style={{ color: TEXT_COLOR }}>
          <SmallIconSVG path={process.icon} />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
        {process.title}
      </h3>
      <p className="text-base" style={{ color: TEXT_COLOR, opacity: 0.8 }}>
        {process.description}
      </p>
    </div>
    {showArrow && (
      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
        <svg className="w-8 h-8 text-orange-500 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    )}
  </div>
);

const TechStackSection = ({ title, icon, gradient, items, hoverColor }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: TEXT_COLOR }}>
      <span className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} opacity-20 flex items-center justify-center`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </span>
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((tech, idx) => (
        <div 
          key={idx}
          className={`px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-center hover:bg-white/10 hover:border-${hoverColor}/30 transition-all duration-300 hover:scale-105`}
          style={{ color: TEXT_COLOR }}
        >
          {tech}
        </div>
      ))}
    </div>
  </div>
);

export default function Services() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => setPageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(service => service.category === selectedCategory);

  const fadeInClass = () => 
    `transition-all duration-700 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <ThreeBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-16 pt-32 pb-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="text-center space-y-8">
            <div className={fadeInClass()}>
              <span className="text-orange-500 text-sm tracking-wider font-medium">What I Offer</span>
            </div>
            
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${fadeInClass()}`}
              style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif", transitionDelay: '100ms' }}
            >
              Professional <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${fadeInClass()}`}
              style={{ color: TEXT_COLOR, opacity: 0.9, transitionDelay: '200ms' }}
            >
              Full Stack Development & Digital Marketing expertise to bring your vision to life
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
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30'
                }`}
                style={{ color: TEXT_COLOR }}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-center mt-6 text-base" style={{ color: TEXT_COLOR, opacity: 0.7 }}>
            Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Highlights */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
              Why Choose Me?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_COLOR, opacity: 0.9 }}>
              Combining technical expertise with creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <StatCard key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
              My Work Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_COLOR, opacity: 0.9 }}>
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((process, idx) => (
              <ProcessCard key={idx} process={process} showArrow={idx < 3} />
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
              Technologies & Tools
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: TEXT_COLOR, opacity: 0.9 }}>
              Leveraging the latest technologies to build powerful solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <TechStackSection {...TECH_STACKS.development} />
            <TechStackSection {...TECH_STACKS.marketing} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-16 py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: TEXT_COLOR, fontFamily: "'DM Serif Display', serif" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: TEXT_COLOR, opacity: 0.9 }}>
            Let's collaborate and bring your ideas to life. Whether you need a full-stack web application or want to boost your online presence through SEO and digital marketing, I'm here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
              style={{ color: TEXT_COLOR }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </Link>
            <a
              href="/projects"
              className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
              style={{ color: TEXT_COLOR }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View My Work
            </a>
            <a
              href="https://www.linkedin.com/in/omkarnarkar21/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/20 font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
              style={{ color: TEXT_COLOR }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn Profile
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

        h1 {
          font-size: 3rem;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </div>
  );
}