"use client"

import { useState } from "react"

export function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <div className="animate-fadeInUp text-center">
        <h1 className="mb-16 font-serif text-6xl font-light tracking-wide text-white md:text-8xl text-balance">
          Para Kaylane
        </h1>

        <div className="relative mx-auto max-w-lg">
          <button onClick={() => setIsOpen(!isOpen)} className="group relative w-full" aria-label="Abrir carta">
            {!isOpen ? (
              <div className="relative rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 p-8 shadow-2xl transition-all hover:shadow-amber-200/50">
                <div className="border-4 border-double border-amber-800/30 p-8">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <svg className="h-16 w-16 text-amber-800/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="font-serif text-2xl font-light text-amber-900">Uma carta para você</p>
                    <p className="font-sans text-sm text-amber-700/70">Clique para ler</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-unroll relative rounded-lg bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100 p-8 shadow-2xl">
                <div className="border-l-4 border-r-4 border-double border-amber-800/20 px-8 py-6">
                  <div className="max-h-96 overflow-y-auto">
                    <p className="font-serif text-xl font-light italic text-amber-900 text-left">De João...</p>
                    <p className="font-serif text-xl font-light italic text-amber-900">Oi meu amor :),</p>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-amber-800">
                      Cada momento ao seu lado é como um pôr do sol perfeito - único, inesquecível e cheio de cores que
                      iluminam minha vida. Você é a estrela mais brilhante do meu céu, e a pessoa que quero vencer e estar do
                      lado para te aplaudir!
                    </p>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-amber-800">
                      Sou muito grato por te ter por perto, e quero ter por muito mais tempo comigo, na minha vida.
                    </p>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-amber-800">
                      O seu dia também é especial, porque um dia escolhi meu presente, que é você na minha vida, e isso aqui
                      é uma lembrança de como você é especial para mim
                    </p>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-amber-800">
                      Este site é uma pequena homenagem ao nosso amor, fiz com carinho, o que sei fazer de melhor
                    </p>
                    <p className="mt-6 font-serif text-lg leading-relaxed text-amber-800">
                      Te amo meu amor!
                    </p>
                    <p className="mt-8 font-serif text-xl font-light text-amber-900">Com todo meu amor</p>
                  </div>
                </div>
                <div className="absolute -left-2 top-4 h-8 w-8 rounded-full bg-amber-800/10" />
                <div className="absolute -right-2 top-4 h-8 w-8 rounded-full bg-amber-800/10" />
                <div className="absolute -left-2 bottom-4 h-8 w-8 rounded-full bg-amber-800/10" />
                <div className="absolute -right-2 bottom-4 h-8 w-8 rounded-full bg-amber-800/10" />
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
