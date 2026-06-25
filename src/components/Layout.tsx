import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Lock, Unlock, Users, Shield, Mail, Github, Linkedin, Copy, Check, ExternalLink } from "lucide-react";
import IfpaLogo from "./IfpaLogo";
import { showSuccess } from "@/utils/toast";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const navItems = [
    { path: "/", label: "Início", icon: BookOpen },
    { path: "/criptografar", label: "Criptografar", icon: Lock },
    { path: "/descriptografar", label: "Descriptografar", icon: Unlock },
    { path: "/desenvolvedores", label: "Desenvolvedores", icon: Users },
  ];

  const teamContacts = [
    {
      name: "Kevin Lucas Costa e Silva",
      email: "kevinlucas07cs@gmail.com",
      githubUser: "kevinlucascosta",
      githubUrl: "https://github.com/kevinlucascosta",
      linkedin: "https://linkedin.com/in/kevinlucascosta",
    },
    {
      name: "Maysa Toryn Mota Ferreira",
      email: "maysatoryn.contact@gmail.com",
      githubUser: "maysatoryn",
      githubUrl: "https://github.com/maysatoryn",
      linkedin: "",
    },
    {
      name: "Carlos Henrique Freire Almeida",
      email: "carloshenrique86336@gmail.com",
      githubUser: "carlos0942",
      githubUrl: "https://github.com/carlos0942",
      linkedin: "",
    },
    {
      name: "Prof. Patrick Ryan Sales dos Santos",
      email: "pryansaless@gmail.com",
      githubUser: "SalesRyan",
      githubUrl: "https://github.com/SalesRyan",
      linkedin: "",
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    showSuccess(`E-mail copiado: ${email}`);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-kcm-darkest text-slate-50 font-sans selection:bg-kcm-light selection:text-kcm-darkest overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-kcm-darkest/90 border-b-2 border-kcm-dark/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo CÉSAR */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group focus:outline-none focus:ring-2 focus:ring-kcm-light rounded-xl p-1">
              <div className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-kcm-darker rounded-xl border-2 border-kcm-dark group-hover:border-kcm-light group-hover:bg-kcm-dark transition-all duration-300 shadow-inner">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-kcm-light group-hover:text-white transition-colors" />
                <span className="font-black text-xl sm:text-2xl tracking-wider bg-gradient-to-r from-white via-kcm-light to-kcm-medium bg-clip-text text-transparent">
                  CÉSAR
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-sm sm:text-base tracking-widest text-white block">
                  CÉSAR
                </span>
                <span className="block text-[9px] sm:text-[10px] text-slate-300 font-bold tracking-widest uppercase">
                  IFPA Campus Conceição
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 lg:px-5 lg:py-3 rounded-xl text-sm lg:text-base font-bold tracking-wide transition-all duration-300 border-2 ${
                      active
                        ? "bg-kcm-light text-kcm-darkest border-kcm-light shadow-lg shadow-kcm-light/10"
                        : "text-slate-200 border-transparent hover:text-white hover:bg-kcm-darker hover:border-kcm-dark/60"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${active ? "text-kcm-darkest" : "text-kcm-light"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu de navegação"
                className="p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-kcm-darker border-2 border-transparent hover:border-kcm-dark/60 focus:outline-none focus:ring-2 focus:ring-kcm-light transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b-2 border-kcm-dark bg-kcm-darkest/98 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="px-3 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-4 px-5 py-3.5 rounded-xl text-base sm:text-lg font-bold tracking-wide transition-all border-2 ${
                      active
                        ? "bg-kcm-light text-kcm-darkest border-kcm-light shadow-md"
                        : "text-slate-200 border-transparent hover:text-white hover:bg-kcm-darker"
                    }`}
                  >
                    <Icon className={`h-5.5 w-5.5 ${active ? "text-kcm-darkest" : "text-kcm-light"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kcm-darkest border-t-2 border-kcm-darker py-8 sm:py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-2.5 bg-kcm-darker rounded-xl border-2 border-kcm-dark/80 flex items-center justify-center shadow-md">
                <IfpaLogo size={24} />
              </div>
              <div>
                <p className="text-sm sm:text-base font-extrabold text-white">
                  Criptografia de César — Projeto Educativo
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  IFPA Campus Conceição do Araguaia
                </p>
              </div>
            </div>

            {/* Ícones de Contato no Rodapé */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="p-2.5 rounded-xl bg-kcm-darker border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-md cursor-pointer"
                aria-label="E-mails de contato"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="p-2.5 rounded-xl bg-kcm-darker border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-md cursor-pointer"
                aria-label="Perfis do GitHub"
              >
                <Github className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="p-2.5 rounded-xl bg-kcm-darker border-2 border-kcm-dark text-slate-200 hover:text-white hover:border-kcm-light/40 transition-all shadow-md cursor-pointer"
                aria-label="Perfis do LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm font-medium text-slate-400">
              &copy; {new Date().getFullYear()} — Desenvolvido para fins didáticos e acadêmicos.
            </div>
          </div>
        </div>
      </footer>

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