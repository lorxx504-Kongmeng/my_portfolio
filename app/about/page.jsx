import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link';
import Image from 'next/image'
import { FaSchool } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-full md:h-[40rem] p-2 flex items-center py-20 ">
        <div className="max-w-[1600px] m-auto md:grid grid-cols-2 gap-10 ">
          <div className="col-span-2 flex justify-between">
            <div className='flex-wrap'>
              <h1 className="text-xl">About</h1>
              <h2 className="text-6xl">Who I Am.</h2>
              <p>I am a Full Stack Engineer hailing from Minnesota. I hold a Bachelor's degree in Information Technology Infrastructure of Data Management from the University of Minnesota, Twin Cities, supplemented by a minor in Computer Science. In addition, I have successfully completed the York Solution B2E Full Stack Software Engineer Bootcamp. As I advance in my software development career, I am continuously enhancing my skills and knowledge. If you have any job openings or opportunities available, I would greatly appreciate the chance to connect with you.</p>
              <h1 className="uppercase tracking-widest mt-10 shadow-xl" >Feel free to reach out to me!</h1>
              <div className='flex items-center justify-start'> 
                <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-90 mt-4 shadow-xl">
                    <Link href="/contact">
                      <AiOutlineMail />
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div >
            <h1 className='text-5xl font-bold shadow-lg mt-5'>SKILLS</h1>



            <div className='flex flex-wrap'>
              <div className='flex'>
                <Image src="/angular.png" width={50} height={50}/>
                <h2 className='mt-3 text-xl'>Angular</h2>
              </div>

              <div className='flex'>
                <Image src="/spring.png" width={50} height={50}/>
                <h2 className='mt-3 text-xl'>Spring Boot</h2>
              </div>

              <div className='flex'>
                <Image src="/next.ico" width={50} height={50}/>
                <h2 className='mt-3 text-xl'>NextJS</h2>
              </div>
            </div>
            

              

          </div>
        </div>
       
    </div>
  )
}

export default About;