export default function FeaturedCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Encontre o tratamento certo pelo preço justo
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Experiência de 15+ anos em cirurgia de joelho com atendimento humanizado e tecnologia de ponta.
        </p>
        <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary font-semibold text-lg hover:bg-gray-50 transition-all shadow-lg">
          Agendar Consulta
        </a>
      </div>
    </section>
  );
}
