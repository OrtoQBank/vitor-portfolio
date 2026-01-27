export default function SobreSection() {
  return (
    <section
      id="sobre"
      className="relative min-h-screen bg-background"
    >
      <div className="min-h-screen w-full flex px-0 overflow-hidden">
        {/* Lado Esquerdo - Nome, Stats, Formação e Atuação */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
          
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.9] mb-12">
            Dr. Vitor<br />Ricardo
          </h2>

          {/* Linha divisória */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Formação - Grid de texto com mais ênfase */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">GRADUAÇÃO</p>
              <p className="text-lg md:text-xl font-bold text-foreground leading-tight">Formado em Medicina pela USP, universidade mais respeitada da América Latina.</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">RESIDÊNCIA</p>
              <p className="text-lg md:text-xl font-bold text-foreground leading-tight">Instituto de Ortopedia e Traumatologia do HC-FMUSP, maior centro de referência em ortopedia do país.</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">TÍTULO SBOT</p>
              <p className="text-lg md:text-xl font-bold text-foreground leading-tight">Conquistou o 1º lugar nacional no exame de título de especialista da SBOT.</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">ESPECIALIZAÇÃO</p>
              <p className="text-lg md:text-xl font-bold text-foreground leading-tight">Especialização em Cirurgia do Joelho no IOT-HCFMUSP, com foco em artrose do joelho, prótese total do joelho e artroscopia.</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-2">PRECEPTOR USP</p>
              <p className="text-lg md:text-xl font-bold text-foreground leading-tight">Preceptor da Residência Médica e Graduação na Faculdade de Medicina da USP.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
