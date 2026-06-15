import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Lock, Unlock, Users, GraduationCap, Shield } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-kcm-darkest text-kcm-lightest font-sans selection:bg-kcm-light selection:text-kcm-darkest">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-kcm-darkest/80 border-b border-kcm-dark/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo KCM */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-kcm-darker rounded-xl border border-kcm-dark group-hover:border-kcm-light group-hover:bg-kcm-dark transition-all duration-300">
                <Shield className="h-5 w-5 text-kcm-light group-hover:text-kcm-lightest transition-colors" />
                <span className="font-black text-xl tracking-wider bg-gradient-to-r from-kcm-lightest via-kcm-light to-kcm-medium bg-clip-text text-transparent">
                  KCM
                </span>
              </div>
              <div>
                <span className="font-bold text-sm tracking-widest text-kcm-lightest block">
                  CÉSAR KCM
                </span>
                <span className="block text-[9px] text-kcm-light/80 font-medium tracking-widest uppercase">
                  IFPA Campus Conceição
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-kcm-dark text-kcm-lightest border border-kcm-light/20"
                        : "text-kcm-light hover:text-kcm-lightest hover:bg-kcm-darker"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-kcm-light hover:text-kcm-lightest hover:bg-kcm-darker focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-kcm-dark bg-kcm-darkest/95 backdrop-blur-lg animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? "bg-kcm-dark text-kcm-lightest border border-kcm-light/20"
                        : "text-kcm-light hover:text-kcm-lightest hover:bg-kcm-darker"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-kcm-darkest border-t border-kcm-darker py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-6 w-6 text-kcm-light" />
              <div>
                <p className="text-sm font-semibold text-kcm-lightest">
                  Criptografia de César — Projeto Educativo
                </p>
                <p className="text-xs text-kcm-light">
                  IFPA Campus Conceição do Araguaia
                </p>
              </div>
            </div>
            <div className="text-xs text-kcm-medium">
              &copy; {new Date().getFullYear()} — Desenvolvido para fins didáticos.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}