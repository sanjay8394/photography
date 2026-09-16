import React, { useState, useEffect } from 'react';
import { Camera, Film, Compass, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { studioConfig } from '../data/config';

export const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2560&h=1400&q=100",
      title: "Royal Indian Wedding Vows"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2560&h=1400&q=100",
      title: "Sacred Phera Mandap Rituals"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2560&h=1400&q=100",
      title: "Royal Destination Palace Couple"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2560&h=1400&q=100",
      title: "Destination Pre-Wedding Journey"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2560&h=1400&q=100",
      title: "Grand Evening Sangeet Gala"
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060B18] pt-20 pb-16">
      
      {/* Hero Photo Carousel Background Slides */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center select-none"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            {/* Elegant Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/40 to-black/30" />
          </div>
        ))}
      </div>

      {/* Decorative Ambient Light Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8C37B]/10 blur-[120px] rounded-full pointer-events-none ambient-glow z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-4 pt-4 drop-shadow-lg">
          <span className="block">{studioConfig.brandName}</span>
          <span className="gold-gradient-text block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 font-normal italic">
            {studioConfig.brandSubtitle}
          </span>
        </h1>

        {/* Tagline / Specialties Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-6 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-gray-200">
          <span className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/15">
            <Camera className="w-4 h-4 text-[#E8C37B]" />
            Photography
          </span>
          <span className="text-[#E8C37B]">•</span>
          <span className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/15">
            <Film className="w-4 h-4 text-[#E8C37B]" />
            Cinematic Films
          </span>
          <span className="text-[#E8C37B]">•</span>
          <span className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/15">
            <Compass className="w-4 h-4 text-[#E8C37B]" />
            4K Drone Cinema
          </span>
        </div>

        {/* Short Narrative */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed mb-8 drop-shadow-md">
          {studioConfig.tagline}. Crafting luxury visual narratives for royal Indian weddings, pre-wedding journeys, and grand celebrations worldwide.
        </p>

        {/* Primary Call To Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-black bg-[#E8C37B] hover:bg-[#d8b36b] rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(232,195,123,0.3)] transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-black/50 hover:bg-black/70 rounded-full border border-white/25 hover:border-[#25D366] transition-all duration-300 backdrop-blur-md group whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
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
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70 rounded-full'
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
              <div className="text-[10px] sm:text-xs text-gray-300 tracking-wider uppercase font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 text-gray-300 hover:text-[#E8C37B] transition-colors animate-bounce z-20"
        aria-label="Scroll down to About"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
};
