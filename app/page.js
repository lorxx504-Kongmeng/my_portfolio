import TypeWriter from "@/components/main/TypeWriter"
import About from "./about/page"
import Projects from "./projects/page"
import Contact from "./contact/page"


export default function Home() {


  return (
    <main>
      <TypeWriter />
      <About />
      <Projects />
      <Contact />

      



      {/* <section className='h-[51rem]'>
          <div className='flex items-center justify-center min-h-[60%]'>
            <TypeWriter />
          </div>
      </section>
      <section className='h-[40rem]'>
        <h1>EDUCATION</h1>
      </section>
      <section className='h-[40rem]'>
       <h1>Projects</h1> 
       
      
      </section>
      <section className='h-[40rem]'>Contact</section> */}
    </main>
  )
}
