export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dr. Vitor Ricardo</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Especialista em Cirurgia do Joelho
            </p>
            <p className="text-gray-600 text-sm mt-3">
              <strong>CRM-SP:</strong> 226.708<br />
              <strong>RQE:</strong> 136.623
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="text-gray-600 hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#especialidades" className="text-gray-600 hover:text-primary transition-colors">Especialidades</a></li>
              <li><a href="#tratamentos" className="text-gray-600 hover:text-primary transition-colors">Tratamentos</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contato" className="text-gray-600 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Hospitais em que atuo</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Vila Nova Star</li>
              <li>Hospital Sírio-Libanês</li>
              <li>Hospital Nove de Julho</li>
              <li>Hospital São Camilo</li>
              <li>São Luiz Itaim</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
            <p className="text-gray-600 text-sm mb-3">
              <strong>WhatsApp:</strong><br />
              <a href="https://wa.me/5511912278540" className="hover:text-primary transition-colors">
                (11) 91227-8540
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Consultório Presencial:</strong><br />
              Segunda a Sexta: 8h às 18h
            </p>
            <p className="text-gray-600 text-sm mt-3">
              <strong>Consultório Online:</strong><br />
              Disponibilidade 24h
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Dr. Vitor Ricardo. Todos os direitos reservados. | CRM-SP: 226.708 | RQE: 136.623
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
