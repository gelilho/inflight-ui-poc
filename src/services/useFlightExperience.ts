/**
 * useFlightExperience — single hook for all live API data.
 *
 * Fetches flight, destination content, weather, news, and advisories in parallel.
 * Falls back to pre-cached data if backend is down or Gemini times out.
 * The demo never breaks.
 */

import { useState, useEffect } from "react";
import {
  fetchFlight,
  fetchDestinationContent,
  fetchWeather,
  fetchNews,
  fetchAdvisories,
  logFallback,
} from "./api";
import {
  FALLBACK_FLIGHT,
  FALLBACK_DESTINATION,
  FALLBACK_WEATHER,
  FALLBACK_NEWS,
  FALLBACK_ADVISORIES,
} from "./fallback-data";
import type {
  Flight,
  DestinationContent,
  WeatherForecast,
  LocalNews,
  FlightAdvisory,
} from "./types";

interface FlightExperience {
  flight: Flight;
  destinationContent: DestinationContent;
  weather: WeatherForecast[];
  news: LocalNews[];
  advisories: FlightAdvisory[];
  isLive: {
    flight: boolean;
    destination: boolean;
    weather: boolean;
    news: boolean;
  };
  loading: {
    flight: boolean;
    destination: boolean;
    weather: boolean;
    news: boolean;
  };
}

// ── Demo config (set by scripts/run-server.sh from demo-config.json) ──
// Fallback to Rome demo defaults so it always works.

export const DEMO_CONFIG = {
  flightNumber: (import.meta.env.VITE_FLIGHT_NUMBER as string) || "VY71299",
  flightDate: (import.meta.env.VITE_FLIGHT_DATE as string) || "20260207",
  airportCode: (import.meta.env.VITE_AIRPORT_CODE as string) || "FCO",
  destinationCity: (import.meta.env.VITE_DESTINATION_CITY as string) || "Roma",
  originCode: (import.meta.env.VITE_ORIGIN_CODE as string) || "BCN",
  language: (import.meta.env.VITE_LANGUAGE as string) || "es",
} as const;

const FLIGHT_NUMBER = DEMO_CONFIG.flightNumber;
const FLIGHT_DATE = DEMO_CONFIG.flightDate;
const AIRPORT_CODE = DEMO_CONFIG.airportCode;
const LANGUAGE = DEMO_CONFIG.language;

export function useFlightExperience(): FlightExperience {
  const [flight, setFlight] = useState<Flight>(FALLBACK_FLIGHT);
  const [destinationContent, setDestinationContent] =
    useState<DestinationContent>(FALLBACK_DESTINATION);
  const [weather, setWeather] = useState<WeatherForecast[]>(FALLBACK_WEATHER);
  const [news, setNews] = useState<LocalNews[]>(FALLBACK_NEWS);
  const [advisories, setAdvisories] = useState<FlightAdvisory[]>(FALLBACK_ADVISORIES);

  const [isLive, setIsLive] = useState({
    flight: false,
    destination: false,
    weather: false,
    news: false,
  });
  const [loading, setLoading] = useState({
    flight: true,
    destination: true,
    weather: true,
    news: true,
  });

  useEffect(() => {
    console.log(
      "%c✈ Inflight Experience — loading data",
      "color: #FFCC00; font-weight: bold; font-size: 14px",
      { config: DEMO_CONFIG }
    );

    // Fire all requests in parallel — each one is independent
    fetchFlight(FLIGHT_NUMBER, FLIGHT_DATE)
      .then((data) => {
        setFlight(data);
        setIsLive((prev) => ({ ...prev, flight: true }));
      })
      .catch((err) => {
        logFallback("flight", err.message);
      })
      .finally(() => setLoading((prev) => ({ ...prev, flight: false })));

    fetchDestinationContent(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setDestinationContent(data);
        setIsLive((prev) => ({ ...prev, destination: true }));
      })
      .catch((err) => {
        logFallback("destination", err.message);
      })
      .finally(() => setLoading((prev) => ({ ...prev, destination: false })));

    fetchWeather(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setWeather(data);
        setIsLive((prev) => ({ ...prev, weather: true }));
      })
      .catch((err) => {
        logFallback("weather", err.message);
      })
      .finally(() => setLoading((prev) => ({ ...prev, weather: false })));

    fetchNews(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setNews(data);
        setIsLive((prev) => ({ ...prev, news: true }));
      })
      .catch((err) => {
        logFallback("news", err.message);
      })
      .finally(() => setLoading((prev) => ({ ...prev, news: false })));

    fetchAdvisories()
      .then((data) => setAdvisories(data))
      .catch((err) => logFallback("advisories", err.message));
  }, []);

  return { flight, destinationContent, weather, news, advisories, isLive, loading };
}
