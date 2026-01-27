"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = panelsRef.current.filter(Boolean) as HTMLElement[];

    const ctx = gsap.context(() => {
      // Configura os painéis para o efeito de pinning
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
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

            {/* Formação - Grid de texto com mais ênfase */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-2">GRADUAÇÃO</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Formado em Medicina pela USP, universidade mais respeitada da América Latina.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-2">RESIDÊNCIA</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Instituto de Ortopedia e Traumatologia do HC-FMUSP, maior centro de referência em ortopedia do país.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-2">TÍTULO SBOT</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Conquistou o 1º lugar nacional no exame de título de especialista da SBOT.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-2">ESPECIALIZAÇÃO</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Especialização em Cirurgia do Joelho no IOT-HCFMUSP, com foco em artrose do joelho, prótese total do joelho e artroscopia.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-2">PRECEPTOR USP</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Preceptor da Residência Médica e Graduação na Faculdade de Medicina da USP.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2 - MINHA JORNADA */}
      <section
        ref={(el) => { panelsRef.current[1] = el; }}
        id="jornada"
        className="relative h-screen z-15"
      >
        <div className="h-screen w-full bg-white flex px-0 overflow-hidden">
          {/* Lado Esquerdo - Foto do Médico + 3 Cards */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
            
            {/* Foto do Médico - Placeholder */}
            <div className="relative w-64 h-[45vh] mb-8 rounded-2xl overflow-hidden bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Foto do Médico</p>
              </div>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-2">Formação de Excelência</p>
                <p className="text-sm text-gray-600 leading-tight">Formação completa na Universidade de São Paulo, considerada a melhor instituição do país.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.998 0" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-2">Tratamentos Modernos</p>
                <p className="text-sm text-gray-600 leading-tight">Técnicas minimamente invasivas e tecnologia de ponta.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-2">Atendimento Humanizado</p>
                <p className="text-sm text-gray-600 leading-tight">Cuidado personalizado para cada paciente.</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Minha Jornada */}
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center px-16 xl:px-20 py-16">
            <p className="text-sm font-bold tracking-[0.1em] text-gray-500 uppercase mb-4">Minha Jornada</p>
            
            <h3 className="text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-12">
              Excelência técnica e cuidado centrado no paciente
            </h3>

            <div className="space-y-6 text-xl text-gray-700 leading-relaxed font-medium">
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
      </section>

      {/* SEÇÃO 3 - TRATAMENTOS */}
      <section
        ref={(el) => { panelsRef.current[2] = el; }}
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

      {/* SEÇÃO 4 - FAQ */}
      <section
        ref={(el) => { panelsRef.current[3] = el; }}
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

      {/* SEÇÃO 5 - HOSPITAIS */}
      <section
        ref={(el) => { panelsRef.current[4] = el; }}
        id="hospitais"
        className="relative h-screen z-40"
      >
        <div className="h-screen w-full bg-neutral-950 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
              Hospitais Onde Atuo
            </h2>
          </div>

          {/* Grid de Hospitais */}
          <div className="grid grid-cols-5 gap-4 h-[50vh]">
            {hospitals.map((hospital, index) => (
              <div 
                key={index} 
                className="group relative rounded-lg overflow-hidden h-full"
              >
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-sm md:text-base lg:text-lg font-medium text-white leading-tight">
                    {hospital.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
