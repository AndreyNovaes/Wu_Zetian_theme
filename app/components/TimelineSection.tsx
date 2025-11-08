'use client';

import { Crown, Castle, Gem, Sword, Skull } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '624',
    title: 'Nascimento e Juventude',
    description: 'Nascida em uma família aristocrática durante a Dinastia Tang, Wu Zetian recebeu uma educação incomum para mulheres da época, estudando literatura, música e política.',
    icon: <Gem className="w-6 h-6" />,
  },
  {
    year: '637',
    title: 'Entrada no Palácio',
    description: 'Aos 13 anos, Wu Zetian entrou no palácio imperial como concubina de quinta categoria do Imperador Taizong, dando início à sua jornada no coração do poder chinês.',
    icon: <Castle className="w-6 h-6" />,
  },
  {
    year: '655',
    title: 'Imperatriz Consorte',
    description: 'Após a morte de Taizong, Wu Zetian conquistou o coração de seu filho, o Imperador Gaozong, tornando-se sua Imperatriz Consorte através de intriga política e eliminação de rivais.',
    icon: <Crown className="w-6 h-6" />,
  },
  {
    year: '690',
    title: 'Fundação da Dinastia Zhou',
    description: 'Wu Zetian alcança o ápice do poder, proclamando-se "Huangdi" (Imperador) e fundando sua própria dinastia Zhou, tornando-se a única mulher imperatriz reinante da história chinesa.',
    icon: <Sword className="w-6 h-6" />,
  },
  {
    year: '705',
    title: 'Abdicação e Morte',
    description: 'Aos 80 anos, enfraquecida e isolada, Wu Zetian foi forçada a abdicar em favor de seu filho. Morreu pouco depois, encerrando um dos reinados mais controversos e fascinantes da história.',
    icon: <Skull className="w-6 h-6" />,
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-imperial-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-imperial-gold rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-imperial-gold animate-fadeInUp">
          Uma Ascensão Implacável
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-imperial-gold to-transparent mx-auto mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }} />

        <div className="relative">
          {/* Linha vertical central com animação */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-imperial-gold via-imperial-dragon to-imperial-red hidden md:block animate-growDown" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } animate-slideInTimeline`}
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                {/* Conteúdo */}
                <div className="flex-1 w-full md:w-auto">
                  <div
                    className={`bg-gray-800/50 backdrop-blur-sm border border-imperial-gold/30 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:border-imperial-gold/60 hover:bg-gray-800/70 transition-all duration-300 group ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 justify-start md:justify-start">
                      <div className="bg-imperial-gold text-gray-900 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </div>
                      <span className="text-2xl font-bold text-imperial-gold font-serif">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white group-hover:text-imperial-gold transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Ponto central na linha do tempo (apenas desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-imperial-gold rounded-full border-4 border-gray-900 z-10 animate-pulse" />

                {/* Espaçador */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
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

        @keyframes slideInTimeline {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes growDown {
          from {
            transform: translateX(-50%) scaleY(0);
            transform-origin: top;
          }
          to {
            transform: translateX(-50%) scaleY(1);
            transform-origin: top;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-slideInTimeline {
          animation: slideInTimeline 0.8s ease-out both;
        }

        .animate-growDown {
          animation: growDown 1.5s ease-out both;
        }
      `}</style>
    </section>
  );
}
