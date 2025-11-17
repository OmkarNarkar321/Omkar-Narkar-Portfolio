import React, { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden';

    const minLoadTime = 1200;
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
        
        const loader = document.getElementById('initial-loader');
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => loader.remove(), 300);
        }
      }, remaining);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <div className="mb-12">
        <h1 
          className="text-4xl sm:text-5xl font-bold text-center"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
            Omkar
          </span>
        </h1>
      </div>

      <div className="flex gap-2">
        {[0, 0.2, 0.4].map((delay, i) => (
          <div 
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: 'hsla(39, 93%, 95%, 1)',
              animation: `wave 1.4s ease-in-out ${delay}s infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes wave {
          0%, 60%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          30% {
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}