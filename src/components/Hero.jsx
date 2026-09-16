import React, { useState, useEffect } from 'react';
import { Camera, Film, Compass, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { studioConfig } from '../data/config';

export const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90",
      title: "Royal Destination Vows"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=2000&q=90",
      title: "4K Aerial Mandap Cinema"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90",
      title: "Pre-Wedding Sunrise Romance"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=90",
      title: "Cinematic Garland Exchange"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=90",
      title: "Twilight Gala Reception"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
    'Hi! I would like to check availability and packages for Abhi Photography.'
  )}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16">
      
      {/* Hero Photo Carousel Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-10000 ease-out scale-105"
            />
            {/* Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-black/60 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#060B18]" />
          </div>
        ))}
      </div>

      {/* Decorative Glow Ambient Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8C37B]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-4 pt-4">
          <span className="block">{studioConfig.brandName}</span>
          <span className="gold-gradient-text block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 font-normal italic">
            {studioConfig.brandSubtitle}
          </span>
        </h1>

        {/* Tagline / Specialties Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-6 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gray-300">
          <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <Camera className="w-4 h-4 text-[#E8C37B]" />
            Photography
          </span>
          <span className="text-[#E8C37B]">•</span>
          <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <Film className="w-4 h-4 text-[#E8C37B]" />
            Cinematic Films
          </span>
          <span className="text-[#E8C37B]">•</span>
          <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <Compass className="w-4 h-4 text-[#E8C37B]" />
            4K Drone Cinema
          </span>
        </div>

        {/* Short Narrative */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8">
          {studioConfig.tagline}. Crafting luxury visual narratives for weddings, grand galas, and pre-wedding destinations worldwide.
        </p>

        {/* Primary Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-black bg-[#E8C37B] hover:bg-[#d8b36b] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(232,195,123,0.3)] transform hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-[#25D366] transition-all duration-300 backdrop-blur-sm group"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Minimal Slide Indicator Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 ${
                i === currentSlide
                  ? 'w-8 h-2 bg-[#E8C37B] rounded-full shadow-[0_0_8px_#E8C37B]'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60 rounded-full'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating Quick Stats Bar */}
        <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {studioConfig.stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl text-center border border-white/10 hover:border-[#E8C37B]/40 transition-all">
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E8C37B]">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 tracking-wider uppercase font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-[#E8C37B] transition-colors animate-bounce"
        aria-label="Scroll down to About"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
