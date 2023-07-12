import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='h-screen' >
        <div className='text-8xl flex items-center justify-center min-h-[60%]'> 
          <div className='flex'>
            <h1 >Kongmeng</h1>
            <h1 className='ml-4 font-bold'>Lor</h1>
          </div>
          <div>

          </div>
        </div>
      </section>
      <section className='h-screen'>Projects</section>
      <section className='h-screen'>Contact</section>
    </main>
  )
}
