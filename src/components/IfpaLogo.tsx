import React from "react";

interface IfpaLogoProps {
  className?: string;
  size?: number;
}

export default function IfpaLogo({ className = "", size = 40 }: IfpaLogoProps) {
  return (
    <svg
      width={size}
      height={size * 1.35}
      viewBox="0 0 34 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Círculo Superior Esquerdo (Vermelho no original, agora kcm-light para combinar com o site) */}
      <circle cx="5" cy="5" r="5" className="fill-kcm-light" />

      {/* Linha 1 */}
      <rect x="12" y="0" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
      <rect x="24" y="0" width="10" height="10" rx="2" className="fill-kcm-medium/80" />

      {/* Linha 2 */}
      <rect x="0" y="12" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
      <rect x="12" y="12" width="10" height="10" rx="2" className="fill-kcm-medium/80" />

      {/* Linha 3 */}
      <rect x="0" y="24" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
      <rect x="12" y="24" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
      <rect x="24" y="24" width="10" height="10" rx="2" className="fill-kcm-medium/80" />

      {/* Linha 4 */}
      <rect x="0" y="36" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
      <rect x="12" y="36" width="10" height="10" rx="2" className="fill-kcm-medium/80" />
    </svg>
  );
}