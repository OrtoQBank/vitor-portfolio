const treatments = [
  { 
    title: "Prótese Total do Joelho", 
    description: "Artroplastia total do joelho com planejamento pré-operatório individualizado, utilizando análise de eixo mecânico, alinhamento funcional e implantes de alta durabilidade para restauração precisa da biomecânica articular." 
  },
  { 
    title: "Artrose do Joelho", 
    description: "Tratamento da osteoartrose baseado em estadiamento clínico e radiológico, com protocolos personalizados que incluem terapias conservadoras avançadas, infiltrações guiadas e indicação cirúrgica no momento ideal." 
  },
  { 
    title: "Técnicas Minimamente Invasivas", 
    description: "Abordagens cirúrgicas que preservam partes moles, reduzem agressão muscular e perda sanguínea, otimizando cicatrização, controle da dor e recuperação funcional precoce." 
  },
  { 
    title: "Bloqueio dos Nervos Geniculares", 
    description: "Procedimento intervencionista guiado por anatomia de superfície e imagem, indicado para analgesia em dor crônica do joelho refratária, especialmente em pacientes sem indicação cirúrgica." 
  },
];

export default function TratamentosSection() {
  return (
    <section
      id="tratamentos"
      className="relative min-h-screen bg-[#2a332c]"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
        {/* Título */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9] mb-12">
          Áreas de Atuação
        </h2>

        {/* Lista de Tratamentos */}
        <div className="max-w-5xl">
          {treatments.map((treatment, index) => (
            <div key={index}>
              {/* Linha divisória */}
              <div className="w-full h-px bg-[#3a4a3e] mb-6" />
              
              {/* Título do tratamento */}
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#e8e6e0] leading-tight mb-4">
                {treatment.title}
              </p>
              
              {/* Descrição */}
              <p className="text-base md:text-lg text-[#a8b09e] leading-relaxed mb-6">
                {treatment.description}
              </p>
            </div>
          ))}
          
          {/* Linha divisória final */}
          <div className="w-full h-px bg-[#3a4a3e]" />
        </div>
      </div>
    </section>
  );
}
