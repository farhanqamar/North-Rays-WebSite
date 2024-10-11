"use client";
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"; // Importing close icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="md:flex justify-between items-center p-3 h-16">
            <div className='flex justify-between'>
                <div className="text-[#023047] text-xl lg:text-2xl font-bold">
                    <Link href="/">North Rays</Link>
                </div>

                <div className="text-white text-3xl md:hidden cursor-pointer" onClick={toggleMenu}>
                    <RxHamburgerMenu />
                </div>
            </div>

            {/* Navigation links */}
            <ul className={`flex flex-col md:flex-row md:space-x-6 lg:space-x-8 md:items-center fixed md:static left-0 top-0 md:top-auto bg-[#023047]  md:bg-transparent w-full md:w-auto p-6 md:p-0 transition-transform transform md:transform-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-between mb-5 md:hidden'>
                    <div className="text-white text-2xl font-bold block md:hidden">
                        <Link href="/">North Rays</Link>
                    </div>
                    <span className="text-white text-3xl md:hidden cursor-pointer" onClick={toggleMenu}><RxCross1 /></span>
                </div>
                <span className='md:hidden bg-[#023047]'><hr style={{background:"#023047"}}/></span>
                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/" className="text-white hover:text-[#023047] text-xl font-bold">
                        Home
                    </Link>
                    {/* Line element */}
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>

                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/portfolio" className="text-white hover:text-[#023047] text-xl">
                        Portfolio
                    </Link>
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>

                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/academy" className="text-white hover:text-[#023047] text-xl">
                        Academy
                    </Link>
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>

                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/blog" className="text-white hover:text-[#023047] text-xl">
                        Blog
                    </Link>
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>
                
                
                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/reviews" className="text-white hover:text-[#023047] text-xl">
                        Reviews
                    </Link>
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>
                <li className="relative mb-4 md:mb-0 group w-fit">
                    <Link href="/contact" className="text-white hover:text-[#023047] text-xl">
                        Contact
                    </Link>
                    <div className="absolute left-0 bottom-0 h-[2px] w-full bg-[#023047] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-xl"></div>
                </li>


                <li className="mb-4 md:mb-0 block md:hidden">
                    <button className="bg-[#FA8500] text-white hover:text-[#023047] py-2 px-4 rounded-md">Let's Talk</button>
                </li>
            </ul>

            <div className='hidden md:block'>
                <button className="bg-[#023047] hover:bg-[#215169] text-white py-2 px-4 rounded-md transition-colors duration-300 ease-in-out">Let's Talk</button>
            </div>
        </nav>
        <hr />
        </>
        
        
    );
};

export default Navbar;