import { treatments } from "./data";

export default function TratamentosSection() {
  return (
    <section
      id="tratamentos"
      className="relative min-h-screen bg-[#2a332c]"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
        {/* Título */}
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9] mb-12">
          Áreas de Atuação
        </h2>

        {/* Lista de Tratamentos */}
        <div className="max-w-5xl">
          {treatments.map((treatment, index) => (
            <div key={index}>
              {/* Linha divisória */}
              <div className="w-full h-px bg-[#3a4a3e] mb-6" />
              
              {/* Título do tratamento */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e8e6e0] leading-tight mb-4">
                {treatment.title}
              </p>
              
              {/* Descrição */}
              <p className="text-lg md:text-xl text-[#a8b09e] leading-relaxed mb-6">
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
