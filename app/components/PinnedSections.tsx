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

const treatments = [
  {
    number: "01",
    title: "Prótese do Joelho",
    description: "Substituição da articulação desgastada por componentes metálicos e plásticos de alta durabilidade.",
  },
  {
    number: "02",
    title: "Artrose do Joelho",
    description: "Tratamento completo utilizando técnicas modernas e minimamente invasivas.",
  },
  {
    number: "03",
    title: "Bloqueio Genicular",
    description: "Procedimento minimamente invasivo para controle da dor crônica no joelho.",
  },
];

const faqs = [
  {
    q: "Como agendar uma consulta?",
    a: "Você pode agendar sua consulta através do nosso WhatsApp, por telefone ou preenchendo o formulário de contato.",
  },
  {
    q: "Aceita convênios?",
    a: "Atendemos diversos convênios médicos para consultas e cirurgias. Entre em contato para verificar a cobertura.",
  },
  {
    q: "Onde as cirurgias são realizadas?",
    a: "As cirurgias são realizadas nos melhores hospitais de São Paulo, com toda infraestrutura e segurança.",
  },
  {
    q: "Quanto tempo dura a internação?",
    a: "Artroscopias permitem alta no mesmo dia. Próteses costumam requerer 2 a 3 dias de internação.",
  },
  {
    q: "Quando começo a fisioterapia?",
    a: "A fisioterapia inicia-se ainda no hospital ou na primeira semana após a cirurgia.",
  },
  {
    q: "Vou precisar usar muletas?",
    a: "Depende do procedimento. Em artroscopias simples geralmente não é necessário. Em próteses, o uso é temporário.",
  },
];

export default function PinnedSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);
  const statsElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = panelsRef.current.filter(Boolean) as HTMLElement[];

    const ctx = gsap.context(() => {
      // Configura apenas os 2 primeiros painéis para o efeito de pinning
      // O último painel (FAQ) não precisa de pin - ele só "empurra" o anterior
      panels.slice(0, -1).forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });

      // Animação dos números stats quando a seção About ficar visível
      const statsElements = statsElementsRef.current.filter(Boolean);
      statsElements.forEach((el, index) => {
        if (!el) return;
        const stat = stats[index];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panelsRef.current[0],
            start: "top center",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (el) {
              const currentVal = Math.floor(obj.val);
              const formattedVal = currentVal > 999 ? currentVal.toLocaleString("pt-BR") : currentVal;
              el.textContent = `${stat.prefix || ""}${formattedVal}${stat.suffix || ""}`;
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* SEÇÃO 1 - SOBRE O MÉDICO */}
      <section
        ref={(el) => { panelsRef.current[0] = el; }}
        id="sobre"
        className="relative h-screen z-10"
      >
        <div className="h-screen w-full bg-slate-900 flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Título gigante */}
            <div className="mb-16">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tighter">
                Sobre o
                <br />
                <span className="text-primary">médico.</span>
              </h2>
            </div>

            {/* Grid com informações */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Coluna 1 - Formação */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Formação</h3>
                <ul className="space-y-4">
                  {[
                    "Graduado em Medicina pela USP",
                    "Residência em Ortopedia no IOT-HCFMUSP",
                    "1º lugar no Título de Especialista SBOT",
                    "Especialização em Cirurgia do Joelho",
                    "Membro Titular da SBOT e SBCJ",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300 text-lg">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 2 - Stats */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Números</h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        ref={(el) => { statsElementsRef.current[index] = el; }}
                        className="text-5xl md:text-6xl font-bold text-primary mb-2"
                      >
                        {stat.prefix || ""}0{stat.suffix || ""}
                      </div>
                      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - TRATAMENTOS */}
      <section
        ref={(el) => { panelsRef.current[1] = el; }}
        id="tratamentos"
        className="relative h-screen z-20"
      >
        <div className="h-screen w-full bg-white flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50" />
            <div className="absolute bottom-0 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Título gigante */}
            <div className="mb-16">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] tracking-tighter">
                Áreas de
                <br />
                <span className="text-primary">atuação.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mt-8 max-w-2xl font-light">
                Artrose do Joelho, Prótese Total e Artroscopia
              </p>
            </div>

            {/* Cards de tratamentos */}
            <div className="grid md:grid-cols-3 gap-6">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary rounded-2xl p-8 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="text-7xl font-bold text-gray-200 group-hover:text-primary/20 transition-colors mb-4">
                    {treatment.number}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {treatment.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - FAQ (sem pin, fluxo normal após isso) */}
      <section
        ref={(el) => { panelsRef.current[2] = el; }}
        id="faq"
        className="relative z-30 bg-slate-50"
      >
        <div className="min-h-screen w-full flex items-center justify-center px-6 py-20 overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Título gigante */}
            <div className="mb-12">
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] tracking-tighter">
                Dúvidas
                <br />
                <span className="text-primary">frequentes.</span>
              </h2>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary open:border-primary open:shadow-lg transition-all duration-300"
                >
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-primary group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
