import React from 'react';
import { Button } from './ui/Button';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-background">
      {/* Decorative Grid Lines - subtle "Brick" reference */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#7f1d1d 1px, transparent 1px), linear-gradient(90deg, #7f1d1d 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 h-full relative z-10">
        <div className="grid md:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Typography / Left Side - Expanded to col-span-8 for more space */}
          <div className="md:col-span-8 lg:col-span-8 relative z-20">
             {/* Readability Blur backing */}
            <div className="absolute -inset-10 bg-gradient-to-r from-background via-background/90 to-transparent blur-2xl -z-10 opacity-80"></div>

            <div className="mb-8 flex items-center gap-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase font-sans">Kobe Inbound Tourism</span>
            </div>
            
            {/* Main Headline - Catchcopy */}
            <h1 className="font-serif font-black text-textMain leading-[1.2] tracking-tight mb-10 animate-slideUp relative">
              <span className="block text-xl md:text-3xl mb-3 text-textMuted font-bold">心揺さぶる熱量で、</span>
              
              <div className="inline-block relative">
                <span className="relative inline-block py-2 pr-4 md:pr-8">
                  {/* Marker highlight effect */}
                  <span className="absolute bottom-3 left-[-2%] w-[105%] h-[0.35em] bg-[#f9a825]/20 -z-10 transform -skew-x-12"></span>
                  {/* Font size adjusted for better fit on MD screens */}
                  <span className="text-primary drop-shadow-retro text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black whitespace-nowrap leading-tight">
                    神戸と世界をむすぶ
                  </span>
                </span>
              </div>
            </h1>

            {/* Description - Combined Full Text */}
            <div className="animate-fadeIn space-y-8 mb-12" style={{ animationDelay: '0.4s' }}>
               {/* Part 1: Intro */}
               <p className="font-sans font-bold text-lg md:text-xl text-textMain leading-loose tracking-wide border-l-4 border-primary pl-6 bg-white/40 py-2 rounded-r-lg max-w-2xl">
                  LinkRootsは、<br className="md:hidden" />
                  柔軟なホスピタリティと<br className="hidden md:block"/>
                  活気に満ちたアテンドで、<br className="md:hidden" />
                  ゲストの心を動かす<br className="hidden md:block"/>
                  観光ガイド企業です
               </p>
               
               {/* Part 2: Detail */}
               <p className="text-md md:text-lg text-textMuted font-medium font-sans leading-loose max-w-2xl pl-6">
                  世界中から支持される<br className="md:hidden"/>
                  「最高評価の質」と、<br/>
                  地元企業様との<br className="md:hidden"/>
                  力強い「共創」<br/><br/>
                  これらを両輪に、<br className="md:hidden"/>
                  神戸の街のポテンシャルを<br className="md:hidden"/>
                  最大限に引き出します
               </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <Button onClick={() => document.getElementById(SectionId.TOURS)?.scrollIntoView({behavior: 'smooth'})}>
                OUR SERVICES
              </Button>
              <Button variant="outline" onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}>
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Visuals / Right Side - Reduced to col-span-4 and moved right */}
          <div className="md:col-span-4 lg:col-span-4 relative h-[400px] md:h-[650px] w-full animate-fadeIn md:translate-x-8" style={{ animationDelay: '0.8s' }}>
             {/* Decorative Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary rounded-full border border-primary/10 shadow-xl -z-10"></div>
             
             {/* Main Image - Kobe Port Tower - Moved further right */}
             <div className="absolute -right-4 md:-right-12 top-0 w-[90%] md:w-[120%] h-[75%] rounded-lg shadow-md border-4 border-white overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 z-10 group">
                <img 
                  src="https://file-s.s3.amazonaws.com/images/4fe5c00e-660c-4573-9878-838965f3f08f/img.png" 
                  alt="Kobe Port Tower & Maritime Museum" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             
             {/* Secondary Image - Akashi Kaikyo Bridge - Adjusted position */}
             <div className="absolute left-0 md:-left-8 bottom-8 md:bottom-24 w-[70%] md:w-[90%] aspect-[3/4] rounded-lg shadow-retro border-4 border-white bg-white p-2 overflow-hidden transform -rotate-3 hover:rotate-0 transition-all duration-700 z-20">
                <div className="w-full h-full relative overflow-hidden rounded-lg">
                  <img 
                    src="https://file-s.s3.amazonaws.com/images/d3782b52-7e76-46c5-a083-057019685600/img.png" 
                    alt="Akashi Kaikyo Bridge at Sunset" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest py-1 text-center">
                    Est. 2023
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Scroll</span>
        <div className="w-[1px] h-12 bg-primary"></div>
      </div>
    </section>
  );
};