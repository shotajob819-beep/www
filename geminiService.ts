import React from 'react';
import { SectionId } from '../types';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/link_roots/', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-textMain text-secondary relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
           
           {/* Brand Section */}
           <div className="md:col-span-5 space-y-8">
              <div className="-ml-2">
                <Logo size="xl" className="text-secondary" />
              </div>
              <p className="text-gray-400 font-sans text-md leading-loose max-w-sm">
                Unlocking Kobe's hidden gems for the next generation. 
                Experience the "Real" Japan through our curated local lens.
              </p>
              <div className="inline-block border border-gray-600 rounded-lg px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-default select-none">
                 Est. 2025 / Kobe, Japan
              </div>
           </div>

           {/* Navigation - Large & Bold for impact */}
           <div className="md:col-span-4 md:pl-12">
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-8">Menu</h4>
              <ul className="space-y-4">
                 {[
                   { label: 'Home', id: SectionId.HOME },
                   { label: 'About', id: SectionId.ABOUT },
                   { label: 'Tours', id: SectionId.TOURS },
                   { label: 'Contact', id: SectionId.CONTACT }
                 ].map((item) => (
                    <li key={item.id}>
                       <button 
                         onClick={() => document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'})}
                         className="text-2xl md:text-3xl font-serif font-bold text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                       >
                         {item.label}
                       </button>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Socials & Info - Accessible and clean */}
           <div className="md:col-span-3">
              <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-8">Connect</h4>
              <div className="flex gap-4 mb-10">
                 {socialLinks.map(({ icon: Icon, href, label }, i) => (
                    <a 
                      key={i} 
                      href={href}
                      target={href.startsWith('http') ? "_blank" : undefined}
                      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                      aria-label={label} 
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
                    >
                       <Icon size={20} />
                    </a>
                 ))}
              </div>
              <div className="space-y-2 text-gray-500 font-sans text-sm">
                 <p>707 Casabella International Plaza Bldg.</p>
                 <p>1-1-18 Isobedori, Chuo-ku, Kobe</p>
              </div>
           </div>
        </div>

        {/* Footer Bottom - Corporate Style */}
        <div className="border-t border-gray-800 pt-10 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
           
           {/* Copyright & Legal Links */}
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
              <p className="text-[10px] text-gray-500 font-medium tracking-[0.15em] uppercase">
                 &copy; 2025 LinkRoots LLC. All Rights Reserved.
              </p>
              <div className="hidden md:block w-px h-3 bg-gray-800"></div>
              <div className="flex gap-6">
                 <span className="text-[10px] text-gray-600 tracking-widest uppercase hover:text-gray-400 transition-colors cursor-pointer">
                    Privacy Policy
                 </span>
                 <span className="text-[10px] text-gray-600 tracking-widest uppercase hover:text-gray-400 transition-colors cursor-pointer">
                    Terms
                 </span>
              </div>
           </div>

           {/* Location & Top Button */}
           <div className="flex flex-col md:flex-row items-center gap-6">
               <p className="text-[10px] text-gray-600 tracking-widest uppercase flex items-center gap-2">
                  Based in <span className="text-gray-400 font-bold">Kobe, Japan</span>
               </p>
               
               <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-gray-500 border border-gray-700 px-4 py-1.5 rounded-full hover:border-primary hover:bg-primary/10"
               >
                  Top <ArrowUp size={10} className="group-hover:-translate-y-0.5 transition-transform" />
               </button>
           </div>
        </div>
      </div>
    </footer>
  );
};