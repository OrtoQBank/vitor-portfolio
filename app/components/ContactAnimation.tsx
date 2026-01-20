"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContactAnimationProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ANIMATION_CONFIG = {
  initial: { y: 150, scale: 0.7 },
  final: { y: 0, scale: 1 },
  ease: "elastic.out(1, 0.5)",
  scrub: 1,
};

const CONTACT_INFO = {
  phone: "5511912278540",
  schedule: "Consulta Presencial: Seg a Sex, 8h às 18h",
  availability: "Atendimento Online Disponível",
};

export default function ContactAnimation({ sectionRef }: ContactAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        ANIMATION_CONFIG.initial,
        {
          ...ANIMATION_CONFIG.final,
          ease: ANIMATION_CONFIG.ease,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "center top",
            scrub: ANIMATION_CONFIG.scrub,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <div className="w-full flex justify-center">
      <div ref={cardRef} className="w-full max-w-3xl">
        <a
          href={`https://wa.me/${CONTACT_INFO.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-green-500/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 transition-all duration-300 hover:scale-105 active:scale-95 border-4 border-white/30 hover:border-white/50 hover:shadow-3xl"
          aria-label="Iniciar conversa no WhatsApp"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                {CONTACT_INFO.schedule}
              </p>
              <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
                {CONTACT_INFO.availability}
              </p>
            </div>

            <div className="shrink-0 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-green-600 font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:bg-gray-50 shadow-lg hover:shadow-xl">
              <span>Iniciar Conversa</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
