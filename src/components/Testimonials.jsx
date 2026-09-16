import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { Reveal } from './Reveal';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#E8C37B] text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
              <span>Client Praise & Stories</span>
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Words from Our <span className="gold-gradient-text italic font-normal">Cherished Couples</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Read real experiences from couples and families who entrusted us with their once-in-a-lifetime moments.
            </p>
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, idx) => (
            <Reveal key={t.id} animation="fade-up" delay={idx * 150} duration={700}>
              <div
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-[#E8C37B]/40 transition-all flex flex-col justify-between space-y-6 relative group h-full"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E8C37B]/10 group-hover:text-[#E8C37B]/20 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8C37B] text-[#E8C37B]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#E8C37B]/40"
                  />
                  <div>
                    <h3 className="font-serif-luxury text-lg font-bold text-white">{t.name}</h3>
                    <span className="text-xs text-[#E8C37B] block font-medium">{t.event}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">{t.date}</span>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
