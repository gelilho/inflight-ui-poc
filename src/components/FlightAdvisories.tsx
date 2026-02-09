import { ShieldAlert } from "lucide-react";
import type { FlightAdvisory } from "../services/types";

interface FlightAdvisoriesProps {
  advisories: FlightAdvisory[];
}

const priorityStyles: Record<string, string> = {
  high: "border-red-200 bg-red-50",
  medium: "border-amber-200 bg-amber-50",
  low: "border-blue-200 bg-blue-50",
};

const priorityTextColor: Record<string, string> = {
  high: "text-red-900",
  medium: "text-amber-900",
  low: "text-blue-900",
};

export function FlightAdvisories({ advisories }: FlightAdvisoriesProps) {
  if (advisories.length === 0) return null;

  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <ShieldAlert className="size-5 text-red-500" />
        <h3 className="text-lg font-semibold text-[#1A1A1A]">
          Avisos importantes
        </h3>
      </div>

      <div className="space-y-2">
        {advisories.map((advisory, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 rounded-xl border p-3 ${priorityStyles[advisory.priority]}`}
          >
            <span className="text-2xl leading-none mt-0.5">{advisory.icon}</span>
            <div className="flex-1 min-w-0">
              <div className={`font-semibold text-sm ${priorityTextColor[advisory.priority]}`}>
                {advisory.title}
              </div>
              <p className={`text-xs mt-0.5 ${priorityTextColor[advisory.priority]} opacity-80`}>
                {advisory.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
