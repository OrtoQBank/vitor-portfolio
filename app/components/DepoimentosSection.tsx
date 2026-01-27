import { testimonials } from "./data";

export default function DepoimentosSection() {
  return (
    <section
      id="depoimentos"
      className="relative min-h-screen bg-card"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest text-foreground-subtle uppercase mb-4">
              Depoimentos
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[0.9]">
              O que dizem<br />nossos pacientes
            </h2>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-muted rounded-2xl p-8 border border-border"
              >
                {/* Ícone de aspas */}
                <svg className="w-10 h-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                
                {/* Texto do depoimento */}
                <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Info do paciente */}
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground-subtle">{testimonial.procedure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
