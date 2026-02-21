import React, { useState } from 'react';
import { SectionId } from '../types';
import { Button } from './ui/Button';
import { Handshake } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('【LinkRoots HP】お問い合わせ');
    const body = encodeURIComponent(`名前: ${formData.name}\nEmail: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`);
    window.location.href = `mailto:linkroots.kobe@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id={SectionId.CONTACT} className="py-32 bg-white relative">
       {/* Decor */}
       <div className="absolute left-0 bottom-0 w-32 h-32 bg-secondary rounded-tr-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Partnership Message Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 mb-24 border border-primary/10">
           <div className="md:flex gap-12 items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                 <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                    <Handshake size={32} />
                 </div>
                 <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">Partnerships</span>
                 <h2 className="font-serif font-black text-3xl md:text-4xl text-textMain leading-tight">
                   企業・自治体の<br/>皆様へ
                 </h2>
              </div>
              <div className="md:w-2/3">
                 <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:whitespace-nowrap">
                   インバウンドの波を、共に地域の力へ。
                 </h3>
                 <p className="text-textMuted font-sans text-md md:text-lg leading-loose text-justify">
                   私たちが現場で培った<br className="hidden md:block"/>
                   「外国人観光客のリアルなインサイト」と<br className="hidden md:block"/>
                   「最高評価のガイドノウハウ」。<br/><br/>
                   貴社のリソースと掛け合わせることで、<br className="hidden md:block"/>
                   これまでにない観光価値を創出します。<br/><br/>
                   ツアーの共同企画や実証実験など、<br className="hidden md:block"/>
                   ぜひお気軽にご相談ください。
                 </p>
              </div>
           </div>
        </div>


        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-10">
            <div>
                <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Contact Us</span>
                <h2 className="font-serif font-black text-6xl md:text-7xl text-textMain leading-[0.9]">
                  Get in <br/> 
                  <span className="text-primary italic">Touch.</span>
                </h2>
            </div>
            
            <p className="text-textMuted font-sans text-lg max-w-sm leading-loose border-l-4 border-primary/20 pl-6">
               We are waiting for your story.<br/>
               ツアーのご予約、コラボレーション、取材依頼など、お気軽にご連絡ください。
            </p>
            
            <div className="pt-8 mt-8 border-t border-dashed border-gray-200">
               <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-primary"></span> Office
               </h4>
               <p className="text-textMain font-serif text-xl">
                 707 Casabella International Plaza Bldg.,<br/>
                 1-1-18 Isobedori, Chuo-ku,<br/>
                 Kobe, Hyogo, Japan
               </p>
            </div>
          </div>

          <form className="bg-background p-10 rounded-lg shadow-md border-2 border-primary/5 space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-bold text-textMuted uppercase tracking-widest mb-3 group-focus-within:text-primary transition-colors">お名前 / 会社名</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-gray-200 rounded-lg py-3 px-4 focus:border-primary focus:outline-none font-sans text-lg transition-colors" 
                  placeholder="お名前を入力してください" 
                  required
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-textMuted uppercase tracking-widest mb-3 group-focus-within:text-primary transition-colors">メールアドレス</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-gray-200 rounded-lg py-3 px-4 focus:border-primary focus:outline-none font-sans text-lg transition-colors" 
                  placeholder="example@email.com" 
                  required
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-textMuted uppercase tracking-widest mb-3 group-focus-within:text-primary transition-colors">お問い合わせ内容</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-gray-200 rounded-lg py-3 px-4 focus:border-primary focus:outline-none font-sans text-lg transition-colors resize-none" 
                  placeholder="お問い合わせ内容を入力してください"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="primary" fullWidth>送信する</Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};