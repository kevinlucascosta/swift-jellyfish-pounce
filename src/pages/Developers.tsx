import React from "react";
import Layout from "@/components/Layout";
import { Users, GraduationCap, Mail, Github, Linkedin, Award } from "lucide-react";
import IfpaLogo from "@/components/IfpaLogo";
import KcmLogo from "@/components/KcmLogo";

export default function Developers() {
  const team = [
    {
      name: "Kevin Lucas Costa e Silva",
      role: "Desenvolvedor / Aluno IFPA",
      course: "3º ano do Curso Técnico em Informática",
      campus: "Campus Conceição do Araguaia",
      bio: "Estudante apaixonado por desenvolvimento de software, segurança da informação e novas tecnologias.",
      avatar: "KL",
      color: "from-kcm-light to-kcm-medium",
    },
    {
      name: "Maysa Toryn Mota Ferreira",
      role: "Desenvolvedora / Aluna IFPA",
      course: "3º ano do Curso Técnico em Informática",
      campus: "Campus Conceição do Araguaia",
      bio: "Interessada em design de interfaces, usabilidade e desenvolvimento web focado na experiência do usuário.",
      avatar: "MT",
      color: "from-kcm-lightest to-kcm-light",
    },
    {
      name: "Carlos Henrique Freire Almeida",
      role: "Desenvolvedor / Aluno IFPA",
      course: "3º ano do Curso Técnico em Informática",
      campus: "Campus Conceição do Araguaia",
      bio: "Entusiasta de lógica de programação, algoritmos e infraestrutura de redes de computadores.",
      avatar: "CH",
      color: "from-kcm-medium to-kcm-dark",
    },
    {
      name: "Prof. Patrick Ryan Sales dos Santos",
      role: "Professor EBTT / Orientador",
      course: "Área de Informática",
      campus: "Campus Conceição do Araguaia",
      bio: "Orientador do projeto, focado em guiar os alunos no desenvolvimento de soluções tecnológicas e acadêmicas de excelência.",
      avatar: "PR",
      color: "from-kcm-light to-kcm-dark",
      isAdvisor: true,
    },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12 animate-in fade-in duration-500">
        {/* Header da Página */}
        <div className="space-y-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span className="p-2.5 sm:p-3 bg-kcm-light/15 rounded-2xl border-2 border-kcm-light/30 text-kcm-light shadow-md">
              <Users className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            Equipe de Desenvolvimento KCM
          </h1>
          
          {/* Banner KCM estilizado com cantoneiras e cores do site */}
          <div className="py-2">
            <KcmLogo />
          </div>

          <p className="text-slate-200 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed px-2">
            Conheça os estudantes e o professor orientador do Instituto Federal do Pará (IFPA) responsáveis pela criação deste projeto educativo.
          </p>
        </div>

        {/* Grid de Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative border-2 border-kcm-dark rounded-3xl bg-kcm-darker/20 p-5 sm:p-6 md:p-8 hover:border-kcm-light/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-lg"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-kcm-light/10 to-kcm-medium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                {/* Topo do Card */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  {/* Avatar */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-kcm-darkest font-black text-lg sm:text-xl shadow-lg flex-shrink-0`}>
                    {member.avatar}
                  </div>

                  {/* Informações Básicas */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-white text-base sm:text-lg leading-tight">
                        {member.name}
                      </h3>
                      {member.isAdvisor && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-kcm-light/15 text-white border border-kcm-light/20">
                          <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-kcm-light" /> Orientador
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold text-kcm-light">
                      {member.role}
                    </p>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-300">
                      {member.course}
                    </p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" /> {member.campus}
                    </p>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Redes Sociais / Contato */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t-2 border-t-kcm-dark/60">
                <span className="text-[11px] sm:text-xs text-slate-300 font-bold">Contato:</span>
                <div className="flex gap-2">
                  <button aria-label={`Enviar e-mail para ${member.name}`} className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <button aria-label={`Acessar GitHub de ${member.name}`} className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm">
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <button aria-label={`Acessar LinkedIn de ${member.name}`} className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm">
                    <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informações do IFPA */}
        <div className="flex justify-center px-2">
          {/* Card IFPA Centralizado */}
          <div className="w-full max-w-lg border-2 border-kcm-dark rounded-3xl bg-kcm-darker/10 p-6 sm:p-8 text-center space-y-4 sm:space-y-5 flex flex-col items-center justify-center shadow-lg">
            <div className="p-3 sm:p-4 bg-kcm-darker rounded-2xl border-2 border-kcm-dark/80 flex items-center justify-center w-fit shadow-md">
              <IfpaLogo size={32} />
            </div>
            <div className="space-y-2.5">
              <h3 className="text-base sm:text-lg font-black text-white">Instituto Federal do Pará</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-sm mx-auto leading-relaxed">
                Campus Conceição do Araguaia. Projeto desenvolvido como parte das atividades acadêmicas do Curso Técnico em Informática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}