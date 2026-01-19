export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o médico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça o Dr. Vitor Ricardo
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
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Formação</h3>
            <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>Graduado em Medicina pela Universidade de São Paulo (USP)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>Residência médica em Ortopedia e Traumatologia no IOT-HCFMUSP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>1º lugar no Exame para Obtenção do Título de Especialista em Ortopedia da SBOT</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>Especialização em Cirurgia do Joelho no IOT-HCFMUSP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>Membro Titular da SBOT e da SBCJ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                <span>Preceptor da Residência Médica e Graduação na Faculdade de Medicina da USP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Minha Jornada</h3>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed max-w-4xl mx-auto">
            <p>
              Desde cedo me interessei pelo estudo da artrose, motivado pelo impacto que essa condição exerce na qualidade de vida dos pacientes. Durante a residência médica, esse interesse se consolidou, direcionando minha formação para o tratamento com foco na recuperação da mobilidade e bem-estar.
            </p>
            <p>
              Aprofundei-me em técnicas modernas e minimamente invasivas, buscando aplicar os conceitos mais atuais da artroplastia total do joelho, respeitando a anatomia e as particularidades de cada paciente.
            </p>
            <p>
              Atualmente, faço parte do HC-FMUSP, onde atuo como cirurgião, pesquisador e preceptor, auxiliando na formação de novos médicos. Mantenho uma rotina de atualizações, participação em publicações e presença ativa em congressos.
            </p>
            <p>
              Minha prática é pautada pela busca constante por excelência técnica e cuidado centrado no paciente, promovendo qualidade de vida e confiança no movimento.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Diferenciais</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Formação de Excelência</h4>
              <p className="text-gray-600 text-sm">Formação completa na Universidade de São Paulo, considerada a melhor instituição do país.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tratamentos Modernos</h4>
              <p className="text-gray-600 text-sm">Técnicas minimamente invasivas e tecnologia de ponta.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Atendimento Humanizado</h4>
              <p className="text-gray-600 text-sm">Cuidado personalizado para cada paciente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
