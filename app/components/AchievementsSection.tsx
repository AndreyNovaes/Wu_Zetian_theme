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
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-imperial-gold">
          Reformas e Realizações
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 hover:border-imperial-gold rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Ícone */}
              <div className="bg-imperial-gold/10 text-imperial-gold p-4 rounded-full inline-flex mb-4 group-hover:bg-imperial-gold group-hover:text-gray-900 transition-all duration-300">
                {achievement.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-imperial-gold transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Descrição */}
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
