import React from "react";
import Layout from "@/components/Layout";
import { Users, GraduationCap, Mail, Github, Linkedin, Award } from "lucide-react";
import IfpaLogo from "@/components/IfpaLogo";

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
      <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">
        {/* Header da Página */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-kcm-lightest flex items-center justify-center gap-3">
            <span className="p-2 bg-kcm-light/10 rounded-xl border border-kcm-light/20 text-kcm-light">
              <Users className="h-6 w-6" />
            </span>
            Equipe de Desenvolvimento KCM
          </h1>
          <p className="text-kcm-light text-sm max-w-2xl mx-auto">
            Conheça os estudantes e o professor orientador do Instituto Federal do Pará (IFPA) responsáveis pela criação deste projeto educativo.
          </p>
        </div>

        {/* Grid de Integrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative border border-kcm-dark rounded-2xl bg-kcm-darker/20 p-6 hover:border-kcm-light/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-kcm-light/10 to-kcm-medium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* Topo do Card */}
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-kcm-darkest font-bold text-lg shadow-lg`}>
                    {member.avatar}
                  </div>

                  {/* Informações Básicas */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-kcm-lightest text-base leading-tight">
                        {member.name}
                      </h3>
                      {member.isAdvisor && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-kcm-light/10 text-kcm-light border border-kcm-light/20">
                          <Award className="h-3 w-3" /> Orientador
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-kcm-light">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-kcm-light/80">
                      {member.course}
                    </p>
                    <p className="text-[10px] text-kcm-medium flex items-center gap-1">
                      <GraduationCap className="h-3.5 w-3.5 text-kcm-medium" /> {member.campus}
                    </p>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-xs text-kcm-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Redes Sociais / Contato */}
              <div className="relative z-10 flex items-center gap-3 pt-4 mt-4 border-t border-t-kcm-dark/60">
                <span className="text-[10px] text-kcm-medium font-medium">Contato:</span>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-lg bg-kcm-darkest border border-kcm-dark text-kcm-light hover:text-kcm-lightest hover:border-kcm-light/30 transition-all">
                    <Mail className="h-3.5 w-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-kcm-darkest border border-kcm-dark text-kcm-light hover:text-kcm-lightest hover:border-kcm-light/30 transition-all">
                    <Github className="h-3.5 w-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-kcm-darkest border border-kcm-dark text-kcm-light hover:text-kcm-lightest hover:border-kcm-light/30 transition-all">
                    <Linkedin className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informações do IFPA */}
        <div className="border border-kcm-dark rounded-2xl bg-kcm-darker/10 p-6 text-center space-y-4 flex flex-col items-center justify-center">
          <div className="p-3 bg-kcm-darker rounded-2xl border border-kcm-dark/60 flex items-center justify-center w-fit">
            <IfpaLogo size={32} />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-kcm-lightest">Instituto Federal de Educação, Ciência e Tecnologia do Pará</h3>
            <p className="text-xs text-kcm-light max-w-xl mx-auto">
              Campus Conceição do Araguaia. Projeto desenvolvido como parte das atividades acadêmicas do Curso Técnico em Informática integrado ao Ensino Médio.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}