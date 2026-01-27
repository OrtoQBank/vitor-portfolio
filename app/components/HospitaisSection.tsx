import { hospitals } from "./data";

export default function HospitaisSection() {
  return (
    <section
      id="hospitais"
      className="relative min-h-screen bg-[#1f2621]"
    >
      <div className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e8e6e0] tracking-tighter leading-[0.9]">
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
              <div className="absolute inset-0 bg-[#1f2621]/30" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1f2621]/80 to-transparent">
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#e8e6e0] leading-tight">
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
