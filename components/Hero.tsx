
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10"></div>
      
      <div className="text-center space-y-8 animate-in fade-in duration-1000">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter gradient-text drop-shadow-2xl">
          Ohayo BX
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg md:text-xl font-medium text-slate-400 leading-relaxed">
            Professional Short-form & Long-form Editor • High Retention Edits<br className="hidden md:block" />
            • Fast Delivery • Premium Production Quality
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:scale-105 transition-transform"
          >
            View Portfolio
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-slate-800/50 text-white rounded-full font-bold hover:bg-slate-800 transition-all border border-slate-700"
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 animate-bounce opacity-20">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
