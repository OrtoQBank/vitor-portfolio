import Header from "../components/Header";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Como prevenir lesões no joelho durante a prática de esportes",
      excerpt:
        "O aquecimento correto e o fortalecimento muscular são fundamentais para proteger seus joelhos. Saiba quais exercícios não podem faltar na sua rotina.",
      date: "12 Jan 2026",
      category: "Prevenção",
      image: "bg-blue-100", // Placeholder class
    },
    {
      id: 2,
      title: "Mitos e verdades sobre a prótese de joelho",
      excerpt:
        "Muitos pacientes adiam a cirurgia por medo ou desinformação. Esclarecemos as principais dúvidas sobre durabilidade, recuperação e limitações.",
      date: "08 Jan 2026",
      category: "Cirurgia",
      image: "bg-green-100",
    },
    {
      id: 3,
      title: "A importância da fisioterapia no pós-operatório",
      excerpt:
        "A cirurgia é apenas metade do caminho. Descubra por que a dedicação à fisioterapia é determinante para o resultado final do tratamento.",
      date: "05 Jan 2026",
      category: "Reabilitação",
      image: "bg-purple-100",
    },
    {
      id: 4,
      title: "Dor no joelho ao subir escadas: o que pode ser?",
      excerpt:
        "Esse sintoma comum pode indicar condromalácia patelar ou artrose inicial. Entenda os sinais de alerta e quando procurar um médico.",
      date: "02 Jan 2026",
      category: "Sintomas",
      image: "bg-orange-100",
    },
    {
      id: 5,
      title: "Ácido Hialurônico: quando é indicado?",
      excerpt:
        "A viscossuplementação tem ganhado destaque no tratamento da artrose. Saiba para quem ela funciona melhor.",
      date: "28 Dez 2025",
      category: "Tratamentos",
      image: "bg-teal-100",
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog & Notícias
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Artigos, dicas e novidades sobre saúde ortopédica para você se manter informado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className={`h-48 ${post.image} relative overflow-hidden group`}>
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                   </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4 text-xs font-medium uppercase tracking-wider">
                    <span className="text-primary bg-primary/5 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors mt-auto"
                  >
                    Ler artigo completo
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
