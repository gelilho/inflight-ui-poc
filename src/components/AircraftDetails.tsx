import { Plane } from "lucide-react";
import { Leaf, Zap } from "lucide-react";
import aircraftImage from "figma:asset/2d777357170d5fb9760bf680c2eb68edad387db6.png";

interface AircraftDetailsProps {
  model: string;
  age: string;
  registration: string;
  name?: string;
}

export function AircraftDetails({
  model,
  age,
  registration,
  name,
}: AircraftDetailsProps) {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Plane className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">Tu Avión</h3>
      </div>

      {/* Airplane Image - Airbus A321 Neo de Vueling */}
      <div className="mb-4 rounded-xl overflow-hidden">
        <img
          src={aircraftImage}
          alt="Airbus A321 Neo Vueling"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
        <div className="space-y-3">
          <div>
            <div className="text-sm text-gray-600 mb-1">Modelo</div>
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-[#1A1A1A]">{model}</div>
              <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                <Leaf className="size-3 text-green-700" />
                <span className="text-xs font-semibold text-green-700">
                  -20% CO₂
                </span>
              </div>
              <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded-full">
                <Zap className="size-3 text-blue-700" />
                <span className="text-xs font-semibold text-blue-700">
                  +15% Eficiencia
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
            {name && (
              <div>
                <div className="text-sm text-gray-600 mb-1">Nombre</div>
                <div className="text-lg font-bold text-[#1A1A1A]">{name}</div>
              </div>
            )}
            <div>
              <div className="text-sm text-gray-600 mb-1">Antigüedad</div>
              <div className="text-lg font-bold text-[#1A1A1A]">{age}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Matrícula</div>
              <div className="text-lg font-bold text-[#1A1A1A] font-mono">
                {registration}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
        <p className="text-sm text-green-900">
          <strong>Tecnología avanzada:</strong> El A321 Neo cuenta con motores de última generación que reducen el consumo de combustible y las emisiones.
        </p>
      </div>
    </div>
  );
}