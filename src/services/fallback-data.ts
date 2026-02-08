/**
 * Pre-cached fallback data for Rome (FCO).
 *
 * Used when the backend is unreachable or Gemini times out.
 * The demo NEVER shows an error screen — it always has content.
 *
 * This data mirrors the exact shape of the backend API responses.
 */

import type {
  Flight,
  DestinationContent,
  WeatherForecast,
  LocalNews,
} from "./types";

// ── Flight ──────────────────────────────────────────────

export const FALLBACK_FLIGHT: Flight = {
  flight_number: "VY71299",
  flight_date: "20260207",
  departure_time: "14:30",
  arrival_time: "16:15",
  origin: "BCN",
  destination: "FCO",
  aircraft: {
    model: "Airbus A320-200",
    registration: "EC-MXY",
    age_years: 9,
    aircraft_name: "Spirit of Barcelona",
  },
  cockpit_crew: {
    captain: { first_name: "Laura", last_name: "Rossi" },
    first_officer: { first_name: "Marco", last_name: "Bianchi" },
  },
  cabin_crew: [
    { first_name: "Sofia" },
    { first_name: "Elena" },
    { first_name: "Paolo" },
  ],
  average_duration_minutes: 105,
  departure_gate: "B23",
  baggage_claim_belt: "Carousel 5",
};

// ── Destination content ─────────────────────────────────

export const FALLBACK_DESTINATION: DestinationContent = {
  destination: { city: "Roma", country: "Italia", airport_code: "FCO" },
  highlights: [
    {
      id: "H001",
      title: "Coliseo Romano",
      brief_description:
        "El anfiteatro más grande del Imperio Romano y símbolo de la ciudad eterna.",
      long_description:
        "El Coliseo Romano es el anfiteatro más grande jamás construido. Patrimonio de la Humanidad y una de las Siete Maravillas del Mundo Moderno. Recomendamos reservar entrada con antelación para evitar colas.",
    },
    {
      id: "H002",
      title: "Foro Romano y Palatino",
      brief_description:
        "Corazón de la antigua Roma con ruinas de templos y edificios públicos.",
      long_description:
        "El Foro Romano fue el centro de la vida pública romana durante más de mil años. La entrada está incluida con el ticket del Coliseo. Lleva agua y calzado cómodo.",
    },
    {
      id: "H003",
      title: "Fontana di Trevi",
      brief_description:
        "Obra maestra barroca donde la tradición dice que hay que lanzar una moneda.",
      long_description:
        "La Fontana di Trevi es la fuente barroca más espectacular de Roma, del siglo XVIII. Mide 26 metros de alto. Visítala de noche cuando está iluminada para una experiencia mágica.",
    },
    {
      id: "H004",
      title: "Piazza Navona",
      brief_description:
        "Plaza famosa por la Fuente de los Cuatro Ríos de Bernini.",
      long_description:
        "Piazza Navona es una de las plazas más bellas de Roma, construida sobre las ruinas del antiguo Estadio de Domiciano. Perfecto para disfrutar de artistas callejeros y gelato artesanal.",
    },
    {
      id: "H005",
      title: "Ciudad del Vaticano",
      brief_description:
        "Sede de la Iglesia Católica con la Basílica de San Pedro y la Capilla Sixtina.",
      long_description:
        "El Vaticano alberga algunos de los tesoros artísticos más importantes del mundo. Los Museos Vaticanos y la Capilla Sixtina de Miguel Ángel son visita obligada. Reserva anticipada imprescindible.",
    },
  ],
  emergency_contacts: {
    police: "112",
    ambulance: "118",
    fire: "115",
    radio_taxi: "+39 06 3570",
    airport_info: "+39 06 65951",
    vueling_contact: "+34 931 518 158",
  },
  restaurants: [
    {
      name: "Roscioli",
      cuisine: "Italiana Tradicional",
      brief_description:
        "Auténtica cocina romana, famoso por su carbonara legendaria.",
      long_description:
        "Roscioli es una institución de la cocina romana en el barrio de Campo de' Fiori. Su carbonara es legendaria. También destacan la cacio e pepe y la amatriciana.",
    },
    {
      name: "Armando al Pantheon",
      cuisine: "Romana",
      brief_description:
        "Trattoria familiar cerca del Panteón con la mejor cacio e pepe.",
      long_description:
        "Armando al Pantheon lleva más de 50 años sirviendo cocina romana auténtica. Los ingredientes son de máxima calidad y las recetas se transmiten de generación en generación.",
    },
    {
      name: "La Pergola",
      cuisine: "Mediterránea",
      brief_description:
        "3 estrellas Michelin. Alta cocina con vistas panorámicas de Roma.",
      long_description:
        "La Pergola es el único restaurante de Roma con 3 estrellas Michelin, en el hotel Rome Cavalieri. Carta de vinos con más de 60.000 etiquetas. Reservar con semanas de antelación.",
    },
  ],
  airport_transport: {
    destination: "main_train_station",
    options: [
      {
        mode: "train",
        estimated_duration_minutes: 32,
        notes: "Leonardo Express directo a Roma Termini. Salidas cada 15 min.",
      },
      {
        mode: "bus",
        estimated_duration_minutes: 55,
        notes: "Terravision/SIT a Termini. Más económico (6€).",
      },
      {
        mode: "taxi",
        estimated_duration_minutes: 45,
        notes: "Tarifa fija 48€ al centro. Ideal para grupos.",
      },
    ],
  },
};

// ── Weather ─────────────────────────────────────────────

export const FALLBACK_WEATHER: WeatherForecast[] = [
  { date: "2026-02-07", condition: "Sunny", min_temperature_c: 8, max_temperature_c: 18 },
  { date: "2026-02-08", condition: "Cloudy", min_temperature_c: 7, max_temperature_c: 16 },
  { date: "2026-02-09", condition: "Clear", min_temperature_c: 6, max_temperature_c: 14 },
];

// ── News ────────────────────────────────────────────────

export const FALLBACK_NEWS: LocalNews[] = [
  {
    title: "Roma FC gana la Copa Italia tras 15 años",
    brief_description:
      "El equipo de la capital conquista el título con un gol en el minuto 89.",
    long_description:
      "El Roma FC se proclamó campeón de la Copa Italia tras vencer 2-1 al Inter de Milán en el Estadio Olímpico. Es el primer título importante del club en 15 años.",
    category: "sports",
  },
  {
    title: "Descubren antigua villa romana bajo el metro",
    brief_description:
      "Las obras de la Línea C revelan mosaicos del siglo II d.C. perfectamente conservados.",
    long_description:
      "Un hallazgo excepcional durante las obras de la Línea C del metro. Mosaicos policromados del siglo II d.C. en perfecto estado. Se abrirá al público en junio como museo subterráneo.",
    category: "culture",
  },
  {
    title: "Festival de Jazz en Villa Borghese este fin de semana",
    brief_description:
      "Más de 50 artistas internacionales en uno de los eventos musicales más esperados.",
    long_description:
      "Villa Borghese acoge la 28ª edición del Roma Jazz Festival. Tres días de conciertos gratuitos con artistas de primer nivel. Talleres, masterclasses y food trucks.",
    category: "events",
  },
  {
    title: "Nuevo mirador panorámico abre en el Aventino",
    brief_description:
      "La colina del Aventino estrena un punto de observación con vistas a toda Roma.",
    long_description:
      "El nuevo mirador ofrece vistas de 360° sobre Roma, desde el Coliseo hasta el Vaticano. Entrada gratuita. Mejor al atardecer.",
    category: "local_interest",
  },
  {
    title: "Temporada de alcachofas romanas en los mercados",
    brief_description:
      "Los mercados de Testaccio y Campo de' Fiori celebran la temporada con degustaciones.",
    long_description:
      "Febrero es el mes de la alcachofa romana. Los mercados históricos ofrecen degustaciones de carciofi alla giudia y alla romana. Una tradición gastronómica imperdible.",
    category: "local_interest",
  },
];
