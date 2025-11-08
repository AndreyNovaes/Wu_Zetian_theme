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

        {/* Divisor */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-gray-400 text-sm">
            © Wu Zetian Landing Page 2025 | Desenvolvido com Next.js e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
