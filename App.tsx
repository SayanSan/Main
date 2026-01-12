
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionSection from './components/VisionSection';
import PyramidJourney from './components/PyramidJourney';
import ProgramExplorer from './components/ProgramExplorer';
import ScorecardSection from './components/ScorecardSection';
import CampusLife from './components/CampusLife';
import Admissions from './components/Admissions';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VisionSection />
        <PyramidJourney />
        <ProgramExplorer />
        <ScorecardSection />
        <CampusLife />
        
        {/* Statistics Strip */}
        <section className="bg-tiu-red py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <span className="block text-4xl md:text-5xl font-black mb-1">24/7</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">Residential</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-black mb-1">NEP</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">2020 Compliant</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-black mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">Success Focused</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-black mb-1">Global</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">Networks</span>
              </div>
            </div>
          </div>
        </section>

        <Admissions />
        
        {/* Contact Strip */}
        <section className="py-20 bg-slate-950 overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03]">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic tracking-tight leading-tight">
                  "Architects of Society, <br />
                  Innovators of the Future."
                </h2>
                <p className="text-slate-400 text-base">Start your evolution at TIU Joka today.</p>
              </div>
              <button className="px-10 py-4 bg-tiu-red text-white text-lg font-bold rounded-xl shadow-xl shadow-red-600/10 hover:bg-red-700 transition-all active:scale-95">
                Connect With a Counselor
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
