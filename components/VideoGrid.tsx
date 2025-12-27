
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { VideoProject } from '../types';

const VideoGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'Short-form', 'Long-form', 'Ad'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="demo" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Showcase</h2>
          <p className="text-slate-400">Selected works that drive results and keep viewers hooked.</p>
        </div>
        
        <div className="flex gap-2 bg-slate-900/50 p-1 rounded-xl border border-slate-800">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeFilter === filter 
                  ? 'bg-slate-800 text-white shadow-lg' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative bg-slate-900/30 rounded-3xl border border-slate-800 overflow-hidden hover:border-violet-500/50 transition-all">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-16 h-16 bg-white text-slate-950 rounded-full flex items-center justify-center text-xl shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                  <i className="fa-solid fa-play ml-1"></i>
                </button>
              </div>
              {project.retention && (
                <div className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {project.retention} Retention
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGrid;
