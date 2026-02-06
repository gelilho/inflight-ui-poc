import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";

interface DayForecast {
  day: string;
  date: string;
  icon: "sun" | "cloud" | "rain";
  temperature: string;
  description: string;
}

const forecast: DayForecast[] = [
  {
    day: "Hoy",
    date: "3 Feb",
    icon: "sun",
    temperature: "18°C",
    description: "Soleado",
  },
  {
    day: "Mañana",
    date: "4 Feb",
    icon: "cloud",
    temperature: "16°C",
    description: "Nublado",
  },
  {
    day: "Miércoles",
    date: "5 Feb",
    icon: "rain",
    temperature: "14°C",
    description: "Lluvia",
  },
];

const WeatherIcon = ({ type }: { type: "sun" | "cloud" | "rain" }) => {
  switch (type) {
    case "sun":
      return <Sun className="size-10 text-yellow-500" />;
    case "cloud":
      return <Cloud className="size-10 text-gray-400" />;
    case "rain":
      return <CloudRain className="size-10 text-blue-500" />;
  }
};

export function WeatherForecast() {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Thermometer className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Clima en Roma
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${
              index === 0
                ? "from-[#FFCC00] to-[#FFD700]"
                : "from-gray-50 to-gray-100"
            } rounded-xl p-3 shadow-sm text-center`}
          >
            <div
              className={`text-xs font-semibold mb-2 ${
                index === 0 ? "text-[#1A1A1A]" : "text-gray-600"
              }`}
            >
              {day.day}
            </div>
            <div
              className={`text-[10px] mb-2 ${
                index === 0 ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {day.date}
            </div>

            <div className="flex justify-center mb-2">
              <WeatherIcon type={day.icon} />
            </div>

            <div
              className={`text-xl font-bold mb-1 ${
                index === 0 ? "text-[#1A1A1A]" : "text-gray-900"
              }`}
            >
              {day.temperature}
            </div>
            <div
              className={`text-xs ${
                index === 0 ? "text-gray-700" : "text-gray-600"
              }`}
            >
              {day.description}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-900">
          Previsión meteorológica para tu estancia en Roma. ¡Prepara tu equipaje!
        </p>
      </div>
    </div>
  );
}
