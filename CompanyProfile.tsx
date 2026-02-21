import React from 'react';
import { SectionId, Tour } from '../types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const tours: Tour[] = [
  {
    id: 't1',
    title: '100% Personalized Tour with Local Student Guide',
    description: '【Viator Best Seller獲得】地元学生ガイドと巡る、完全オーダーメイドの神戸旅。行きたい場所も、隠れた名所も、あなたの興味に合わせてプランをゼロから作成します。',
    // ユーザー提供画像1: 南京町での食べ歩き写真
    // 画像ファイル(tour_food.jpg)をpublic/images/フォルダに配置するか、正しいURLに置き換えてください。
    image: '/images/tour_food.jpg', 
    tags: ['Best Seller', 'Private', 'Custom'],
    link: 'https://www.viator.com/tours/Kobe/kobe-100-Personalized-Tour-with-Local-Student-Guide/d27432-5550348P3'
  },
  {
    id: 't2',
    title: 'Kobe: Invitation to Young Culture',
    description: '神戸の若者文化を肌で感じる2-3時間。地元学生ガイドと共に、最新トレンドスポットや古着屋、ローカルな遊び場を巡るリアルな体験。',
    // ユーザー提供画像2: 若者ツアーの集合写真バナー
    // 画像ファイル(tour_group_banner.jpg)をpublic/images/フォルダに配置するか、正しいURLに置き換えてください。
    image: '/images/tour_group_banner.jpg',
    tags: ['Youth Culture', 'Shopping', 'Trends'],
    link: 'https://www.viator.com/tours/Kobe/Kobe-Invitation-to-Young-Culture-for-2-3-hours/d27432-5550348P5'
  }
];

export const Tours: React.FC = () => {
  return (
    <section id={SectionId.TOURS} className="py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-[60%] bg-white/50 skew-y-3 transform origin-top-left -z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Services Description Block */}
        <div className="mb-24 max-w-4xl">
          <span className="text-accent font-serif font-bold tracking-[0.2em] text-sm uppercase">Our Business</span>
          <h2 className="font-serif font-black text-4xl md:text-5xl text-textMain mt-3 mb-8">
            Services / 事業内容
          </h2>
          <div className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-sm">
             <h3 className="text-xl font-bold text-textMain mb-4">インバウンド向け観光ガイドツアーの企画・運営</h3>
             <p className="text-textMuted font-sans leading-loose text-lg">
               神戸の歴史・文化・食。<br/>
               その魅力を最大限に引き出す、<br className="hidden md:block"/>
               訪日外国人向けのオリジナルツアーを企画・運営しています。
             </p>
          </div>
        </div>

        {/* Tours Showcase Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-primary/10 pb-6">
          <div>
             <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Original Tour Examples</span>
             <h3 className="font-serif font-black text-3xl text-textMain">
               Curated Experiences
             </h3>
          </div>
          <div className="hidden md:block">
             <a href="https://www.viator.com/tours/Kobe/kobe-100-Personalized-Tour-with-Local-Student-Guide/d27432-5550348P3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-textMain font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
               VIEW ALL TOURS <ArrowUpRight size={16} />
             </a>
          </div>
        </div>

        {/* Tour Cards Grid - Updated to 2 columns and centered */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {tours.map((tour, index) => {
            const CardWrapper = tour.link ? 'a' : 'div';
            const wrapperProps = tour.link ? {
              href: tour.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "block h-full"
            } : { className: "block h-full" };

            return (
              <CardWrapper 
                key={tour.id} 
                {...wrapperProps}
              >
                <div 
                  className={`group bg-surface rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-primary/5 h-full flex flex-col ${index === 0 ? 'border-2 border-primary ring-4 ring-primary/5 relative' : ''} ${index === 1 ? 'md:mt-16' : ''}`}
                >
                  {/* Best Seller Badge for the main tour */}
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-primary text-secondary text-xs font-bold px-3 py-1 z-30 rounded-bl-lg tracking-widest shadow-sm">
                      RECOMMENDED
                    </div>
                  )}

                  <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out bg-gray-200"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                       {tour.tags.map(tag => (
                         <span key={tag} className="bg-white/90 backdrop-blur-sm text-textMain text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/10">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>

                  <div className="p-8 relative flex flex-col flex-grow">
                     <div className={`absolute -top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full font-serif font-bold shadow-lg group-hover:scale-110 transition-transform ${index === 0 ? 'bg-accent text-white' : 'bg-primary text-secondary'}`}>
                       0{index + 1}
                     </div>
                     
                     <h3 className="text-2xl md:text-3xl font-serif font-black text-textMain mb-4 group-hover:text-primary transition-colors">
                       {tour.title}
                     </h3>
                     <p className="text-textMuted text-base leading-relaxed font-sans flex-grow">
                       {tour.description}
                     </p>
                     
                     <div className="mt-8 pt-6 border-t border-primary/10 flex justify-end items-center gap-2">
                        <span className="text-sm font-bold uppercase tracking-widest text-accent group-hover:underline">
                          {tour.link ? 'Book on Viator' : 'View Details'}
                        </span>
                        {tour.link && <ExternalLink size={16} className="text-accent" />}
                     </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
        
        <div className="mt-12 md:hidden text-center">
             <a href="https://www.viator.com/tours/Kobe/kobe-100-Personalized-Tour-with-Local-Student-Guide/d27432-5550348P3" target="_blank" rel="noopener noreferrer" className="text-textMain font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
               VIEW ALL TOURS
             </a>
        </div>
      </div>
    </section>
  );
};