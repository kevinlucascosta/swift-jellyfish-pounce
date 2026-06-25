import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Users, GraduationCap, Mail, Github, Linkedin, Award, X, Copy, ExternalLink, Check } from "lucide-react";
import IfpaLogo from "@/components/IfpaLogo";
import KcmLogo from "@/components/KcmLogo";
import { showSuccess } from "@/utils/toast";

export default function Developers() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

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

  const teamContacts = [
    {
      name: "Kevin Lucas Costa",
      email: "kevinlucas07cs@gmail.com",
      githubUser: "kevinlucascosta",
      githubUrl: "https://github.com/kevinlucascosta",
    },
    {
      name: "Carlos Henrique",
      email: "carloshenrique86336@gmail.com",
      githubUser: "carlos0942",
      githubUrl: "https://github.com/carlos0942",
    },
    {
      name: "Ryan Sales",
      email: "pryansaless@gmail.com",
      githubUser: "SalesRyan",
      githubUrl: "https://github.com/SalesRyan",
    }
  ];

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    showSuccess(`E-mail copiado: ${email}`);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

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
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    aria-label="Ver e-mails de contato"
                    className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm cursor-pointer"
                  >
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    aria-label="Ver perfis do GitHub"
                    className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm cursor-pointer"
                  >
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    aria-label="Ver perfis do LinkedIn"
                    className="p-1.5 sm:p-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-sm cursor-pointer"
                  >
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

      {/* Modal Unificado Moderno e Responsivo */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Overlay escurecido com desfoque */}
          <div 
            className="absolute inset-0 bg-kcm-darkest/80 backdrop-blur-md"
            onClick={() => setIsContactModalOpen(false)}
          />
          
          {/* Conteúdo do Modal */}
          <div className="relative w-full max-w-4xl bg-kcm-darker border-2 border-kcm-dark rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 z-10 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-kcm-dark">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-kcm-light/15 rounded-2xl border-2 border-kcm-light/30 text-kcm-light">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                Contatos da Equipe
              </h2>
            </div>

            {/* Corpo do Modal - Cartões de Pessoas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {teamContacts.map((member) => (
                <div key={member.email} className="p-5 bg-kcm-darkest border-2 border-kcm-dark rounded-2xl space-y-4 flex flex-col justify-between hover:border-kcm-light/30 transition-all duration-300">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-black text-white border-b border-kcm-dark/60 pb-2">
                      {member.name}
                    </h3>
                    
                    {/* Seção de E-mail */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-kcm-light" /> E-mail
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-xs font-bold text-kcm-light hover:text-white transition-colors break-all"
                        >
                          {member.email}
                        </a>
                        <button
                          onClick={() => handleCopyEmail(member.email)}
                          className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-kcm-darker border border-kcm-dark text-[11px] font-bold text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
                        >
                          {copiedEmail === member.email ? (
                            <>
                              <Check className="h-3 w-3 text-green-400" /> Copiado
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" /> Copiar E-mail
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Seção de GitHub */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                        <Github className="h-3.5 w-3.5 text-kcm-light" /> GitHub
                      </span>
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 bg-kcm-darker border border-kcm-dark rounded-xl hover:border-kcm-light/40 transition-all group"
                      >
                        <span className="text-xs font-bold text-slate-200 group-hover:text-white">
                          {member.githubUser}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-kcm-light transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rodapé do Modal */}
            <div className="mt-6 pt-4 border-t border-kcm-dark/60 flex justify-between items-center flex-wrap gap-3">
              <p className="text-[11px] text-slate-400 font-medium">
                * Perfis do LinkedIn serão adicionados em breve.
              </p>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-kcm-darkest border-2 border-kcm-dark text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:border-kcm-light/40 transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}