import { Skull, Star } from 'lucide-react';

export default function LegacySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-imperial-gold">
          Controvérsias e Legado
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna 1: Controvérsias */}
          <div className="bg-gradient-to-br from-imperial-red/20 to-gray-900/50 backdrop-blur-sm border-2 border-imperial-red/40 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-imperial-red/20 text-imperial-red p-3 rounded-full">
                <Skull className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-imperial-red">
                Os Fracassos e a Crueldade
              </h3>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Seu caminho ao poder foi marcado por acusações de crueldade implacável, incluindo a eliminação sistemática de rivais políticos e até mesmo membros de sua própria família.
              </p>
              <p>
                Sua polícia secreta, conhecida como os "Funcionários Cruéis", instaurou um período de terror e desconfiança profunda na corte imperial. Denúncias anônimas eram encorajadas, e a tortura era empregada livremente.
              </p>
              <p>
                Historiadores confucionistas tradicionais a retrataram como uma usurpadora sedenta por poder, violando a ordem natural ao assumir o papel de imperador.
              </p>
            </div>
          </div>

          {/* Coluna 2: Legado */}
          <div className="bg-gradient-to-br from-imperial-gold/20 to-gray-900/50 backdrop-blur-sm border-2 border-imperial-gold/40 rounded-xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-imperial-gold/20 text-imperial-gold p-3 rounded-full">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-imperial-gold">
                O Legado Duradouro
              </h3>
            </div>

            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Apesar da controvérsia, seu reinado trouxe estabilidade política duradoura, expansão econômica e um florescimento cultural sem precedentes para a dinastia Tang.
              </p>
              <p>
                Sua insistência na meritocracia transformou a burocracia imperial, permitindo que indivíduos talentosos, independentemente de sua origem, pudessem ascender a posições de poder.
              </p>
              <p>
                Ela desafiou corajosamente as normas confucionistas patriarcais que governavam a China, abrindo um precedente histórico único e deixando um legado complexo que continua a ser debatido e reinterpretado até hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Citação inspiradora */}
        <div className="mt-16 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-imperial-gold italic max-w-4xl mx-auto">
            "Uma governante que ousou desafiar mil anos de tradição e redefinir o que era possível."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
