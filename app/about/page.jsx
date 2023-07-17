import Image from 'next/image'
import { IoBusinessSharp, IoSchoolSharp, IoLocation, IoDocument } from "react-icons/io5";
import styles from './about.module.css'; // Import the CSS file

const About = () => {
  const languages = [
    "Typescript", "Javascript", "Java", "Python","C/C++"
  ]
  const frameworks = [
    "Angular", "Spring Boot", "Next.js", "React", "Firebase", "Node.js"
  ]

  return (
    <div >
    <div className="p-2 flex h-[45rem] bg-gray-800 text-white mt-12 overflow-x-hidden" >
        <div className="max-w-[1200px] m-auto md:grid grid-cols-2 gap-10 flex-shrink-0">
          <div className="col-span-2 flex justify-between">
            <div className='flex-wrap'>
              <div className='flex-between flex'>
                <div>
                  <h1 className="text-xl">About</h1>
                  <h2 className="text-6xl mt-2">Who I Am.</h2>
                  <p className='mt-2 font-light'>Hello, my name is Kongmeng Lor and I am a Full Stack Engineer hailing from Minnesota. I hold a Bachelor's degree in Information Technology Infrastructure of Data Management from the University of Minnesota, Twin Cities, supplemented by a minor in Computer Science. In addition, I have successfully completed the York Solution B2E Full Stack Software Engineer Bootcamp. As I advance in my software development career, I am continuously enhancing my skills and knowledge. If you have any job openings or opportunities available, I would greatly appreciate the chance to connect with you.</p>
                </div>
                <div>
                  <Image src="/profile/headshot3.png" width={900} height={200} className='rounded-full'></Image>
                </div>
              </div>
              <div className='mt-2'>
                <div>       
                  <h1 className='uppercase text-6xl pt-4'>Education.</h1> 
                  <div className='flex'>
                      <IoSchoolSharp className='mt-1'></IoSchoolSharp>
                      <h1 className='ml-2'>Information Technology Infrastructure & Computer Science Minor</h1>
                      <h1></h1>
                    </div>
                    <div className='flex'>
                      <IoBusinessSharp className='mt-1'></IoBusinessSharp>
                      <h1 className='ml-2'>University of Minnesota, Twin Cities</h1>
                    </div>
                    <div className='flex'>
                      <IoDocument className='mt-1'></IoDocument>
                      <h1 className='ml-2'>York Solutions B2E Full Stack Software Engineer Bootcamp</h1>
                    </div>
                    <div className='flex'>
                      <IoLocation className='mt-1'></IoLocation>
                      <h1 className='ml-2'>Minneapolis, MN</h1>
                    </div>
                  </div>  
                  
                </div>
                <div>
                  <h1 className='uppercase text-6xl pt-4'>Skills.</h1>
                  <div className='mt-5'>
                    <div className='flex'>
                      <h1 className='text-xl'>Languages:</h1>
                      <div className='flex'>
                        {languages.map((language) => {
                          return <div className='ml-2 bg-blue-700 rounded-lg px-1 py-1 text-white cursor-pointer'>
                            {language}
                          </div>
                        })}
                      </div>
                  </div>

                  <div className='flex mt-2'>
                    <h1 className='text-xl'>Frameworks:</h1>
                    <div className='flex'>
                      {frameworks.map((framework) => {
                        return <div className='ml-2 bg-blue-600 rounded-lg px-1 py-1 text-white cursor-pointer'>
                          {framework}
                        </div>
                      })}
                    </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;