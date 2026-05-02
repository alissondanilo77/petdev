"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react"
import useEmblaCarousel from "embla-carousel-react"

import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react"

import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import Image from 'next/image'

const testimonials = [
  {
    content: "Desde que comecei a frequentar a PET, meu cão passou a ficar mais cheiroso e bem cuidado.",
    author: "Mario Souza",
    role: "Tutor da Luna",
    image: "/tutor1.png",
  }
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">
          Depoimentos
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* CORREÇÃO: Mudado de services para testimonials */}
              {testimonials.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="min-w-full md:min-w-[33.333%] px-3"
                  >
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 h-full flex flex-col justify-between">
<div className=" flex flex-col items-center text-center space-y-4">

  <div className=" relative w-24 h-24">
    <Image
    src={item.image}
    alt={item.author}
    fill
    sizes="96px"
className="object-cover rounded-full" 
    />



  </div>



</div>

                       <p>{item.content}</p>
                       <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm">{item.role}</p>
                       </div>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Botão anterior */}
          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Botão próximo */}
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
} // <--- ESSA CHAVE ESTAVA FALTANDO!