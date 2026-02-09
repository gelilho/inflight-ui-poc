import { PlaneTakeoff, ArrowRightLeft } from "lucide-react";
import type { ConnectingFlight } from "../services/types";

interface ConnectingFlightsProps {
  connections: ConnectingFlight[];
  arrivalTerminal: string;
}

export function ConnectingFlights({ connections, arrivalTerminal }: ConnectingFlightsProps) {
  if (connections.length === 0) return null;

  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <ArrowRightLeft className="size-5 text-[#FFCC00]" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Vuelos en conexión
        </h3>
      </div>

      <div className="mb-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
        <p className="text-sm text-amber-900">
          Llegas a la <span className="font-bold">{arrivalTerminal}</span>. Los vuelos marcados con{" "}
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded">
            Misma terminal
          </span>{" "}
          no requieren cambio de terminal.
        </p>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1A1A1A] text-white">
              <th className="py-2.5 px-3 text-left font-semibold">Vuelo</th>
              <th className="py-2.5 px-3 text-left font-semibold">Destino</th>
              <th className="py-2.5 px-3 text-center font-semibold">Hora</th>
              <th className="py-2.5 px-3 text-center font-semibold">Puerta</th>
            </tr>
          </thead>
          <tbody>
            {connections.map((conn, idx) => (
              <tr
                key={conn.flight_number}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t border-gray-100`}
              >
                <td className="py-3 px-3">
                  <div className="font-semibold text-[#1A1A1A]">{conn.flight_number}</div>
                  <div className="text-xs text-gray-500">{conn.airline}</div>
                </td>
                <td className="py-3 px-3">
                  <div className="font-medium text-[#1A1A1A]">{conn.destination_code}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[80px]">{conn.destination}</div>
                </td>
                <td className="py-3 px-3 text-center">
                  <div className="font-semibold text-[#1A1A1A]">{conn.departure_time}</div>
                  <div className="mt-0.5">
                    {conn.status === "On Time" && (
                      <span className="text-xs text-green-700 font-medium">Puntual</span>
                    )}
                    {conn.status === "Delayed" && (
                      <span className="text-xs text-red-600 font-medium">Retrasado</span>
                    )}
                    {conn.status === "Boarding" && (
                      <span className="text-xs text-amber-600 font-medium">Embarcando</span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-3 text-center">
                  <div className="font-bold text-[#1A1A1A]">{conn.gate}</div>
                  <div className="mt-0.5">
                    {conn.same_terminal ? (
                      <span className="inline-block bg-green-100 text-green-800 text-[10px] font-medium px-1.5 py-0.5 rounded">
                        {conn.terminal}
                      </span>
                    ) : (
                      <span className="inline-block bg-red-100 text-red-700 text-[10px] font-medium px-1.5 py-0.5 rounded">
                        {conn.terminal} ↗
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-start gap-2 text-xs text-gray-500">
        <PlaneTakeoff className="size-4 mt-0.5 flex-shrink-0" />
        <span>
          Información actualizada. Verifica en los monitores del aeropuerto al aterrizar.
        </span>
      </div>
    </div>
  );
}
