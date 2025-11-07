"use client"

import { Music, Play } from "lucide-react"

export function MusicSection() {
  const songs = [
    {
      title: "Nossa Música",
      artist: "Artista 1",
      description: "A música que tocou no nosso primeiro encontro",
    },
    {
      title: "Canção Especial",
      artist: "Artista 2",
      description: "Sempre me faz lembrar de você",
    },
    {
      title: "Melodia do Coração",
      artist: "Artista 3",
      description: "Nossa trilha sonora",
    },
  ]

  return (
    <section className="relative min-h-screen px-4 py-20">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="animate-fadeInUp mb-16 text-center">
          <Music className="mx-auto mb-6 h-16 w-16 text-pink-300" />
          <h2 className="mb-6 font-serif text-5xl font-light tracking-wide text-white md:text-7xl text-balance">
            Nossas Canções
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-blue-100/90 text-pretty">
            Músicas que contam a história do nosso amor
          </p>
        </div>

        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="group animate-slideDown rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-6">
                <button className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-pink-500/20 transition-all group-hover:bg-pink-500/30">
                  <Play className="h-6 w-6 text-pink-300" fill="currentColor" />
                </button>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-light text-white">{song.title}</h3>
                  <p className="font-sans text-sm text-blue-200/70">{song.artist}</p>
                  <p className="mt-1 font-sans text-sm italic text-blue-100/60">{song.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm text-blue-100/60">
          Clique em play para ouvir (adicione os links das músicas)
        </p>
      </div>
    </section>
  )
}
