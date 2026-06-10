import React, { useState } from "react";
import Layout from "@/components/Layout";
import { BookOpen, HelpCircle, ArrowRight, Sparkles, ShieldAlert, History, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  const [demoShift, setDemoShift] = useState(3);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const getShiftedChar = (char: string, shift: number) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  };

  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-500">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_50%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sparkles className="h-3.5 w-3.5" /> Aprendizado Interativo
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Desvende a Criptografia de César
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Explore uma das técnicas de criptografia mais antigas e famosas da história. Aprenda como Júlio César protegia suas mensagens militares e experimente você mesmo!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-xl shadow-lg shadow-cyan-500/20">
                <Link to="/criptografar">Criptografar Mensagem</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-800 hover:bg-slate-900 text-slate-300 rounded-xl">
                <Link to="/descriptografar">Descriptografar</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Simulador Visual Interativo */}
        <div className="border border-slate-800/80 rounded-2xl bg-slate-900/40 p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <RefreshCw className="h-24 w-24 text-cyan-400 animate-spin-slow" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-cyan-400" /> Como funciona o Deslocamento?
                </h2>
                <p className="text-sm text-slate-400">
                  Altere o valor da chave para ver como cada letra do alfabeto é deslocada.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                <span className="text-xs font-semibold text-slate-400 px-2">Chave (Deslocamento):</span>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={demoShift}
                  onChange={(e) => setDemoShift(parseInt(e.target.value))}
                  className="w-32 accent-cyan-400 cursor-pointer"
                />
                <span className="text-sm font-bold text-cyan-400 w-6 text-center">{demoShift}</span>
              </div>
            </div>

            {/* Alphabet Shift Visualizer */}
            <div className="space-y-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
              <div className="flex gap-1.5 min-w-[640px]">
                <div className="w-24 flex-shrink-0 text-xs font-bold text-slate-500 flex items-center">Original:</div>
                {alphabet.map((char) => (
                  <div key={char} className="w-8 h-8 flex items-center justify-center bg-slate-950 border border-slate-800 rounded-lg text-sm font-semibold text-slate-300">
                    {char}
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5 min-w-[640px] items-center">
                <div className="w-24 flex-shrink-0 text-xs font-bold text-cyan-500 flex items-center gap-1">
                  Cifrado: <ArrowRight className="h-3 w-3" />
                </div>
                {alphabet.map((char) => {
                  const shifted = getShiftedChar(char, demoShift);
                  return (
                    <div key={char} className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-bold text-cyan-400 animate-pulse-subtle">
                      {shifted}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              Exemplo: Com chave {demoShift}, a letra "A" se torna "{getShiftedChar("A", demoShift)}" e a letra "B" se torna "{getShiftedChar("B", demoShift)}".
            </p>
          </div>
        </div>

        {/* História e Conceitos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* O que é */}
          <div className="border border-slate-800/60 rounded-2xl bg-slate-900/20 p-6 space-y-4 hover:border-slate-700/60 transition-all duration-300">
            <div className="p-3 bg-cyan-500/10 rounded-xl w-fit border border-cyan-500/20">
              <BookOpen className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">O que é a Cifra de César?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A Cifra de César é um tipo de criptografia de substituição na qual cada letra do texto original é substituída por outra letra que se apresenta no alfabeto um número fixo de vezes mais adiante.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Por exemplo, com uma troca de 3 posições, o <strong>A</strong> seria substituído pelo <strong>D</strong>, o <strong>B</strong> se tornaria <strong>E</strong>, e assim sucessivamente.
            </p>
          </div>

          {/* Quem foi Júlio César */}
          <div className="border border-slate-800/60 rounded-2xl bg-slate-900/20 p-6 space-y-4 hover:border-slate-700/60 transition-all duration-300">
            <div className="p-3 bg-indigo-500/10 rounded-xl w-fit border border-indigo-500/20">
              <History className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100">Quem foi Júlio César?</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Júlio César (100 a.C. – 44 a.C.) foi um renomado líder militar e político romano. Ele utilizava este método de criptografia para proteger mensagens de importância militar e política enviadas aos seus generais.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Se uma mensagem caísse em mãos inimigas, eles não conseguiriam lê-la, pois a maioria das pessoas na época era analfabeta e, mesmo os que sabiam ler, viam apenas um amontoado de letras sem sentido.
            </p>
          </div>
        </div>

        {/* Linha do Tempo Simplificada */}
        <div className="border border-slate-800/60 rounded-2xl bg-slate-900/10 p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <History className="h-5 w-5 text-cyan-400" /> Evolução Histórica da Criptografia
          </h3>
          <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950" />
              <span className="text-xs font-bold text-cyan-400">Século I a.C.</span>
              <h4 className="text-sm font-bold text-slate-200 mt-1">A Cifra de César</h4>
              <p className="text-xs text-slate-400 mt-1">Júlio César cria o método de deslocamento de 3 posições para proteger comunicações militares romanas.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
              <span className="text-xs font-bold text-indigo-400">Século IX d.C.</span>
              <h4 className="text-sm font-bold text-slate-200 mt-1">Criptoanálise por Al-Kindi</h4>
              <p className="text-xs text-slate-400 mt-1">O matemático árabe Al-Kindi inventa a análise de frequência, tornando cifras monoalfabéticas como a de César fáceis de quebrar.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950" />
              <span className="text-xs font-bold text-purple-400">Século XVI</span>
              <h4 className="text-sm font-bold text-slate-200 mt-1">Cifra de Vigenère</h4>
              <p className="text-xs text-slate-400 mt-1">Surge a criptografia polialfabética, que usa múltiplas cifras de César em sequência com base em uma palavra-chave.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950" />
              <span className="text-xs font-bold text-emerald-400">Era Moderna</span>
              <h4 className="text-sm font-bold text-slate-200 mt-1">Criptografia Computacional</h4>
              <p className="text-xs text-slate-400 mt-1">Algoritmos complexos como AES e RSA substituem as cifras manuais, garantindo a segurança de toda a internet atual.</p>
            </div>
          </div>
        </div>

        {/* Vantagens e Limitações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-emerald-500/20 rounded-2xl bg-emerald-500/5 p-6 space-y-3">
            <h4 className="text-base font-bold text-emerald-400 flex items-center gap-2">
              ✓ Vantagens da Técnica
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Extremamente simples de entender e implementar.</li>
              <li>Não requer computadores ou ferramentas complexas.</li>
              <li>Rápida para codificar e decodificar manualmente.</li>
              <li>Excelente ponto de partida para aprender criptografia.</li>
            </ul>
          </div>

          <div className="border border-rose-500/20 rounded-2xl bg-rose-500/5 p-6 space-y-3">
            <h4 className="text-base font-bold text-rose-400 flex items-center gap-2">
              ✗ Limitações e Vulnerabilidades
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Muito fácil de quebrar por força bruta (apenas 25 chaves possíveis).</li>
              <li>Vulnerável à análise de frequência de letras.</li>
              <li>Não oferece segurança real para dados modernos.</li>
              <li>O padrão do texto original permanece visível.</li>
            </ul>
          </div>
        </div>

        {/* Curiosidades */}
        <div className="border border-slate-800/60 rounded-2xl bg-slate-900/20 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-cyan-400" /> Você sabia?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400">
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-200">ROT13</h5>
              <p>O ROT13 é uma variação da Cifra de César com deslocamento de 13 posições, muito usada hoje em fóruns da internet para ocultar spoilers.</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-200">Chave Original</h5>
              <p>Historicamente, Júlio César utilizava quase sempre o deslocamento de 3 posições para a direita (A vira D).</p>
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-200">Cifra de Augusto</h5>
              <p>O sucessor de César, Augusto, usava uma variação com deslocamento de apenas 1 posição para a direita.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}