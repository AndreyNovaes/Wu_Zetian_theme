import { Skull, Star } from 'lucide-react';

export default function LegacySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-imperial-red rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-imperial-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-imperial-gold animate-fadeInUp">
          Controvérsias e Legado
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-imperial-gold to-transparent mx-auto mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna 1: Controvérsias */}
          <div
            className="bg-gradient-to-br from-imperial-red/20 to-gray-900/50 backdrop-blur-sm border-2 border-imperial-red/40 hover:border-imperial-red/70 rounded-xl p-8 shadow-2xl hover:shadow-imperial-red/20 transition-all duration-500 group animate-slideInLeft"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-imperial-red/20 text-imperial-red p-3 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Skull className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-imperial-red">
                Os Fracassos e a Crueldade
              </h3>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Seu caminho ao poder foi marcado por acusações de crueldade implacável, incluindo a eliminação sistemática de rivais políticos e até mesmo membros de sua própria família.
              </p>
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Sua polícia secreta, conhecida como os "Funcionários Cruéis", instaurou um período de terror e desconfiança profunda na corte imperial. Denúncias anônimas eram encorajadas, e a tortura era empregada livremente.
              </p>
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Historiadores confucionistas tradicionais a retrataram como uma usurpadora sedenta por poder, violando a ordem natural ao assumir o papel de imperador.
              </p>
            </div>
          </div>

          {/* Coluna 2: Legado */}
          <div
            className="bg-gradient-to-br from-imperial-gold/20 to-gray-900/50 backdrop-blur-sm border-2 border-imperial-gold/40 hover:border-imperial-gold/70 rounded-xl p-8 shadow-2xl hover:shadow-imperial-gold/20 transition-all duration-500 group animate-slideInRight"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-imperial-gold/20 text-imperial-gold p-3 rounded-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-imperial-gold">
                O Legado Duradouro
              </h3>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Apesar da controvérsia, seu reinado trouxe estabilidade política duradoura, expansão econômica e um florescimento cultural sem precedentes para a dinastia Tang.
              </p>
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Sua insistência na meritocracia transformou a burocracia imperial, permitindo que indivíduos talentosos, independentemente de sua origem, pudessem ascender a posições de poder.
              </p>
              <p className="group-hover:text-gray-100 transition-colors duration-300">
                Ela desafiou corajosamente as normas confucionistas patriarcais que governavam a China, abrindo um precedente histórico único e deixando um legado complexo que continua a ser debatido e reinterpretado até hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Citação inspiradora */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="flex justify-center mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-imperial-gold" />
            <Star className="w-6 h-6 text-imperial-gold mx-4 animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-imperial-gold" />
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-imperial-gold italic max-w-4xl mx-auto leading-relaxed">
            "Uma governante que ousou desafiar mil anos de tradição e redefinir o que era possível."
          </blockquote>
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
