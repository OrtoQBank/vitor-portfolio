"use client";

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="min-h-[150vh] relative bg-gray-900"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl"
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Tratamentos
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Conheça os principais tratamentos e procedimentos realizados
          </p>
        </div>

        <div className="mb-12">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Atuo no tratamento da artrose do joelho utilizando técnicas minimamente invasivas e prótese de joelho, com objetivo de devolver saúde e qualidade de vida aos meus pacientes. Também realizo o tratamento de lesões esportivas do joelho (ligamentos, meniscos, cartilagem) por artroscopia, possibilitando o retorno pleno ao esporte.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Prótese do Joelho */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Prótese do Joelho
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Substituição da articulação desgastada por componentes metálicos e plásticos de alta durabilidade, com técnica personalizada para sua anatomia.
              </p>
            </div>

            {/* Artrose do Joelho */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Artrose do Joelho
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tratamento completo da artrose utilizando técnicas modernas e minimamente invasivas, com foco na recuperação da mobilidade.
              </p>
            </div>

            {/* Bloqueio dos Nervos Geniculares */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Bloqueio dos Nervos Geniculares
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Procedimento minimamente invasivo para controle da dor crônica no joelho, oferecendo alívio significativo.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Precisa de uma avaliação?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Agende uma consulta para discutirmos o melhor tratamento para o seu caso específico.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
      </div>
      </div>
    </section>
  );
}
