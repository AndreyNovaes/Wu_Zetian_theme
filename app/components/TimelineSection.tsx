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
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-imperial-gold">
          Uma Ascensão Implacável
        </h2>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-imperial-gold via-imperial-dragon to-imperial-red hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Conteúdo */}
                <div className="flex-1 w-full md:w-auto">
                  <div
                    className={`bg-gray-800/50 backdrop-blur-sm border border-imperial-gold/30 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:border-imperial-gold/60 transition-all duration-300 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 justify-start md:justify-start">
                      <div className="bg-imperial-gold text-gray-900 p-2 rounded-full">
                        {event.icon}
                      </div>
                      <span className="text-2xl font-bold text-imperial-gold font-serif">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Ponto central na linha do tempo (apenas desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-imperial-gold rounded-full border-4 border-gray-900 z-10" />

                {/* Espaçador */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
