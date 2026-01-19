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
              Áreas de atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artrose do Joelho, Prótese Total e Artroscopia
            </p>
          </div>

          <div className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Atuo no tratamento da artrose do joelho utilizando técnicas minimamente invasivas e prótese de joelho, com objetivo de devolver saúde e qualidade de vida aos meus pacientes. Também realizo o tratamento de lesões esportivas do joelho (ligamentos, meniscos, cartilagem) por artroscopia, possibilitando o retorno pleno ao esporte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consulta presencial e online */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consulta presencial e online
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Suporte 24h ao paciente.
              </p>
            </div>

            {/* Atuação acadêmica */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Atuação acadêmica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamentos pautados em evidência científica atualizada e formação completa na maior universidade do país.
              </p>
            </div>

            {/* Procedimentos minimamente invasivos */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Procedimentos minimamente invasivos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recuperação rápida, prática e indolor da autonomia e bem-estar.
              </p>
            </div>

            {/* Prótese de Joelho */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Prótese de Joelho
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Técnica personalizada para sua anatomia, objetivando melhores resultados.
              </p>
            </div>

            {/* Artroscopia */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Artroscopia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tratamento das lesões esportivas (ligamentos, meniscos) com conceitos modernos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
