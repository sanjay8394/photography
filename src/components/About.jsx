import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Heart, Sparkles, Camera } from 'lucide-react';
import { studioConfig } from '../data/config';
import { Reveal } from './Reveal';

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
    <section id="about" className="py-24 bg-[#060B18] relative overflow-hidden">
      
      {/* Glow highlight background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E8C37B]/5 blur-[100px] rounded-full pointer-events-none ambient-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <Reveal animation="fade-right" duration={800}>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                  alt="Indian Wedding Fine-Art Portrait"
                  className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#E8C37B]/20 rounded-full border border-[#E8C37B]/40 text-[#E8C37B]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-lg font-bold text-white">Voted Best Indian Luxury Wedding Team</h4>
                      <p className="text-xs text-gray-300">International Destination Photography Guild 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Accent Decorative Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 p-4 glass-card-gold rounded-xl border border-[#E8C37B]/40 z-20 shadow-xl">
              <span className="block font-serif-luxury text-3xl font-bold text-[#E8C37B]">8+ Years</span>
              <span className="text-xs text-gray-300 tracking-wider uppercase font-medium">Of Visual Excellence</span>
            </div>
          </div>

          {/* Right Column: Studio Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <Reveal animation="fade-left" delay={100}>
              <div className="inline-flex items-center gap-2 text-[#E8C37B] text-xs uppercase tracking-[0.25em] font-semibold">
                <span className="w-8 h-[1px] bg-[#E8C37B]"></span>
                <span>Our Studio Philosophy</span>
              </div>
            </Reveal>

            <Reveal animation="fade-left" delay={200}>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
                We Don't Just Take Photos. <br />
                <span className="gold-gradient-text italic font-normal">We Preserve Legacies.</span>
              </h2>
            </Reveal>

            <Reveal animation="fade-left" delay={300}>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {studioConfig.aboutFull}
              </p>
            </Reveal>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <Reveal key={idx} animation="fade-up" delay={350 + idx * 80}>
                    <div className="p-4 glass-card rounded-xl border border-white/5 hover:border-[#E8C37B]/30 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#E8C37B]/10 rounded-lg text-[#E8C37B]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif-luxury text-lg font-semibold text-white">{pillar.title}</h3>
                      </div>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{pillar.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Quick CTAs */}
            <Reveal animation="fade-up" delay={650}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-black bg-[#E8C37B] hover:bg-[#d8b36b] rounded-full transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <span>Check Availability</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#E8C37B] transition-colors"
                >
                  <span>Browse Services &rarr;</span>
                </a>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};
