"use client"
import {useTypewriter } from 'react-simple-typewriter'

  // const [typeWriter] = useTypewriter({
  //   words: ["Software Engineer", "Full Stack Engineer"],
  //   loop: 0,
  //   typeSpeed: 100,
  //   deleteSpeed: 40
  // })

const TypeWriter = () => {
    const [firstNameTypeWriter] = useTypewriter({
        words: ["Hi, my name is Kongmeng Lor."],
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
        
        <div >
              <h1 className='text-6xl text-slate-800'>{firstNameTypeWriter}</h1>
              <br />
              <div className='flex '>
                <h1 className='text-3xl m-1 text-slate-650'>{iAmTypeWriter}</h1>
                <p className='text-3xl m-1 text-slate-650'>{position}</p>
              </div>
            </div>
    )
}

export default TypeWriter

/*

                  {/* <div className='flex flex-col items-center justify-center min-h-[50%]'> 

*/