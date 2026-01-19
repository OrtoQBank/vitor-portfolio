export default function About() {
  return (
    <section id="sobre" className="min-h-[150vh] relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              Sobre o médico
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça o Dr. Vitor Ricardo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Formação</h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
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

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Minha Jornada</h3>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
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
          </div>
        </div>
      </div>
    </section>
  );
}
