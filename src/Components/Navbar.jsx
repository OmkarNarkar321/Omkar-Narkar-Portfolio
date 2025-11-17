import React, { useState, useEffect } from "react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "/about", isHome: false },
    { name: "Resume", href: "/resume", isHome: false },
    { name: "Experience", href: "/experience", isHome: false },
    { name: "Projects", href: "/projects", isHome: false },
    { name: "Services", href: "/services", isHome: false },
    { name: "Contact", href: "/contact", isHome: false },
  ];

  const textColor = 'hsla(39, 93%, 95%, 1)';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold transition-colors"
              style={{ 
                color: textColor,
                fontFamily: "'DM Serif Display', serif"
              }}
            >
              <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                Omkar
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors relative group hover:text-orange-500"
                style={{ color: textColor }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-white/10"
              style={{ color: textColor }}
            >
              <span className="sr-only">Open menu</span>
              {openNav ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          openNav ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg rounded-b-2xl mt-2 mx-4 border border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpenNav(false)}
              className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-orange-500 font-medium transition-all"
              style={{ color: textColor }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}