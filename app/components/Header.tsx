import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 lg:px-20">
      <nav className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-10">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-foreground hover:text-primary transition-colors mr-8">
            VR
          </Link>

          {/* Links de Navegação - Centro */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#sobre" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#tratamentos" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
              Tratamentos
            </a>
            <a href="#faq" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#hospitais" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
              Hospitais
            </a>
          </div>

          {/* Botão de Ação */}
          <a
            href="#contato"
            className="hidden md:block text-base font-bold text-foreground hover:text-primary transition-colors ml-8"
          >
            Agendar Consulta →
          </a>
        </div>
      </nav>
    </header>
  );
}
