
  # Pantalla de vuelo Vueling

  This is a code bundle for Pantalla de vuelo Vueling. The original project is available at https://www.figma.com/design/bSUtFj39bcnhVgv3eklEnM/Pantalla-de-vuelo-Vueling.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

If you prefer the conventional script name, run `npm start` (same as `npm run dev`).

## Debug logging (frontend + API calls)

The app logs API requests, responses, and fallback usage in the browser console.
By default, logs are enabled in development mode. You can force them on/off with:

```bash
# enable
VITE_DEBUG_LOGS=true npm run dev

# disable
VITE_DEBUG_LOGS=false npm run dev
```

When the backend is unavailable, the UI falls back to cached data and logs:
`flight.fallback`, `destination.fallback`, `weather.fallback`, `news.fallback`.
  
