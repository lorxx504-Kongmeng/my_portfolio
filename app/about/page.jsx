import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full p-2 flex items-center py-20 bg-gray-800 text-white mt-12">

        <div className="max-w-[1200px] m-auto md:grid grid-cols-2 gap-10 ">
          <div className="col-span-2 flex justify-between">
            <div className='flex-wrap'>
              <h1 className="text-xl">About</h1>
              <h2 className="text-6xl mt-2">Who I Am.</h2>
              <p className='mt-2 font-light'>Hello, my name is Kongmeng Lor and I am a Full Stack Engineer hailing from Minnesota. I hold a Bachelor's degree in Information Technology Infrastructure of Data Management from the University of Minnesota, Twin Cities, supplemented by a minor in Computer Science. In addition, I have successfully completed the York Solution B2E Full Stack Software Engineer Bootcamp. As I advance in my software development career, I am continuously enhancing my skills and knowledge. If you have any job openings or opportunities available, I would greatly appreciate the chance to connect with you.</p>
            

              {/* <div>
                <h1 className='text-5xl font-bold  mt-10 shadow-lg'>SKILLS</h1>
                <h2 className='text-2xl mt-2'>Languages</h2>
                <div className='flex flex-wrap m-2'>
                  <div className='flex '>
                    <Image src="/languages/typescript.png" width={50} height={40}/>
                    <h2 className='m-3 text-xl'>Typescript</h2>
                  </div>

                  <div className='flex'>
                    <Image src="/languages/java.png" width={100} height={50}/>
                    <h2 className='m-3 text-xl'>Java</h2>
                  </div>

                  <div className='flex'>
                    <Image src="/languages/js.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Javascript</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/languages/python.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Python</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/languages/c.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>C</h2>
                  </div>
                </div>

                <h2 className='text-2xl mt-2'>Frameworks</h2>
                <div className='flex flex-wrap m-2'>
                  <div className='flex'>
                    <Image src="/frameworks/angular.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Angular</h2>
                  </div>

                  <div className='flex'>
                    <Image src="/frameworks/spring.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Spring Boot</h2>
                  </div>

                  <div className='flex'>
                    <Image src="/frameworks/next.ico" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>NextJS</h2>
                  </div>

                  <div className='flex'>
                    <Image src="/frameworks/react.webp" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>ReactJS</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/frameworks/firebase.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Firebase</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/frameworks/nodejs.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>NodeJS</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/frameworks/docker.webp" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>Docker</h2>
                  </div>
                  <div className='flex'>
                    <Image src="/frameworks/postgresql.png" width={50} height={50}/>
                    <h2 className='m-3 text-xl'>PostgreSQL</h2>
                  </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;


/*

<h1 className="uppercase tracking-widest mt-10 shadow-xl" >Feel free to reach out to me!</h1>
              <div className='flex items-center justify-start'> 
                <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-90 mt-4">
                    <Link href="/contact">
                      <AiOutlineMail />
                    </Link>
                </div>
                <div className='mt-5'>
                  <Link href="/" className='rounded-full shadow-lg p-6 bg-blue-400 m-10 px-5 py-5'>Resume</Link>
                </div>
              </div>

*/

/*
<div className='mt-10'>
                <div className="col-span-2 flex justify-between">
                <div className='flex-wrap'>
                  <h1 className='uppercase text-6xl'>work experiences.</h1>
                  </div>
                  </div>
              </div>
              */