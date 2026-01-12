
import React from 'react';
import { MILESTONES } from '../constants';
import { useReveal } from '../hooks/useReveal';

const MilestoneIcon = ({ id, className = "w-12 h-12" }: { id: string, className?: string }) => {
  switch (id) {
    case 'explore':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      );
    case 'immerse':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <path d="M12 7v14" />
        </svg>
      );
    case 'specialize':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      );
    case 'launch':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.62 5-2.5 5-2.5" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.62-1.62 2.5-5 2.5-5" />
        </svg>
      );
    default:
      return null;
  }
};

const PyramidJourney: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section id="journey" className="py-24 bg-white overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="text-center mb-20 stagger-item">
          <h2 className="text-tiu-red text-xs font-black uppercase tracking-[0.4em] mb-4">The Student Evolution</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">
            The <span className="text-tiu-red italic">Pyramid</span> to Success
          </h3>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Our meticulously designed four-year progression takes you from a broad 
            "world-view" to a focused "tunnel-view," transforming you into a sought-after 
            <span className="text-slate-900 font-bold"> T-shaped professional</span>.
          </p>
        </div>

        <div className="relative pb-12">
          <div className="md:hidden absolute left-10 top-0 bottom-0 w-0.5 bg-slate-100 z-0"></div>
          <div className="hidden md:block absolute top-[2.5rem] left-12 right-12 h-1 bg-slate-100 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {MILESTONES.map((step, idx) => (
              <div key={step.id} className="relative z-10 group flex flex-col h-full stagger-item" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="flex flex-col items-start md:items-start mb-6 md:mb-8 flex-shrink-0">
                  <div className={`relative w-16 h-16 rounded-2xl ${step.color} shadow-xl shadow-black/5 flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ring-4 ring-white group-hover:ring-slate-50`}>
                    <MilestoneIcon id={step.id} className="w-8 h-8" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-[8px] font-black border-2 border-white">
                      0{idx + 1}
                    </div>
                  </div>
                </div>

                <div className="md:ml-0 bg-slate-50 group-hover:bg-white p-6 md:p-8 rounded-3xl border border-slate-100 group-hover:border-tiu-red/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-tiu-red transition-colors block mb-1">
                      {step.year} Focus
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{step.label}</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-tiu-red transition-all cursor-pointer">
                    <span>Phase Blueprint</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-1 md:p-1.5 bg-slate-900 rounded-[2.5rem] overflow-hidden relative z-20 stagger-item" style={{ transitionDelay: '600ms' }}>
          <div className="bg-white/5 backdrop-blur-sm rounded-[2.3rem] p-8 md:p-10 border border-white/10 flex flex-col lg:flex-row items-center gap-10 text-white">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="px-3 py-1 bg-tiu-red text-[9px] font-black uppercase tracking-widest rounded-md">Accelerated</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">Postgraduate Pathway</h3>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                The 2-year Master's journey follows the same proven <span className="text-white font-bold">Pyramid Structure</span>, 
                customizing content into intensive semesters for deeper, research-led specialization 
                preparing learners for high-impact global careers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="whitespace-nowrap px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-xl hover:bg-tiu-red hover:text-white transition-all active:scale-95 shadow-lg shadow-black/10">
                Explore Masters
              </button>
              <button className="whitespace-nowrap px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/20 transition-all active:scale-95">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PyramidJourney;
