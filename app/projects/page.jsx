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
      website: "kongmenglor.com",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      image: "/projects/portfolio/portfolio_front.png"
    }
  ]

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];



  return (
    // <div className='bg-gray-800 text-white w-full h-screen mt-2 break-all'>
    //   <div className='max-w-[1000px] m-auto md:grid gap-10'>
    //     <div className="col-span-2">
    //       <div className='mt-5'>
    //         <h1 className='uppercase text-6xl'>projects.</h1>
    //       </div>
    //       <div className='rounded-lg border mt-2'>
    //         {projects.map((item) => {
    //           return <div className='mt-2'>
    //               <div className='p-2'>
    //                 <a href='http://kongmenglor.com/' target='_blank'><h1 className='text-4xl'>{item.website}</h1></a>
    //                 <div className='flex justify-center mt-2'>
    //                   <Image src={item.image} width={700} height={700}></Image>
    //                 </div>
    //                 <div className='m-3'>
    //                   <p>{item.description}</p>
    //                   <div>
    //                     {item.language.map((element) => {
    //                       return <>
    //                         <div className='flex'>
    //                         <p>{element}</p>
    //                         </div>
    //                       </>
    //                     })}
    //                   </div>
    //                 </div>
    //               </div>


    //           </div>
    //         })}
    //       </div>
 
    //       </div>
    //     </div>
    // </div>

    <div className='bg-gray-800 text-white w-full h-screen mt-2 break-all'>
      <div className='max-w-[1000px] m-auto md:grid gap-10'>
        <div className="col-span-2">
          <div className='mt-5'>
            <h1 className='uppercase text-6xl'>projects.</h1>
          </div>

    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="py-3 px-6 text-left bg-gray-100 text-gray-600 font-semibold uppercase tracking-wider">
            ID
          </th>
          <th className="py-3 px-6 text-left bg-gray-100 text-gray-600 font-semibold uppercase tracking-wider">
            Name
          </th>
          <th className="py-3 px-6 text-left bg-gray-100 text-gray-600 font-semibold uppercase tracking-wider">
            Email
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id}>
            <td className="py-4 px-6">{row.id}</td>
            <td className="py-4 px-6">{row.name}</td>
            <td className="py-4 px-6">{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
 
    </div>
          </div>
          </div>  
  )
}

export default Projects

 