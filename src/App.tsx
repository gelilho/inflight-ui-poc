import { FlightInfo } from "./components/FlightInfo";
import { ProductCatalog } from "./components/ProductCatalog";
import { WelcomeHeader } from "./components/WelcomeHeader";
import { FlightMap } from "./components/FlightMap";
import { AircraftDetails } from "./components/AircraftDetails";
import { BaggageInfo } from "./components/BaggageInfo";
import { TravelRecommendations } from "./components/TravelRecommendations";
import { CartHeader } from "./components/CartHeader";
import { HelpFooter } from "./components/HelpFooter";
import { MainMenu, SectionType } from "./components/MainMenu";
import { SectionHeader } from "./components/SectionHeader";
import { CrewSection } from "./components/CrewSection";
import { Entertainment } from "./components/Entertainment";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { MagazineViewer } from "./components/MagazineViewer";
import { Checkout } from "./components/Checkout";
import { TransportFromAirport } from "./components/TransportFromAirport";
import { DetailScreen, DetailContent } from "./components/DetailScreen";
import { useState, useEffect } from "react";

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>("menu");
  const [checkoutCart, setCheckoutCart] = useState<{ [key: number]: number } | null>(null);
  const [detailContent, setDetailContent] = useState<DetailContent | null>(null);

  const handleSectionSelect = (section: SectionType) => {
    setCurrentSection(section);
  };

  const handleBackToMenu = () => {
    setCurrentSection("menu");
  };

  // Scroll al principio cuando cambie de sección
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "menu":
        return (
          <>
            <WelcomeHeader
              flightNumber="VY71299"
              destination="Roma"
              destinationCode="FCO"
              duration="2h 15m"
              arrivalTime="13:00"
            />
            <div className="h-2 bg-gray-100"></div>
            <MainMenu onSectionSelect={handleSectionSelect} />
            <div className="h-2 bg-gray-100"></div>
            <HelpFooter />
          </>
        );

      case "flightDetails":
        return (
          <>
            <SectionHeader title="Detalles del Vuelo" onBack={handleBackToMenu} />
            <FlightInfo
              flightNumber="VY71299"
              origin="BCN"
              destination="FCO"
              departureTime="10:45"
              arrivalTime="13:00"
              date="03 Feb 2026"
              gate="B12"
              seat="15A"
            />
            <div className="h-2 bg-gray-100"></div>
            <BaggageInfo carousel="12" />
            <div className="h-2 bg-gray-100"></div>
            <CrewSection
              captain="Manuel"
              firstOfficer="Juan Carlos"
              cabinCrew={["Pedro", "Leticia", "Joana"]}
            />
            <div className="h-2 bg-gray-100"></div>
            <FlightMap
              route={["BCN", "LESI", "APO", "IEU", "EPOR", "FCO"]}
              currentAltitude="38,000 ft"
              currentSpeed="490 kts"
            />
            <div className="h-2 bg-gray-100"></div>
            <AircraftDetails
              model="Airbus A321 Neo"
              age="2 años"
              registration="EC-LZI"
              name="Air Force Juan"
            />
          </>
        );

      case "products":
        return (
          <>
            <SectionHeader title="Enjoy your flight - Food and coffee" onBack={handleBackToMenu} />
            <ProductCatalog
              onCheckout={(cart) => {
                setCheckoutCart(cart);
                setCurrentSection("checkout");
              }}
            />
          </>
        );

      case "entertainment":
        return (
          <>
            <SectionHeader title="Entretenimiento" onBack={handleBackToMenu} />
            <Entertainment onMagazineClick={() => handleSectionSelect("magazine")} />
          </>
        );

      case "recommendations":
        return (
          <>
            <SectionHeader title="Recomendaciones para tu viaje" onBack={handleBackToMenu} />
            <TravelRecommendations
              onDetailClick={(content) => setDetailContent(content)}
            />
          </>
        );

      case "feedback":
        return (
          <>
            <SectionHeader title="Feedback" onBack={handleBackToMenu} />
            <FeedbackScreen />
          </>
        );

      case "magazine":
        return (
          <>
            <SectionHeader title="Revista Influencer" onBack={() => handleSectionSelect("entertainment")} />
            <MagazineViewer onBack={() => handleSectionSelect("entertainment")} />
          </>
        );

      case "checkout":
        return (
          <>
            <SectionHeader title="Checkout" onBack={handleBackToMenu} />
            <Checkout cart={checkoutCart} />
          </>
        );

      case "transport":
        return (
          <>
            <SectionHeader title="Cómo llegar desde FCO a Roma" onBack={handleBackToMenu} />
            <TransportFromAirport />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen">
        {/* Cart Header - Always visible with mock count */}
        <CartHeader
          itemCount={3}
          onCartClick={() => {
            // Si no hay carrito real, crear uno mock para navegar
            if (!checkoutCart) {
              setCheckoutCart({ 2: 1, 5: 2 }); // Mock: 1 sándwich + 2 cafés
            }
            setCurrentSection("checkout");
          }}
        />

        {/* Dynamic Section Content */}
        {renderSection()}

        {/* Detail Screen Overlay */}
        {detailContent && (
          <div className="fixed inset-0 z-50 max-w-md mx-auto bg-white">
            <CartHeader
              itemCount={3}
              onCartClick={() => {
                if (!checkoutCart) {
                  setCheckoutCart({ 2: 1, 5: 2 });
                }
                setDetailContent(null);
                setCurrentSection("checkout");
              }}
            />
            <SectionHeader 
              title={detailContent.title} 
              onBack={() => setDetailContent(null)} 
            />
            <DetailScreen
              content={detailContent}
              onBack={() => setDetailContent(null)}
            />
          </div>
        )}

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}