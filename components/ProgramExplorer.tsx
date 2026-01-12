
import React, { useState } from 'react';
import { SCHOOLS } from '../constants';

const SchoolLogo = ({ id, className = "w-6 h-6" }: { id: string, className?: string }) => {
  switch (id) {
    case 'digital':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M10 10h4v4h-4z" fill="currentColor" fillOpacity="0.2" />
          <path d="M7 9H4v1M7 12H4M7 15H4v-1M17 9h3v1M17 12h3M17 15h3v-1M9 7V4h1M12 7V4M15 7V4h-1M9 17v3h1M12 17v3M15 17v3h-1" />
          <circle cx="4" cy="4" r="0.5" fill="currentColor" />
          <circle cx="20" cy="4" r="0.5" fill="currentColor" />
          <circle cx="4" cy="20" r="0.5" fill="currentColor" />
          <circle cx="20" cy="20" r="0.5" fill="currentColor" />
        </svg>
      );
    case 'creative':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
          <path d="M12 12c2-4 6-4 6 0s-4 4-6 8c-2-4-6-4-6-8s4-4 6 0z" strokeOpacity="0.5" />
        </svg>
      );
    case 'planet':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <path d="M12 2v20" />
          <path d="M12 6c3 0 6 2 6 6s-3 6-6 6-6-2-6-6 3-6 6-6z" strokeOpacity="0.4" />
          <path d="M4.5 9h15" strokeOpacity="0.4" />
          <path d="M4.5 15h15" strokeOpacity="0.4" />
          <path d="M12 22l-3-3m3 3l3-3" />
        </svg>
      );
    default:
      return null;
  }
};

const ProgramExplorer: React.FC = () => {
  const [activeSchool, setActiveSchool] = useState(SCHOOLS[0].id);
  const currentSchool = SCHOOLS.find(s => s.id === activeSchool);

  return (
    <section id="programs" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none -mr-20">
          <SchoolLogo id={activeSchool} className="w-96 h-96 text-white" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Find Your <span className="text-tiu-red">Calling</span>
            </h2>
            <p className="text-lg text-slate-400">
              Synergistic, collaborative, and at the cutting edge. 
              Discover our departments designed for future impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SCHOOLS.map((school) => (
              <button
                key={school.id}
                onClick={() => setActiveSchool(school.id)}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-semibold transition-all border text-sm ${
                  activeSchool === school.id 
                    ? 'bg-tiu-red border-tiu-red text-white shadow-lg shadow-red-500/10' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <SchoolLogo id={school.id} className={`w-4 h-4 ${activeSchool === school.id ? 'text-white' : 'text-slate-500'}`} />
                <span>{school.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {currentSchool?.departments.map((dept, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all group relative">
                <h3 className="text-tiu-red text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-50">Academic Vertical</h3>
                <h4 className="text-2xl font-bold mb-4">{dept.name}</h4>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed">{dept.description}</p>
                
                <div className="space-y-4">
                  {dept.programs.map((prog, pIdx) => (
                    <div key={pIdx} className="bg-slate-800/30 p-6 rounded-2xl border border-white/5 group/card hover:border-white/10 transition-all">
                      <h5 className="font-bold text-lg mb-4 text-slate-200">{prog.title}</h5>
                      <div className="grid grid-cols-2 gap-4 text-xs mb-6 opacity-60">
                        <div>
                          <span className="block text-slate-500 mb-1 uppercase tracking-wider">Focus</span>
                          <span className="text-slate-300">{prog.specialization}</span>
                        </div>
                        <div>
                          <span className="block text-slate-500 mb-1 uppercase tracking-wider">Path</span>
                          <span className="text-slate-300">{prog.pathway}</span>
                        </div>
                      </div>
                      <button className="w-full py-2.5 px-4 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-tiu-red hover:border-tiu-red transition-all">
                        Program Blueprint
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center relative z-10">
          <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-tiu-red hover:text-white transition-all shadow-xl hover:shadow-red-600/10 active:scale-95">
            View All 25+ Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramExplorer;
