import { Plane, Calendar, Clock } from "lucide-react";

interface FlightInfoProps {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  gate: string;
  seat: string;
}

export function FlightInfo({
  flightNumber,
  origin,
  destination,
  departureTime,
  arrivalTime,
  date,
  gate,
  seat,
}: FlightInfoProps) {
  return (
    <div className="bg-[#FFCC00] p-6 rounded-b-3xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Plane className="size-5 text-[#1A1A1A]" />
          <span className="font-semibold text-[#1A1A1A]">{flightNumber}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-[#1A1A1A]">
          <Calendar className="size-4" />
          <span>{date}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#1A1A1A]">{origin}</div>
          <div className="text-2xl text-[#1A1A1A] mt-1">{departureTime}</div>
        </div>

        <div className="flex-1 mx-4 flex flex-col items-center">
          <div className="w-full h-[2px] bg-[#1A1A1A] relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <Plane className="size-4 text-[#1A1A1A] rotate-90" />
            </div>
          </div>
          <div className="text-xs text-[#1A1A1A] mt-2">2h 15m</div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-[#1A1A1A]">{destination}</div>
          <div className="text-2xl text-[#1A1A1A] mt-1">{arrivalTime}</div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white/90 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-600">Puerta</div>
          <div className="text-xl font-bold text-[#1A1A1A]">{gate}</div>
        </div>
        <div className="flex-1 bg-white/90 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-600">Asiento</div>
          <div className="text-xl font-bold text-[#1A1A1A]">{seat}</div>
        </div>
      </div>
    </div>
  );
}
