import { Star, Send } from "lucide-react";
import { useState } from "react";

export function FeedbackScreen() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setFeedback("");
      }, 3000);
    }
  };

  return (
    <div className="px-6 py-6">
      {!submitted ? (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              ¡Tu opinión nos importa!
            </h2>
            <p className="text-gray-600">
              Ayúdanos a mejorar tu experiencia de vuelo
            </p>
          </div>

          {/* Rating Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 text-center">
              ¿Cómo valorías tu experiencia?
            </h3>
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`size-12 ${
                      star <= (hoveredRating || rating)
                        ? "fill-[#FFCC00] text-[#FFCC00]"
                        : "text-gray-300"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
            <div className="text-center mt-2">
              {rating > 0 && (
                <p className="text-sm text-gray-600">
                  {rating === 1 && "Muy insatisfecho"}
                  {rating === 2 && "Insatisfecho"}
                  {rating === 3 && "Neutral"}
                  {rating === 4 && "Satisfecho"}
                  {rating === 5 && "¡Muy satisfecho!"}
                </p>
              )}
            </div>
          </div>

          {/* Feedback Text Area */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
              Cuéntanos más
            </h3>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="¿Qué podríamos mejorar? ¿Qué te ha gustado más? Comparte tus sugerencias..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00] resize-none"
            />
            <div className="text-right mt-2">
              <span className="text-xs text-gray-500">
                {feedback.length} / 500 caracteres
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
              rating === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-[#FFCC00] to-[#FFD700] hover:shadow-lg"
            }`}
          >
            <Send className="size-5" />
            Enviar Feedback
          </button>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-900">
              💡 Tu feedback es confidencial y nos ayuda a mejorar nuestros
              servicios. ¡Gracias por volar con Vueling!
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-4 animate-bounce">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
            ¡Gracias por tu feedback!
          </h3>
          <p className="text-gray-600 text-center">
            Tu opinión nos ayuda a mejorar cada día
          </p>
        </div>
      )}
    </div>
  );
}