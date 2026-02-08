import { MapPin, Star, Phone, ChevronRight, Cloud, Sun, CloudRain, Newspaper, Utensils } from "lucide-react";
import { DetailContent } from "./DetailScreen";
import type { Highlight, Restaurant, EmergencyContacts, WeatherForecast, LocalNews } from "../services/types";

// ── Weather icon helper ─────────────────────────────────

function WeatherIcon({ condition }: { condition: string }) {
  const c = condition.toLowerCase();
  if (c.includes("rain") || c.includes("lluvia")) return <CloudRain className="size-8 text-blue-500 mx-auto mb-1" />;
  if (c.includes("cloud") || c.includes("nublado") || c.includes("overcast")) return <Cloud className="size-8 text-gray-400 mx-auto mb-1" />;
  return <Sun className="size-8 text-orange-500 mx-auto mb-1" />;
}

const DAY_LABELS = ["Hoy", "Mañana", "Pasado"];

// ── Props ───────────────────────────────────────────────

interface TravelRecommendationsProps {
  onDetailClick: (content: DetailContent) => void;
  cityName: string;
  highlights: Highlight[];
  restaurants: Restaurant[];
  emergencyContacts: EmergencyContacts;
  weather: WeatherForecast[];
  news: LocalNews[];
  isLoading?: {
    destination: boolean;
    weather: boolean;
    news: boolean;
  };
}

// ── Component ───────────────────────────────────────────

export function TravelRecommendations({
  onDetailClick,
  cityName,
  highlights,
  restaurants,
  emergencyContacts,
  weather,
  news,
  isLoading = { destination: false, weather: false, news: false },
}: TravelRecommendationsProps) {
  return (
    <div className="px-6 py-4 bg-gradient-to-b from-white to-gray-50">
      <div className="flex items-center gap-2 mb-4">
        <Star className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Recomendaciones para tu viaje
        </h3>
      </div>

      {/* 1. WEATHER — from API */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Sun className="size-5 text-orange-500" />
          <h4 className="font-semibold text-[#1A1A1A]">El tiempo en {cityName}</h4>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {weather.slice(0, 3).map((day, i) => (
            <div key={i} className="bg-white rounded-lg p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">{DAY_LABELS[i] ?? day.date}</div>
              <WeatherIcon condition={day.condition} />
              <div className="font-bold text-lg text-[#1A1A1A]">
                {Math.round(day.max_temperature_c)}°
              </div>
              <div className="text-xs text-gray-500">{day.condition}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-white/70 rounded-lg p-2">
          <p className="text-xs text-gray-700 text-center">
            {isLoading.weather ? "Cargando previsión..." : `Previsión para tu estancia en ${cityName}`}
          </p>
        </div>
      </div>

      {/* 2. NEWS — from API */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Newspaper className="size-5 text-white" />
          <h4 className="font-bold text-white">Noticias destacadas</h4>
        </div>

        <div className="space-y-3">
          {news.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() =>
                onDetailClick({
                  title: item.title,
                  category: "news",
                  shortDescription: item.brief_description,
                  fullContent: item.long_description,
                })
              }
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-[#1A1A1A] mb-1">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.brief_description}</p>
                </div>
                <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HIGHLIGHTS — from API (AI-generated) */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-[#FFCC00] to-[#FFD700] rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <MapPin className="size-5 text-[#1A1A1A]" />
          <h4 className="font-bold text-[#1A1A1A]">Top {highlights.length} Imprescindibles</h4>
        </div>

        {isLoading.destination ? (
          <div className="text-center py-8 text-gray-500">
            <div className="animate-spin inline-block w-6 h-6 border-2 border-[#FFCC00] border-t-transparent rounded-full mb-2" />
            <p className="text-sm">Generando recomendaciones con IA...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {highlights.map((rec, index) => (
              <div
                key={rec.id || index}
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() =>
                  onDetailClick({
                    title: rec.title,
                    category: "place",
                    shortDescription: rec.brief_description,
                    fullContent: rec.long_description,
                  })
                }
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-[#1A1A1A]">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-[#1A1A1A] mb-1">{rec.title}</h5>
                    <p className="text-sm text-gray-600">{rec.brief_description}</p>
                  </div>
                  <ChevronRight className="size-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. RESTAURANTS — from API (AI-generated) */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Utensils className="size-5 text-white" />
          <h4 className="font-bold text-white">Top {restaurants.length} Restaurantes</h4>
        </div>

        <div className="space-y-3">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() =>
                onDetailClick({
                  title: restaurant.name,
                  category: "restaurant",
                  shortDescription: restaurant.brief_description,
                  fullContent: restaurant.long_description,
                })
              }
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-[#1A1A1A] mb-1">{restaurant.name}</h5>
                  <p className="text-sm text-gray-600 mb-1">{restaurant.brief_description}</p>
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

      {/* 5. EMERGENCY CONTACTS — from API */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Phone className="size-5 text-white" />
          <h4 className="font-bold text-white">Teléfonos de Interés</h4>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ContactRow emoji="🚨" label="Emergencias" sublabel="Número de emergencia general" phone={emergencyContacts.police} color="red" />
          <ContactRow emoji="🚑" label="Ambulancia" sublabel="Servicio médico" phone={emergencyContacts.ambulance} color="blue" border />
          <ContactRow emoji="🚒" label="Bomberos" sublabel="Vigili del Fuoco" phone={emergencyContacts.fire} color="orange" border />
          <ContactRow emoji="🚕" label="Radio Taxi" sublabel="Servicio oficial de taxis" phone={emergencyContacts.radio_taxi} color="gray" border />
          <ContactRow emoji="🛫" label="Aeropuerto" sublabel="Información general" phone={emergencyContacts.airport_info} color="sky" border />
          <ContactRow emoji="✈️" label="Vueling Airlines" sublabel="Atención al cliente 24/7" phone={emergencyContacts.vueling_contact} color="yellow" border={false} />
        </div>

        <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-900">
            Guarda estos números en tu teléfono antes de viajar. El 112 funciona en toda la Unión Europea.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 bg-gradient-to-r from-[#FFCC00] to-[#FFD700] rounded-xl p-4 text-center">
        <p className="text-sm font-semibold text-[#1A1A1A]">
          {`¡Disfruta tu estancia en ${cityName}!`}
        </p>
      </div>
    </div>
  );
}

// ── Contact row helper ──────────────────────────────────

const COLOR_MAP: Record<string, { bg: string; text: string; hover: string }> = {
  red:    { bg: "bg-red-500",    text: "text-red-500",    hover: "hover:bg-red-50" },
  blue:   { bg: "bg-blue-500",   text: "text-blue-500",   hover: "hover:bg-blue-50" },
  orange: { bg: "bg-orange-500", text: "text-orange-500", hover: "hover:bg-orange-50" },
  gray:   { bg: "bg-gray-700",   text: "text-gray-700",   hover: "hover:bg-gray-50" },
  sky:    { bg: "bg-sky-500",    text: "text-sky-500",    hover: "hover:bg-sky-50" },
  yellow: { bg: "bg-[#FFCC00]",  text: "text-[#FFCC00]",  hover: "hover:bg-yellow-50" },
};

function ContactRow({
  emoji,
  label,
  sublabel,
  phone,
  color,
  border = true,
}: {
  emoji: string;
  label: string;
  sublabel: string;
  phone: string;
  color: string;
  border?: boolean;
}) {
  const c = COLOR_MAP[color] ?? COLOR_MAP.gray;
  return (
    <div className={`p-4 ${border ? "border-b border-gray-200" : ""} ${c.hover} transition-colors cursor-pointer`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${c.bg} flex items-center justify-center`}>
            <span className="text-xl">{emoji}</span>
          </div>
          <div>
            <div className="font-semibold text-[#1A1A1A]">{label}</div>
            <div className="text-xs text-gray-500">{sublabel}</div>
          </div>
        </div>
        <a href={`tel:${phone.replace(/\s/g, "")}`} className={`text-lg font-bold ${c.text}`}>
          {phone}
        </a>
      </div>
    </div>
  );
}
