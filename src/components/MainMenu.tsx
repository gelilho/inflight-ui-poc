import {
  Plane,
  Users,
  Map,
  ShoppingBag,
  Landmark,
  Info,
  ChevronRight,
  UserCircle,
  Briefcase,
  Headphones,
  MessageSquare,
  Car,
} from "lucide-react";

export type SectionType =
  | "menu"
  | "welcome"
  | "flightDetails"
  | "crew"
  | "map"
  | "aircraft"
  | "products"
  | "entertainment"
  | "recommendations"
  | "feedback"
  | "magazine"
  | "checkout"
  | "help"
  | "transport";

interface MainMenuProps {
  onSectionSelect: (section: SectionType) => void;
}

interface MenuItem {
  id: SectionType;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const menuItems: MenuItem[] = [
  {
    id: "flightDetails",
    title: "Detalles del Vuelo",
    icon: <Plane className="size-6" />,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: "products",
    title: "Enjoy your flight - Food and coffee",
    icon: <ShoppingBag className="size-6" />,
    color: "from-orange-400 to-orange-500",
  },
  {
    id: "entertainment",
    title: "Entretenimiento",
    icon: <Headphones className="size-6" />,
    color: "from-purple-400 to-purple-500",
  },
  {
    id: "recommendations",
    title: "Recomendaciones para tu viaje",
    icon: <Landmark className="size-6" />,
    color: "from-red-400 to-red-500",
  },
  {
    id: "feedback",
    title: "Danos Feedback",
    icon: <MessageSquare className="size-6" />,
    color: "from-green-400 to-green-500",
  },
  {
    id: "transport",
    title: "Cómo llegar desde FCO a Roma",
    icon: <Car className="size-6" />,
    color: "from-green-400 to-green-500",
  },
];

export function MainMenu({ onSectionSelect }: MainMenuProps) {
  return (
    <div className="px-6 py-6">
      <div className="mb-6">
        <p className="text-gray-600">Explora tu experiencia de vuelo</p>
      </div>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionSelect(item.id)}
            className="w-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>
              <span className="text-[#1A1A1A] font-semibold text-left">
                {item.title}
              </span>
            </div>
            <ChevronRight className="size-5 text-gray-400 group-hover:text-[#FFCC00] transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}