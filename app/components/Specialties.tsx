"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100", // Inicia quando o topo da seção passar um pouco do centro
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="especialidades"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-50/50"
    >
      <div
        ref={cardRef}
        className="container mx-auto max-w-6xl bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tratamento personalizado para cada fase da sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* Linha divisória vertical para desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2" />

            {/* Artrose */}
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Tratamento de Artrose
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
                    Pacientes 50-70 anos
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Tratamento completo desde opções conservadoras até cirurgia de
                prótese total de joelho, com foco na recuperação da mobilidade e
                qualidade de vida.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Prótese total e parcial de joelho
                </li>
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Avaliação e diagnóstico precisos
                </li>
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  Acompanhamento pós-operatório completo
                </li>
              </ul>
            </div>

            {/* Atletas */}
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Lesões Esportivas
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
                    Jovens Atletas
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Tratamento especializado focado na recuperação completa e retorno
                seguro às atividades esportivas de alto desempenho.
              </p>
              <ul className="space-y-4 mt-auto">
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  Reconstrução de ligamentos (LCA/LCP)
                </li>
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  Tratamento de lesões meniscais
                </li>
                <li className="flex items-center gap-4 text-gray-700 text-lg">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  Reabilitação esportiva avançada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
