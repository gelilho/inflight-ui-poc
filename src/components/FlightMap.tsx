import { useEffect, useState } from "react";
import { Plane, MapPin } from "lucide-react";
import mapRoute from "figma:asset/cf2a51d01fd396acdeeb00203b7bd3f7eb266822.png";

interface Waypoint {
  code: string;
  lat: number;
  lng: number;
}

interface FlightMapProps {
  route: string[];
  currentAltitude: string;
  currentSpeed: string;
}

export function FlightMap({
  route,
  currentAltitude,
  currentSpeed,
}: FlightMapProps) {
  const [progress, setProgress] = useState(45);

  // Animación del progreso del vuelo
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.5;
        return next > 100 ? 45 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Coordenadas para los puntos en el mapa de la imagen
  // Ajustadas basándose en la imagen proporcionada
  const mapWidth = 100; // Usaremos porcentajes
  const mapHeight = 100;

  // Coordenadas aproximadas en porcentaje del mapa de la imagen
  const waypointPositions: { [key: string]: { x: number; y: number } } = {
    BCN: { x: 24, y: 48 }, // Barcelona
    LESI: { x: 35, y: 42 }, // Cerca de la costa francesa
    APO: { x: 50, y: 38 }, // Sobre el mar
    IEU: { x: 65, y: 40 }, // Cerca de Córcega
    EPOR: { x: 75, y: 42 }, // Cerca de Italia
    FCO: { x: 80, y: 40 }, // Roma
  };

  const routePoints = route.map((code) => ({
    code,
    ...waypointPositions[code],
  }));

  // Calcular posición actual del avión basada en el progreso
  const totalSegments = routePoints.length - 1;
  const currentSegmentIndex = Math.floor((progress / 100) * totalSegments);
  const segmentProgress = ((progress / 100) * totalSegments) % 1;

  let planeX = 0;
  let planeY = 0;
  let planeAngle = 0;

  if (
    currentSegmentIndex < routePoints.length - 1 &&
    routePoints[currentSegmentIndex] &&
    routePoints[currentSegmentIndex + 1]
  ) {
    const start = routePoints[currentSegmentIndex];
    const end = routePoints[currentSegmentIndex + 1];
    planeX = start.x + (end.x - start.x) * segmentProgress;
    planeY = start.y + (end.y - start.y) * segmentProgress;
    planeAngle =
      (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;
  }

  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#1A1A1A]">Mapa de vuelo</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="size-4 text-[#FFCC00]" />
          <span>En tiempo real</span>
        </div>
      </div>

      {/* Flight Data */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-600 mb-1">Altura</div>
          <div className="text-lg font-bold text-[#1A1A1A]">
            {currentAltitude}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-600 mb-1">Velocidad</div>
          <div className="text-lg font-bold text-[#1A1A1A]">
            {currentSpeed}
          </div>
        </div>
      </div>

      {/* Mapa de la ruta con avión animado superpuesto */}
      <div className="mb-6 rounded-xl overflow-hidden shadow-lg relative">
        {/* Imagen del mapa real como fondo */}
        <img
          src={mapRoute}
          alt="Ruta BCN - FCO"
          className="w-full h-auto"
        />
        
        {/* SVG superpuesto para el avión animado */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Waypoints invisibles para el path */}
          {routePoints.map((point, index) => (
            <g key={point.code}>
              <circle
                cx={point.x}
                cy={point.y}
                r="1.2"
                fill={
                  index === 0
                    ? "#FFCC00"
                    : index === routePoints.length - 1
                    ? "#EF4444"
                    : "#64748b"
                }
                stroke="white"
                strokeWidth="0.3"
                opacity="0.8"
              />
            </g>
          ))}

          {/* Airplane icon animado en tiempo real */}
          <g transform={`translate(${planeX}, ${planeY}) rotate(${planeAngle})`}>
            <circle cx="0" cy="0" r="2.5" fill="#FFCC00" opacity="0.5">
              <animate
                attributeName="r"
                values="2.5;3.5;2.5"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="0" cy="0" r="1.8" fill="#FFCC00" stroke="#1A1A1A" strokeWidth="0.3" />
            <path
              d="M -1 -0.4 L 1.5 0 L -1 0.4 Z"
              fill="#1A1A1A"
            />
          </g>
        </svg>
        
        {/* Info Card */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2">
          <div className="flex items-center gap-2">
            <Plane className="size-4 text-[#FFCC00]" />
            <div className="text-xs">
              <div className="font-bold text-[#1A1A1A]">En vuelo</div>
              <div className="text-gray-600">1h 45 min restantes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tu Ruta - Timeline */}
      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">Tu Ruta</h3>
      
      <div className="relative mb-4">
        {/* Timeline */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-200"></div>
        <div className="absolute left-3 top-0 h-[60%] w-[2px] bg-[#FFCC00]"></div>

        {/* Origin */}
        <div className="relative flex items-start mb-6">
          <div className="relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#FFCC00] border-2 border-white shadow-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="font-semibold text-[#1A1A1A]">Barcelona (BCN)</div>
            <div className="text-sm text-gray-600">Aeropuerto El Prat</div>
            <div className="text-xs text-gray-500 mt-1">Embarque: 10:30</div>
          </div>
        </div>

        {/* Current Position */}
        <div className="relative flex items-start mb-6">
          <div className="relative z-10">
            <div className="w-6 h-6 rounded-full bg-[#FFCC00] flex items-center justify-center animate-pulse">
              <MapPin className="size-3 text-white" />
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="font-semibold text-[#FFCC00]">En vuelo</div>
            <div className="text-sm text-gray-600">Sobre el Mediterráneo</div>
            <div className="text-xs text-gray-500 mt-1">Llegada estimada: 13:00</div>
          </div>
        </div>

        {/* Destination */}
        <div className="relative flex items-start">
          <div className="relative z-10">
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white shadow-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="font-semibold text-[#1A1A1A]">Roma (FCO)</div>
            <div className="text-sm text-gray-600">Aeropuerto Fiumicino</div>
            <div className="text-xs text-gray-500 mt-1">Llegada: 13:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}