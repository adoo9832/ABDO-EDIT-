
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 bg-slate-950/50 border-y border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">My Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From raw footage to viral hits, I provide comprehensive editing solutions tailored to your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 bg-slate-900/40 rounded-3xl border border-slate-800 hover:bg-slate-900/60 transition-colors group">
              <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${service.icon} text-xl text-violet-400`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
