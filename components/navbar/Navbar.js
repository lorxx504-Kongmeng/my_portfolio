"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from "react";
import SocialmediaIcons from "../main/SocialmediaIcons";



const Navbar = () => {
    const router = useRouter();
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    console.log('Browser Width:', browserWidth);
    console.log('Browser Height:', browserHeight);

    return (
        <nav className="m-16">
            <div className="flex justify-between shadow-xl">
                <span>
                    <Link href="/"><h1 className="text-2xl hover:font-bold">developedbyKongmengLor</h1></Link>
                </span>
                <div className="hidden md:flex">
                    <div className="flex">
                        <Link href="/about" className="ml-6 text-2xl hover:font-bold">About</Link>
                        <Link href="/projects" className="ml-6 text-2xl hover:font-bold">Project</Link>
                        <Link href="/contact" className="ml-6 text-2xl hover:font-bold">Contact</Link>
                    </div>
                </div>
                <div onClick={handleNav} className="md:hidden ml-[40%]">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>


            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 overflow-auto whitespace-nowrap' :  ''}>
                <div className={nav? "md:hidden fixed left-0 top-0 w-[75] sm:w-[65%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500" : "fixed left-[-100%]"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/"><h1 className="text-xl hover:font-bold">developedbyKongmengLor</h1></Link>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer md:hidden">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <Link href="/about" className="py-2 text-2xl hover:font-bold">About</Link>
                            <Link href="/projects" className="py-2 text-2xl hover:font-bold">Project</Link>
                            <Link href="/contact" className="py-2 text-2xl hover:font-bold">Contact</Link>
                        </div>
                        <div>
                            <h1 className="uppercase tracking-widest">Let's Connect</h1>
                            <div className="flex item-center  my-4 sm:w-[20%]">
                                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-90">
                                    <FaLinkedin />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-90 ml-4">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-90 ml-4">
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar;