"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import Image from "next/image"

const testimonials = [
  {
    content:
      "Desde que comecei a frequentar a PET, meu cão passou a ficar mais cheiroso e bem cuidado. O atendimento é excelente!",
    author: "Mario Souza",
    role: "Tutor da Luna",
    image: "/tutor1.png",
  },
  {
    content:
      "Equipe muito atenciosa e cuidados com meus pets. Recomendo para todos que buscam o melhor para seus animais.",
    author: "Ana Paula",
    role: "Tutor do Max e Bella",
    image: "/tutor1.png",
  },
  {
    content:
      "Meu gato adora o espaço! Sempre volta cheiroso e feliz. Preço justo e serviço de qualidade.",
    author: "Carlos Eduardo",
    role: "Tutor do Thor",
    image: "/tutor1.png",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section className="bg-[#FFD449] py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Depoimentos
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Botão anterior */}
          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hover:bg-gray-100 transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-8 flex flex-col items-center text-center max-w-lg mx-auto">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-[#FFD449] mb-4" />

                    {/* Imagem do tutor */}
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={item.image}
                        alt={item.author}
                        fill
                        sizes="80px"
                        className="object-cover rounded-full border-4 border-[#FFD449]"
                      />
                    </div>

                    {/* Conteúdo */}
                    <p className="text-lg leading-relaxed mb-6">
                      &ldquo;{item.content}&rdquo;
                    </p>

                    {/* Autor */}
                    <div>
                      <p className="font-bold text-xl">{item.author}</p>
                      <p className="text-sm text-gray-300">{item.role}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botão próximo */}
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hover:bg-gray-100 transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicadores de dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-800 transition-colors"
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
