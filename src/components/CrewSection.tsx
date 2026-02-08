import { Users } from "lucide-react";

const CABIN_CREW_COLORS = ["bg-purple-500", "bg-pink-500", "bg-green-500"];

interface CrewSectionProps {
  captain: string;
  firstOfficer: string;
  cabinCrew: string[];
  isLoading?: boolean;
}

export function CrewSection({
  captain,
  firstOfficer,
  cabinCrew,
  isLoading = false,
}: CrewSectionProps) {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Users className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Tu tripulación de hoy
        </h3>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm space-y-3">
        {/* Captain */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-[#1A1A1A] text-lg">
            {isLoading ? "…" : captain.charAt(0)}
          </div>
          <div>
            <div className="text-xs text-gray-600">Capitán</div>
            <div className="font-semibold text-[#1A1A1A]">
              {isLoading ? "Cargando..." : captain}
            </div>
          </div>
        </div>

        {/* First Officer */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white text-lg">
            {isLoading ? "…" : firstOfficer.charAt(0)}
          </div>
          <div>
            <div className="text-xs text-gray-600">Primer Oficial</div>
            <div className="font-semibold text-[#1A1A1A]">
              {isLoading ? "Cargando..." : firstOfficer}
            </div>
          </div>
        </div>

        {/* Cabin Crew */}
        <div className="pt-3 border-t border-gray-200">
          <div className="text-xs text-gray-600 mb-2">Tripulación de Cabina</div>
          <div className="space-y-2">
            {cabinCrew.map((name, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${
                    CABIN_CREW_COLORS[i % CABIN_CREW_COLORS.length]
                  } flex items-center justify-center font-bold text-white text-sm`}
                >
                  {isLoading ? "…" : name.charAt(0)}
                </div>
                <div className="font-semibold text-[#1A1A1A] text-sm">
                  {isLoading ? "Cargando..." : name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-900">
          Nuestra tripulación está certificada y altamente cualificada para
          garantizar tu seguridad y comodidad durante el vuelo.
        </p>
      </div>
    </div>
  );
}
