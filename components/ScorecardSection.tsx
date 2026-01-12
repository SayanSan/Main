
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const FeatureIcon = ({ type, className = "w-8 h-8" }: { type: string, className?: string }) => {
  switch (type) {
    case 'labs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          <path d="M18 13l-4 4" strokeOpacity="0.5" />
        </svg>
      );
    case 'studios':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <path d="M9 9h.01M15 9h.01" strokeWidth="2" />
        </svg>
      );
    case 'learning':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case 'sports':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6" strokeOpacity="0.5" />
          <path d="M12 2v20M2 12h20" />
        </svg>
      );
    default:
      return null;
  }
};

const ScorecardSection: React.FC = () => {
  const revealRef = useReveal();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const campusFeatures = [
    { 
      id: 1,
      title: 'Advanced Tech Labs', 
      icon: 'labs', 
      tag: 'Industry 4.0',
      desc: 'High-performance computing, robotics pods, and ethical AI development centers built for tomorrow.',
      details: ['RTX 4090 Workstations', 'Cobot Interaction', 'Cyber-Range'],
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 2,
      title: 'Creative Studios', 
      icon: 'studios', 
      tag: 'New Media',
      desc: 'Professional-grade spaces for 4K film production, Dolby Atmos sound, and VR/AR storytelling.',
      details: ['Green Screen Suite', 'Podcast Hub', 'Mocap Lab'],
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 3,
      title: 'Learning Spaces', 
      icon: 'learning', 
      tag: 'Collaborative',
      desc: 'Open-plan collaborative pods and smart auditoriums designed for knowledge exchange.',
      details: ['Smart Glass Auditoria', 'Discussion Pods', 'Idea Walls'],
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    { 
      id: 4,
      title: 'Arena & Wellness', 
      icon: 'sports', 
      tag: 'Olympic Standard',
      desc: 'State-of-the-art courts and health-tech gym designed to support physical excellence.',
      details: ['Indoor Badminton', 'Physio-Center', 'Yoga Hall'],
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <section id="campus-inspires" className="py-24 bg-slate-50 overflow-hidden relative">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative reveal">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 stagger-item">
          <div className="max-w-2xl">
            <h2 className="text-tiu-red text-xs font-black uppercase tracking-[0.4em] mb-4">Infrastructure</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              A Campus That <span className="text-tiu-red italic">Inspires</span>
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              An immersive <span className="text-slate-900 font-bold decoration-tiu-red/30">24/7 residential ecosystem</span> designed specifically for the next generation of global creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[250px] md:auto-rows-[300px]">
          {campusFeatures.map((feature, idx) => (
            <div 
              key={feature.id}
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border border-white stagger-item
                ${activeFeature === feature.id 
                  ? 'md:col-span-8 md:row-span-2' 
                  : idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <img 
                src={feature.img} 
                alt={feature.title} 
                loading="lazy" 
                decoding="async" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center space-x-3 mb-4">
                   <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <FeatureIcon type={feature.icon} className="w-6 h-6" />
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/5">
                      {feature.tag}
                   </span>
                </div>

                <h4 className="text-2xl font-black tracking-tight mb-2">{feature.title}</h4>
                
                {activeFeature === feature.id && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">{feature.desc}</p>
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                      {feature.details.map((d, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-tiu-red rounded-full"></span>
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 stagger-item" style={{ transitionDelay: '600ms' }}>
          <div className="bg-slate-900 rounded-[2rem] p-1 overflow-hidden shadow-2xl relative group">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-[1.9rem] p-8 md:p-10 border border-white/5 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-grow text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-tiu-red/10 text-tiu-red text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-md mb-4 border border-tiu-red/20">
                  <span className="w-1.5 h-1.5 bg-tiu-red rounded-full"></span>
                  <span>Safety First</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Safe Harbour Ecosystem</h4>
                <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
                  High-definition monitoring, controlled access, and an on-campus multi-specialty medical hub available instantly.
                </p>
              </div>
              <button className="flex-shrink-0 px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-tiu-red hover:text-white transition-all active:scale-95 shadow-xl">
                Safety Charter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorecardSection;
