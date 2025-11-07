import { LoveLetterSection } from "@/components/love-letter-section"
import { MemoryCarouselSection } from "@/components/memory-carousel-section"
import { MusicSection } from "@/components/music-section"
import { SunsetBeachSection } from "@/components/sunset-beach-section"
import { MainPhotoSection } from "@/components/main-photo-section"
import { StarTransition } from "@/components/star-transition"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
      {/* Estrelas de fundo */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-twinkle rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Pôr do sol de fundo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-pink-500/20" />
      </div>

      <div className="relative z-10">
        <LoveLetterSection />
        <StarTransition />
        <MemoryCarouselSection />
        <StarTransition />
        {/*<MusicSection />*/}
        <StarTransition />
        <SunsetBeachSection />
        <StarTransition />
        <MainPhotoSection />
      </div>
    </main>
  )
}
