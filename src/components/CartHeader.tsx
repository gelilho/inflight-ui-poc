import { ShoppingCart, Globe } from "lucide-react";
import { useState } from "react";
import galiciaFlag from "figma:asset/0fcf32fee2c6404d2b87eb5f02c54ed7e4b4908c.png";
import cataloniaFlag from "figma:asset/96dde350892b5a3f9f95e227e39df8e0ebcf13a3.png";
import basqueFlag from "figma:asset/1986cfd864d81502d30897e5f3ebfdd25357c954.png";

interface CartHeaderProps {
  itemCount?: number;
  onCartClick?: () => void;
}

interface Language {
  code: string;
  flag: string | React.ReactNode;
  name: string;
}

const languages: Language[] = [
  { code: "ES", flag: "🇪🇸", name: "Español" },
  { 
    code: "GL", 
    flag: <img src={galiciaFlag} alt="Galicia" className="w-6 h-4 object-cover rounded" />, 
    name: "Galego" 
  },
  { 
    code: "CAT", 
    flag: <img src={cataloniaFlag} alt="Catalunya" className="w-6 h-4 object-cover rounded" />, 
    name: "Català" 
  },
  { 
    code: "EUS", 
    flag: <img src={basqueFlag} alt="Euskadi" className="w-6 h-4 object-cover rounded" />, 
    name: "Euskera" 
  },
  { code: "EN", flag: "🇬🇧", name: "English" },
  { code: "FR", flag: "🇫🇷", name: "Français" },
  { code: "IT", flag: "🇮🇹", name: "Italiano" },
];

export function CartHeader({ itemCount = 1, onCartClick }: CartHeaderProps) {
  const [selectedLang, setSelectedLang] = useState("ES");
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="max-w-md mx-auto px-6 py-4">
        {/* Main header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#FFCC00] flex items-center justify-center font-bold text-[#1A1A1A]">
              V
            </div>
            <span className="font-bold text-lg text-[#1A1A1A]">Vueling</span>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer" onClick={onCartClick}>
              <ShoppingCart className="size-5 text-[#1A1A1A]" />
            </div>
            {itemCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{itemCount}</span>
              </div>
            )}
          </div>
        </div>

        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguages(!showLanguages)}
            className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 hover:bg-gray-100 transition-colors"
          >
            <Globe className="size-4 text-gray-600" />
            <span className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-1.5">
              {typeof languages.find(l => l.code === selectedLang)?.flag === 'string' 
                ? languages.find(l => l.code === selectedLang)?.flag 
                : <span className="inline-flex">{languages.find(l => l.code === selectedLang)?.flag}</span>
              } {selectedLang}
            </span>
          </button>

          {/* Language dropdown */}
          {showLanguages && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-30 min-w-[160px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setShowLanguages(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                    selectedLang === lang.code ? "bg-[#FFCC00]/10" : ""
                  }`}
                >
                  <span className={typeof lang.flag === 'string' ? 'text-lg' : 'inline-flex'}>
                    {lang.flag}
                  </span>
                  <span className="text-sm font-medium text-[#1A1A1A]">
                    {lang.code}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}