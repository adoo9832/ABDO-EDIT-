
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import Services from './components/Services';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoGrid />
      <Services />
      
      {/* Testimonials or Stats Section */}
      <section className="py-24 px-4 bg-violet-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black">Join 50+ creators building viral brands.</h2>
            <p className="text-violet-100 text-lg opacity-80">"The quality and speed Ohayo BX brings is unmatched. My retention skyrocketed from 45% to over 80% in just one month."</p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/person1/100" className="w-12 h-12 rounded-full border-2 border-white/20" alt="Client" />
              <div>
                <div className="font-bold">Alex Rivera</div>
                <div className="text-sm opacity-60">Tech YouTuber (1.2M Subs)</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black">500+</div>
              <div className="text-violet-200 text-sm mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black">92%</div>
              <div className="text-violet-200 text-sm mt-2">Avg. Retention</div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <ChatBot />
    </div>
  );
};

export default App;
