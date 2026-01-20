import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <nav className="container mx-auto max-w-3xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 grid grid-cols-3 items-center">
          {/* Logo - Esquerda */}
          <div className="flex justify-start">
            <Link href="/" className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">VR</span>
            </Link>
          </div>

          {/* Links de Navegação - Centro */}
          <div className="hidden md:flex items-center justify-center">
            <a href="#sobre" className="px-3 py-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#tratamentos" className="px-3 py-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
              Tratamentos
            </a>
            <a href="#faq" className="px-3 py-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#hospitais" className="px-3 py-1.5 text-sm text-gray-600 hover:text-primary transition-colors">
              Hospitais
            </a>
          </div>

          {/* Botão de Ação - Direita */}
          <div className="hidden md:flex justify-end">
            <a
              href="https://wa.me/5511912278540"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
            >
              Agendar Consulta →
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
