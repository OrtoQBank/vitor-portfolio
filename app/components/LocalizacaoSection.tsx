export default function LocalizacaoSection() {
  return (
    <section
      id="localizacao"
      className="relative min-h-screen bg-dark-bg"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[0.9] mb-4">
              Localização do Consultório
            </h2>
            <p className="text-base text-gray-300">
              Escolha a opção mais conveniente para você e agende sua consulta.
            </p>
          </div>

          {/* Mapa */}
          <div className="w-full h-[35vh] rounded-2xl overflow-hidden mb-6 bg-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975885850455!2d-46.6565!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Consultório Presencial */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">Consultório Presencial</h3>
                  <p className="text-gray-600 text-xs">Rua Teste, 123 - Bairro</p>
                  <p className="text-gray-600 text-xs">São Paulo - SP</p>
                </div>
              </div>
            </div>

            {/* Consulta Online */}
            <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">Consulta Online</h3>
                  <p className="text-gray-600 text-xs">Atendimento por videochamada</p>
                  <p className="text-gray-600 text-xs">Disponível em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
