export default function FeaturedCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Precisa de uma avaliação?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Agende uma consulta para discutirmos o melhor tratamento para o seu caso específico. Atendimento humanizado com tecnologia de ponta.
        </p>
        <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-gray-50 transition-all shadow-lg">
          Agendar Consulta
        </a>
      </div>
    </section>
  );
}
