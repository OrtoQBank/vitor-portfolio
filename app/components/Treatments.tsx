export default function Treatments() {
  const services = [
    {
      title: "Prótese do Joelho",
      description:
        "Substituição da articulação desgastada por componentes metálicos e plásticos de alta durabilidade, com técnica personalizada para sua anatomia.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Artrose do Joelho",
      description:
        "Tratamento completo da artrose utilizando técnicas modernas e minimamente invasivas, com foco na recuperação da mobilidade.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
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
      ),
    },
    {
      title: "Bloqueio dos Nervos Geniculares",
      description:
        "Procedimento minimamente invasivo para controle da dor crônica no joelho, oferecendo alívio significativo.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
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
      ),
    },
  ];

  return (
    <section id="tratamentos" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tratamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os principais tratamentos e procedimentos realizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a href="#contato" className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all">
                Ler mais
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de uma avaliação?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Agende uma consulta para discutirmos o melhor tratamento para o
              seu caso específico.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
