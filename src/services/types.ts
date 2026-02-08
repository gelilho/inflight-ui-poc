/**
 * TypeScript interfaces matching the backend Pydantic schemas.
 * Only the types used by the screens we're wiring up.
 */

// ── Flight ──────────────────────────────────────────────

export interface Aircraft {
  model: string;
  registration: string;
  age_years: number;
  aircraft_name: string;
}

export interface CrewMember {
  first_name: string;
  last_name: string;
}

export interface CabinCrewMember {
  first_name: string;
}

export interface CockpitCrew {
  captain: CrewMember;
  first_officer: CrewMember;
}

export interface Flight {
  flight_number: string;
  flight_date: string;
  departure_time: string;
  arrival_time: string;
  origin: string;
  destination: string;
  aircraft: Aircraft;
  cockpit_crew: CockpitCrew;
  cabin_crew: CabinCrewMember[];
  average_duration_minutes: number;
  departure_gate: string;
  baggage_claim_belt: string;
}

// ── Destination content ─────────────────────────────────

export interface Destination {
  city: string;
  country: string;
  airport_code: string;
}

export interface Highlight {
  id: string;
  title: string;
  brief_description: string;
  long_description: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  brief_description: string;
  long_description: string;
}

export interface EmergencyContacts {
  police: string;
  ambulance: string;
  fire: string;
  radio_taxi: string;
  airport_info: string;
  vueling_contact: string;
}

export interface TransportOption {
  mode: "train" | "bus" | "taxi";
  estimated_duration_minutes: number;
  notes: string;
}

export interface AirportTransport {
  destination: string;
  options: TransportOption[];
}

export interface DestinationContent {
  destination: Destination;
  highlights: Highlight[];
  emergency_contacts: EmergencyContacts;
  restaurants: Restaurant[];
  airport_transport: AirportTransport;
}

// ── Weather ─────────────────────────────────────────────

export interface WeatherForecast {
  date: string;
  condition: string;
  min_temperature_c: number;
  max_temperature_c: number;
}

// ── News ────────────────────────────────────────────────

export interface LocalNews {
  title: string;
  brief_description: string;
  long_description: string;
  category: "sports" | "culture" | "events" | "local_interest";
}
