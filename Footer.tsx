import React from 'react';
import { SectionId } from '../types';

export const CompanyProfile: React.FC = () => {
  return (
    <section id={SectionId.COMPANY} className="py-24 bg-background border-t border-primary/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-primary font-serif font-black text-4xl mb-4">Corporate Info</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-stretch">
            {/* Image Column */}
            <div className="relative h-full min-h-[300px] md:min-h-[400px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white transform rotate-1 md:rotate-2 transition-transform hover:rotate-0 duration-500 group bg-white">
                <img 
                  src="https://file-s.s3.amazonaws.com/images/2237667a-1152-4740-9f5b-551046180373/linkroots-logo.jpg" 
                  alt="LinkRoots Logo" 
                  className="absolute inset-0 w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Info Column */}
            <div className="bg-white rounded-lg shadow-md border-2 border-primary/10 overflow-hidden flex flex-col justify-center h-full">
                {[
                  { label: 'Company Name', value: '合同会社LinkRoots (LinkRoots LLC)' },
                  { label: 'Established', value: 'November, 2025' },
                  { label: 'Representative', value: 'Shota Maehara (CEO)' },
                  { label: 'Location', value: '707 Casabella International Plaza Bldg., 1-1-18 Isobedori, Chuo-ku, Kobe, Hyogo' },
                  { label: 'Business', value: 'Inbound Tour Planning & Guiding' },
                ].map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3 py-5 px-6 md:px-8 border-b border-primary/10 last:border-0 hover:bg-secondary/30 transition-colors group">
                    <dt className="md:col-span-1 font-bold text-primary font-serif tracking-wide text-xs md:text-sm uppercase opacity-80 group-hover:opacity-100 transition-all flex items-center">
                      {item.label}
                    </dt>
                    <dd className="md:col-span-2 text-textMain font-sans mt-1 md:mt-0 leading-relaxed font-medium text-sm md:text-base">
                      {item.value}
                    </dd>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};