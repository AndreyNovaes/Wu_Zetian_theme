export default function ChinesePattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {/* Padrão de dragões nas bordas */}
      <svg className="absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200">
        <defs>
          <pattern id="dragon-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#D4AF37" />
            <path d="M 30 50 Q 40 30, 50 50 T 70 50" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dragon-pattern)" />
      </svg>

      {/* Padrão de dragões nas bordas direita */}
      <svg className="absolute top-0 right-0 w-64 h-64 rotate-90" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="url(#dragon-pattern)" />
      </svg>

      {/* Padrão inferior esquerdo */}
      <svg className="absolute bottom-0 left-0 w-64 h-64 rotate-180" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="url(#dragon-pattern)" />
      </svg>

      {/* Padrão inferior direito */}
      <svg className="absolute bottom-0 right-0 w-64 h-64 -rotate-90" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="url(#dragon-pattern)" />
      </svg>

      {/* Flores de lótus decorativas */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="animate-pulse">
          <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="animate-pulse" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
