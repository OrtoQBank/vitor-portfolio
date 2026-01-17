import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
      <nav className="container mx-auto max-w-6xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-8 py-4 grid grid-cols-3 items-center">
          {/* Logo - Alinhado à esquerda */}
          <div className="flex items-center gap-2 justify-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-900">
              Dr. Vitor
            </Link>
          </div>

          {/* Links de Navegação - Centralizados */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link
              href="/sobre"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Botão de Ação - Alinhado à direita */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all"
            >
              Agendar Consulta →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
