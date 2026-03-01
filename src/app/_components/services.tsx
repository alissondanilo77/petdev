"use client"

import { WhatsappLogoIcon } from '@phosphor-icons/react'
import useEmblaCarousel from 'embla-carousel-react'
import { 
  ChevronLeft, 
  ChevronRight, 
  Scissors, 
  Syringe, 
  CarTaxiFront, 
  Hotel,
  Clock
} from 'lucide-react'

const services = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Corte",
    description: "Cortes modernos e personalizados.",
    time: "30 min"
  },
  {
    icon: <Syringe className="w-6 h-6" />,
    title: "Procedimentos",
    description: "Tratamentos estéticos avançados.",
    time: "1h"
  },
  {
    icon: <CarTaxiFront className="w-6 h-6" />,
    title: "Transporte",
    description: "Serviço de transporte exclusivo.",
    time: "Sob consulta"
  },
  {
    icon: <Hotel className="w-6 h-6" />,
    title: "Hospedagem",
    description: "Conforto e comodidade para clientes.",
    time: "Diária"
  }
]

export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  })

  function scrollPrev(){
emblaApi?.scrollPrev();
  }

   function scrollNext(){
    emblaApi?.scrollNext();
   }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
              >
                <article className="bg-[#1e293b] text-white rounded-2xl p-6 h-full flex flex-col justify-between">

                  {/* Parte superior */}
                  <div className="flex items-start gap-4">
                    <span className="text-blue-400">
                      {item.icon}
                    </span>

                    <div>
                      <h3 className="font-bold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Parte inferior */}
                  <div className="border-t border-gray-700 pt-4 mt-6 flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
<a
    href="#"
className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'
    >
        Entrar em contato
        <WhatsappLogoIcon className='w-5 h-5' /> 
</a>


                    <button className="text-blue-400 hover:text-blue-300 transition">
                      Agendar
                    </button>
                  </div>

                </article>
              </div>
            ))}
          </div>
        </div>

 


        <button
  onClick={scrollPrev}
  className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-4 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
>
  <ChevronLeft className='w-6 h-6 text-gray-600' />
</button>
      

<button
  onClick={scrollNext}
  className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute  -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
>
  <ChevronRight className='w-6 h-6 text-gray-600' />
</button>

      </div>
    </section>
  )
}