'use client';

import { Users, Shield, Church, Wheat } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: 'Reforma Administrativa',
    description: 'Otimizou a burocracia imperial, promovendo oficiais talentosos com base no mérito, não na aristocracia.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Expansão e Defesa',
    description: 'Conduziu campanhas militares bem-sucedidas, expandindo o império e pacificando fronteiras.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: 'Apoio ao Budismo',
    description: 'Elevou o Budismo a religião de estado, patrocinando a construção de templos e a tradução de textos sagrados.',
    icon: <Church className="w-8 h-8" />,
  },
  {
    title: 'Políticas Agrícolas',
    description: 'Implementou políticas que aliviaram a carga tributária dos camponeses e incentivaram a produção agrícola.',
    icon: <Wheat className="w-8 h-8" />,
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 border border-imperial-gold rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 border border-imperial-dragon rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-imperial-gold animate-fadeInUp">
          Reformas e Realizações
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-imperial-gold to-transparent mx-auto mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 hover:border-imperial-gold rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-imperial-gold/20 transition-all duration-300 transform hover:-translate-y-2 animate-scaleIn"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Ícone */}
              <div className="bg-imperial-gold/10 text-imperial-gold p-4 rounded-full inline-flex mb-4 group-hover:bg-imperial-gold group-hover:text-gray-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {achievement.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-imperial-gold transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {achievement.description}
              </p>

              {/* Barra decorativa inferior */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-imperial-gold to-imperial-dragon group-hover:w-full transition-all duration-500 rounded-full" />
            </div>
          ))}
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
