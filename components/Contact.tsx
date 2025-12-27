
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black mb-6">Let's build<br /><span className="gradient-text">something great.</span></h2>
              <p className="text-slate-400 text-lg max-w-md">
                Ready to take your content to the next level? Reach out for a custom consultation or project booking.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:hello@ohayobx.com" className="flex items-center gap-4 text-xl font-bold hover:text-violet-400 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:bg-violet-600/10 group-hover:border-violet-600/50">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
                hello@ohayobx.com
              </a>
              <div className="flex items-center gap-4 text-xl font-bold">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                  <i className="fa-solid fa-location-dot text-sm"></i>
                </div>
                Remote Worldwide
              </div>
            </div>

            <div className="flex gap-4">
              {['twitter', 'youtube', 'instagram', 'linkedin'].map(social => (
                <a key={social} href={`#${social}`} className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:bg-white hover:text-slate-950 transition-all">
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 p-10 rounded-3xl border border-slate-800 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-violet-600" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-violet-600" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Type</label>
              <select className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-violet-600 appearance-none">
                <option>Short-form (Reels/TikTok)</option>
                <option>YouTube / Long-form</option>
                <option>Advertising / Commercial</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-violet-600 resize-none"></textarea>
            </div>
            <button className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-xl">
              Send Message
            </button>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black gradient-text">Ohayo BX</div>
          <div className="text-slate-500 text-sm">
            © 2024 Ohayo BX. All rights reserved. Professional Video Editing Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
