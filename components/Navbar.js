"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'



const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="w-full m-16 ">
            <span className="flex">
                <Link href="/" className="ml-10 text-2xl hover:font-bold">
                    About</Link>
                <Link href="/about" className="ml-10 text-2xl hover:font-bold">Project</Link>
                <Link href="/contact" className="ml-10 text-2xl hover:font-bold">Contact</Link>
            </span>
        </nav>
    )
}

export default Navbar