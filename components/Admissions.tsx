
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const Admissions: React.FC = () => {
  const revealRef = useReveal();
  
  const dates = [
    { label: 'Application Window Opens', month: 'JANUARY', year: '2026' },
    { label: 'Early Application Deadline', month: 'FEBRUARY', year: '2026' },
    { label: 'Late Application Deadline', month: 'JULY', year: '2026' },
    { label: 'Academic Session Begins', month: 'AUGUST', year: '2026' },
  ];

  return (
    <section id="admissions" className="py-24 bg-slate-50 overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 stagger-item">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Admissions <br />
                <span className="text-tiu-red">& Key Dates</span>
              </h2>
              <p className="text-slate-600 text-base mb-10 leading-relaxed">
                Holistic selection process identifying leadership potential. 
                Beyond test scores, we seek curiosity and drive.
              </p>
              
              <div className="space-y-6 mb-12">
                {dates.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-xl duration-300">
                    <span className="text-slate-700 font-bold text-lg max-w-[200px] leading-tight">
                      {item.label}
                    </span>
                    <div className="bg-red-50 rounded-xl px-5 py-3 min-w-[120px] flex flex-col items-center justify-center text-center">
                      <span className="text-tiu-red font-black text-[11px] uppercase tracking-wider leading-none mb-1">
                        {item.month}
                      </span>
                      <span className="text-tiu-red font-black text-[13px] leading-none">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-slate-950 rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">Begin Your Journey</h3>
                  <p className="mb-8 text-slate-400 text-xs leading-relaxed opacity-80">
                    Selection is active from January to July 2026. 
                    Merit-based scholarships available for early applicants.
                  </p>
                  <button className="w-full bg-tiu-red text-white py-3.5 rounded-xl font-bold hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-600/10">
                    Apply Now
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-tiu-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-tiu-red/20 transition-colors duration-700"></div>
              </div>
            </div>

            <div className="relative bg-slate-900 hidden lg:block overflow-hidden">
               <img 
                  src="https://images.unsplash.com/photo-1523240715630-9412374c4f59?auto=format&fit=crop&q=80&w=800" 
                  alt="Student Lifestyle" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-2000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-16 left-12 right-12">
                  <div className="flex items-center space-x-3 mb-6 animate-pulse">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Student" />)}
                    </div>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Join 500+ Early Applicants</span>
                  </div>
                  <blockquote className="text-xl text-white font-medium italic leading-relaxed">
                    "Choosing TIU Joka was about defining my future as an innovator and change-maker."
                  </blockquote>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
