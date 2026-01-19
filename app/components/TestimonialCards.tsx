"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function TestimonialCards({
  sectionRef,
}: TestimonialCardsProps) {
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const whatsappCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !leftCardRef.current ||
      !rightCardRef.current ||
      !whatsappCardRef.current
    )
      return;

    // Configurar posição inicial dos cards
    gsap.set(leftCardRef.current, {
      x: "-120%",
      opacity: 0,
      rotate: -10,
    });

    gsap.set(rightCardRef.current, {
      x: "120%",
      opacity: 0,
      rotate: 10,
    });

    gsap.set(whatsappCardRef.current, {
      y: "120%",
      opacity: 0,
    });

    // Criar timeline para animar os cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Animar os cards entrando e se encontrando no centro
    tl.to(
      [leftCardRef.current, rightCardRef.current],
      {
        x: "0%",
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power2.out",
      },
      0
    )
      // Card do WhatsApp entra e os outros somem completamente
      .to(
        [leftCardRef.current, rightCardRef.current],
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          pointerEvents: "none",
        },
        ">"
      )
      .to(
        whatsappCardRef.current,
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionRef]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
      {/* Container dos cards de serviços */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 w-full h-full absolute top-0 left-0">
        {/* Card Artrose */}
        <div
          ref={leftCardRef}
          className="pointer-events-auto h-full flex flex-col justify-center"
        >
          <a
            href="#especialidades"
            className="block w-full max-w-[400px] h-[320px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden p-6 transition-transform hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Tratamento de Artrose
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Pacientes 50-70 anos
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Tratamento completo desde opções conservadoras até cirurgia de
              prótese total de joelho.
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Prótese total e parcial
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Diagnóstico preciso
              </li>
            </ul>
          </a>
        </div>

        {/* Card Esportes */}
        <div
          ref={rightCardRef}
          className="pointer-events-auto h-full flex flex-col justify-center"
        >
          <a
            href="#especialidades"
            className="block w-full max-w-[400px] h-[320px] bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden p-6 transition-transform hover:scale-[1.02] active:scale-[0.98] flex flex-col justify-between"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-secondary"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Lesões Esportivas
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
                  Jovens Atletas
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Tratamento especializado focado na recuperação completa e retorno
              seguro.
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                Reconstrução de ligamentos
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                Lesões meniscais
              </li>
            </ul>
          </a>
        </div>
      </div>

      {/* Card WhatsApp */}
      <div
        ref={whatsappCardRef}
        className="pointer-events-auto absolute z-20 top-1/2 left-1/2 -translate-x-1/2 w-full max-w-[600px] mt-80"
      >
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-500/90 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden p-8 text-center transform transition-transform hover:scale-[1.02] active:scale-[0.98] border-4 border-white/20"
        >
          <div className="flex items-center gap-8 text-left">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
              <svg
                className="w-10 h-10 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-white/95 text-lg space-y-2 font-medium">
                <p>Consulta Presencial: Seg a Sex, 8h às 18h</p>
                <p>Atendimento Online Disponível</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-600 font-bold text-xl hover:bg-gray-50 transition-colors shrink-0 shadow-lg">
              Iniciar Conversa
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
