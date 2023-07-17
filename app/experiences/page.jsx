// import {timeLineElement} from '../../components/timelineElements/timelineElements.js'


const Experiences = () => {

  const timeLineElements = [
    {
        id: 1,
        title: "Associate Software Engineer",
        company: "Optum",
        location: "Remote",
        date:  "January 2023 - June 2023",
        description: "During my time at Optum, as a full stack software engineer, I had the opportunity to work on developing UI components and backend services for healthcare industry applications. For example, designing and implementing intuitive user interface components using Angular, ensuring a seamless and responsive user experience. These components might have included forms for data entry, interactive charts and graphs for data visualization, and reusable UI elements for consistent design across the application. As well as developing robust backend services using Spring Boot to handle data processing, business logic and integration. This involved designing and implementing RESTful APIs.",
        skills: ["Typescript", "Java","Angular", "Spring Boot", "Graphql", "NestJS", "Github", "Jenkins"]
    },
    {
        id: 2,
        title: "Desktop Support Engineer",
        company: "University of Minnesota, Twin Cities",
        location: "Minneapolis",
        date:  "January 2020 - November 2021",
        description: "At this position, my primary responisbilty is to provide technical support and troubleshooting assistance to end-users. This includes diagnosing and resolving hardware and software issues, identifying network problems, and addressing any other technical difficulties encountered by users. I also responsible for installing, configuring, and upgrading computer hardware, software, and operating systems. I also set up new computers, install required software applications, and ensure that all systems are properly configured and functional. All of the end-users are the university's faculty, staff, and students.",
        skills: ["Software Applications", "Active Directory", "Operating Systems", "Hardware Knowledge", "Networking Basics"]
    },
    {
        id: 3,
        title: "Food Manager",
        company: "DongDok Kitchen",
        location: "Saint Paul",
        date:  "January 2020 - November 2022",
        description: "At this position, my primary responisbilty is responsible for creating and updating menus that align with customer preferences, dietary requirements, and seasonal availability of ingredients. As well as Maintaining proper food safety and hygiene practices is crucial. I also ensures compliance with local health regulations, oversees proper food handling, storage, and preparation techniques, and conducts regular inspections to maintain cleanliness and sanitation standards.",
        skills: [ "Leadership and Management", "Problem-solving and Decision-making", "Continuous Learning"]
    }
  ];  

  return (
    <div className="w-full h-max mt-2">
      <div className='max-w-[1200px] m-auto md:grid gap-10'>
          <div className="col-span-2 flex justify-between">
            <div className='drop-shadow-2xl'>
              <h1 className='uppercase text-6xl font-extrabold'>work experiences.</h1>
              <div>
              {timeLineElements.map((item,index) => {
                    return <>
                        <div className="flex justify-between flex-wrap transition">
                          <div className="mt-10">
                            <div className="flex justify-between">
                              <h1 className="text-2xl font-bold">{item.title}</h1>
                              <div className="flex justify-end">
                                <p className="mr-2">{item.date}</p>
                              </div>
                            </div>
                            <p className="text-xl mt-1 mb-1">{item.company}</p>
                            <p className="text-base mt-1 mb-1">{item.location}</p>
                            <p className="font-light">{item.description}</p>
                            <div className="mt-2 flex mb-2">
                              {
                                item.skills.map((skill) => {
                                  return <p className="bg-gray-600 rounded-lg px-2 py-1 mr-2 text-white  cursor-auto">{skill}</p>
                                })
                              }
                            </div>
                          </div>
                        </div>          
                    </>
                  })}
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Experiences