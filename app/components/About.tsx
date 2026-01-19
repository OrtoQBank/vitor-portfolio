export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o Dr. Vitor Oliveira
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicado a devolver a mobilidade e qualidade de vida aos pacientes através da excelência em cirurgia de joelho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Trajetória e Formação</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Com mais de 15 anos de experiência, o Dr. Vitor Oliveira construiu uma carreira sólida focada exclusivamente no tratamento de patologias do joelho.
              </p>
              <p>
                Formado pela [Nome da Universidade], com residência em Ortopedia e Traumatologia no [Nome do Hospital], especializou-se em Cirurgia do Joelho através de fellowship no renomado [Nome da Instituição].
              </p>
              <p>
                Membro titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da Sociedade Brasileira de Cirurgia do Joelho (SBCJ).
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 bg-white rounded-xl border border-gray-200">
                <span className="block text-3xl font-bold text-primary mb-1">15+</span>
                <span className="text-sm text-gray-600">Anos de Experiência</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200">
                <span className="block text-3xl font-bold text-primary mb-1">2k+</span>
                <span className="text-sm text-gray-600">Cirurgias Realizadas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Filosofia de Atendimento</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Humanização</h4>
              <p className="text-gray-600 text-sm">Tratamento focado na pessoa, não apenas na doença, respeitando as necessidades individuais.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tecnologia</h4>
              <p className="text-gray-600 text-sm">Utilização das técnicas mais modernas e menos invasivas disponíveis na medicina.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Transparência</h4>
              <p className="text-gray-600 text-sm">Comunicação clara sobre diagnósticos, tratamentos e expectativas de recuperação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
