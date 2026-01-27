const hospitals = [
  { name: "Vila Nova Star", image: "/vilanovastar.jpg" },
  { name: "Hospital Sírio-Libanês", image: "/sirio.jpg" },
  { name: "Hospital Nove de Julho", image: "/9dejulho.png" },
  { name: "Hospital São Camilo", image: "/saocamilo.jpeg" },
  { name: "São Luiz Itaim", image: "/saoluis.avif" },
];

export default function HospitaisSection() {
  return (
    <section
      id="hospitais"
      className="relative min-h-screen bg-dark-bg-deep"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[0.9]">
            Hospitais Onde Atuo
          </h2>
        </div>

        {/* Grid de Hospitais */}
        <div className="grid grid-cols-5 gap-4 h-[50vh]">
          {hospitals.map((hospital, index) => (
            <div 
              key={index} 
              className="group relative rounded-lg overflow-hidden h-full"
            >
              <img
                src={hospital.image}
                alt={hospital.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-white leading-tight">
                  {hospital.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
