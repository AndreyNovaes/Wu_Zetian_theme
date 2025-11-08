import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-imperial-gold/30 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Descrição */}
        <p className="text-gray-300 text-lg">
          Página criada como um tributo à figura histórica de Wu Zetian.
        </p>

        {/* Link para Wikipédia */}
        <div>
          <a
            href="https://pt.wikipedia.org/wiki/Wu_Zetian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-imperial-gold hover:text-imperial-dragon transition-colors duration-300 font-semibold"
          >
            Saiba Mais na Wikipédia
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
