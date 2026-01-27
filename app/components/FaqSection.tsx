import { faqs } from "./data";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative min-h-screen bg-muted"
    >
      <div className="min-h-screen w-full flex items-center px-8 md:px-16 lg:px-24 py-12 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter leading-[0.9] mb-12">
            Dúvidas<br />Frequentes
          </h2>

          {/* FAQ - Abre com hover */}
          <div className="space-y-0 border-t border-border">
            {faqs.map((faq, index) => (
              <div key={index} className="group border-b border-border">
                <div className="flex items-center justify-between py-6 cursor-default transition-all duration-300 group-hover:pl-2">
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{faq.q}</span>
                  <span className="text-3xl font-bold text-border group-hover:text-primary group-hover:rotate-45 transition-all duration-300 shrink-0 ml-4">+</span>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-lg md:text-xl text-foreground-muted leading-relaxed font-medium pb-6 pr-12 pl-2">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
