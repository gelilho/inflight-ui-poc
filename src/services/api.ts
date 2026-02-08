/**
 * API service — single point of contact with the backend.
 *
 * Design decisions:
 * - Generous timeouts (60s for Gemini-powered endpoints, 10s for data-only)
 * - Every function returns data or throws — callers use try/catch
 * - Base URL from env so we can switch between local and deployed
 */

import type {
  Flight,
  DestinationContent,
  WeatherForecast,
  LocalNews,
} from "./types";
import { logDebug, logError } from "./logger";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function get<T>(path: string, timeoutMs = 10_000): Promise<T> {
  const startedAt = performance.now();
  logDebug("api.request.start", {
    method: "GET",
    url: `${BASE_URL}${path}`,
    timeoutMs,
  });
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const data = (await res.json()) as T;
    logDebug("api.request.success", {
      method: "GET",
      url: `${BASE_URL}${path}`,
      status: res.status,
      durationMs: Math.round(performance.now() - startedAt),
    });
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";
    logError("api.request.error", {
      method: "GET",
      url: `${BASE_URL}${path}`,
      durationMs: Math.round(performance.now() - startedAt),
      message,
    });
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

// ── Flight data (fast — CSV lookup, no AI) ──────────────

export function fetchFlight(
  flightNumber: string,
  flightDate: string
): Promise<Flight> {
  return get<Flight>(`/api/v1/flight/${flightNumber}/${flightDate}`);
}

// ── Destination content (slow first call — Gemini generates) ─

export function fetchDestinationContent(
  airportCode: string,
  language: string
): Promise<DestinationContent> {
  return get<DestinationContent>(
    `/api/v1/destination/${airportCode}/content/${language}`,
    60_000 // 60s — Gemini can take 20-40s on first call
  );
}

// ── Weather (fast — API or mock fallback) ────────────────

export function fetchWeather(
  airportCode: string,
  language: string
): Promise<WeatherForecast[]> {
  return get<WeatherForecast[]>(
    `/api/v1/destination/${airportCode}/weather/${language}`
  );
}

// ── News (medium — NewsAPI or Gemini fallback) ───────────

export function fetchNews(
  airportCode: string,
  language: string
): Promise<LocalNews[]> {
  return get<LocalNews[]>(
    `/api/v1/destination/${airportCode}/news/${language}`,
    30_000 // 30s — Gemini fallback can be slow
  );
}
