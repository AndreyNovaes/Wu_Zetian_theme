'use client';

import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import ChinesePattern from './ChinesePattern';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{left: string; top: string; delay: string; duration: string}>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Gerar partículas apenas no cliente para evitar hydration errors
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 10}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background com parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Overlay gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Padrões decorativos chineses */}
      <ChinesePattern />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-imperial-gold rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decoração superior */}
        <div className="flex justify-center mb-6 animate-fadeInDown">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-imperial-gold" />
            <Sparkles className="w-6 h-6 text-imperial-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-imperial-gold" />
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-shadow animate-fadeInUp">
          Wu Zetian: A Imperatriz Dragão
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto text-shadow leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          De concubina a soberana: a história da única mulher a fundar sua própria dinastia e governar a China.
        </p>

        <button
          onClick={scrollToTimeline}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-imperial-gold hover:bg-imperial-dragon text-gray-900 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl animate-fadeInUp hover:shadow-2xl hover:shadow-imperial-gold/50"
          style={{ animationDelay: '0.4s' }}
        >
          Explore o Legado
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Decoração inferior */}
        <div className="flex justify-center mt-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-px bg-gradient-to-b from-imperial-gold to-transparent" />
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-imperial-gold opacity-70" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(50px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out both;
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
