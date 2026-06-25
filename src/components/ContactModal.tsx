import React, { useState } from "react";
import { X, Mail, Github, Linkedin, Copy, Check, ExternalLink } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberName: string;
  type: "email" | "github" | "linkedin";
  value: string;
  username?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  memberName,
  type,
  value,
  username,
}: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    showSuccess("Copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const isPlaceholder = value.includes("breve") || value === "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Overlay escurecido com desfoque */}
      <div
        className="absolute inset-0 bg-kcm-darkest/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Conteúdo do Modal */}
      <div className="relative w-full max-w-md bg-kcm-darker border-2 border-kcm-dark rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 z-10">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-kcm-light/15 rounded-2xl border-2 border-kcm-light/30 text-kcm-light">
            {type === "email" && <Mail className="h-5 w-5 sm:h-6 sm:w-6" />}
            {type === "github" && <Github className="h-5 w-5 sm:h-6 sm:w-6" />}
            {type === "linkedin" && <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />}
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white leading-tight">
              {memberName}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">
              {type === "email" && "E-mail de Contato"}
              {type === "github" && "Perfil do GitHub"}
              {type === "linkedin" && "Perfil do LinkedIn"}
            </p>
          </div>
        </div>

        {/* Corpo do Modal */}
        <div className="space-y-4">
          {type === "email" && (
            <div className="p-4 bg-kcm-darkest border-2 border-kcm-dark rounded-2xl space-y-3">
              <p className="text-xs sm:text-sm font-bold text-slate-300 break-all">
                {value}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href={`mailto:${value}`}
                  className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl bg-kcm-light hover:bg-white text-kcm-darkest text-xs sm:text-sm font-black transition-all shadow-md"
                >
                  <Mail className="h-4 w-4" /> Enviar E-mail
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-kcm-darker border border-kcm-dark text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-400" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copiar
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {type === "github" && (
            <div className="p-4 bg-kcm-darkest border-2 border-kcm-dark rounded-2xl space-y-3">
              <div>
                <p className="text-xs sm:text-sm font-extrabold text-white">
                  @{username || memberName.toLowerCase().replace(/\s+/g, "")}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium break-all mt-0.5">
                  {value}
                </p>
              </div>
              <a
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-kcm-light hover:bg-white text-kcm-darkest text-xs sm:text-sm font-black transition-all shadow-md"
              >
                <Github className="h-4 w-4" /> Visitar Perfil <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {type === "linkedin" && (
            <div className="p-5 bg-kcm-darkest border-2 border-kcm-dark rounded-2xl text-center space-y-3">
              {isPlaceholder ? (
                <>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">
                    O perfil do LinkedIn de {memberName.split(" ")[0]} será adicionado em breve.
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Agradecemos a sua compreensão!
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 break-all">
                    {value}
                  </p>
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-kcm-light hover:bg-white text-kcm-darkest text-xs sm:text-sm font-black transition-all shadow-md"
                  >
                    <Linkedin className="h-4 w-4" /> Conectar no LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </>
              )}
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="mt-6 pt-4 border-t border-kcm-dark/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}