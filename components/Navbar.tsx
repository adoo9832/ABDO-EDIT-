
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full nav-glass flex items-center gap-8 text-sm font-medium text-slate-300">
      <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
      <button onClick={() => scrollTo('demo')} className="hover:text-white transition-colors">Demo</button>
      <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services</button>
      <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
      <button 
        onClick={() => scrollTo('contact')} 
        className="text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-all border border-white/10"
      >
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
