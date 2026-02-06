import { MapPin, Star, ShoppingBag, Coffee, Camera, Train, Car, Phone, AlertCircle, ChevronRight, Cloud, Sun, Umbrella, Newspaper, Utensils } from "lucide-react";

interface Recommendation {
  title: string;
  description: string;
}

const recommendations: Recommendation[] = [
  {
    title: "Coliseo Romano",
    description: "El anfiteatro más grande del Imperio y símbolo de la ciudad.",
  },
  {
    title: "Foro Romano y Palatino",
    description:
      "Corazón de la antigua Roma, donde se encuentran ruinas de templos y edificios públicos.",
  },
  {
    title: "Fontana di Trevi",
    description: "Una obra maestra barroca donde es tradición lanzar una moneda.",
  },
  {
    title: "Piazza Navona",
    description:
      "Famosa por la Fuente de los Cuatro Ríos de Bernini y su arquitectura barroca.",
  },
  {
    title: "Plaza de España (Piazza di Spagna)",
    description:
      "Conocida por su escalinata que sube a la iglesia Trinità dei Monti.",
  },
];

const topRestaurants = [
  {
    name: "La Pergola",
    description: "3 estrellas Michelin. Alta cocina con vistas panorámicas.",
    cuisine: "Mediterránea",
  },
  {
    name: "Roscioli",
    description: "Auténtica cocina romana, famoso por su carbonara.",
    cuisine: "Italiana Tradicional",
  },
  {
    name: "Armando al Pantheon",
    description: "Trattoria familiar cerca del Panteón. Especialidad: cacio e pepe.",
    cuisine: "Romana",
  },
];

const topNews = [
  {
    title: "Roma FC gana la Copa Italia tras 15 años",
    description: "El equipo de la capital conquista el título con un gol en el minuto 89. Los aficionados celebran en las calles de la ciudad.",
  },
  {
    title: "Descubren antigua villa romana bajo el metro",
    description: "Las obras de la Línea C revelan mosaicos perfectamente conservados del siglo II d.C. Abrirán al público en junio.",
  },
  {
    title: "Festival de Jazz en Villa Borghese este fin de semana",
    description: "Más de 50 artistas internacionales actuarán en uno de los eventos musicales más esperados del año en Roma.",
  },
];

export function TravelRecommendations() {
  return (
    <div className="px-6 py-4 bg-gradient-to-b from-white to-gray-50">
      <div className="flex items-center gap-2 mb-4">
        <Star className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Recomendaciones para tu viaje
        </h3>
      </div>

      {/* 1. TIEMPO METEOROLÓGICO */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Sun className="size-5 text-orange-500" />
          <h4 className="font-semibold text-[#1A1A1A]">
            El tiempo en Roma
          </h4>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-600 mb-1">Hoy</div>
            <Sun className="size-8 text-orange-500 mx-auto mb-1" />
            <div className="font-bold text-lg text-[#1A1A1A]">18°</div>
            <div className="text-xs text-gray-500">Soleado</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-600 mb-1">Mañana</div>
            <Cloud className="size-8 text-gray-400 mx-auto mb-1" />
            <div className="font-bold text-lg text-[#1A1A1A]">16°</div>
            <div className="text-xs text-gray-500">Nublado</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <div className="text-xs text-gray-600 mb-1">Sábado</div>
            <Umbrella className="size-8 text-blue-500 mx-auto mb-1" />
            <div className="font-bold text-lg text-[#1A1A1A]">14°</div>
            <div className="text-xs text-gray-500">Lluvia</div>
          </div>
        </div>

        <div className="mt-3 bg-white/70 rounded-lg p-2">
          <p className="text-xs text-gray-700 text-center">
            ☀️ Perfecto para visitar monumentos al aire libre
          </p>
        </div>
      </div>

      {/* 2. TOP 3 NOTICIAS */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Newspaper className="size-5 text-white" />
          <h4 className="font-bold text-white">
            📰 Noticias destacadas
          </h4>
        </div>

        <div className="space-y-3">
          {topNews.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-[#1A1A1A] mb-1">
                    {news.title}
                  </h5>
                  <p className="text-sm text-gray-600">{news.description}</p>
                </div>
                <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. IMPRESCINDIBLES TOP 5 */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-[#FFCC00] to-[#FFD700] rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <MapPin className="size-5 text-[#1A1A1A]" />
          <h4 className="font-bold text-[#1A1A1A]">
            📍 Top 5 Imprescindibles
          </h4>
        </div>

        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-[#1A1A1A]">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-[#1A1A1A] mb-1">
                    {rec.title}
                  </h5>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                </div>
                <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TOP 3 RESTAURANTES */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Utensils className="size-5 text-white" />
          <h4 className="font-bold text-white">
            🍝 Top 3 Restaurantes
          </h4>
        </div>

        <div className="space-y-3">
          {topRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-[#1A1A1A] mb-1">
                    {restaurant.name}
                  </h5>
                  <p className="text-sm text-gray-600 mb-1">{restaurant.description}</p>
                  <div className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                    {restaurant.cuisine}
                  </div>
                </div>
                <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CÓMO LLEGAR A LA CIUDAD DESDE FCO */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Car className="size-5 text-white" />
          <h4 className="font-bold text-white">
            🚗 Cómo llegar desde FCO
          </h4>
        </div>

        {/* Train Option */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Train className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Tren Leonardo Express</h5>
              <p className="text-sm text-gray-600">FCO → Roma Termini (32 min)</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">14€</div>
            </div>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span className="text-lg">🇮🇹</span>
            Comprar Billete Trenitalia
          </button>
        </div>

        {/* Uber Option */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <Car className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Uber</h5>
              <p className="text-sm text-gray-600">Reserva tu viaje con antelación</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">45€</div>
            </div>
          </div>
          <button className="w-full bg-black hover:bg-gray-800 transition-colors text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span className="font-bold">U</span>
            Reservar Uber a tu llegada
          </button>
        </div>
      </div>

      {/* 6. TELÉFONOS DE AYUDA EN ITALIA */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <AlertCircle className="size-5 text-white" />
          <h4 className="font-bold text-white">
            📞 Teléfonos de Emergencia
          </h4>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Emergencias */}
          <div className="p-4 border-b border-gray-200 hover:bg-red-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Phone className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Emergencias</div>
                  <div className="text-xs text-gray-500">Número de emergencia general</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-red-500">112</div>
            </div>
          </div>

          {/* Policía */}
          <div className="p-4 border-b border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Phone className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Policía</div>
                  <div className="text-xs text-gray-500">Carabinieri</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-500">113</div>
            </div>
          </div>

          {/* Bomberos */}
          <div className="p-4 hover:bg-orange-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  <Phone className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Bomberos</div>
                  <div className="text-xs text-gray-500">Vigili del Fuoco</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-orange-500">115</div>
            </div>
          </div>
        </div>

        <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-900">
            💡 Guarda estos números en tu teléfono antes de viajar. El 112 funciona en toda la Unión Europea.
          </p>
        </div>
      </div>

      {/* Footer Message */}
      <div className="mt-4 bg-gradient-to-r from-[#FFCC00] to-[#FFD700] rounded-xl p-4 text-center">
        <p className="text-sm font-semibold text-[#1A1A1A]">
          ¡Disfruta tu estancia en la ciudad eterna! 🇮🇹
        </p>
      </div>
    </div>
  );
}