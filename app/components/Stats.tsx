"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { value: 2000, suffix: "+", label: "Cirurgias Realizadas" },
    { value: 15, suffix: "+", label: "Anos de Experiência" },
    { value: 98, suffix: "%", label: "Taxa de Satisfação" },
    { value: 6, prefix: "3-", label: "Meses Recuperação Média" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = elementsRef.current.filter(Boolean);

      // Configura o ScrollTrigger para cada elemento
      elements.forEach((el, index) => {
        if (!el) return;

        const stat = stats[index];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Inicia assim que entrar na tela (quase no fundo)
            toggleActions: "play none none none", // Toca uma vez e mantém
          },
          onUpdate: () => {
            if (el) {
              const currentVal = Math.floor(obj.val);
              // Formata números acima de 999 com ponto (ex: 2.000)
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
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 px-6 bg-white border-b border-gray-200"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                ref={(el) => {
                  elementsRef.current[index] = el;
                }}
                className="text-5xl font-bold text-primary mb-2"
              >
                {stat.prefix || ""}0{stat.suffix || ""}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
