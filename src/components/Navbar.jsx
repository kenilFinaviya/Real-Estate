import React, { useEffect, useState } from 'react'
import logo from '../assets/logo3.png'
import Menu from '../assets/menu.png'
import Close from '../assets/close.png'


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img className='h-16 w-16 cursor-pointer' src={logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white'>Sign Up</button>
                <img onClick={() => setShowMobileMenu(true)} src={Menu} className='md:hidden w-8 cursor-pointer' alt="" />
            </div>
            {/* --mobile-menu-- */}
            <div
                className={`md:hidden fixed ${showMobileMenu ? 'w-full' : 'w-0'
                    } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-in-out`}
            >
                <div className="flex justify-end p-6 cursor-pointer">
                    <img
                        src={Close}
                        onClick={() => setShowMobileMenu(false)}
                        className="w-6"
                        alt=""
                    />
                </div>
                <ul
                    className={`flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium transition-opacity duration-500 ${showMobileMenu ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <a href="#Header" onClick={() => setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">
                        Home
                    </a>
                    <a href="#About" onClick={() => setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">
                        About
                    </a>
                    <a href="#Projects" onClick={() => setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">
                        Projects
                    </a>
                    <a href="#Testimonials" onClick={() => setShowMobileMenu(false)} className="px-4 py-2 rounded-full inline-block">
                        Testimonials
                    </a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
