import { X, Plane, Calendar, Clock, Users, MapPin } from "lucide-react";

interface BoardingPassProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BoardingPass({ isOpen, onClose }: BoardingPassProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden flex flex-col">
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-[#FFCC00] to-[#FFD700] p-2.5 flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors"
          >
            <X className="size-4 text-[#1A1A1A]" />
          </button>
          <h2 className="text-base font-bold text-[#1A1A1A]">Tarjeta de Embarque</h2>
        </div>

        {/* Content - NO SCROLL */}
        <div className="p-3">
          {/* Flight Route */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl mb-2">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A1A1A]">BCN</div>
                <div className="text-xs text-gray-600">Barcelona</div>
                <div className="text-sm font-semibold text-[#1A1A1A] mt-0.5">10:45</div>
              </div>
              <div className="flex-1 mx-2 flex flex-col items-center">
                <Plane className="size-4 text-[#FFCC00] mb-0.5" />
                <div className="w-full h-0.5 bg-gray-300 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1.5">
                    <span className="text-[10px] text-gray-600">2h 15m</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1A1A1A]">FCO</div>
                <div className="text-xs text-gray-600">Roma</div>
                <div className="text-sm font-semibold text-[#1A1A1A] mt-0.5">13:00</div>
              </div>
            </div>
          </div>

          {/* Passenger Info */}
          <div className="bg-gray-50 rounded-lg p-2 mb-2">
            <div className="text-[10px] text-gray-500">Pasajero</div>
            <div className="text-sm font-bold text-[#1A1A1A]">SANDRA GARCÍA</div>
          </div>

          {/* Flight Details Grid */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <div className="text-[10px] text-gray-500">Vuelo</div>
              <div className="text-sm font-bold text-[#1A1A1A]">VY71299</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500">Fecha</div>
              <div className="text-sm font-bold text-[#1A1A1A]">06 FEB 2026</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500">Hora Embarque</div>
              <div className="text-sm font-bold text-[#1A1A1A]">10:15</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500">Hora Salida</div>
              <div className="text-sm font-bold text-[#1A1A1A]">10:45</div>
            </div>
          </div>

          {/* Seat and Gate */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-gray-50 rounded-lg p-1.5 text-center">
              <div className="text-[10px] text-gray-500">Puerta</div>
              <div className="text-lg font-bold text-[#1A1A1A]">B12</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-1.5 text-center">
              <div className="text-[10px] text-gray-500">Asiento</div>
              <div className="text-lg font-bold text-[#1A1A1A]">14A</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-1.5 text-center">
              <div className="text-[10px] text-gray-500">Grupo</div>
              <div className="text-lg font-bold text-[#1A1A1A]">2</div>
            </div>
          </div>

          {/* QR Code */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-2 mb-1.5">
            <div className="bg-white flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 200 200">
                {/* QR Code Pattern - Simple mock */}
                <rect width="200" height="200" fill="white" />
                {[...Array(10)].map((_, i) =>
                  [...Array(10)].map((_, j) => {
                    const shouldFill = (i + j) % 2 === 0 || (i * j) % 3 === 0;
                    return shouldFill ? (
                      <rect
                        key={`${i}-${j}`}
                        x={i * 20}
                        y={j * 20}
                        width="20"
                        height="20"
                        fill="black"
                      />
                    ) : null;
                  })
                )}
              </svg>
            </div>
          </div>

          <div className="text-center mb-2">
            <p className="text-[10px] text-gray-500">
              Código: <span className="font-bold">VY2K26</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-2">
          <p className="text-[10px] text-gray-600 text-center">
            Presenta este código QR en la puerta de embarque
          </p>
        </div>
      </div>
    </div>
  );
}