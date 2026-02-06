import { Play, Pause, BookOpen, Heart } from "lucide-react";
import { useState } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

const playlist: Song[] = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
  { id: 2, title: "Hotel California", artist: "Eagles", duration: "6:30" },
  { id: 3, title: "Imagine", artist: "John Lennon", duration: "3:03" },
  { id: 4, title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" },
  { id: 5, title: "Wonderwall", artist: "Oasis", duration: "4:18" },
  { id: 6, title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56" },
  { id: 7, title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01" },
  { id: 8, title: "Superstition", artist: "Stevie Wonder", duration: "4:26" },
  { id: 9, title: "Don't Stop Believin'", artist: "Journey", duration: "4:10" },
  { id: 10, title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
];

interface EntertainmentProps {
  onMagazineClick: () => void;
}

export function Entertainment({ onMagazineClick }: EntertainmentProps) {
  const [playingSongId, setPlayingSongId] = useState<number | null>(null);
  const [likedSongs, setLikedSongs] = useState<Set<number>>(new Set());

  const handlePlayPause = (songId: number) => {
    if (playingSongId === songId) {
      setPlayingSongId(null);
    } else {
      setPlayingSongId(songId);
    }
  };

  const toggleLike = (songId: number) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(songId)) {
        newSet.delete(songId);
      } else {
        newSet.add(songId);
      }
      return newSet;
    });
  };

  return (
    <div className="px-6 py-4">
      {/* Music Section */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
          🎵 Música a bordo
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 shadow-sm">
          <div className="space-y-2">
            {playlist.map((song) => (
              <div
                key={song.id}
                className={`bg-white rounded-lg p-3 flex items-center gap-3 transition-all ${
                  playingSongId === song.id
                    ? "shadow-md ring-2 ring-[#FFCC00]"
                    : "shadow-sm"
                }`}
              >
                <button
                  onClick={() => handlePlayPause(song.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    playingSongId === song.id
                      ? "bg-[#FFCC00] hover:bg-[#FFD700]"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {playingSongId === song.id ? (
                    <Pause className="size-5 text-[#1A1A1A]" />
                  ) : (
                    <Play className="size-5 text-[#1A1A1A] ml-0.5" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1A1A1A] truncate">
                    {song.title}
                  </div>
                  <div className="text-sm text-gray-600 truncate">
                    {song.artist}
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {song.duration}
                </div>
                <button
                  onClick={() => toggleLike(song.id)}
                  className="transition-transform hover:scale-110"
                >
                  <Heart
                    className={`size-6 transition-colors ${
                      likedSongs.has(song.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Magazine Section */}
      <div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
          📖 Lectura a bordo
        </h3>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-28 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-md flex items-center justify-center">
              <BookOpen className="size-10 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                Influencer
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Revista de viajes y estilo de vida
              </p>
              <div className="text-xs text-gray-500">Edición Febrero 2026</div>
            </div>
          </div>
          
          <button
            className="w-full bg-[#FFCC00] hover:bg-[#FFD700] transition-colors rounded-lg py-3 px-4 font-semibold text-[#1A1A1A] flex items-center justify-center gap-2 shadow-sm"
            onClick={onMagazineClick}
          >
            <BookOpen className="size-5" />
            Leer Revista
          </button>

          <div className="mt-4 bg-white/60 rounded-lg p-3">
            <p className="text-sm text-gray-700">
              ✨ Descubre los mejores destinos de Europa, tendencias de moda y
              consejos de viaje de influencers destacados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}