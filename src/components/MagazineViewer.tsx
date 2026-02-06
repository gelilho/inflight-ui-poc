import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MagazineViewerProps {
  onBack: () => void;
}

export function MagazineViewer({ onBack }: MagazineViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Portada",
      content: (
        <div className="h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex flex-col items-center justify-center text-white p-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-sm">JULIO 2026</div>
          <div className="text-7xl font-bold mb-6 tracking-wider" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            INFLUENCER
          </div>
          <div className="w-32 h-1 bg-[#FFCC00] mb-8"></div>
          <div className="text-center space-y-4 max-w-sm">
            <h2 className="text-3xl font-bold">LUCAS PETRONI</h2>
            <p className="text-lg text-gray-300">Pasión sobre dos ruedas</p>
            <p className="text-sm text-gray-400 mt-8">
              TAMBIÉN EN ESTE NÚMERO:<br/>
              Moda · Tecnología · Gastronomía
            </p>
          </div>
          <div className="absolute bottom-8 text-xs text-gray-500">
            Edición Digital · Nº 47
          </div>
        </div>
      ),
    },
    {
      title: "Entrevista",
      content: (
        <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 p-8 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-xs text-gray-500 mb-2">ENTREVISTA</div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Lucas Petroni
            </h2>
            <p className="text-lg text-gray-600 italic mb-6">
              "La libertad es mi combustible"
            </p>
            
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">
                ¿Cuándo empezó tu pasión por las motos?
              </p>
              <p>
                Desde pequeño siempre me fascinó la sensación de libertad. Mi padre
                tenía una Harley y recuerdo el sonido del motor cada domingo. A los
                18 conseguí mi primera moto y desde entonces no he parado.
              </p>
              
              <p className="font-semibold mt-6">
                ¿Cuál ha sido tu viaje más memorable?
              </p>
              <p>
                Sin duda, cruzar Sudamérica de punta a punta. 15,000 kilómetros,
                12 países, paisajes increíbles y personas maravillosas. La Ruta 40
                en Argentina es algo que todo motero debería experimentar.
              </p>
              
              <p className="font-semibold mt-6">
                ¿Qué consejo darías a quienes quieren empezar?
              </p>
              <p>
                Que no tengan miedo. Que respeten la carretera, pero que disfruten
                cada kilómetro. La vida es demasiado corta para no vivir tus sueños.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Moda",
      content: (
        <div className="h-full bg-black text-white p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6">
            TENDENCIAS 2026
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🎨 Minimalismo Cromático</h3>
              <p className="text-gray-200">
                Los tonos neutros con toques de color vibrante dominan las
                pasarelas. El negro, blanco y beige se combinan con azul eléctrico
                y verde neón para looks impactantes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-teal-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">👔 Sastrería Oversize</h3>
              <p className="text-gray-200">
                Las prendas estructuradas pero holgadas son el must-have de la
                temporada. Blazers amplios, pantalones de pinzas y abrigos XXL
                definen el nuevo power dressing.
              </p>
            </div>
            <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">♻️ Sostenibilidad Chic</h3>
              <p className="text-gray-200">
                La moda consciente ya no es opcional. Materiales reciclados,
                producción local y diseños atemporales son la nueva norma de
                las marcas que marcan tendencia.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">👟 Sneakers Statement</h3>
              <p className="text-gray-200">
                Las zapatillas chunky se combinan con todo. Desde vestidos de
                noche hasta trajes formales, los sneakers son el toque final
                perfecto para cualquier outfit.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="px-6 py-4">
      {/* Magazine Frame - Fixed Height */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
        {/* Magazine Content */}
        <div className="h-full">
          {pages[currentPage].content}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-4 bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`p-3 rounded-full transition-all ${
              currentPage === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FFCC00] hover:bg-[#FFD700] text-[#1A1A1A]"
            }`}
          >
            <ChevronLeft className="size-6" />
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">
              Página {currentPage + 1} de {pages.length}
            </div>
            <div className="flex gap-1">
              {pages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? "bg-[#FFCC00]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`p-3 rounded-full transition-all ${
              currentPage === pages.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FFCC00] hover:bg-[#FFD700] text-[#1A1A1A]"
            }`}
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
}