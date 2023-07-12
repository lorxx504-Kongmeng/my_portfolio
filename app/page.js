import TypeWriter from '@/components/TypeWriter'


export default function Home() {


  return (
    <main className='flex-wrap'>
      <section className='h-screen' >
          <div className='flex items-center justify-center min-h-[50%]'>
            <TypeWriter />
          </div>
      </section>
      <section className='h-screen'>
        <h1>About Section</h1>
      </section>
      <section className='h-screen'>
       <h1>Projects</h1> 
       
      
      </section>
      <section className='h-screen'>Contact</section>
    </main>
  )
}
