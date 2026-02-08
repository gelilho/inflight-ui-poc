# Inflight UI PoC

React frontend for the Vueling Inflight Experience — MWC Barcelona 2026.

Passengers scan their boarding pass and get personalised destination content: highlights, restaurants, weather, local news, crew info, and aircraft details — all AI-generated and translated.

---

## How to run (API + UI together)

You need **two terminals** — one for the backend API, one for the frontend UI.

### Terminal 1 — Backend API (port 8000)

```bash
cd inflight-poc
./scripts/run.sh
```

This activates the Python venv and starts FastAPI on `http://localhost:8000`.
Swagger docs at `http://localhost:8000/docs`.

> First time? Run `./scripts/run.sh --install` to install Python dependencies.

### Terminal 2 — Frontend UI (port 3000)

```bash
cd inflight-ui-poc
./scripts/run-server.sh
```

This reads `scripts/demo-config.json`, injects the demo parameters, and starts Vite on `http://localhost:3000`.

> First time? Run `./scripts/run-server.sh --install` to install Node dependencies.

### That's it

- Open `http://localhost:3000` in your browser
- The UI fetches live data from the API at `http://localhost:8000`
- If the API is down, the UI still works using pre-cached fallback data (demo never breaks)

---

## Changing the demo flight

Edit **`scripts/demo-config.json`** — it's the single file that controls what the UI requests:

```json
{
  "flight_number": "VY71299",
  "flight_date": "20260207",
  "airport_code": "FCO",
  "language": "es"
}
```

After editing, restart the UI (`Ctrl+C` → `./scripts/run-server.sh`).

### Available demo data

| Flight | Route | Aircraft |
|--------|-------|----------|
| VY71299 / 20260207 | Barcelona → Rome | Airbus A320-200 |
| VY71299 / 20260208 | Barcelona → Rome | Airbus A320-200 |
| IB3421 / 20260208 | Madrid → London | Boeing 737-800 |

| Airport | City |
|---------|------|
| FCO | Rome Fiumicino |
| LHR | London Heathrow |
| CDG | Paris Charles de Gaulle |

| Code | Language |
|------|----------|
| es | Spanish |
| en | English |
| fr | French |
| it | Italian |
| ca | Catalan |
| gl | Galician |

---

## Architecture

```
┌──────────────────────┐         ┌──────────────────────────┐
│   inflight-ui-poc    │  HTTP   │     inflight-poc          │
│   React + Vite       │ ──────→ │     FastAPI + Gemini      │
│   :3000              │         │     :8000                  │
└──────────────────────┘         └──────────────────────────┘
        │                                   │
        │ fallback-data.ts                  ├── Gemini 2.5 Flash (AI content)
        │ (pre-cached Rome data)            ├── OpenWeatherMap (weather)
        └── demo never breaks               └── NewsAPI (news)
```

**Fallback-first**: The UI initialises with pre-cached data instantly, then replaces it with live API data when ready. If any API call fails, the cached data stays — the demo never shows an error screen.

### What connects to the API

| Screen | Endpoint | Speed |
|--------|----------|-------|
| Crew | `/api/v1/flight/{number}/{date}` | Fast (CSV) |
| Aircraft | `/api/v1/flight/{number}/{date}` | Fast (CSV) |
| Highlights | `/api/v1/destination/{code}/content/{lang}` | Slow (Gemini) |
| Restaurants | `/api/v1/destination/{code}/content/{lang}` | Slow (Gemini) |
| Emergency | `/api/v1/destination/{code}/content/{lang}` | Slow (Gemini) |
| Weather | `/api/v1/destination/{code}/weather/{lang}` | Fast (API) |
| News | `/api/v1/destination/{code}/news/{lang}` | Medium (API/Gemini) |

### Static screens (no API)

WelcomeHeader, FlightInfo, FlightMap, BaggageInfo, Transport, Products, Entertainment, Feedback, Magazine, Checkout.

---

## Debug logging

API requests, responses, and fallback usage are logged in the browser console.

```bash
VITE_DEBUG_LOGS=true  ./scripts/run-server.sh   # force logs on
VITE_DEBUG_LOGS=false ./scripts/run-server.sh   # force logs off
```

When the API is down, console shows: `flight.fallback`, `destination.fallback`, `weather.fallback`, `news.fallback`.

---

## Project structure

```
scripts/
  run-server.sh       ← start the UI (reads demo-config.json)
  demo-config.json    ← change the demo flight/airport/language here

src/
  services/
    api.ts            ← fetch client (timeouts: 60s Gemini, 30s news, 10s data)
    types.ts          ← TypeScript interfaces matching backend schemas
    fallback-data.ts  ← pre-cached Rome data (demo never breaks)
    useFlightExperience.ts  ← single hook for all API data
    logger.ts         ← conditional debug logging
  components/
    CrewSection.tsx    ← live crew names from API
    AircraftDetails.tsx  ← live aircraft info from API
    TravelRecommendations.tsx  ← highlights, restaurants, weather, news
    ...                ← static UI components
  App.tsx             ← main app, wires data to components
```
