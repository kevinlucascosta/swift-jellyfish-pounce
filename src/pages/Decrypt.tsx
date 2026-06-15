import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { decryptCaesar } from "@/utils/caesar";
import { showSuccess } from "@/utils/toast";
import { Unlock, Copy, Trash2, Sparkles, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Decrypt() {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const [result, setResult] = useState("");

  // Atualiza o resultado em tempo real sempre que o texto ou a chave mudarem
  useEffect(() => {
    setResult(decryptCaesar(text, shift));
  }, [text, shift]);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    showSuccess("Texto descriptografado copiado para a área de transferência!");
  };

  const handleClear = () => {
    setText("");
    showSuccess("Campos limpos com sucesso!");
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        {/* Header da Página */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-kcm-lightest flex items-center justify-center md:justify-start gap-3">
            <span className="p-2 bg-kcm-light/10 rounded-xl border border-kcm-light/20 text-kcm-light">
              <Unlock className="h-6 w-6" />
            </span>
            Descriptografar Texto
          </h1>
          <p className="text-kcm-light text-sm">
            Insira o texto cifrado, informe a chave de deslocamento correspondente e recupere a mensagem original.
          </p>
        </div>

        {/* Painel Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna de Entrada */}
          <div className="space-y-6 border border-kcm-dark rounded-2xl bg-kcm-darker/20 p-6">
            <h2 className="text-lg font-bold text-kcm-lightest flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-kcm-light" /> Configurações de Entrada
            </h2>

            {/* Campo de Texto Criptografado */}
            <div className="space-y-2">
              <Label htmlFor="cipher-text" className="text-kcm-lightest font-medium text-sm">
                Texto Criptografado
              </Label>
              <Textarea
                id="cipher-text"
                placeholder="Cole aqui o texto cifrado que deseja descriptografar..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[150px] bg-kcm-darkest border-kcm-dark text-kcm-lightest placeholder:text-kcm-medium focus-visible:ring-kcm-light rounded-xl resize-none"
              />
              <p className="text-[11px] text-kcm-medium">
                O processo reverso aplicará o deslocamento para trás no alfabeto.
              </p>
            </div>

            {/* Seletor de Chave */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="shift-key" className="text-kcm-lightest font-medium text-sm">
                  Chave Utilizada
                </Label>
                <span className="text-xs font-bold text-kcm-light bg-kcm-light/10 px-2.5 py-1 rounded-lg border border-kcm-light/20">
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
              <div className="flex justify-between text-[10px] text-kcm-medium px-1">
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
              className="w-full border-kcm-dark hover:bg-kcm-darker text-kcm-light hover:text-kcm-lightest rounded-xl gap-2"
            >
              <Trash2 className="h-4 w-4" /> Limpar Campos
            </Button>
          </div>

          {/* Coluna de Saída */}
          <div className="space-y-6 border border-kcm-light/10 rounded-2xl bg-kcm-light/[0.02] p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-kcm-light flex items-center gap-2">
                <ArrowRight className="h-4 w-4" /> Mensagem Original Revelada
              </h2>

              <div className="relative">
                <div className="min-h-[180px] w-full bg-kcm-darkest border border-kcm-dark rounded-xl p-4 text-kcm-lightest font-mono text-sm break-all whitespace-pre-wrap select-all">
                  {result || (
                    <span className="text-kcm-medium italic font-sans">
                      A mensagem original aparecerá aqui em tempo real conforme você digita...
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {/* Botão de Copiar */}
              <Button
                onClick={handleCopy}
                disabled={!result}
                className="w-full bg-kcm-light hover:bg-kcm-lightest text-kcm-darkest font-semibold rounded-xl shadow-lg shadow-kcm-light/10 gap-2"
              >
                <Copy className="h-4 w-4" /> Copiar Resultado
              </Button>

              {/* Dica Educativa */}
              <div className="flex gap-2.5 p-3 bg-kcm-darker/40 border border-kcm-dark/60 rounded-xl text-xs text-kcm-light">
                <Info className="h-4 w-4 text-kcm-light flex-shrink-0 mt-0.5" />
                <p>
                  Se você não souber a chave, pode tentar adivinhar testando valores de 1 a 25 até que o texto faça sentido! Isso é chamado de <strong>ataque de força bruta</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}