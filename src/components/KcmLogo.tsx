import React from "react";

interface KcmLogoProps {
  className?: string;
  size?: number;
}

export default function KcmLogo({ className = "", size = 64 }: KcmLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Escudo de Fundo */}
        <path
          d="M50 5L15 20V50C15 72 35 90 50 95C65 90 85 72 85 50V20L50 5Z"
          className="fill-kcm-darker stroke-kcm-light"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        
        {/* Detalhe Interno do Escudo */}
        <path
          d="M50 12L23 24V48C23 65 38 80 50 85C62 80 77 65 77 48V24L50 12Z"
          className="fill-kcm-dark/40 stroke-kcm-medium/50"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Letras KCM Estilizadas */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="fill-kcm-lightest font-black tracking-wider"
          style={{
            fontSize: "26px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textShadow: "0px 2px 4px rgba(0,0,0,0.5)"
          }}
        >
          KCM
        </text>

        {/* Linha de Brilho / Tecnologia */}
        <path
          d="M30 50H70"
          className="stroke-kcm-light/30"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}