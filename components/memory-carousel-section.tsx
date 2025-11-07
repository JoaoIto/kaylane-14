"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function MemoryCarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Adicione suas fotos aqui
  const memories = [
    {
      id: 1,
      title: "A fotinha que você guarda no celular",
      description: "O dia em que você por mim ficou 4 horas escutando eu cantar pagode",
      placeholder: "Foto 1",
      image: "/capa-cel.png"
    },
    {
      id: 2,
      title: "Momentos Especiais",
      description: "Cada segundo ao seu lado é único, e esse pôr do sol contigo é mais um...",
      placeholder: "Foto 2",
      image: "/beijo-praia.png"
    },
    {
      id: 3,
      title: "Só loucura",
      description: "Não sei, achei que representasse bastante a nossa relação, te amo kkkkkkkkkk",
      placeholder: "Foto 3",
      image: "/zoada-amor.png"
    },
    {
      id: 4,
      title: "Pôr do sol",
      description: "Foi inesquecível esse dia, mesmo com o cheiro de peixe, o seu sorriso do meu lado, é oque mais me faz feliz",
      placeholder: "Foto 4",
      image: "/por-do-sol.png"
    },
    {
      id: 5,
      title: "Seu sorriso...",
      description: "Não me canso de ver seu sorriso, e cada vez me apaixono mais por você",
      placeholder: "Foto 5",
      image: "/seu-sorriso.png"
    },
    {
      id: 6,
      title: "Vencer!",
      description: "Estou junto, e sempre estarei com você, quero te ver vencendo todos os dias, e estarei aqui do seu lado!",
      placeholder: "Foto 6",
      image: "/vencendo.png"
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length)
  }

  return (
    <section className="relative min-h-screen px-4 py-20">
      {/* Blue Lilies Background - mais sutil */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 5C17 5 14 8 14 11C14 8 11 5 8 5C11 5 14 2 14 0C14 2 17 5 20 5Z"
                fill="#60A5FA"
                opacity="0.4"
              />
              <circle cx="14" cy="11" r="3" fill="#3B82F6" opacity="0.5" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="animate-slideDown mb-16 text-center">
          <h2 className="mb-6 font-serif text-5xl font-light tracking-wide text-white md:text-7xl text-balance">
            Nossas Memórias
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-blue-100/90 text-pretty">
            Isso são só algumas do começo, para você lembrar o que sou feliz do seu lado!
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-blue-400/10 to-pink-400/10">
              {memories.map((memory, index) => (
                <div
                  key={memory.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : index < currentSlide
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-3xl text-white/70">[{memory.placeholder}]</p>
                      <p className="mt-4 font-sans text-sm text-white/50">Adicione sua foto aqui</p>
                      <img src={memory.image} alt="Fotos com meu amor"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles do carrossel */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="text-center">
                <h3 className="font-serif text-2xl font-light text-white">{memories[currentSlide].title}</h3>
                <p className="mt-2 font-sans text-sm text-blue-100/80">{memories[currentSlide].description}</p>
              </div>

              <button
                onClick={nextSlide}
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="mt-6 flex justify-center gap-2">
              {memories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Ir para foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
