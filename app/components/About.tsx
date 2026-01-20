"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2000, suffix: "+", label: "Cirurgias Realizadas" },
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação" },
  { value: 6, prefix: "3-", label: "Meses Recuperação Média" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      const elements = elementsRef.current.filter(Boolean);

      // Animação dos números - começa quando a seção About toca o topo
      elements.forEach((el, index) => {
        if (!el) return;

        const stat = stats[index];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (el) {
              const currentVal = Math.floor(obj.val);
              const formattedVal =
                currentVal > 999
                  ? currentVal.toLocaleString("pt-BR")
                  : currentVal;
              const prefix = stat.prefix || "";
              const suffix = stat.suffix || "";
              el.textContent = `${prefix}${formattedVal}${suffix}`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="min-h-[150vh] relative bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              Sobre o médico
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça o Dr. Vitor Ricardo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Formação</h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>Graduado em Medicina pela Universidade de São Paulo (USP)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>Residência médica em Ortopedia e Traumatologia no IOT-HCFMUSP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>1º lugar no Exame para Obtenção do Título de Especialista em Ortopedia da SBOT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>Especialização em Cirurgia do Joelho no IOT-HCFMUSP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>Membro Titular da SBOT e da SBCJ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"></span>
                  <span>Preceptor da Residência Médica e Graduação na Faculdade de Medicina da USP</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Minha Jornada</h3>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Desde cedo me interessei pelo estudo da artrose, motivado pelo impacto que essa condição exerce na qualidade de vida dos pacientes. Durante a residência médica, esse interesse se consolidou, direcionando minha formação para o tratamento com foco na recuperação da mobilidade e bem-estar.
                </p>
                <p>
                  Aprofundei-me em técnicas modernas e minimamente invasivas, buscando aplicar os conceitos mais atuais da artroplastia total do joelho, respeitando a anatomia e as particularidades de cada paciente.
                </p>
                <p>
                  Atualmente, faço parte do HC-FMUSP, onde atuo como cirurgião, pesquisador e preceptor, auxiliando na formação de novos médicos. Mantenho uma rotina de atualizações, participação em publicações e presença ativa em congressos.
                </p>
                <p>
                  Minha prática é pautada pela busca constante por excelência técnica e cuidado centrado no paciente, promovendo qualidade de vida e confiança no movimento.
                </p>
              </div>
            </div>
          </div>

          {/* Stats integrado */}
          <div ref={statsRef} className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div
                    ref={(el) => {
                      elementsRef.current[index] = el;
                    }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  >
                    {stat.prefix || ""}0{stat.suffix || ""}
                  </div>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
