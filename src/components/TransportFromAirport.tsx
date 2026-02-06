import { Train, Car } from "lucide-react";

export function TransportFromAirport() {
  return (
    <div className="px-6 py-4">
      <div className="mb-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-3 py-2 mb-3 flex items-center gap-2 shadow-sm">
          <Car className="size-5 text-white" />
          <h4 className="font-bold text-white">
            🚗 Cómo llegar desde FCO a Roma
          </h4>
        </div>

        <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded-lg">
          ℹ️ El Aeropuerto Leonardo da Vinci (FCO) está a 32 km del centro de Roma. 
          Estas son las mejores opciones para llegar a la ciudad:
        </p>

        {/* Train Option */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Train className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Tren Leonardo Express</h5>
              <p className="text-sm text-gray-600">FCO → Roma Termini (32 min)</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">14€</div>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg mb-3 text-sm text-gray-700">
            <div className="flex items-start gap-2 mb-1">
              <span>🚄</span>
              <div>
                <strong>Directo y rápido:</strong> Salidas cada 15-30 minutos (6:23 - 23:23)
              </div>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>🎫</span>
              <div>
                <strong>Reserva anticipada:</strong> Evita colas comprando online
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span>📍</span>
              <div>
                <strong>Llegada:</strong> Estación Roma Termini (centro de la ciudad)
              </div>
            </div>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span className="text-lg">🇮🇹</span>
            Comprar Billete Trenitalia
          </button>
        </div>

        {/* Regional Train Option */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <Train className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Tren Regional FL1</h5>
              <p className="text-sm text-gray-600">Varias paradas • 48 min a Termini</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">8€</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-700">
            <p>💰 <strong>Opción económica:</strong> Más barato pero con más paradas. 
            Conecta con Trastevere, Ostiense y Tiburtina.</p>
          </div>
        </div>

        {/* Uber Option */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <Car className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Uber / Taxi</h5>
              <p className="text-sm text-gray-600">Reserva tu viaje con antelación</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">45€</div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg mb-3 text-sm text-gray-700">
            <div className="flex items-start gap-2 mb-1">
              <span>⏱️</span>
              <div>
                <strong>Duración:</strong> 40-60 min (dependiendo del tráfico)
              </div>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <span>🚗</span>
              <div>
                <strong>Taxi oficial:</strong> Tarifa fija 48€ al centro
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span>👥</span>
              <div>
                <strong>Ideal para grupos:</strong> Hasta 4 personas + equipaje
              </div>
            </div>
          </div>

          <button className="w-full bg-black hover:bg-gray-800 transition-colors text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
            <span className="font-bold">U</span>
            Reservar Uber a tu llegada
          </button>
        </div>

        {/* Bus Option */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
              <span className="text-2xl">🚌</span>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold text-[#1A1A1A]">Autobuses Terravision / SIT</h5>
              <p className="text-sm text-gray-600">FCO → Termini (55 min aprox.)</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">desde</div>
              <div className="font-bold text-[#1A1A1A]">6€</div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-3 rounded-lg text-sm text-gray-700">
            <p>💸 <strong>Más económico:</strong> Salidas cada 30-40 minutos. 
            Reserva online para mejores precios.</p>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex gap-2">
            <span className="text-lg">💡</span>
            <div className="flex-1 text-sm text-gray-700">
              <strong>Consejo:</strong> Si llegas con mucho equipaje o viajas en grupo, 
              el taxi/Uber puede ser más cómodo. Para viajeros solos, el Leonardo Express 
              es la mejor opción por rapidez y comodidad.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}