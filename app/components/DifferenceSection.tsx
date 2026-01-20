"use client";

import { useRef } from "react";
import ContactAnimation from "./ContactAnimation";

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative h-[200vh] bg-white"
    >
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col px-6 overflow-hidden">
        {/* Conteúdo central */}
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto max-w-7xl text-center">
            {/* Texto principal */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-gray-900 leading-tight tracking-tight select-none mb-12">
              Dr. Vitor Ricardo
              <br />
              Segurança em
              <br />
              Cirurgia de Joelho
            </h2>

            {/* Animação de contato - abaixo do texto */}
            <ContactAnimation sectionRef={sectionRef} />
          </div>
        </div>

        {/* Footer integrado */}
        <div className="py-6">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2026 Dr. Vitor Ricardo. Todos os direitos reservados. | CRM-SP: 226.708 | RQE: 136.623
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
