"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const services = [

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

return (
    <section className="bg-white py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-4x1 font-bold mb-12">Serviços</h2>
        
        <div className="relative">

            <div className='overflow-hidden'ref={emblaRef} >
=
                <div className='flex'> 

                {services.map((item, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">

                    </div>

                ))}

                </div>

            </div>

        </div>
        
        </div>

    </section>
)
}