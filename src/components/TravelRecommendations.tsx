import { MapPin, Star, ShoppingBag, Coffee, Camera, Phone, AlertCircle, ChevronRight, Cloud, Sun, Umbrella, Newspaper, Utensils } from "lucide-react";
import { DetailContent } from "./DetailScreen";

interface Recommendation {
  title: string;
  description: string;
  fullContent: string;
}

const recommendations: Recommendation[] = [
  {
    title: "Coliseo Romano",
    description: "El anfiteatro más grande del Imperio y símbolo de la ciudad.",
    fullContent: "El Coliseo Romano es el anfiteatro más grande jamás construido y el símbolo más reconocido de Roma. Construido entre el 70 y 80 d.C., podía albergar hasta 50,000 espectadores que presenciaban combates de gladiadores, caza de animales salvajes y representaciones de batallas navales.\n\nHoy es Patrimonio de la Humanidad y una de las Siete Maravillas del Mundo Moderno. Recomendamos reservar entrada con antelación para evitar largas colas. Lo mejor es visitarlo temprano en la mañana o al atardecer para disfrutar de la mejor luz para fotos.",
  },
  {
    title: "Foro Romano y Palatino",
    description:
      "Corazón de la antigua Roma, donde se encuentran ruinas de templos y edificios públicos.",
    fullContent: "El Foro Romano fue el centro neurálgico de la vida pública romana durante más de mil años. Aquí se encontraban los principales edificios gubernamentales, templos y monumentos. El Monte Palatino, adyacente al Foro, fue donde vivían los emperadores en palacios de lujo.\n\nCaminar por estas ruinas es como viajar en el tiempo. La entrada está incluida en el ticket del Coliseo, por lo que recomendamos visitar los tres sitios el mismo día. Lleva agua y calzado cómodo, ya que el recorrido puede durar varias horas.",
  },
  {
    title: "Fontana di Trevi",
    description: "Una obra maestra barroca donde es tradición lanzar una moneda.",
    fullContent: "La Fontana di Trevi es la fuente barroca más espectacular de Roma, construida en el siglo XVIII. Mide 26 metros de alto y 49 de ancho, y está adosada al Palazzo Poli. La escena central representa a Neptuno, dios del mar, en su carruaje tirado por caballos alados.\n\nLa tradición dice que si lanzas una moneda con la mano derecha sobre el hombro izquierdo, aseguras tu regreso a Roma. Dos monedas garantizan encontrar el amor, y tres el matrimonio. La fuente recauda unos 3,000 euros diarios que se donan a obras benéficas. Visítala de noche cuando está iluminada para una experiencia mágica.",
  },
  {
    title: "Piazza Navona",
    description:
      "Famosa por la Fuente de los Cuatro Ríos de Bernini y su arquitectura barroca.",
    fullContent: "Piazza Navona es una de las plazas más bellas de Roma, construida sobre las ruinas del antiguo Estadio de Domiciano. Su forma alargada conserva el trazado original del estadio del siglo I d.C. La plaza alberga tres fuentes espectaculares, siendo la más famosa la Fontana dei Quattro Fiumi de Bernini.\n\nEs un lugar perfecto para disfrutar de la vida romana: artistas callejeros, restaurantes con terrazas y un ambiente animado tanto de día como de noche. En diciembre se instala un mercado navideño tradicional. Prueba un gelato en una de las heladerías artesanales mientras admiras la arquitectura barroca circundante.",
  },
  {
    title: "Plaza de España (Piazza di Spagna)",
    description:
      "Conocida por su escalinata que sube a la iglesia Trinità dei Monti.",
    fullContent: "La Piazza di Spagna debe su nombre al Palacio de España, sede de la embajada española ante la Santa Sede desde el siglo XVII. Su famosa escalinata de 135 peldaños, construida en 1725, conecta la plaza con la iglesia de Trinità dei Monti en lo alto de la colina.\n\nLa plaza es el corazón de la zona comercial más elegante de Roma, con boutiques de lujo en Via Condotti. En primavera, la escalinata se decora con azaleas creando un espectáculo de color. La Fontana della Barcaccia, diseñada por Pietro Bernini, es perfecta para refrescarse en verano. Nota: está prohibido sentarse en los escalones desde 2019.",
  },
];

const topRestaurants = [
  {
    name: "La Pergola",
    description: "3 estrellas Michelin. Alta cocina con vistas panorámicas.",
    cuisine: "Mediterránea",
    fullContent: "La Pergola es el único restaurante de Roma con 3 estrellas Michelin, ubicado en el hotel Rome Cavalieri. Bajo la dirección del chef Heinz Beck, ofrece una experiencia gastronómica excepcional con platos de alta cocina mediterránea que combinan tradición e innovación.\n\nSu terraza panorámica ofrece vistas espectaculares de la ciudad eterna. La carta de vinos cuenta con más de 60,000 etiquetas, una de las mejores del mundo. Recomendamos reservar con semanas de antelación y disfrutar del menú degustación completo.",
  },
  {
    name: "Roscioli",
    description: "Auténtica cocina romana, famoso por su carbonara.",
    cuisine: "Italiana Tradicional",
    fullContent: "Roscioli es una institución de la cocina romana tradicional, ubicado en el corazón del barrio Campo de' Fiori. Este establecimiento familiar combina una salumería gourmet con un restaurante que sirve los platos más auténticos de la tradición romana.\n\nSu carbonara es legendaria entre locales y turistas. También destacan la cacio e pepe y la amatriciana. El local conserva su ambiente íntimo y acogedor, con mesas compartidas que fomentan la conversación. Imprescindible probar su selección de quesos y embutidos italianos.",
  },
  {
    name: "Armando al Pantheon",
    description: "Trattoria familiar cerca del Panteón. Especialidad: cacio e pepe.",
    cuisine: "Romana",
    fullContent: "Armando al Pantheon es una trattoria familiar que lleva más de 50 años sirviendo auténtica cocina romana a pocos pasos del Panteón. Su cacio e pepe es considerada una de las mejores de Roma, preparada con la técnica tradicional que garantiza una cremosidad perfecta.\n\nEl ambiente es cálido y familiar, con Armando y su familia atendiendo personalmente a los comensales. Los ingredientes son de máxima calidad y las recetas se han transmitido de generación en generación. Recomendamos llegar temprano, ya que no aceptan reservas y la cola puede ser larga.",
  },
];

const topNews = [
  {
    title: "Roma FC gana la Copa Italia tras 15 años",
    description: "El equipo de la capital conquista el título con un gol en el minuto 89. Los aficionados celebran en las calles de la ciudad.",
    fullContent: "El Roma FC se proclamó campeón de la Copa Italia tras vencer 2-1 al Inter de Milán en una emocionante final disputada en el Estadio Olímpico de Roma. El gol decisivo llegó en el minuto 89 de la mano de Lorenzo Pellegrini, desatando la euforia entre los más de 70,000 aficionados presentes.\n\nEs el primer título importante del club en 15 años, desde que ganaron la Copa Italia en 2008. Las calles de Roma se llenaron de celebraciones espontáneas, con miles de aficionados giallorossi festejando hasta altas horas de la madrugada. El entrenador José Mourinho declaró que este es solo el comienzo de una nueva era dorada para el club.",
  },
  {
    title: "Descubren antigua villa romana bajo el metro",
    description: "Las obras de la Línea C revelan mosaicos perfectamente conservados del siglo II d.C. Abrirán al público en junio.",
    fullContent: "Un hallazgo arqueológico excepcional ha tenido lugar durante las obras de ampliación de la Línea C del metro de Roma. Los trabajadores descubrieron una villa romana del siglo II d.C. con mosaicos policromados en perfecto estado de conservación, representando escenas mitológicas y de la vida cotidiana.\n\nLos arqueólogos consideran que se trata de una de las villas más importantes descubiertas en las últimas décadas en la capital italiana. La estructura incluye un complejo sistema de termas privadas y un jardín interior con fuentes ornamentales. Las autoridades han anunciado que la villa se integrará en la estación de metro y estará abierta al público a partir de junio, convirtiéndose en un museo subterráneo único en el mundo.",
  },
  {
    title: "Festival de Jazz en Villa Borghese este fin de semana",
    description: "Más de 50 artistas internacionales actuarán en uno de los eventos musicales más esperados del año en Roma.",
    fullContent: "Villa Borghese se prepara para acoger la 28ª edición del Roma Jazz Festival, uno de los eventos musicales más prestigiosos de Europa. Durante tres días, más de 50 artistas internacionales de primer nivel actuarán en diferentes escenarios distribuidos por los jardines históricos de la villa.\n\nEl festival contará con la presencia de leyendas del jazz como Herbie Hancock, Diana Krall y Wynton Marsalis, junto con nuevos talentos emergentes de la escena internacional. La entrada es gratuita para todos los conciertos, aunque se recomienda llegar con antelación debido a la alta demanda. Además de los conciertos, habrá talleres, masterclasses y zonas gastronómicas con food trucks especializados en cocina italiana y de fusión.",
  },
];

interface TravelRecommendationsProps {
  onDetailClick: (content: DetailContent) => void;
}

export function TravelRecommendations({ onDetailClick }: TravelRecommendationsProps) {
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
              onClick={() => onDetailClick({
                title: news.title,
                category: "news",
                shortDescription: news.description,
                fullContent: news.fullContent
              })}
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
              onClick={() => onDetailClick({
                title: rec.title,
                category: "place",
                shortDescription: rec.description,
                fullContent: rec.fullContent
              })}
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
              onClick={() => onDetailClick({
                title: restaurant.name,
                category: "restaurant",
                shortDescription: restaurant.description,
                fullContent: restaurant.fullContent
              })}
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

      {/* 5. TELÉFONOS DE INTERÉS */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Phone className="size-5 text-white" />
          <h4 className="font-bold text-white">
            📞 Teléfonos de Interés
          </h4>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Emergencias */}
          <div className="p-4 border-b border-gray-200 hover:bg-red-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-xl">🚨</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Emergencias</div>
                  <div className="text-xs text-gray-500">Número de emergencia general</div>
                </div>
              </div>
              <a href="tel:112" className="text-2xl font-bold text-red-500">112</a>
            </div>
          </div>

          {/* Policía */}
          <div className="p-4 border-b border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-xl">👮</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Policía</div>
                  <div className="text-xs text-gray-500">Carabinieri</div>
                </div>
              </div>
              <a href="tel:113" className="text-2xl font-bold text-blue-500">113</a>
            </div>
          </div>

          {/* Bomberos */}
          <div className="p-4 border-b border-gray-200 hover:bg-orange-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-xl">🚒</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Bomberos</div>
                  <div className="text-xs text-gray-500">Vigili del Fuoco</div>
                </div>
              </div>
              <a href="tel:115" className="text-2xl font-bold text-orange-500">115</a>
            </div>
          </div>

          {/* Radio Taxi Roma */}
          <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-xl">🚕</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Radio Taxi Roma</div>
                  <div className="text-xs text-gray-500">Servicio oficial de taxis</div>
                </div>
              </div>
              <a href="tel:+39063570" className="text-lg font-bold text-gray-700">+39 06 3570</a>
            </div>
          </div>

          {/* Aeropuerto FCO */}
          <div className="p-4 border-b border-gray-200 hover:bg-sky-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center">
                  <span className="text-xl">🛫</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Aeropuerto FCO</div>
                  <div className="text-xs text-gray-500">Información general</div>
                </div>
              </div>
              <a href="tel:+390665951" className="text-lg font-bold text-sky-500">+39 06 65951</a>
            </div>
          </div>

          {/* Vueling Airlines */}
          <div className="p-4 hover:bg-yellow-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFCC00] flex items-center justify-center">
                  <span className="text-xl">✈️</span>
                </div>
                <div>
                  <div className="font-semibold text-[#1A1A1A]">Vueling Airlines</div>
                  <div className="text-xs text-gray-500">Atención al cliente 24/7</div>
                </div>
              </div>
              <a href="tel:+34931518158" className="text-lg font-bold text-[#FFCC00]">+34 931 518 158</a>
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