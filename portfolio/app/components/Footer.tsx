export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dr. Vitor Oliveira</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cirurgião ortopedista especializado em joelho
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tratamentos" className="text-gray-600 hover:text-primary transition-colors">Tratamentos</a></li>
              <li><a href="#especialidades" className="text-gray-600 hover:text-primary transition-colors">Especialidades</a></li>
              <li><a href="#sobre" className="text-gray-600 hover:text-primary transition-colors">Sobre</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Localização</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Av. Paulista, 1000<br />
              São Paulo - SP<br />
              CEP 01310-100
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contato</h4>
            <p className="text-gray-600 text-sm mb-3">
              (11) 99999-9999<br />
              contato@drvitor.com.br
            </p>
            <p className="text-gray-600 text-sm">
              Segunda a Sexta: 8h às 18h<br />
              Sábados: 8h às 12h
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Dr. Vitor Oliveira. Todos os direitos reservados. | CRM-SP: 123456
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
