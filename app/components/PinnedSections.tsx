"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2000, suffix: "+", label: "CIRURGIAS REALIZADAS" },
  { value: 15, suffix: "+", label: "ANOS DE EXPERIÊNCIA" },
  { value: 1500, suffix: "+", label: "CIRURGIAS DE ARTROSE" },
  { value: 800, suffix: "+", label: "LESÕES ESPORTIVAS TRATADAS" },
];

const formacao = [
  "Graduado em Medicina pela USP",
  "Residência em Ortopedia no IOT-HCFMUSP",
  "1º lugar - Título de Especialista SBOT",
  "Especialização em Cirurgia do Joelho",
  "Membro Titular da SBOT e SBCJ",
  "Preceptor na Faculdade de Medicina da USP",
];

const treatments = [
  { 
    title: "Prótese Total do Joelho", 
    description: "Artroplastia total do joelho com planejamento pré-operatório individualizado, utilizando análise de eixo mecânico, alinhamento funcional e implantes de alta durabilidade para restauração precisa da biomecânica articular." 
  },
  { 
    title: "Artrose do Joelho", 
    description: "Tratamento da osteoartrose baseado em estadiamento clínico e radiológico, com protocolos personalizados que incluem terapias conservadoras avançadas, infiltrações guiadas e indicação cirúrgica no momento ideal." 
  },
  { 
    title: "Técnicas Minimamente Invasivas", 
    description: "Abordagens cirúrgicas que preservam partes moles, reduzem agressão muscular e perda sanguínea, otimizando cicatrização, controle da dor e recuperação funcional precoce." 
  },
  { 
    title: "Bloqueio dos Nervos Geniculares", 
    description: "Procedimento intervencionista guiado por anatomia de superfície e imagem, indicado para analgesia em dor crônica do joelho refratária, especialmente em pacientes sem indicação cirúrgica." 
  },
];

const faqs = [
  { q: "Como agendar uma consulta?", a: "Você pode agendar sua consulta através do nosso WhatsApp, por telefone ou preenchendo o formulário de contato." },
  { q: "Aceita convênios?", a: "Atendemos diversos convênios médicos para consultas e cirurgias. Entre em contato para verificar a cobertura." },
  { q: "Onde as cirurgias são realizadas?", a: "As cirurgias são realizadas nos melhores hospitais de São Paulo, com toda infraestrutura e segurança." },
  { q: "Quanto tempo dura a internação?", a: "Artroscopias permitem alta no mesmo dia. Próteses costumam requerer 2 a 3 dias de internação." },
];

const hospitals = [
  { name: "Vila Nova Star", image: "/vilanovastar.jpg" },
  { name: "Hospital Sírio-Libanês", image: "/sirio.jpg" },
  { name: "Hospital Nove de Julho", image: "/9dejulho.png" },
  { name: "Hospital São Camilo", image: "/saocamilo.jpeg" },
  { name: "São Luiz Itaim", image: "/saoluis.avif" },
];

export default function PinnedSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLElement | null)[]>([]);
  const statsElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hospitalsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = panelsRef.current.filter(Boolean) as HTMLElement[];

    const ctx = gsap.context(() => {
      // Configura os painéis para o efeito de pinning (exceto hospitais)
      panels.slice(0, -1).forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });

      // Animação horizontal para a seção de hospitais
      const hospitalsPanel = panels[panels.length - 1];
      const hospitalsTrack = hospitalsTrackRef.current;
      
      if (hospitalsPanel && hospitalsTrack) {
        const trackWidth = hospitalsTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = trackWidth - viewportWidth + 80; // 80px para padding

        gsap.to(hospitalsTrack, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: hospitalsPanel,
            start: "top top",
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            pinSpacing: true,
          },
        });
      }

      // Animação dos números stats
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
        <div className="h-screen w-full bg-blue-50 flex px-0 overflow-hidden">
          {/* Lado Esquerdo - Nome, Stats, Formação e Atuação */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
            
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-12">
              Dr. Vitor<br />Ricardo
            </h2>

            {/* Linha divisória */}
            <div className="w-full h-px bg-gray-400 mb-8" />

            {/* Stats - Grid Especificações */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold tracking-[0.1em] text-gray-500 uppercase mb-2">{stat.label}</p>
                  <div
                    ref={(el) => { statsElementsRef.current[index] = el; }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
                  >
                    {stat.prefix || ""}0{stat.suffix || ""}
                  </div>
                </div>
              ))}
            </div>

            {/* Linha divisória */}
            <div className="w-full h-px bg-gray-400 mb-8" />

            {/* Formação - Grid de texto com mais ênfase */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              <div>
                <p className="text-base font-bold tracking-[0.1em] text-gray-500 uppercase mb-3">GRADUAÇÃO</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Formado em Medicina pela USP, universidade mais respeitadas da América Latina.</p>
              </div>
              <div>
                <p className="text-base font-bold tracking-[0.1em] text-gray-500 uppercase mb-3">RESIDÊNCIA</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Instituto de Ortopedia e Traumatologia do HC-FMUSP, maior centro de referência em ortopedia do país.</p>
              </div>
              <div>
                <p className="text-base font-bold tracking-[0.1em] text-gray-500 uppercase mb-3">TÍTULO SBOT</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Conquistou o 1º lugar nacional no exame de título de especialista da SBOT.</p>
              </div>
              <div>
                <p className="text-base font-bold tracking-[0.1em] text-gray-500 uppercase mb-3">ESPECIALIZAÇÃO</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Cirurgia do joelho, com foco em artrose do joelho, prótese total do joelho e artroscopia. </p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Apenas Jornada */}
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center px-16 xl:px-20 py-16">
            <h3 className="text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-12">
              Excelência técnica e cuidado centrado no paciente
            </h3>

            <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-medium">
              <p>
                Desde cedo me interessei pelo estudo da artrose, motivado pelo impacto que essa condição exerce na qualidade de vida dos pacientes.
              </p>
              <p>
                Aprofundei-me em técnicas modernas e minimamente invasivas, buscando aplicar os conceitos mais atuais da artroplastia total do joelho.
              </p>
              <p>
                Atualmente, faço parte do HC-FMUSP, onde atuo como cirurgião, pesquisador e preceptor, auxiliando na formação de novos médicos.
              </p>
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
        <div className="h-screen w-full bg-neutral-900 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
          {/* Título */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-stone-200 tracking-tighter leading-[0.9] mb-12">
            Áreas de Atuação
          </h2>

          {/* Lista de Tratamentos */}
          <div className="max-w-5xl">
            {treatments.map((treatment, index) => (
              <div key={index}>
                {/* Linha divisória */}
                <div className="w-full h-px bg-stone-700 mb-6" />
                
                {/* Título do tratamento */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-200 leading-tight mb-4">
                  {treatment.title}
                </p>
                
                {/* Descrição */}
                <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-6">
                  {treatment.description}
                </p>
              </div>
            ))}
            
            {/* Linha divisória final */}
            <div className="w-full h-px bg-stone-700" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - FAQ */}
      <section
        ref={(el) => { panelsRef.current[2] = el; }}
        id="faq"
        className="relative h-screen z-30"
      >
        <div className="h-screen w-full bg-stone-100 flex items-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tighter leading-[0.9] mb-12">
              Dúvidas<br />Frequentes
            </h2>

            {/* FAQ - Abre com hover */}
            <div className="space-y-0 border-t border-gray-400">
              {faqs.map((faq, index) => (
                <div key={index} className="group border-b border-gray-400">
                  <div className="flex items-center justify-between py-6 cursor-default transition-all duration-300 group-hover:pl-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{faq.q}</span>
                    <span className="text-3xl font-bold text-gray-400 group-hover:text-primary group-hover:rotate-45 transition-all duration-300 shrink-0 ml-4">+</span>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium pb-6 pr-12 pl-2">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - HOSPITAIS */}
      <section
        ref={(el) => { panelsRef.current[3] = el; }}
        id="hospitais"
        className="relative h-screen z-40"
      >
        <div className="h-screen w-full bg-neutral-950 flex flex-col justify-center py-16 overflow-hidden">
          <div className="mb-8 px-8 md:px-16 lg:px-24">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
              Hospitais <br />Onde Atuo
            </h2>
          </div>

          {/* Galeria Horizontal de Hospitais */}
          <div className="flex-1 flex items-center overflow-hidden">
            <div 
              ref={hospitalsTrackRef}
              className="flex gap-5 pl-8 md:pl-16 lg:pl-20"
            >
              {hospitals.map((hospital, index) => (
                <div 
                  key={index} 
                  className="group relative shrink-0 w-[calc(33.333vw-3rem)] h-[60vh] rounded-md overflow-hidden cursor-pointer"
                >
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
                    {hospital.name}
                  </h3>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
