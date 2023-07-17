import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
  <div className='h-screen'>
      <div className='max-w-[1200px] m-auto md:grid gap-10 border-double'>
          <div className='drop-shadow-2xl'>
            <h1 className='uppercase text-6xl font-bold'>Contact.</h1>
          <div>
        </div>
      </div>
      <div className='flex justify-center items-center text-center'>
        <div>
          <h1 className='font-bold text-xl'>kongmenglor122@gmail.com</h1>
          <Link href="/my-portfolio/resume.pdf">Resume</Link>
          
        </div>

      </div>
    </div>
  </div>
  )
}

export default Contact