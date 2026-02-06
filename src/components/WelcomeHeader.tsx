import { Plane } from "lucide-react";
import { useState } from "react";
import { BoardingPass } from "./BoardingPass";

interface WelcomeHeaderProps {
  flightNumber: string;
  destination: string;
  destinationCode: string;
  duration: string;
  arrivalTime: string;
}

export function WelcomeHeader({
  flightNumber,
  destination,
  destinationCode,
  duration,
  arrivalTime,
}: WelcomeHeaderProps) {
  const [showBoardingPass, setShowBoardingPass] = useState(false);

  return (
    <div className="px-6 py-6">
      {/* Welcome Message */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1A1A1A] mb-1">
          Bienvenida Sandra
        </h1>
        <p className="text-gray-600">
          Prepárate para disfrutar de tu vuelo
        </p>
      </div>

      {/* Flight Card */}
      <div className="bg-gradient-to-br from-[#FFCC00] to-[#FFD700] rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-gray-800 mb-1">Tu vuelo</div>
            <div className="text-2xl font-bold text-[#1A1A1A]">
              {flightNumber}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-800 mb-1">Duración</div>
            <div className="text-xl font-bold text-[#1A1A1A]">{duration}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-xs text-gray-700 mb-1">Origen</div>
            <div className="text-lg font-bold text-[#1A1A1A]">BCN</div>
          </div>
          <div className="flex-shrink-0">
            <Plane className="size-6 text-[#1A1A1A]" />
          </div>
          <div className="flex-1 text-right">
            <div className="text-xs text-gray-700 mb-1">Destino</div>
            <div className="text-lg font-bold text-[#1A1A1A]">
              {destination} {destinationCode}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white/30 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#1A1A1A]">
              Llegada estimada a Roma
            </div>
            <div className="text-lg font-bold text-[#1A1A1A]">
              {arrivalTime}
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Embarque Button */}
      <div className="mt-3 flex justify-center">
        <button
          onClick={() => setShowBoardingPass(true)}
          className="bg-[#FFCC00] hover:bg-[#FFD700] transition-colors rounded-lg py-3 px-6 font-semibold text-[#1A1A1A] flex items-center gap-2 shadow-md"
        >
          <Plane className="size-4" />
          Ver Tarjeta de Embarque
        </button>
      </div>

      {/* Boarding Pass Modal */}
      <BoardingPass
        isOpen={showBoardingPass}
        onClose={() => setShowBoardingPass(false)}
      />
    </div>
  );
}