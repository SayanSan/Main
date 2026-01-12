
import React from 'react';
import { useReveal } from '../hooks/useReveal';

const VisionSection: React.FC = () => {
  const revealRef = useReveal();

  return (
    <section id="vision" className="py-24 bg-slate-50 overflow-hidden">
      <div ref={revealRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="stagger-item" style={{ transitionDelay: '100ms' }}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Vision Aligned with <br />
              <span className="text-tiu-red">National Education Policy</span>
            </h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                TIU Joka is built on a visionary foundation that resonates with national education priorities. 
                Our goal is to be a national exemplar of progressive, interdisciplinary education, 
                embodying the core ideals of <span className="font-bold">NEP 2020</span>.
              </p>
              <p>
                This means education emphasis on practical, hands-on learning. We actively integrate 
                major-minor combinations and flexible curriculum to give students breadth and choice 
                in their education.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 group hover:border-tiu-red transition-colors duration-500">
                <h3 className="text-xl font-bold text-tiu-red mb-3">Blue Ocean Strategy</h3>
                <p className="text-sm">
                  We are not a traditional comprehensive university; rather, we are a specialized 
                  institution targeting high-growth interdisciplinary niches. This ensures TIU Joka 
                  stands out as a thought leader and innovator.
                </p>
              </div>
            </div>
          </div>

          <div id="pedagogy" className="space-y-12 stagger-item" style={{ transitionDelay: '300ms' }}>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                Nexus Pedagogy – <br />
                <span className="text-tiu-red">Learning by Doing</span>
              </h2>
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  At the heart of TIU Joka is our innovative "Nexus Pedagogy." Simply put, we believe in 
                  <span className="italic"> "more hands-on work, less classes"</span>.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Smart', desc: 'Tech-Enhanced' },
                    { label: 'Participative', desc: 'Collaborative' },
                    { label: 'Active', desc: 'Experiential' },
                    { label: 'Learning', desc: 'Every Day' },
                  ].map((item, idx) => (
                    <div key={item.label} className="border-l-4 border-tiu-red pl-4 py-2 hover:bg-white transition-colors duration-300 rounded-r-xl" style={{ transitionDelay: `${400 + idx * 100}ms` }}>
                      <span className="block font-black text-slate-900">{item.label}</span>
                      <span className="block text-sm text-slate-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base text-slate-600 bg-white p-6 rounded-xl italic border border-slate-100 shadow-sm">
                  "Much like medical students train in teaching hospitals, TIU Joka students immediately apply theory in real-world, 'clinical' settings—whether that's in cutting-edge labs, design studios, or a student-run media agency."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
