import React from "react";

interface KcmLogoProps {
  className?: string;
}

export default function KcmLogo({ className = "" }: KcmLogoProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {/* Card Principal com as cores do site */}
      <div className="relative bg-kcm-darker/30 border border-kcm-dark/60 rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl shadow-kcm-darkest/80 group transition-all duration-300 hover:border-kcm-light/30">
        
        {/* Cantoneira Superior Direita ┐ */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-kcm-light/40 group-hover:border-kcm-light transition-colors duration-300" />
        
        {/* Cantoneira Inferior Esquerda └ */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-kcm-light/40 group-hover:border-kcm-light transition-colors duration-300" />

        {/* Conteúdo Centralizado */}
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 py-2 sm:py-4">
          {/* Letras KCM em Fonte Serifada Elegante */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-wide text-kcm-lightest select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            KCM
          </h1>

          {/* Linha Divisória Fina */}
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-kcm-light/30 to-transparent" />

          {/* Subtítulo Espaçado */}
          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] text-kcm-light uppercase max-w-lg leading-relaxed px-2">
            Desenvolvedores de Sites & Estudantes Técnicos de Informática
          </p>
        </div>
      </div>
    </div>
  );
}