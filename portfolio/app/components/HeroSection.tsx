import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#4a5d8f] via-[#6b7ca8] to-[#b8c5e0] overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto max-w-5xl px-6 pt-42 pb-8 text-center relative z-20">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight tracking-tight">
          A maneira mais rápida de
          <br />
          recuperar sua mobilidade
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
          Tratamento especializado em cirurgia de joelho. Diagnóstico preciso e
          cuidado personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-normal leading-none transition-all bg-white text-card-foreground hover:bg-gray-50 shadow-lg"
          >
            <span className="text-nowrap">Agendar Consulta</span>
          </a>
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-normal leading-none transition-all bg-white/10 backdrop-blur-sm border-2 border-white/40 text-primary-foreground hover:bg-white/20"
          >
            <span className="text-nowrap">Falar com Especialista</span>
          </a>
        </div>
      </div>

      {/* Doctor Image - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[700px] z-10">
        <Image
          src="/doctor.png"
          alt="Dr. Vitor Oliveira"
          fill
          className="object-contain object-bottom"
          priority
        />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#b8c5e0] to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
