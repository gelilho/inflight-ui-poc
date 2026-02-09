/**
 * API service — single point of contact with the backend.
 *
 * Design decisions:
 * - Generous timeouts (60s for Gemini-powered endpoints, 10s for data-only)
 * - Every function returns data or throws — callers use try/catch
 * - Base URL from env so we can switch between local and deployed
 * - Full trace logging: request → response → timing → payload size
 */

import type {
  Flight,
  DestinationContent,
  WeatherForecast,
  LocalNews,
} from "./types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// ── Logging ──────────────────────────────────────────────

const COLORS = {
  request: "color: #2196F3; font-weight: bold",   // blue
  success: "color: #4CAF50; font-weight: bold",   // green
  error: "color: #F44336; font-weight: bold",      // red
  timing: "color: #FF9800",                         // orange
  data: "color: #9C27B0",                           // purple
  fallback: "color: #FF5722; font-weight: bold",   // deep orange
};

function logRequest(method: string, url: string, timeoutMs: number) {
  console.log(
    `%c⬆ ${method} %c${url} %c(timeout: ${(timeoutMs / 1000).toFixed(0)}s)`,
    COLORS.request,
    "color: inherit",
    COLORS.timing
  );
}

function logSuccess(method: string, url: string, status: number, durationMs: number, dataSize: string) {
  console.log(
    `%c⬇ ${status} %c${url} %c${durationMs}ms %c${dataSize}`,
    COLORS.success,
    "color: inherit",
    COLORS.timing,
    COLORS.data
  );
}

function logError(method: string, url: string, durationMs: number, message: string) {
  console.log(
    `%c✖ ERROR %c${url} %c${durationMs}ms %c${message}`,
    COLORS.error,
    "color: inherit",
    COLORS.timing,
    "color: inherit"
  );
}

export function logFallback(endpoint: string, reason: string) {
  console.log(
    `%c↩ FALLBACK %c${endpoint}: ${reason}`,
    COLORS.fallback,
    "color: inherit"
  );
}

// ── Core fetch ───────────────────────────────────────────

async function get<T>(path: string, timeoutMs = 10_000): Promise<T> {
  const url = `${BASE_URL}${path}`;
  const startedAt = performance.now();

  logRequest("GET", url, timeoutMs);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });
    const durationMs = Math.round(performance.now() - startedAt);

    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const data = (await res.json()) as T;
    const dataSize = JSON.stringify(data).length;
    const sizeLabel = dataSize > 1024
      ? `${(dataSize / 1024).toFixed(1)} KB`
      : `${dataSize} B`;

    logSuccess("GET", url, res.status, durationMs, sizeLabel);

    return data;
  } catch (error) {
    const durationMs = Math.round(performance.now() - startedAt);
    const message = error instanceof Error ? error.message : "Unknown error";
    logError("GET", url, durationMs, message);
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

// ── News (Gemini AI generated) ───────────

export function fetchNews(
  airportCode: string,
  language: string
): Promise<LocalNews[]> {
  return get<LocalNews[]>(
    `/api/v1/destination/${airportCode}/news/${language}`,
    30_000 // 30s — Gemini fallback can be slow
  );
}
