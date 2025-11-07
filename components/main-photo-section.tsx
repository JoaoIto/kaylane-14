"use client"

import { Heart, Sparkles } from "lucide-react"

export function MainPhotoSection() {
  return (
    <section className="relative min-h-screen px-4 py-20">
      {/* Magical Sparkles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute animate-twinkle text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="animate-fadeInUp text-center">
          <Heart className="mx-auto mb-6 h-20 w-20 animate-float text-pink-300" />
          <h2 className="mb-8 font-serif text-5xl font-bold text-white md:text-7xl text-balance">Kaylane</h2>
          <p className="mx-auto mb-4 max-w-2xl font-serif text-2xl leading-relaxed text-blue-100 text-pretty">
            O amor da minha vida
          </p>
          <p className="mx-auto mb-16 max-w-3xl font-serif text-xl leading-relaxed text-blue-200 text-pretty">
            Você é a razão do meu sorriso, a luz dos meus dias, e a estrela que guia meu caminho. MINHA PAZ.
          </p>
        </div>

        {/* Main Photo Container */}
        <div className="animate-slideDown">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-400/30 to-purple-500/30 p-2 backdrop-blur-sm shadow-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl md:aspect-[4/3]">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-400/40 to-purple-500/40">
                  <div className="text-center">
                    <Heart className="mx-auto mb-4 h-16 w-16 text-white/50" />
                    <img src="/principal.png" alt=""/>
                  </div>
                </div>
                {/* Placeholder for main photo */}
                {/* <Image
                  src="/path-to-main-photo.jpg"
                  alt="Kaylane - Foto Principal"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 text-center">
            <p className="font-serif text-3xl font-bold text-white text-balance">Te amo infinitamente ❤️</p>
            <p className="mt-4 font-serif text-xl text-blue-200">Hoje, amanhã e sempre</p>
          </div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
