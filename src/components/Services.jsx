import React from 'react';
import { Camera, Video, Heart, Sun, Aperture, Film, Sparkles, Gift, BookOpen, Check, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { Reveal } from './Reveal';

const iconMap = {
  Camera,
  Video,
  Heart,
  Sun,
  Aperture,
  Film,
  Sparkles,
  Gift,
  BookOpen
};

export const Services = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#E8C37B] text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
              <span>Bespoke Offerings</span>
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Our Photography & <span className="gold-gradient-text italic font-normal">Cinematography Services</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Tailor-made visual services designed for discerning couples, grand family celebrations, and commercial aerial projects.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Camera;

            return (
              <Reveal key={service.id} animation="fade-up" delay={(index % 3) * 120} duration={650}>
                <div
                  className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#E8C37B]/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(232,195,123,0.15)] h-full"
                >
                  <div>
                    {/* Card Cover Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131D35] via-[#131D35]/40 to-transparent" />
                      
                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 right-4 p-3 bg-black/70 backdrop-blur-md rounded-xl text-[#E8C37B] border border-[#E8C37B]/30">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="absolute bottom-3 left-4">
                        <span className="text-[10px] tracking-[0.2em] font-bold text-[#E8C37B] uppercase bg-black/60 px-2.5 py-1 rounded border border-[#E8C37B]/30">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#E8C37B] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="pt-2 space-y-2 border-t border-white/5">
                        {service.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                            <Check className="w-3.5 h-3.5 text-[#E8C37B] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => {
                        if (onSelectService) {
                          onSelectService(service.title);
                        }
                        const enquiryEl = document.getElementById('enquiry');
                        if (enquiryEl) {
                          enquiryEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-white/5 hover:bg-[#E8C37B] hover:text-black border border-white/10 hover:border-[#E8C37B] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Enquire This Service</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
