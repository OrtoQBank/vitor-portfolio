import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-linear-to-b from-[#4a5d8f] via-[#6b7ca8] to-[#b8c5e0] overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto max-w-5xl px-6 pt-42 pb-8 text-center relative z-20">
        <p className="text-lg md:text-xl text-white/90 mb-4 font-light">
          Bem-vindo ao consultório
        </p>
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight tracking-tight">
          Dr. Vitor Ricardo
        </h1>
        <p className="text-2xl md:text-3xl text-white/95 mb-6 font-light">
          Especialista em Cirurgia do Joelho
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Tratamento da artrose do joelho, prótese total do joelho e artroscopia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold leading-none transition-all bg-white text-primary hover:bg-gray-50 shadow-lg"
          >
            <span className="text-nowrap">Agendar Consulta</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Consultório Presencial e Online</span>
          </div>
          <div className="hidden sm:block text-white/50">|</div>
          <div>
            <span className="font-semibold">CRM-SP 226.708</span> / <span className="font-semibold">RQE 136.623</span>
          </div>
        </div>
      </div>

      {/* Doctor Image - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[700px] z-10">
        <Image
          src="/doctor.png"
          alt="Dr. Vitor Ricardo"
          fill
          className="object-contain object-bottom"
          priority
        />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#b8c5e0] to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
