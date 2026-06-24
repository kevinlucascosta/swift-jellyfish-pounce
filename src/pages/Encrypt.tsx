import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { encryptCaesar } from "@/utils/caesar";
import { showSuccess } from "@/utils/toast";
import { Lock, Copy, Trash2, Sparkles, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Encrypt() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  // Atualiza o resultado em tempo real sempre que o texto ou a chave mudarem
  useEffect(() => {
    setResult(encryptCaesar(text, shift));
  }, [text, shift]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    showSuccess("Texto criptografado copiado para a área de transferência!");
  };

  const handleClear = () => {
    setText("");
    showSuccess("Campos limpos com sucesso!");
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 animate-in fade-in duration-500">
        {/* Header da Página */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
            <span className="p-2.5 sm:p-3 bg-kcm-light/15 rounded-2xl border-2 border-kcm-light/30 text-kcm-light shadow-md">
              <Lock className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            Criptografar Texto
          </h1>
          <p className="text-slate-200 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
            Insira sua mensagem secreta, escolha uma chave de deslocamento e gere o texto cifrado instantaneamente com total legibilidade.
          </p>
        </div>

        {/* Painel Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Coluna de Entrada */}
          <div className="space-y-5 sm:space-y-6 border-2 border-kcm-dark rounded-3xl bg-kcm-darker/20 p-5 sm:p-6 md:p-8 shadow-lg">
            <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-kcm-light" /> Configurações de Entrada
            </h2>

            {/* Campo de Texto Original */}
            <div className="space-y-2.5">
              <Label htmlFor="original-text" className="text-white font-bold text-sm sm:text-base">
                Texto Original
              </Label>
              <Textarea
                id="original-text"
                placeholder="Digite a mensagem que deseja criptografar..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[150px] sm:min-h-[180px] bg-kcm-darkest border-2 border-kcm-dark text-white placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-kcm-light rounded-2xl resize-none text-sm sm:text-base p-3 sm:p-4 font-medium leading-relaxed"
              />
              <p className="text-[11px] sm:text-xs text-slate-300 font-semibold">
                Letras maiúsculas, minúsculas, acentos e pontuações serão preservados.
              </p>
            </div>

            {/* Seletor de Chave */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="shift-key" className="text-white font-bold text-sm sm:text-base">
                  Chave de Deslocamento
                </Label>
                <span className="text-xs sm:text-sm font-black text-white bg-kcm-light/15 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl border-2 border-kcm-light/30">
                  Chave: {shift}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  id="shift-key"
                  type="range"
                  min="1"
                  max="25"
                  value={shift}
                  onChange={(e) => setShift(parseInt(e.target.value))}
                  className="flex-grow accent-kcm-light cursor-pointer h-2 bg-kcm-darkest rounded-lg appearance-none"
                />
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs text-slate-300 font-bold px-1">
                <span>Mínimo (1)</span>
                <span>Médio (13)</span>
                <span>Máximo (25)</span>
              </div>
            </div>

            {/* Botão de Limpar */}
            <Button
              onClick={handleClear}
              disabled={!text}
              variant="outline"
              className="w-full border-2 border-kcm-dark hover:bg-kcm-darker text-slate-200 hover:text-white font-bold text-sm sm:text-base py-5 sm:py-6 rounded-2xl gap-2 transition-all duration-300"
            >
              <Trash2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> Limpar Campos
            </Button>
          </div>

          {/* Coluna de Saída */}
          <div className="space-y-5 sm:space-y-6 border-2 border-kcm-light/10 rounded-3xl bg-kcm-light/[0.02] p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-black text-kcm-light flex items-center gap-2">
                <ArrowRight className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> Resultado Criptografado
              </h2>

              <div className="relative">
                <div className="min-h-[180px] sm:min-h-[210px] w-full bg-kcm-darkest border-2 border-kcm-dark rounded-2xl p-4 sm:p-5 text-white font-mono text-sm sm:text-base break-all whitespace-pre-wrap select-all leading-relaxed shadow-inner">
                  {result || (
                    <span className="text-slate-400 italic font-sans font-medium">
                      O resultado criptografado aparecerá aqui em tempo real conforme você digita...
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 pt-2 sm:pt-4">
              {/* Botão de Copiar */}
              <Button
                onClick={handleCopy}
                disabled={!result}
                className="w-full bg-kcm-light hover:bg-white text-kcm-darkest font-black text-sm sm:text-base py-5 sm:py-6 rounded-2xl shadow-lg shadow-kcm-light/10 gap-2 transition-all duration-300"
              >
                <Copy className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> Copiar Resultado
              </Button>

              {/* Dica Educativa */}
              <div className="flex gap-3 p-3.5 bg-kcm-darker/60 border-2 border-kcm-dark/60 rounded-2xl text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                <Info className="h-5 w-5 text-kcm-light flex-shrink-0 mt-0.5" />
                <p>
                  Compartilhe o texto gerado e a chave <strong className="text-white font-extrabold">{shift}</strong> com um amigo para que ele possa descriptografar a mensagem na aba ao lado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}