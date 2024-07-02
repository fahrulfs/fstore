import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '/logo.svg'
import { useState, useEffect } from 'react';
// import Cart from "./Cart";

// nav link
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

function Navbar({ toggleCartVisibility }) {

    // searchbar 
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    function toggleSearchBar() {
        setIsSearchBarVisible(!isSearchBarVisible);
    }


    // nav in mobile
    const [isHamburgeMenuOpen, setIsHamburgerMenuOpen] = useState(false)
    function hamburgerMenu() {
        setIsHamburgerMenuOpen(!isHamburgeMenuOpen)
    }


    // navbar change color when scroll 
    const [isScrolled, setIsScrolled] =
        useState(false)

    // checking condition
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

    });


    return (
        <header className={`z-50 fixed items-center w-full p-2 
        ${isScrolled ? 'backdrop-blur-md bg-white/50 shadow-md h-14 lg:h-fit'
                : ''}`}>
            <nav className='container flex items-center py-2  justify-between gap-3'>

                {/* search icon */}

                <div>
                    <FaSearch onClick={toggleSearchBar} className='text-blackColor w-5 h-5 cursor-pointer' />
                </div>
                {/* searchbar visible */}
                {isSearchBarVisible && (
                    <div className='container absolute top-10 lg:top-20 left-0 right-0 w-full bg-white p-2 shadow-md'>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded outline-accentColor' placeholder="Search..." />
                    </div>
                )}




                {/* logo */}
                <div className=''>

                    <a href="/"><img src={logo} alt="" /></a>
                </div>

                {/* accoun and shop*/}
                <div className='text-lg text-bold text-blackColor flex items-center gap-4'>
                    <button onClick={toggleCartVisibility} className='flex items-center gap-2 capitalize text-center hover:text-accentColor hover:scale-105 cursor-pointer'>
                        <FaShoppingBag className='text-blackColor hover:text-accentColor w-5 h-5 cursor-pointer' />
                    </button>

                    <a href="" className='flex items-center gap-2 capitalize text-center hover:text-accentColor hover:scale-105 '><FaUser /></a>
                    <button onClick={hamburgerMenu} className='lg:hidden'>
                        {
                            isHamburgeMenuOpen ? <FaTimes className='text-blackColor w-5 h-5 cursor-pointer' /> :
                                <FaBars className='text-blackColor w-5 h-5 cursor-pointer' />
                        }
                    </button>
                </div>



            </nav>


            {/* category */}
            <hr className='hidden lg:block' />

            <div className='container mt-3'>
                <ul className='lg:flex items-center justify-between text-blackColor section-parag-light hidden'>
                    {
                        navItems().map(({ title, path }) => (
                            <li key={title} className='hover:text-accentColor duration-200 cursor-pointer'>
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
                            <li key={title} className='hover:text-accentColor duration-200 cursor-pointer py-2 section-parag-dark'>
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