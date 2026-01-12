
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-tiu-red rounded-full flex items-center justify-center text-white font-bold text-2xl">t</div>
              <div>
                <span className="block text-base font-extrabold uppercase tracking-tighter leading-none">Techno India</span>
                <span className="block text-tiu-red text-xl font-black uppercase tracking-tight leading-none">University</span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8">
              Eastern India's premier residential destination for aspirational students. 
              Crafting true future leaders and innovators.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-tiu-red hover:bg-red-50 transition-all cursor-pointer">
                  <span className="capitalize text-xs font-bold">{s[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xl font-black mb-8">Connect With Us</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">📞</div>
                <div>
                  <span className="block text-slate-500 text-sm mb-1">Admissions Counselor</span>
                  <span className="block font-bold text-slate-900">6292090145 / 6292090125</span>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center flex-shrink-0">📍</div>
                <div>
                  <span className="block text-slate-500 text-sm mb-1">Campus Address</span>
                  <span className="block font-bold text-slate-900 leading-relaxed">
                    Techno India University, Joka Residential Campus, <br />
                    Bara Gagan Gohalia, Bishnupur, <br />
                    West Bengal 743503
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
             <h4 className="text-xl font-black mb-8">Quick Links</h4>
             <ul className="grid grid-cols-2 gap-y-4 font-bold text-slate-600">
               <li><a href="#" className="hover:text-tiu-red transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-tiu-red transition-colors">NEP 2020</a></li>
               <li><a href="#" className="hover:text-tiu-red transition-colors">Placements</a></li>
               <li><a href="#" className="hover:text-tiu-red transition-colors">Faculty</a></li>
               <li><a href="#" className="hover:text-tiu-red transition-colors">Research</a></li>
               <li><a href="#" className="hover:text-tiu-red transition-colors">Scholarships</a></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © 2025 Techno India University. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-tiu-red">Privacy Policy</a>
            <a href="#" className="hover:text-tiu-red">Terms of Service</a>
            <a href="#" className="hover:text-tiu-red">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
