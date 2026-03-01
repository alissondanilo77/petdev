import Image from "next/image";
import  { Check, MapPin } from "lucide-react"; // IMPORTAÇÃO NECESSÁRIA
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About(){
    return (
        <section className="bg-[#FDF6EC] py-16">
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="relative">

                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={about1Img}
                        alt="foto do cachorro"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                    />
                </div>
            
                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                    <Image
                        src={about2Img}
                        alt="foto do cachorro"
                        fill
                        quality={100}
                        className="object-cover"
                        priority
                    />
                </div>

            </div>

            <div className="space-y-6">
                <h2 className="text-4xl font-bold">SOBRE</h2>
                <p>
                    O mercado de pet shop brasileiro é o segundo maior do mundo,
                    perdendo apenas para o americano. Por isso, escolher os textos
                    de propaganda certos para divulgar o seu pet shop é fundamental
                    para conseguir se destacar da concorrência.
                </p>

                <ul className="space-y-4">

                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Aberto desde 2006
                    </li>

                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Equipe com mais de 10 veterinários
                    </li>

                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Qualidade é nossa prioridade!
                    </li>

                </ul>
                
<div className="flex gap-2">
<a 
  href="#"
  className="bg-[#743b35] text-white flex items-center justify-center rounded-md gap-2 px-4 py-2"
>
  <WhatsappLogoIcon className="w-5 h-5 text-white"/>
  Contato via WhatsApp 
</a>

<a 
  href="#"
  className="flex items-center justify-center rounded-md gap-2 px-4 py-2"
>
  < MapPin className="w-5 h-5 text-black"/>
  Endereço da loja
</a>

</div>

            </div>

        </div>

        </section>
    )
}