import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "developedbyKongmengLor",
      website: "kongmenglor.com",
      description: "This is my personal website that I created using the Next.js framework, along with Tailwind CSS and other React components. This website represents just the beginning of my journey with Next.js, as I continue to make progress and expand my knowledge of Next.js and React.js. It's my first time exploring Next.js and Tailwind CSS, particularly as I have prior experience as an Angular developer. You can find all the code for this website on my GitHub page.",
      link: "https://github.com/lorxx504-Kongmeng/my_portfolio.git",
      language: ["Nextjs", "Tailwind CSS","Material UI", "Javascript", "HTML", "CSS"],
      images: ["/projects/portfolio/portfolio_front.png", "/projects/portfolio/portfolio_back.png"]
    }
  ]
  return (
    <div className='h-screen bg-gray-800 text-white'>
      <div className='max-w-[1000px] m-auto md:grid gap-10'>
          <div className="col-span-2 flex justify-between">
            <div className='flex-wrap'>
              <h1 className='uppercase text-6xl mt-5'>Projects.</h1>
              <div >
                {projects.map((item) => {
                  return (
                    <div> 
                      <div >

                      </div>
                      
                      
                      
                      </div>
                  )

                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
