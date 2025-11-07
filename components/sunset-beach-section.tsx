"use client"

export function SunsetBeachSection() {
  return (
    <section className="relative min-h-screen px-4 py-20">
      {/* Efeito de pôr do sol na praia */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-pink-500/20 to-blue-900/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/60 via-blue-800/40 to-transparent" />

        {/* Ondas da praia */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg className="absolute bottom-0 w-full animate-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z" fill="rgba(59, 130, 246, 0.2)" />
          </svg>
          <svg
            className="absolute bottom-0 w-full animate-wave"
            style={{ animationDelay: "1s" }}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,70 Q300,40 600,70 T1200,70 L1200,120 L0,120 Z" fill="rgba(96, 165, 250, 0.15)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="animate-fadeInUp text-center">
          <h2 className="mb-6 font-serif text-5xl font-light tracking-wide text-white md:text-7xl text-balance">
            Sob o Pôr do Sol
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-orange-100/90 text-pretty">
            Como o sol que se põe no horizonte da praia, cada dia ao seu lado termina com a certeza de que amanhã será
            ainda mais especial
          </p>
        </div>

        <div className="animate-slideDown mt-16">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400/10 to-pink-500/10 p-8 backdrop-blur-sm">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-400/20 to-pink-500/20">
                <div className="text-center">
                  <p className="font-serif text-3xl text-white/70">[Foto do Pôr do Sol]</p>
                    <img src="/img.png" alt="" className="object-contain w-full h-full" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-center font-serif text-xl font-light text-orange-100">
              Nosso amor brilha como o sol no horizonte, e brilha mais ainda vendo você feliz com esse sorriso!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
