import Header from "../components/Header";

export default function FAQPage() {
  const faqs = [
    {
      category: "Consultas",
      questions: [
        {
          q: "Como agendar uma consulta?",
          a: "Você pode agendar sua consulta através do nosso WhatsApp (11) 99999-9999, por telefone ou preenchendo o formulário de contato em nosso site."
        },
        {
          q: "Aceita convênios?",
          a: "Atendemos diversos convênios médicos para consultas e cirurgias. Entre em contato com nossa equipe para verificar a cobertura do seu plano."
        },
        {
          q: "Qual o valor da consulta particular?",
          a: "Para valores de consulta particular, por favor entre em contato diretamente com nossa secretaria."
        }
      ]
    },
    {
      category: "Cirurgias",
      questions: [
        {
          q: "Onde as cirurgias são realizadas?",
          a: "As cirurgias são realizadas nos melhores hospitais de São Paulo, garantindo toda a infraestrutura e segurança necessárias para o seu procedimento."
        },
        {
          q: "Quanto tempo dura a internação?",
          a: "O tempo de internação varia conforme o procedimento. Artroscopias geralmente permitem alta no mesmo dia ou dia seguinte. Próteses costumam requerer 2 a 3 dias."
        },
        {
          q: "Qual o tipo de anestesia utilizada?",
          a: "A anestesia é definida pelo médico anestesista em conjunto com o cirurgião, visando o maior conforto e segurança. Geralmente utiliza-se raquianestesia com sedação ou anestesia geral."
        }
      ]
    },
    {
      category: "Pós-operatório",
      questions: [
        {
          q: "Quando começo a fisioterapia?",
          a: "Na maioria dos casos, a fisioterapia inicia-se ainda no hospital ou na primeira semana após a cirurgia, seguindo protocolos específicos."
        },
        {
          q: "Vou precisar usar muletas?",
          a: "O uso de muletas depende do tipo de cirurgia. Em artroscopias simples muitas vezes não é necessário. Em reconstruções ligamentares e próteses, o uso é temporário para proteção."
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-6 bg-white min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre consultas, procedimentos e recuperação.
            </p>
          </div>

          <div className="space-y-12">
            {faqs.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-gray-50 rounded-xl p-6 border border-gray-100 open:bg-white open:shadow-md transition-all duration-300"
                    >
                      <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between text-lg">
                        {faq.q}
                        <span className="ml-4 flex-shrink-0 text-primary group-open:rotate-180 transition-transform duration-300">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed pl-1">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Não encontrou sua dúvida?</h3>
            <p className="text-gray-600 mb-6">Estamos à disposição para esclarecer qualquer questão.</p>
            <a href="/contato" className="text-primary font-bold hover:underline">
              Entre em contato conosco
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
