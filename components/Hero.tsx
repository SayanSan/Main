
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" 
          alt="University Architecture" 
          decoding="async"
          className="w-full h-full object-cover opacity-40 grayscale transition-transform duration-[10000ms] ease-linear hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-tiu-red/10 diagonal-split pointer-events-none hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className={`max-w-3xl lg:ml-0 transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-bold mb-8 border border-white/10 animate-in fade-in duration-1000 delay-300">
            <span className="w-1.5 h-1.5 bg-tiu-red rounded-full animate-pulse"></span>
            <span className="uppercase tracking-[0.2em]">Joka Residential Campus</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6 text-white">
            <span className={`text-tiu-red block transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>Techno India</span>
            <span className={`block transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>University</span>
          </h1>
          
          <div className={`h-1 w-20 bg-tiu-red mb-8 transition-all duration-1000 delay-1000 ${loaded ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
          
          <h2 className="text-xl md:text-2xl font-light text-slate-300 mb-8 italic tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1200">
            The School of the Future
          </h2>
          
          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl animate-in fade-in duration-1000 delay-1400">
            A premium, future-ready residential campus fully aligned with India's 
            <span className="text-white font-semibold"> National Education Policy (NEP) 2020</span>. 
            Setting a new global benchmark for interdisciplinary excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1500">
            <button className="px-8 py-3.5 bg-tiu-red text-white font-semibold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/10 hover:shadow-xl hover:shadow-red-600/20 active:scale-95">
              Explore Programs
            </button>
            <button className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:border-white/20 active:scale-95">
              Watch Campus Tour
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-30 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white">Discovery</span>
          <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
