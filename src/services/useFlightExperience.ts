/**
 * useFlightExperience — single hook for all live API data.
 *
 * Fetches flight, destination content, weather, and news in parallel.
 * Falls back to pre-cached data if backend is down or Gemini times out.
 * The demo never breaks.
 */

import { useState, useEffect } from "react";
import {
  fetchFlight,
  fetchDestinationContent,
  fetchWeather,
  fetchNews,
} from "./api";
import { logDebug, logError } from "./logger";
import {
  FALLBACK_FLIGHT,
  FALLBACK_DESTINATION,
  FALLBACK_WEATHER,
  FALLBACK_NEWS,
} from "./fallback-data";
import type {
  Flight,
  DestinationContent,
  WeatherForecast,
  LocalNews,
} from "./types";

interface FlightExperience {
  flight: Flight;
  destinationContent: DestinationContent;
  weather: WeatherForecast[];
  news: LocalNews[];
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

const FLIGHT_NUMBER = "VY71299";
const FLIGHT_DATE = "20260207";
const AIRPORT_CODE = "FCO";
const LANGUAGE = "es";

export function useFlightExperience(): FlightExperience {
  const [flight, setFlight] = useState<Flight>(FALLBACK_FLIGHT);
  const [destinationContent, setDestinationContent] =
    useState<DestinationContent>(FALLBACK_DESTINATION);
  const [weather, setWeather] = useState<WeatherForecast[]>(FALLBACK_WEATHER);
  const [news, setNews] = useState<LocalNews[]>(FALLBACK_NEWS);

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
    // Fire all requests in parallel — each one is independent
    fetchFlight(FLIGHT_NUMBER, FLIGHT_DATE)
      .then((data) => {
        setFlight(data);
        setIsLive((prev) => ({ ...prev, flight: true }));
        logDebug("flight.loaded", { source: "api" });
      })
      .catch((err) => {
        console.warn("Flight API unavailable, using fallback:", err.message);
        logError("flight.fallback", { message: err.message });
      })
      .finally(() => setLoading((prev) => ({ ...prev, flight: false })));

    fetchDestinationContent(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setDestinationContent(data);
        setIsLive((prev) => ({ ...prev, destination: true }));
        logDebug("destination.loaded", { source: "api" });
      })
      .catch((err) => {
        console.warn("Destination API unavailable, using fallback:", err.message);
        logError("destination.fallback", { message: err.message });
      })
      .finally(() => setLoading((prev) => ({ ...prev, destination: false })));

    fetchWeather(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setWeather(data);
        setIsLive((prev) => ({ ...prev, weather: true }));
        logDebug("weather.loaded", { source: "api" });
      })
      .catch((err) => {
        console.warn("Weather API unavailable, using fallback:", err.message);
        logError("weather.fallback", { message: err.message });
      })
      .finally(() => setLoading((prev) => ({ ...prev, weather: false })));

    fetchNews(AIRPORT_CODE, LANGUAGE)
      .then((data) => {
        setNews(data);
        setIsLive((prev) => ({ ...prev, news: true }));
        logDebug("news.loaded", { source: "api" });
      })
      .catch((err) => {
        console.warn("News API unavailable, using fallback:", err.message);
        logError("news.fallback", { message: err.message });
      })
      .finally(() => setLoading((prev) => ({ ...prev, news: false })));
  }, []);

  return { flight, destinationContent, weather, news, isLive, loading };
}
