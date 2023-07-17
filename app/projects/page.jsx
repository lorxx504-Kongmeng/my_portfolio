'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';





const Projects = () => {
  const pathname = usePathname();
  const projects = [
    {
      id: 1,
      title: "developedbyKongmengLor",
      website: "http://kongmenglor.com/",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    },
    {
      id: 2,
      title: "Project2",
      website: "http://kongmenglor.com/",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    },
    {
      id: 3,
      title: "Project3",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    },
    {
      id: 3,
      title: "Project3",
      website: "http://kongmenglor.com/",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    },
    {
      id: 3,
      title: "Project3",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    }
  ]


  return (
    <div className={`h-max bg-gray-800 text-white w-full mt-2 break-all`} >
      <div className='max-w-[1200px] m-auto md:grid gap-10'>
        <div className="col-span-2">
          <div className='mt-5'>
            <h1 className='uppercase text-6xl font-extrabold'>projects.</h1>
          </div>
          {projects.map((value) => {
            return <div class="max-w-auto w-full lg:max-w-full lg:flex mt-2 mb-5 " >
                    <div class="lg:h-auto flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden ">
                      <Image src={value.image} width={500} height={500} className='p-2'></Image>
                    </div>
                    <div class="flex flex-col">
                    <div className='mt-5 flex justify-between'>
                      <h1 className='font-bold text-2xl'>{value.title}</h1>
                      <Link href={value.link} className='px-2 py-2 rounded-lg bg-gray-600 font-medium' target='_blank'>Github</Link>
                    </div>
                      <p class="text-base mt-2">{value.description}</p>
                      <div className='flex mt-2'>
                      {value.language.map((item) => {
                        return <> 
                            <p className='bg-gray-600 rounded-lg px-2 py-1 mr-1'>{item}</p>
                        </>
                      })}
                      </div>
                    </div>





            </div>
          })}
          
        </div>
      </div>
    </div>  
  )
}

export default Projects

 