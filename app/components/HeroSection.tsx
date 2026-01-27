"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const doctorImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const doctorImage = doctorImageRef.current;

    if (!section || !doctorImage) return;

    const ctx = gsap.context(() => {
      gsap.to(doctorImage, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 pt-32 pb-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Information */}
          <div className="flex flex-col justify-center text-left pt-16 lg:pt-24">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight tracking-tight">
              Dr. Vitor Ricardo
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-4 font-light">
              Especialista em Cirurgia do Joelho
            </p>
            <p className="text-base text-foreground-subtle mb-8 max-w-md">
              Tratamento da artrose do joelho, prótese total do joelho e artroscopia.
            </p>

            <div className="flex flex-col gap-3 text-foreground-muted mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-foreground-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span><strong>Presencial:</strong> Rua Real Address, 123</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-foreground-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span><strong>Online:</strong> Consulta disponível</span>
              </div>
            </div>
            
            {/* Social Media Links - Brand colors preserved */}
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl w-fit"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Agendar pelo WhatsApp</span>
              </a>
              
              <a 
                href="https://instagram.com/drvitorricardo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:from-[#7232A1] hover:via-[#C92A5F] hover:to-[#E06A2F] text-white px-6 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl w-fit"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Siga no Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Side - Doctor Image with Credentials */}
          <div 
            ref={doctorImageRef}
            className="relative flex flex-col items-center justify-start h-full"
          >
            <div className="relative w-full max-w-lg h-[500px] lg:h-[650px]">
              <Image
                src="/doctor.png"
                alt="Dr. Vitor Ricardo"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
            
            {/* Credentials Card */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl px-8 py-5 mt-4 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-foreground-muted">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-foreground-subtle uppercase tracking-wide">CRM-SP</span>
                  <span className="font-bold text-lg">226.708</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-foreground-subtle uppercase tracking-wide">RQE</span>
                  <span className="font-bold text-lg">136.623</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-border"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-foreground-subtle uppercase tracking-wide">TEOT</span>
                  <span className="font-bold text-lg">20322</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
