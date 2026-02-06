import { Phone, MessageCircle } from "lucide-react";

export function HelpFooter() {
  return (
    <div className="px-6 py-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
          ¿Necesitas ayuda?
        </h3>
        <p className="text-sm text-gray-600">
          Estamos aquí para ayudarte
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Phone Contact */}
        <a
          href="tel:900100100"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-[#FFCC00] flex items-center justify-center">
            <Phone className="size-6 text-[#1A1A1A]" />
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Llámanos</div>
            <div className="text-lg font-bold text-[#1A1A1A]">900 100 100</div>
          </div>
        </a>

        {/* WhatsApp Contact */}
        <a
          href="https://wa.me/900100100"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <MessageCircle className="size-6 text-white" />
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">Chatea</div>
            <div className="text-lg font-bold text-[#1A1A1A]">WhatsApp</div>
          </div>
        </a>
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Disponible 24/7 • Atención en español e inglés
        </p>
      </div>
    </div>
  );
}
