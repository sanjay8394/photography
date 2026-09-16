import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Heart, Sparkles, Camera } from 'lucide-react';
import { studioConfig } from '../data/config';

export const About = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Authentic Emotion",
      desc: "We focus on real, unscripted tears, laughter, and subtle gazes rather than stiff posed photos."
    },
    {
      icon: Sparkles,
      title: "Custom Color Science",
      desc: "Every image is hand-graded with signature film color profiles to preserve timeless skin tones."
    },
    {
      icon: Camera,
      title: "Dual Perspective",
      desc: "Master candid storytellers working seamlessly with traditional ceremony coverage and 4K aerials."
    },
    {
      icon: ShieldCheck,
      title: "100% Reliability",
      desc: "Full backup cameras, dual memory card writing, and lifetime cloud archive security."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      
      {/* Glow highlight background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85"
                alt="Studio Photographers in Action"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-white">Voted Best Luxury Wedding Team</h4>
                    <p className="text-xs text-gray-300">International Destination Photography Guild 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Decorative Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 p-4 glass-card-gold rounded-xl border border-[#D4AF37]/40 z-20 shadow-xl">
              <span className="block font-serif-luxury text-3xl font-bold text-[#D4AF37]">8+ Years</span>
              <span className="text-xs text-gray-300 tracking-wider uppercase font-medium">Of Visual Excellence</span>
            </div>
          </div>

          {/* Right Column: Studio Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
              <span>Our Studio Philosophy</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
              We Don't Just Take Photos. <br />
              <span className="gold-gradient-text italic font-normal">We Preserve Legacies.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              {studioConfig.aboutFull}
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="p-4 glass-card rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-luxury text-lg font-semibold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase text-black bg-[#D4AF37] hover:bg-[#c49f27] rounded-full transition-all shadow-md"
              >
                <span>Check Availability</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase text-white hover:text-[#D4AF37] transition-colors"
              >
                <span>Browse Services &rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
