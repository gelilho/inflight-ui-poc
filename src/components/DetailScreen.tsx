import { ChevronLeft } from "lucide-react";

export interface DetailContent {
  title: string;
  category: "news" | "place" | "restaurant";
  shortDescription: string;
  fullContent: string;
}

interface DetailScreenProps {
  content: DetailContent;
  onBack: () => void;
}

export function DetailScreen({ content, onBack }: DetailScreenProps) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Content */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="prose prose-sm max-w-none">
            {content.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}