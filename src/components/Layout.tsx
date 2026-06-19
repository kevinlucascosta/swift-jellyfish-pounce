import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Lock, Unlock, Users, Shield } from "lucide-react";
import IfpaLogo from "./IfpaLogo";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Início", icon: BookOpen },
    { path: "/criptografar", label: "Criptografar", icon: Lock },
    { path: "/descriptografar", label: "Descriptografar", icon: Unlock },
    { path: "/desenvolvedores", label: "Desenvolvedores", icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-kcm-darkest text-slate-50 font-sans selection:bg-kcm-light selection:text-kcm-darkest">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-kcm-darkest/90 border-b-2 border-kcm-dark/80 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo CÉSAR */}
            <Link to="/" className="flex items-center space-x-4 group focus:outline-none focus:ring-2 focus:ring-kcm-light rounded-xl p-1">
              <div className="flex items-center space-x-2.5 px-4 py-2 bg-kcm-darker rounded-xl border-2 border-kcm-dark group-hover:border-kcm-light group-hover:bg-kcm-dark transition-all duration-300 shadow-inner">
                <Shield className="h-6 w-6 text-kcm-light group-hover:text-white transition-colors" />
                <span className="font-black text-2xl tracking-wider bg-gradient-to-r from-white via-kcm-light to-kcm-medium bg-clip-text text-transparent">
                  CÉSAR
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-base tracking-widest text-white block">
                  CÉSAR
                </span>
                <span className="block text-[10px] text-slate-300 font-bold tracking-widest uppercase">
                  IFPA Campus Conceição
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl text-base font-bold tracking-wide transition-all duration-300 border-2 ${
                      active
                        ? "bg-kcm-light text-kcm-darkest border-kcm-light shadow-lg shadow-kcm-light/10"
                        : "text-slate-200 border-transparent hover:text-white hover:bg-kcm-darker hover:border-kcm-dark/60"
                    }`}
                  >
                    <Icon className={`h-5.5 w-5.5 ${active ? "text-kcm-darkest" : "text-kcm-light"}`} />
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
                className="p-3 rounded-xl text-slate-200 hover:text-white hover:bg-kcm-darker border-2 border-transparent hover:border-kcm-dark/60 focus:outline-none focus:ring-2 focus:ring-kcm-light transition-all"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
                    className={`flex items-center space-x-4 px-5 py-4 rounded-xl text-lg font-bold tracking-wide transition-all border-2 ${
                      active
                        ? "bg-kcm-light text-kcm-darkest border-kcm-light shadow-md"
                        : "text-slate-200 border-transparent hover:text-white hover:bg-kcm-darker"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${active ? "text-kcm-darkest" : "text-kcm-light"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kcm-darkest border-t-2 border-kcm-darker py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 bg-kcm-darker rounded-xl border-2 border-kcm-dark/80 flex items-center justify-center shadow-md">
                <IfpaLogo size={28} />
              </div>
              <div>
                <p className="text-base font-extrabold text-white">
                  Criptografia de César — Projeto Educativo
                </p>
                <p className="text-sm font-semibold text-slate-300">
                  IFPA Campus Conceição do Araguaia
                </p>
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400">
              &copy; {new Date().getFullYear()} — Desenvolvido para fins didáticos e acadêmicos.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}