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

const testimonials = [
  {
    name: "Maria Silva",
    procedure: "Prótese Total do Joelho",
    text: "Após anos sofrendo com dores intensas, o Dr. Vitor me devolveu a qualidade de vida. A cirurgia foi um sucesso e hoje consigo caminhar sem dor.",
  },
  {
    name: "João Santos",
    procedure: "Artroscopia",
    text: "Profissional excepcional! Explicou todo o procedimento com clareza e o pós-operatório foi muito mais tranquilo do que eu esperava.",
  },
  {
    name: "Ana Oliveira",
    procedure: "Tratamento de Artrose",
    text: "Encontrei no Dr. Vitor um médico que realmente escuta o paciente. O tratamento personalizado fez toda a diferença na minha recuperação.",
  },
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
        className="relative h-screen z-10 bg-background"
      >
        <div className="h-screen w-full flex px-0 overflow-hidden">
          {/* Lado Esquerdo - Nome, Stats, Formação e Atuação */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
            
            
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tighter leading-[0.9] mb-12">
              Dr. Vitor<br />Ricardo
            </h2>

            {/* Linha divisória */}
            <div className="w-full h-px bg-border mb-8" />

            {/* Formação - Grid de texto com mais ênfase */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">GRADUAÇÃO</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Formado em Medicina pela USP, universidade mais respeitada da América Latina.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">RESIDÊNCIA</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Instituto de Ortopedia e Traumatologia do HC-FMUSP, maior centro de referência em ortopedia do país.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">TÍTULO SBOT</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Conquistou o 1º lugar nacional no exame de título de especialista da SBOT.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">ESPECIALIZAÇÃO</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Especialização em Cirurgia do Joelho no IOT-HCFMUSP, com foco em artrose do joelho, prótese total do joelho e artroscopia.</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">PRECEPTOR USP</p>
                <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Preceptor da Residência Médica e Graduação na Faculdade de Medicina da USP.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2 - MINHA JORNADA */}
      <section
        ref={(el) => { panelsRef.current[1] = el; }}
        id="jornada"
        className="relative h-screen z-15 bg-card"
      >
        <div className="h-screen w-full flex px-0 overflow-hidden">
          {/* Lado Esquerdo - Foto do Médico + 3 Cards */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
            
            {/* Foto do Médico - Placeholder */}
            <div className="relative w-64 h-[45vh] mb-8 rounded-2xl overflow-hidden bg-muted border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center text-foreground-subtle">
                <svg className="w-12 h-12 mx-auto mb-3 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">Foto do Médico</p>
              </div>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-xl p-5 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground mb-2">Formação de Excelência</p>
                <p className="text-sm text-foreground-muted leading-tight">Formação completa na Universidade de São Paulo, considerada a melhor instituição do país.</p>
              </div>
              <div className="bg-muted rounded-xl p-5 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.998 0" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground mb-2">Tratamentos Modernos</p>
                <p className="text-sm text-foreground-muted leading-tight">Técnicas minimamente invasivas e tecnologia de ponta.</p>
              </div>
              <div className="bg-muted rounded-xl p-5 border border-border text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground mb-2">Atendimento Humanizado</p>
                <p className="text-sm text-foreground-muted leading-tight">Cuidado personalizado para cada paciente.</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Minha Jornada */}
          <div className="hidden lg:flex w-1/2 h-full flex-col justify-center px-16 xl:px-20 py-16">
            <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-4">Minha Jornada</p>
            
            <h3 className="text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-12">
              Excelência técnica e cuidado centrado no paciente
            </h3>

            <div className="space-y-6 text-xl text-foreground-muted leading-relaxed font-medium">
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
        className="relative h-screen z-20 bg-[#2a332c]"
      >
        <div className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
          {/* Título */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9] mb-12">
            Áreas de Atuação
          </h2>

          {/* Lista de Tratamentos */}
          <div className="max-w-5xl">
            {treatments.map((treatment, index) => (
              <div key={index}>
                {/* Linha divisória */}
                <div className="w-full h-px bg-[#3a4a3e] mb-6" />
                
                {/* Título do tratamento */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e8e6e0] leading-tight mb-4">
                  {treatment.title}
                </p>
                
                {/* Descrição */}
                <p className="text-lg md:text-xl text-[#a8b09e] leading-relaxed mb-6">
                  {treatment.description}
                </p>
              </div>
            ))}
            
            {/* Linha divisória final */}
            <div className="w-full h-px bg-[#3a4a3e]" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - FAQ */}
      <section
        ref={(el) => { panelsRef.current[3] = el; }}
        id="faq"
        className="relative h-screen z-30 bg-muted"
      >
        <div className="h-screen w-full flex items-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.9] mb-12">
              Dúvidas<br />Frequentes
            </h2>

            {/* FAQ - Abre com hover */}
            <div className="space-y-0 border-t border-border">
              {faqs.map((faq, index) => (
                <div key={index} className="group border-b border-border">
                  <div className="flex items-center justify-between py-6 cursor-default transition-all duration-300 group-hover:pl-2">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{faq.q}</span>
                    <span className="text-3xl font-bold text-border group-hover:text-primary group-hover:rotate-45 transition-all duration-300 shrink-0 ml-4">+</span>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl text-foreground-muted leading-relaxed font-medium pb-6 pr-12 pl-2">{faq.a}</p>
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
        className="relative h-screen z-40 bg-[#1f2621]"
      >
        <div className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9]">
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
                <div className="absolute inset-0 bg-[#1f2621]/30" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1f2621]/80 to-transparent">
                  <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#e8e6e0] leading-tight">
                    {hospital.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - DEPOIMENTOS */}
      <section
        ref={(el) => { panelsRef.current[5] = el; }}
        id="depoimentos"
        className="relative h-screen z-50 bg-card"
      >
        <div className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-sm font-bold tracking-widest text-foreground-subtle uppercase mb-4">
                Depoimentos
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[0.9]">
                O que dizem<br />nossos pacientes
              </h2>
            </div>

            {/* Grid de Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-muted rounded-2xl p-8 border border-border"
                >
                  {/* Ícone de aspas */}
                  <svg className="w-10 h-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  
                  {/* Texto do depoimento */}
                  <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Info do paciente */}
                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground-subtle">{testimonial.procedure}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - LOCALIZAÇÃO */}
      <section
        ref={(el) => { panelsRef.current[6] = el; }}
        id="localizacao"
        className="relative h-screen z-[60] bg-muted"
      >
        <div className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[0.9] mb-4">
                Localização do Consultório
              </h2>
              <p className="text-lg text-foreground-muted">
                Escolha a opção mais conveniente para você e agende sua consulta.
              </p>
            </div>

            {/* Mapa */}
            <div className="w-full h-[35vh] rounded-2xl overflow-hidden mb-6 bg-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975885850455!2d-46.6565!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Consultório"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Consultório Presencial */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Consultório Presencial</h3>
                    <p className="text-foreground-muted text-sm">Rua Teste, 123 - Bairro</p>
                    <p className="text-foreground-muted text-sm">São Paulo - SP</p>
                  </div>
                </div>
              </div>

              {/* Consulta Online */}
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Consulta Online</h3>
                    <p className="text-foreground-muted text-sm">Atendimento por videochamada</p>
                    <p className="text-foreground-muted text-sm">Disponível em todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - AGENDE SUA CONSULTA */}
      <section
        ref={(el) => { panelsRef.current[7] = el; }}
        id="contato"
        className="relative h-screen z-[70] bg-[#2a332c]"
      >
        <div className="h-screen w-full flex flex-col">
          {/* Conteúdo Central */}
          <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="text-center max-w-3xl">
              <p className="text-sm font-bold tracking-widest text-[#a8b09e] uppercase mb-4">
                Entre em Contato
              </p>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9] mb-6">
                Agende sua Consulta
              </h2>
              
              <p className="text-lg text-[#a8b09e] mb-10 max-w-xl mx-auto">
                Estamos prontos para atender você. Entre em contato pelo WhatsApp para agendar sua consulta de forma rápida e prática.
              </p>

              {/* Botão WhatsApp - cor oficial da marca */}
              <a
                href="https://wa.me/5511912270540"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl mb-10"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar via WhatsApp</span>
              </a>

              {/* Telefone */}
              <div className="flex items-center justify-center gap-2 text-[#a8b09e] mb-8">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(11) 91227-0540</span>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://instagram.com/drvitorricardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#e8e6e0]/10 flex items-center justify-center text-[#a8b09e] hover:text-[#e8e6e0] hover:bg-[#e8e6e0]/20 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-6 px-8 md:px-16 lg:px-24 border-t border-[#3a4a3e]">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#a8b09e] text-center md:text-left">
                © 2026 Dr. Vitor Ricardo. Todos os direitos reservados. | CRM-SP: 226.708 | RQE: 136.623
              </p>
              <div className="flex gap-6 text-sm text-[#a8b09e]">
                <a href="#" className="hover:text-[#e8e6e0] transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-[#e8e6e0] transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
