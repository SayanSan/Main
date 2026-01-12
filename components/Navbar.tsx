
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Pedagogy', href: '#pedagogy' },
    { name: 'Journey', href: '#journey' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-10 h-10 bg-tiu-red rounded-full flex items-center justify-center text-white font-bold text-xl">t</div>
            <div>
              <span className="block text-sm font-extrabold uppercase tracking-tighter leading-none">Techno India</span>
              <span className="block text-tiu-red text-lg font-black uppercase tracking-tight leading-none">University</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-tiu-red font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#admissions" 
              className="bg-tiu-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
            >
              Apply Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-tiu-red hover:bg-gray-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#admissions"
            className="block px-3 py-4 text-center bg-tiu-red text-white rounded-lg font-bold shadow-lg"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
