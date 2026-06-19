import React, { useState } from "react";
import Layout from "@/components/Layout";
import { BookOpen, HelpCircle, ArrowRight, Sparkles, History, RefreshCw, ShieldCheck, Lock } from "lucide-react";
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
      <div className="space-y-16 animate-in fade-in duration-500">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-kcm-dark bg-gradient-to-b from-kcm-darker to-kcm-darkest p-8 md:p-16 text-center shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(155,168,171,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-kcm-light/15 text-white border-2 border-kcm-light/30">
              <Sparkles className="h-4.5 w-4.5 text-kcm-light" /> Aprendizado Interativo
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
              Desvende a Criptografia de César
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed">
              Explore uma das técnicas de criptografia mais antigas e famosas da história. Aprenda como Júlio César protegia suas mensagens militares e experimente você mesmo!
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-kcm-light hover:bg-white text-kcm-darkest font-extrabold text-base px-8 py-6 rounded-xl shadow-lg shadow-kcm-light/10 transition-all duration-300">
                <Link to="/criptografar">Criptografar Mensagem</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-kcm-dark hover:bg-kcm-darker text-white font-bold text-base px-8 py-6 rounded-xl transition-all duration-300">
                <Link to="/descriptografar">Descriptografar</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Simulador Visual Interativo */}
        <div className="border-2 border-kcm-dark rounded-3xl bg-kcm-darker/40 p-6 md:p-10 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <RefreshCw className="h-32 w-32 text-kcm-light animate-spin-slow" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                  <RefreshCw className="h-7 w-7 text-kcm-light" /> Como funciona o Deslocamento?
                </h2>
                <p className="text-base text-slate-200 font-medium">
                  Altere o valor da chave para ver como cada letra do alfabeto é deslocada em tempo real.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 bg-kcm-darkest p-3.5 rounded-2xl border-2 border-kcm-dark shadow-inner">
                <span className="text-sm font-extrabold text-white px-2">Chave (Deslocamento):</span>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={demoShift}
                  onChange={(e) => setDemoShift(parseInt(e.target.value))}
                  className="w-36 accent-kcm-light cursor-pointer h-2 bg-kcm-darker rounded-lg"
                />
                <span className="text-base font-black text-kcm-light bg-kcm-light/10 px-3 py-1 rounded-lg border border-kcm-light/20 w-10 text-center">{demoShift}</span>
              </div>
            </div>

            {/* Alphabet Shift Visualizer */}
            <div className="space-y-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-kcm-dark">
              <div className="flex gap-2 min-w-[720px]">
                <div className="w-28 flex-shrink-0 text-sm font-black text-slate-300 flex items-center">Original:</div>
                {alphabet.map((char) => (
                  <div key={char} className="w-9 h-9 flex items-center justify-center bg-kcm-darkest border-2 border-kcm-dark rounded-xl text-sm font-bold text-slate-200">
                    {char}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 min-w-[720px] items-center">
                <div className="w-28 flex-shrink-0 text-sm font-black text-kcm-light flex items-center gap-1.5">
                  Cifrado: <ArrowRight className="h-4 w-4" />
                </div>
                {alphabet.map((char) => {
                  const shifted = getShiftedChar(char, demoShift);
                  return (
                    <div key={char} className="w-9 h-9 flex items-center justify-center bg-kcm-light/15 border-2 border-kcm-light/40 rounded-xl text-sm font-black text-white shadow-sm">
                      {shifted}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-sm text-slate-300 font-semibold italic bg-kcm-darkest/50 p-3 rounded-xl border border-kcm-dark/40 w-fit">
              Exemplo prático: Com a chave {demoShift}, a letra "A" se torna "{getShiftedChar("A", demoShift)}" e a letra "B" se torna "{getShiftedChar("B", demoShift)}".
            </p>
          </div>
        </div>

        {/* Seção Simplificada: Como a Criptografia Protege Você Hoje? */}
        <div className="border-2 border-kcm-dark rounded-3xl bg-gradient-to-r from-kcm-darker/40 to-kcm-darkest p-6 md:p-10 space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Lock className="h-48 w-48 text-kcm-light" />
          </div>
          
          <div className="relative z-10 space-y-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-kcm-light" /> Como a Criptografia Protege Você Hoje?
            </h2>
            
            <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed">
              Imagine que a criptografia funciona como um <strong>cadeado digital invisível</strong>. Toda vez que você envia uma mensagem no WhatsApp, faz um Pix, digita uma senha ou faz compras na internet, ela entra em ação. A criptografia pega as suas informações pessoais e as transforma em um código secreto embaralhado, garantindo que apenas você e a pessoa que vai receber consigam ler.
            </p>
            
            <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed">
              Sem essa proteção, pessoas mal-intencionadas poderiam facilmente ler suas conversas particulares ou roubar seus dados bancários. É graças a esse escudo invisível que você pode usar suas redes sociais, conversar com amigos e fazer pagamentos online todos os dias com total segurança e privacidade!
            </p>
          </div>
        </div>

        {/* História e Conceitos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* O que é */}
          <div className="border-2 border-kcm-dark rounded-3xl bg-kcm-darker/20 p-8 space-y-5 hover:border-kcm-light/40 transition-all duration-300 shadow-md">
            <div className="p-3.5 bg-kcm-light/15 rounded-2xl w-fit border-2 border-kcm-light/20">
              <BookOpen className="h-7 w-7 text-kcm-light" />
            </div>
            <h3 className="text-2xl font-black text-white">O que é a Cifra de César?</h3>
            <p className="text-slate-200 text-base font-medium leading-relaxed">
              A Cifra de César é um tipo de criptografia de substituição na qual cada letra do texto original é substituída por outra letra que se apresenta no alfabeto um número fixo de vezes mais adiante.
            </p>
            <p className="text-slate-200 text-base font-medium leading-relaxed">
              Por exemplo, com uma troca de 3 posições, o <strong>A</strong> seria substituído pelo <strong>D</strong>, o <strong>B</strong> se tornaria <strong>E</strong>, e assim sucessivamente.
            </p>
          </div>

          {/* Quem foi Júlio César */}
          <div className="border-2 border-kcm-dark rounded-3xl bg-kcm-darker/20 p-8 space-y-5 hover:border-kcm-light/40 transition-all duration-300 shadow-md">
            <div className="p-3.5 bg-kcm-medium/20 rounded-2xl w-fit border-2 border-kcm-medium/30">
              <History className="h-7 w-7 text-kcm-light" />
            </div>
            <h3 className="text-2xl font-black text-white">Quem foi Júlio César?</h3>
            <p className="text-slate-200 text-base font-medium leading-relaxed">
              Júlio César (100 a.C. – 44 a.C.) foi um renomado líder militar e político romano. Ele utilizava este método de criptografia para proteger mensagens de importância militar e política enviadas aos seus generais.
            </p>
            <p className="text-slate-200 text-base font-medium leading-relaxed">
              Se uma mensagem caísse em mãos inimigas, eles não conseguiriam lê-la, pois a maioria das pessoas na época era analfabeta e, mesmo os que sabiam ler, viam apenas um amontoado de letras sem sentido.
            </p>
          </div>
        </div>

        {/* Linha do Tempo Simplificada */}
        <div className="border-2 border-kcm-dark rounded-3xl bg-kcm-darker/10 p-6 md:p-10 space-y-8 shadow-lg">
          <h3 className="text-2xl font-black text-white flex items-center gap-3">
            <History className="h-6 w-6 text-kcm-light" /> Evolução Histórica da Criptografia
          </h3>
          <div className="relative border-l-2 border-kcm-dark ml-4 pl-8 space-y-10">
            <div className="relative">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-kcm-light border-4 border-kcm-darkest" />
              <span className="text-xs font-extrabold text-kcm-light tracking-wider uppercase">Século I a.C.</span>
              <h4 className="text-lg font-black text-white mt-1">A Cifra de César</h4>
              <p className="text-sm text-slate-200 font-medium mt-1.5 leading-relaxed">Júlio César cria o método de deslocamento de 3 posições para proteger comunicações militares romanas.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-kcm-medium border-4 border-kcm-darkest" />
              <span className="text-xs font-extrabold text-kcm-light tracking-wider uppercase">Século IX d.C.</span>
              <h4 className="text-lg font-black text-white mt-1">Criptoanálise por Al-Kindi</h4>
              <p className="text-sm text-slate-200 font-medium mt-1.5 leading-relaxed">O matemático árabe Al-Kindi inventa a análise de frequência, tornando cifras monoalfabéticas como a de César fáceis de quebrar.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-kcm-dark border-4 border-kcm-darkest" />
              <span className="text-xs font-extrabold text-kcm-light tracking-wider uppercase">Século XVI</span>
              <h4 className="text-lg font-black text-white mt-1">Cifra de Vigenère</h4>
              <p className="text-sm text-slate-200 font-medium mt-1.5 leading-relaxed">Surge a criptografia polialfabética, que usa múltiplas cifras de César em sequência com base em uma palavra-chave.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-kcm-darkest" />
              <span className="text-xs font-extrabold text-kcm-light tracking-wider uppercase">Era Moderna</span>
              <h4 className="text-lg font-black text-white mt-1">Criptografia Computacional</h4>
              <p className="text-sm text-slate-200 font-medium mt-1.5 leading-relaxed">Algoritmos complexos como AES e RSA substituem as cifras manuais, garantindo a segurança de toda a internet atual.</p>
            </div>
          </div>
        </div>

        {/* Vantagens e Limitações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-kcm-light/20 rounded-3xl bg-kcm-light/5 p-8 space-y-4 shadow-md">
            <h4 className="text-lg font-black text-kcm-light flex items-center gap-2.5">
              ✓ Vantagens da Técnica
            </h4>
            <ul className="space-y-3 text-sm md:text-base text-slate-200 font-semibold list-disc list-inside">
              <li>Extremamente simples de entender e implementar.</li>
              <li>Não requer computadores ou ferramentas complexas.</li>
              <li>Rápida para codificar e decodificar manualmente.</li>
              <li>Excelente ponto de partida para aprender criptografia.</li>
            </ul>
          </div>

          <div className="border-2 border-kcm-medium/30 rounded-3xl bg-kcm-medium/5 p-8 space-y-4 shadow-md">
            <h4 className="text-lg font-black text-kcm-light flex items-center gap-2.5">
              ✗ Limitações e Vulnerabilidades
            </h4>
            <ul className="space-y-3 text-sm md:text-base text-slate-200 font-semibold list-disc list-inside">
              <li>Muito fácil de quebrar por força bruta (apenas 25 chaves possíveis).</li>
              <li>Vulnerável à análise de frequência de letras.</li>
              <li>Não oferece segurança real para dados modernos.</li>
              <li>O padrão do texto original permanece visível.</li>
            </ul>
          </div>
        </div>

        {/* Curiosidades */}
        <div className="border-2 border-kcm-dark rounded-3xl bg-kcm-darker/20 p-8 space-y-6 shadow-md">
          <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-kcm-light" /> Curiosidades Históricas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base text-slate-200 font-medium leading-relaxed">
            <div className="space-y-2 bg-kcm-darkest/40 p-5 rounded-2xl border border-kcm-dark/60">
              <h5 className="font-extrabold text-white text-base">ROT13</h5>
              <p>O ROT13 é uma variação da Cifra de César com deslocamento de 13 posições, muito usada hoje em fóruns da internet para ocultar spoilers.</p>
            </div>
            <div className="space-y-2 bg-kcm-darkest/40 p-5 rounded-2xl border border-kcm-dark/60">
              <h5 className="font-extrabold text-white text-base">Chave Original</h5>
              <p>Historicamente, Júlio César utilizava quase sempre o deslocamento de 3 posições para a direita (A vira D).</p>
            </div>
            <div className="space-y-2 bg-kcm-darkest/40 p-5 rounded-2xl border border-kcm-dark/60">
              <h5 className="font-extrabold text-white text-base">Cifra de Augusto</h5>
              <p>O sucessor de César, Augusto, usava uma variação com deslocamento de apenas 1 posição para a direita.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}