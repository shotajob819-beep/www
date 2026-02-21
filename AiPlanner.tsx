import React from 'react';
import { SectionId } from '../types';
import { Award, Star, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 bg-secondary relative">
      {/* Vertical Japanese Text Decoration */}
      <div className="absolute top-20 right-6 md:right-12 writing-mode-vertical text-primary/5 font-serif font-black text-8xl pointer-events-none select-none hidden md:block">
        実績と信頼
      </div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <span className="block text-accent font-serif font-bold tracking-[0.2em] text-sm uppercase mb-3">Why Choose Us</span>
           <h2 className="font-serif font-black text-4xl md:text-5xl text-textMain leading-tight mb-8">
             Our Strengths<br/>
             <span className="text-2xl md:text-3xl text-primary font-bold mt-2 block">私たちの強み・実績</span>
           </h2>
           <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Features Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
           {/* Item 1 */}
           <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-primary group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                 <Award size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-xl text-textMain mb-4 min-h-[3.5rem] flex items-center">
                世界最大級の<br/>プラットフォームでの実績
              </h4>
              <p className="text-textMuted text-sm leading-loose font-sans flex-grow">
                世界最大級のツアー予約サイト<br/>
                「Viator」において、<br/>
                <strong className="text-primary text-base">「Best Seller」を獲得。</strong><br/>
                グローバルスタンダードな品質が、<br/>ここに証明されています。
              </p>
           </div>

           {/* Item 2 */}
           <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-accent group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                 <Star size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-xl text-textMain mb-4 min-h-[3.5rem] flex items-center">
                顧客満足度100%の<br/>最高評価
              </h4>
              <p className="text-textMuted text-sm leading-loose font-sans flex-grow">
                これまでに頂いたレビューは、<br/>すべて<strong className="text-accent text-lg">「星5」</strong>の最高評価。<br/>
                国境を越えて愛される、<br/>満足度100%の体験を提供します。
              </p>
           </div>

           {/* Item 3 */}
           <div className="bg-white p-10 rounded-lg shadow-md border-t-4 border-primary group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                 <Users size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-xl text-textMain mb-4 min-h-[3.5rem] flex items-center">
                熱量と柔軟性を備えた<br/>若手プロフェッショナル
              </h4>
              <p className="text-textMuted text-sm leading-loose font-sans flex-grow">
                最大の強みは、<br/>英語堪能な若手ガイド陣。<br/>
                マニュアルに縛られない<br/>
                <strong className="text-textMain text-base">「熱量」と「柔軟性」</strong>で、<br/>
                心に残る特別な一日を演出します。
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};