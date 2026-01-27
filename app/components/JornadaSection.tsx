export default function JornadaSection() {
  return (
    <section
      id="jornada"
      className="relative min-h-screen bg-card"
    >
      <div className="min-h-screen w-full flex px-0 overflow-hidden">
        {/* Lado Esquerdo - Foto do Médico + 3 Cards */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12">
          
          {/* Foto do Médico - Placeholder */}
          <div className="relative w-64 h-[45vh] mb-8 rounded-2xl overflow-hidden bg-muted border-2 border-dashed border-border flex items-center justify-center">
            <div className="text-center text-foreground-subtle">
              <svg className="w-12 h-12 mx-auto mb-3 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">Foto do Médico</p>
            </div>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted rounded-xl p-5 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm font-bold text-foreground mb-2">Formação de Excelência</p>
              <p className="text-sm text-foreground-muted leading-tight">Formação completa na Universidade de São Paulo, considerada a melhor instituição do país.</p>
            </div>
            <div className="bg-muted rounded-xl p-5 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.998 0" />
                </svg>
              </div>
              <p className="text-sm font-bold text-foreground mb-2">Tratamentos Modernos</p>
              <p className="text-sm text-foreground-muted leading-tight">Técnicas minimamente invasivas e tecnologia de ponta.</p>
            </div>
            <div className="bg-muted rounded-xl p-5 border border-border text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-foreground mb-2">Atendimento Humanizado</p>
              <p className="text-sm text-foreground-muted leading-tight">Cuidado personalizado para cada paciente.</p>
            </div>
          </div>
        </div>

        {/* Lado Direito - Minha Jornada */}
        <div className="hidden lg:flex w-1/2 h-full flex-col justify-center px-16 xl:px-20 py-16">
          <p className="text-sm font-bold tracking-[0.1em] text-foreground-subtle uppercase mb-4">Minha Jornada</p>
          
          <h3 className="text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-12">
            Excelência técnica e cuidado centrado no paciente
          </h3>

          <div className="space-y-6 text-xl text-foreground-muted leading-relaxed font-medium">
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
    </section>
  );
}
