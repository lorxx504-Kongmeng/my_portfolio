"use client"
import {useTypewriter } from 'react-simple-typewriter'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const TypeWriter = () => {
    const [firstNameTypeWriter] = useTypewriter({
        words: ["Kongmeng Lor"],
        loop: 1,
        typeSpeed: 50
    });
    const [iAmTypeWriter] = useTypewriter({
        words: ["I am a "],
        loop: 1,
        typeSpeed: 100,
        
    });       
    const [position] = useTypewriter({
        words: [" Software Engineer.", " Full Stack Engineer."],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50
    });

    return (
        
        <div className='w-full h-[60rem] text-center xl:h-screen '>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='text-7xl font-medium text-slate-700'>{firstNameTypeWriter}</h1>
                    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                        <h1 className='text-3xl m-1 text-slate-650'>{iAmTypeWriter}</h1>
                        <p className='text-3xl m-1 text-slate-650'>{position}</p>
                    </div>
                    <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                     <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90">
                                <Link href="https://www.linkedin.com/in/kongmengl" target="_blank"><FaLinkedin/></Link>
                            </div>
                        <div className="rounded-full shadow-lg shadow-gray-600 p-8 cursor-pointer hover:scale-90 ml-4">
                                <Link href="https://github.com/lorxx504-Kongmeng" target='_blank'>
                                    <FaGithub />
                                </Link>
                        </div>  
                    </div>
                </div>
            </div>

        </div>
        // <div >
        //       <h1 className='text-6xl font-medium text-slate-700'>{firstNameTypeWriter}</h1>
        //       <br />
        //       <div className='flex'>
        //         <h1 className='text-3xl m-1 text-slate-650'>{iAmTypeWriter}</h1>
        //         <p className='text-3xl m-1 text-slate-650'>{position}</p>
        //       </div>
        // </div>
    )
}

export default TypeWriter

/*

                  {/* <div className='flex flex-col items-center justify-center min-h-[50%]'> 

*/