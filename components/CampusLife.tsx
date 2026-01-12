
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const CampusLife: React.FC = () => {
  const revealRef = useReveal();

  const activities = [
    {
      title: "The Hive: Student Clubs",
      description: "From Robotics and AI to Debate and Performing Arts, our student-led clubs are the heartbeat of campus innovation.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      tags: ["Innovation", "Leadership"]
    },
    {
      title: "Arena: Elite Sports",
      description: "State-of-the-art sporting facilities including Olympic-standard courts and a modern gymnasium.",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
      tags: ["Fitness", "Excellence"]
    },
    {
      title: "Smart Stay: Residences",
      description: "Premium, fully-serviced residential suites designed for comfort, collaboration, and safety.",
      image: "https://images.unsplash.com/photo-1555854817-5b2260d15449?auto=format&fit=crop&q=80&w=800",
      tags: ["Safety", "Community"]
    },
    {
      title: "Nexus Events: Exposure",
      description: "Annual symposiums and cultural festivals that bring global leaders and local talent onto one stage.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      tags: ["Culture", "Networking"]
    }
  ];

  return (
    <section id="campus-life" className="py-24 bg-white overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 stagger-item">
          <div className="max-w-3xl">
            <h2 className="text-tiu-red text-xs font-black uppercase tracking-[0.4em] mb-4">The TIU Experience</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
              Life Beyond the <br />
              <span className="text-tiu-red italic">Traditional Classroom</span>
            </h3>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              At TIU Joka, learning is an immersive 24/7 experience. Our residential model fosters 
              deep social bonds in a safe, inspiring ecosystem.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl rotate-3 hover:rotate-0 transition-transform cursor-default">
              <span className="text-4xl font-black text-tiu-red">10+</span>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Active Clubs</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, idx) => (
            <div key={idx} className="stagger-item group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-tiu-red bg-red-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-black mb-3 text-slate-900 group-hover:text-tiu-red transition-colors">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {activity.description}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-50">
                  <button className="flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-tiu-red transition-colors">
                    Explore Details
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 stagger-item bg-slate-900 rounded-[3rem] p-8 md:p-12 overflow-hidden relative" style={{ transitionDelay: '600ms' }}>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-tiu-red/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
          <div className="lg:col-span-2 relative z-10">
            <h4 className="text-3xl font-black text-white mb-4">Join the Vibrant Community</h4>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Experience a campus that never sleeps. From late-night hackathons in the tech lab 
              to sunrise yoga, your best memories are waiting to be made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
