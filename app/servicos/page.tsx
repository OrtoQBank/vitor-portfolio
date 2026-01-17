import Header from "../components/Header";

export default function ServicesPage() {
  const services = [
    {
      title: "Artroscopia de Joelho",
      description:
        "Procedimento minimamente invasivo para diagnóstico e tratamento de problemas articulares.",
      details: [
        "Meniscectomia",
        "Reparo de cartilagem",
        "Sinovectomia",
        "Remoção de corpos livres",
      ],
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Prótese de Joelho (Artroplastia)",
      description:
        "Substituição da articulação desgastada por componentes metálicos e plásticos de alta durabilidade.",
      details: [
        "Prótese Total",
        "Prótese Parcial (Unicompartimental)",
        "Revisão de Prótese",
        "Tecnologia Robótica",
      ],
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
      title: "Reconstrução Ligamentar",
      description:
        "Cirurgias para restaurar a estabilidade do joelho após lesões ligamentares.",
      details: [
        "Ligamento Cruzado Anterior (LCA)",
        "Ligamento Cruzado Posterior (LCP)",
        "Ligamento Colateral Medial",
        "Canto Posterolateral",
      ],
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: "Tratamento de Cartilagem",
      description:
        "Técnicas avançadas para reparar ou regenerar o tecido cartilaginoso danificado.",
      details: [
        "Microfraturas",
        "Mosaicoplastia",
        "Membrana de Colágeno",
        "Transplante de Condrócitos",
      ],
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Traumatologia Esportiva",
      description:
        "Cuidado especializado para atletas amadores e profissionais.",
      details: [
        "Lesões musculares",
        "Tendinites",
        "Fraturas por estresse",
        "Retorno ao esporte",
      ],
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Viscossuplementação",
      description:
        "Infiltração de ácido hialurônico para tratamento de artrose e condropatias.",
      details: [
        "Alívio da dor",
        "Melhora da mobilidade",
        "Proteção da cartilagem",
        "Procedimento ambulatorial",
      ],
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 bg-white min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serviços e Tratamentos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos um espectro completo de tratamentos para o joelho,
              desde terapias conservadoras até as cirurgias mais complexas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-gray-600 mb-6 min-h-[3rem]">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-primary rounded-3xl p-10 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Precisa de uma avaliação?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Agende uma consulta para discutirmos o melhor tratamento para o
                seu caso específico.
              </p>
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
