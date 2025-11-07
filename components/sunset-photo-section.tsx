"use client"

export function SunsetPhotoSection() {
  return (
    <section className="relative min-h-screen px-4 py-20">
      {/* Sunset Effect Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-pink-500/30 to-purple-600/20" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-orange-400/40 via-pink-500/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="animate-fadeInUp text-center">
          <h2 className="mb-8 font-serif text-4xl font-bold text-white md:text-6xl text-balance">Sob o Pôr do Sol</h2>
          <p className="mx-auto mb-12 max-w-2xl font-serif text-xl leading-relaxed text-orange-100 text-pretty">
            Assim como o sol se põe em cores vibrantes, cada dia ao seu lado termina com a certeza de que vou acordar cheirando você
            e ganhar mais abraço quentin, só pra ouvir no meu ouvido susurrando... "te amo"
          </p>
        </div>

        {/* Photo Container with Sunset Effect */}
        <div className="animate-slideDown mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400/20 to-pink-500/20 p-1 backdrop-blur-sm">
            <div className="rounded-xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-400/30 to-pink-500/30">
                </div>
                {/* Placeholder for user's photo */}
                <img
                    src="/sol-sorriso.png"
                    alt="Sol Sorriso"
                    className="h-full w-auto object-contain"
                />
              </div>
              <p className="mt-6 text-center font-serif text-lg text-orange-100">
                O brilho do pôr do sol, me lembra sempre o brilho que é ver você chegando pra me ver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
