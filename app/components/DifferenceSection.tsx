"use client";

import { useRef } from "react";
import TestimonialCards from "./TestimonialCards";

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="especialidades"
      ref={sectionRef}
      className="relative h-[300vh] bg-white"
    >
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl text-center relative">
          {/* Texto de fundo */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-gray-900 leading-[1.1] tracking-tight  select-none">
            Dr. Vitor Ricardo.
            <br />
            Excelência em
            <br />
            Cirurgia de Joelho.
          </h2>

          {/* Cards animados sobre o texto */}
          <TestimonialCards sectionRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
