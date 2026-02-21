import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import { Logo } from './ui/Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-secondary/95 backdrop-blur-md border-b border-primary/10 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group hover:opacity-90 transition-opacity" onClick={() => scrollTo(SectionId.HOME)}>
            <Logo size="md" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {[
              { label: 'About', id: SectionId.ABOUT },
              { label: 'Tours', id: SectionId.TOURS },
              { label: 'Company', id: SectionId.COMPANY },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-serif text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors relative group ${scrolled ? 'text-textMain' : 'text-textMain'}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className={`px-6 py-2 rounded-lg border-2 border-primary text-sm font-bold tracking-widest transition-all uppercase ${scrolled ? 'bg-primary text-secondary hover:bg-transparent hover:text-primary' : 'bg-transparent text-primary hover:bg-primary hover:text-secondary'}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-secondary z-40 transition-transform duration-500 cubic-bezier(0.7, 0, 0.3, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center`}>
        <div className="flex flex-col gap-10 text-center">
          {[
            { label: 'About Us', id: SectionId.ABOUT },
            { label: 'Experiences', id: SectionId.TOURS },
            { label: 'Company', id: SectionId.COMPANY },
            { label: 'Contact', id: SectionId.CONTACT },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-4xl font-serif font-black text-textMain hover:text-primary transition-colors opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};