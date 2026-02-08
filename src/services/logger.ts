type LogPayload = Record<string, unknown>;

const DEBUG_LOGS_ENABLED =
  import.meta.env.VITE_DEBUG_LOGS === "true" ||
  import.meta.env.MODE === "development";

export function logDebug(event: string, payload: LogPayload): void {
  if (!DEBUG_LOGS_ENABLED) return;
  console.info(`[inflight-ui] ${event}`, payload);
}

export function logError(event: string, payload: LogPayload): void {
  console.warn(`[inflight-ui] ${event}`, payload);
}
