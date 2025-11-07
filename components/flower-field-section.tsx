"use client"

export function FlowerFieldSection() {
  return (
    <section className="relative min-h-screen px-4 py-20">
      {/* Blue Lilies Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 10C25 10 20 15 20 20C20 15 15 10 10 10C15 10 20 5 20 0C20 5 25 10 30 10Z"
                fill="#60A5FA"
                opacity="0.6"
              />
              <path
                d="M30 30C25 30 20 35 20 40C20 35 15 30 10 30C15 30 20 25 20 20C20 25 25 30 30 30Z"
                fill="#3B82F6"
                opacity="0.7"
              />
              <circle cx="20" cy="20" r="5" fill="#1E40AF" opacity="0.8" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="animate-slideDown text-center">
          <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-6xl text-balance">
            Nosso Jardim de Memórias
          </h2>
          <p className="mx-auto mb-12 max-w-2xl font-serif text-xl leading-relaxed text-blue-100 text-pretty">
            Como lírios azuis que florescem sob o céu estrelado, nosso amor cresce mais forte a cada dia. Cada momento
            juntos é uma flor que guardo com carinho no jardim do meu coração.
          </p>
        </div>

        {/* Photo Container */}
        <div className="animate-fadeInUp mt-16 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-blue-400/20 to-pink-400/20">
            <div className="flex h-full items-center justify-center">
            </div>
            {/* Placeholder for user's photo */}
            {/* <Image
              src="/path-to-your-photo.jpg"
              alt="Nossa foto especial"
              fill
              className="object-cover"
            /> */}
          </div>
          <p className="mt-6 text-center font-serif text-lg text-blue-100">
            Momentos que ficam para sempre gravados na memória
          </p>
        </div>
      </div>
    </section>
  )
}
