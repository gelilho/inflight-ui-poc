import { Luggage } from "lucide-react";

interface BaggageInfoProps {
  carousel: string;
}

export function BaggageInfo({ carousel }: BaggageInfoProps) {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <Luggage className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">Detalles sobre recogida de equipaje en destino</h3>
      </div>

      <div className="bg-gradient-to-r from-[#FFCC00] to-[#FFD700] rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-[#1A1A1A] mb-1">
              Cinta de recogida de equipaje
            </div>
            <div className="text-3xl font-bold text-[#1A1A1A]">{carousel}</div>
          </div>
          <div className="bg-white/30 rounded-full p-3">
            <Luggage className="size-8 text-[#1A1A1A]" />
          </div>
        </div>
      </div>

      <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-900">
          Recuerda verificar el número de cinta al llegar al aeropuerto.
        </p>
      </div>
    </div>
  );
}