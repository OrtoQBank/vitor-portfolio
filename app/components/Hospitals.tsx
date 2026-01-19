'use client';

import { useRef, useEffect } from 'react';

export default function Hospitals() {
  const hospitals = [
    {
      name: "Vila Nova Star",
      image: "/vilanovastar.jpg"
    },
    {
      name: "Hospital Sírio-Libanês",
      image: "/sirio.jpg"
    },
    {
      name: "Hospital Nove de Julho",
      image: "/9dejulho.png"
    },
    {
      name: "Hospital São Camilo",
      image: "/saocamilo.jpeg"
    },
    {
      name: "São Luiz Itaim",
      image: "/saoluis.avif"
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mb-16 px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          Hospitais em que atuo
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          Cirurgias realizadas nos melhores hospitais de São Paulo
        </p>
      </div>

      <div 
        ref={scrollContainerRef}
        className="horizontal-gallery flex gap-8 overflow-x-auto px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing"
      >
        {hospitals.map((hospital, index) => (
          <div 
            key={index} 
            className="gallery-item shrink-0 w-[500px] md:w-[600px] group"
          >
            <div className="relative h-[600px] md:h-[700px] rounded-md overflow-hidden">
              {/* Background Image */}
              <img
                src={hospital.image}
                alt={hospital.name}
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-70" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {hospital.name}
                </h3>
                <div className="flex items-center gap-3 text-gray-300">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <span className="text-lg font-medium">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer final para melhor navegação */}
        <div className="shrink-0 w-6" />
      </div>

      <style jsx global>{`
        .horizontal-gallery {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        
        .horizontal-gallery::-webkit-scrollbar {
          display: none;
        }

        .horizontal-gallery.active {
          cursor: grabbing;
          scroll-behavior: auto;
        }

        .horizontal-gallery.active .gallery-item {
          pointer-events: none;
        }

        .gallery-item {
          user-select: none;
        }
      `}</style>
    </section>
  );
}
