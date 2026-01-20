"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Animação do título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animação dos cards em cascata
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  

  const specialties = [
    {
      number: "01",
      title: "Prótese do Joelho",
      description: "Substituição da articulação desgastada por componentes metálicos e plásticos de alta durabilidade, com técnica personalizada para sua anatomia.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      number: "02",
      title: "Artrose do Joelho",
      description: "Tratamento completo da artrose utilizando técnicas modernas e minimamente invasivas, com foco na recuperação da mobilidade.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      number: "03",
      title: "Bloqueio dos Nervos Geniculares",
      description: "Procedimento minimamente invasivo para controle da dor crônica no joelho, oferecendo alívio significativo.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="tratamentos"
      className="relative bg-white py-32 px-6 overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Título Principal - Estilo Awwwards */}
        <div className="mb-24">
          <h2
            ref={titleRef}
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-8"
          >
            Áreas de<br />
            <span className="text-primary">atuação.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl font-light leading-relaxed">
            Artrose do Joelho, Prótese Total e Artroscopia
          </p>
        </div>

        {/* Texto descritivo */}
        <div className="mb-32 max-w-5xl">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Atuo no tratamento da artrose do joelho utilizando{" "}
            <span className="font-semibold text-gray-900">técnicas minimamente invasivas</span>{" "}
            e prótese de joelho, com objetivo de devolver saúde e qualidade de vida aos meus pacientes.
            Também realizo o tratamento de{" "}
            <span className="font-semibold text-gray-900">lesões esportivas</span>{" "}
            do joelho (ligamentos, meniscos, cartilagem) por artroscopia, possibilitando o retorno pleno ao esporte.
          </p>
        </div>

        {/* Tratamentos Principais - Grid Grande */}
        <div className="mb-32">
          <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 tracking-tight">
            Tratamentos
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Número */}
                <div className="text-8xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors duration-500 mb-4">
                  {specialty.number}
                </div>

                {/* Ícone */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={specialty.icon}
                    />
                  </svg>
                </div>

                {/* Título */}
                <h4 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {specialty.title}
                </h4>

                {/* Descrição */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
