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
import { useFlightExperience, DEMO_CONFIG } from "./services/useFlightExperience";

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>("menu");
  const [checkoutCart, setCheckoutCart] = useState<{ [key: number]: number } | null>(null);
  const [detailContent, setDetailContent] = useState<DetailContent | null>(null);

  // Live API data (with pre-cached fallback — demo never breaks)
  const { flight, destinationContent, weather, news, loading } =
    useFlightExperience();

  const handleSectionSelect = (section: SectionType) => {
    setCurrentSection(section);
  };

  const handleBackToMenu = () => {
    setCurrentSection("menu");
  };

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      // ── Static screens (unchanged) ───────────────────

      case "menu":
        return (
          <>
            <WelcomeHeader
              flightNumber={DEMO_CONFIG.flightNumber}
              destination={DEMO_CONFIG.destinationCity}
              destinationCode={DEMO_CONFIG.airportCode}
              originCode={DEMO_CONFIG.originCode}
              duration={`${Math.floor(flight.average_duration_minutes / 60)}h ${flight.average_duration_minutes % 60}m`}
              arrivalTime={flight.arrival_time}
            />
            <div className="h-2 bg-gray-100"></div>
            <MainMenu onSectionSelect={handleSectionSelect} />
            <div className="h-2 bg-gray-100"></div>
            <HelpFooter />
          </>
        );

      // ── LIVE: Crew + Aircraft from backend API ───────

      case "flightDetails":
        return (
          <>
            <SectionHeader title="Detalles del Vuelo" onBack={handleBackToMenu} />
            <FlightInfo
              flightNumber={DEMO_CONFIG.flightNumber}
              origin={DEMO_CONFIG.originCode}
              destination={DEMO_CONFIG.airportCode}
              departureTime={flight.departure_time}
              arrivalTime={flight.arrival_time}
              date={`${DEMO_CONFIG.flightDate.slice(6,8)}/${DEMO_CONFIG.flightDate.slice(4,6)}/${DEMO_CONFIG.flightDate.slice(0,4)}`}
              gate={flight.departure_gate}
              seat="15A"
            />
            <div className="h-2 bg-gray-100"></div>
            <BaggageInfo carousel={flight.baggage_claim_belt} />
            <div className="h-2 bg-gray-100"></div>
            <CrewSection
              captain={`${flight.cockpit_crew.captain.first_name} ${flight.cockpit_crew.captain.last_name}`}
              firstOfficer={`${flight.cockpit_crew.first_officer.first_name} ${flight.cockpit_crew.first_officer.last_name}`}
              cabinCrew={flight.cabin_crew.map((c) => c.first_name)}
              isLoading={loading.flight}
            />
            <div className="h-2 bg-gray-100"></div>
            <FlightMap
              route={[DEMO_CONFIG.originCode, "...", DEMO_CONFIG.airportCode]}
              currentAltitude="38,000 ft"
              currentSpeed="490 kts"
            />
            <div className="h-2 bg-gray-100"></div>
            <AircraftDetails
              model={flight.aircraft.model}
              age={`${flight.aircraft.age_years} años`}
              registration={flight.aircraft.registration}
              name={flight.aircraft.aircraft_name}
              isLoading={loading.flight}
            />
          </>
        );

      // ── LIVE: Highlights, Restaurants, Emergency, Weather, News ─

      case "recommendations":
        return (
          <>
            <SectionHeader title="Recomendaciones para tu viaje" onBack={handleBackToMenu} />
            <TravelRecommendations
              onDetailClick={(content) => setDetailContent(content)}
              cityName={DEMO_CONFIG.destinationCity}
              highlights={destinationContent.highlights}
              restaurants={destinationContent.restaurants}
              emergencyContacts={destinationContent.emergency_contacts}
              weather={weather}
              news={news}
              isLoading={{
                destination: loading.destination,
                weather: loading.weather,
                news: loading.news,
              }}
            />
          </>
        );

      // ── Static screens (unchanged) ───────────────────

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
            <SectionHeader title={`Cómo llegar desde ${DEMO_CONFIG.airportCode} a ${DEMO_CONFIG.destinationCity}`} onBack={handleBackToMenu} />
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
        {/* Cart Header */}
        <CartHeader
          itemCount={3}
          onCartClick={() => {
            if (!checkoutCart) {
              setCheckoutCart({ 2: 1, 5: 2 });
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
