'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow">
          Wu Zetian: A Imperatriz Dragão
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto text-shadow leading-relaxed">
          De concubina a soberana: a história da única mulher a fundar sua própria dinastia e governar a China.
        </p>

        <button
          onClick={scrollToTimeline}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-imperial-gold hover:bg-imperial-dragon text-gray-900 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Explore o Legado
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white opacity-50" />
      </div>
    </section>
  );
}
