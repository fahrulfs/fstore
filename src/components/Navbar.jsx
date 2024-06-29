import React from 'react'
import { FaBars, FaBell, FaEnvelope, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '/logo.svg'
import { useState } from 'react';




const navItems = () => [
    {
        title: "Jewelry & Accessories",
        path: "/"
    },
    {
        title: "Clothing & Shoes",
        path: "/"
    },
    {
        title: "Home & Living",
        path: "/"
    },
    {
        title: "Wedding & Party",
        path: "/"
    },
    {
        title: "Toys & Entertainment",
        path: "/"
    },
    {
        title: 'Art & Collectibles',
        path: '/'
    },
    {
        title: 'Craft Supplies & Tools',
        path: '/'
    },
]

function Navbar() {

    // navmobile
    const [isHamburgeMenuOpen, setIsHamburgerMenuOpen] = useState(false)
    const hamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgeMenuOpen)
    }


    return (
        <header className='w-full'>
            <nav className='container flex items-center py-2  justify-between gap-3'>
                {/* icon 1 */}
                {/* <div>

                    <FaUser className='text-blackColor w-5 h-5 cursor-pointer md:block' />
                </div> */}

                {/* logo */}
                <div className=''>

                    <a href="/"><img src={logo} alt="Logo" title="Logo" className='w-[125px] lg:w-32' /></a>
                </div>

                {/* accoun and shop*/}
                <div className='text-lg text-bold text-blackColor flex items-center gap-4'>

                    <a href="" className='flex items-center gap-2 capitalize text-center'><FaShoppingBag /></a>
                    <a href="" className='flex items-center gap-2 capitalize text-center'><FaUser /></a>
                    <button onClick={hamburgerMenu} className='lg:hidden'>
                        {
                            isHamburgeMenuOpen ? <FaTimes className='text-blackColor w-5 h-5 cursor-pointer' /> :
                                <FaBars className='text-blackColor w-5 h-5 cursor-pointer' />
                        }
                    </button>
                </div>



            </nav>


            {/* category */}
            <hr />

            <div className='container mt-3'>
                <ul className='lg:flex items-center justify-between text-blackColor section-parag-light hidden'>
                    {
                        navItems().map(({ title, path }) => (
                            <li key={title} className='hover:text-orange-500 duration-200 cursor-pointer'>
                                <Link to='/'>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* mobileview */}
            <div className='container w-fit h-full absolute lg:hidden text-right right-0'>
                <ul className={`bg-blackColor text-whiteColor px-4 py-2 rounded ${isHamburgeMenuOpen ? "translate-x-0 duration-300" : "hidden"}`}>
                    {
                        navItems().map(({ title, path }) => (
                            <li key={title} className='hover:text-orange-500 duration-200 cursor-pointer py-2 section-parag-dark'>
                                <Link to='/'>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar
