import { ArrowLeft } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  onBack: () => void;
}

export function SectionHeader({ title, onBack }: SectionHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm px-6 py-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <ArrowLeft className="size-5 text-[#1A1A1A]" />
        </button>
        <h2 className="text-xl font-bold text-[#1A1A1A]">{title}</h2>
      </div>
    </div>
  );
}
