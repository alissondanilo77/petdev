import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/> 
    </main>
  )
}