import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '/logo.svg'
import { useState, useEffect } from 'react';


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

function Navbar() {

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

    // cart display
    const [isCartVisible, setIsCartVisible] = useState(false);
    function openCart() {
        setIsCartVisible(!isCartVisible);
    }


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
                    <a onClick={openCart} className='flex items-center gap-2 capitalize text-center hover:text-accentColor hover:scale-105 cursor-pointer'>
                        {
                            isCartVisible ? <FaTimes className='hover:text-blackColor text-accentColor w-5 h-5 cursor-pointer' /> :
                                <FaShoppingBag className='text-blackColor hover:text-accentColor w-5 h-5 cursor-pointer' />
                        }</a>

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

            {isCartVisible && (
                <div className='container left-[50%] -translate-x-1/2 absolute top-[60px] px-6 lg:-right-[500px] md:-right-[300px] lg:w-88 md:w-80 bg-white p-4 shadow-md rounded-md h-fit'>
                    <h2 className='text-lg font-bold mb-4'>Shopping Cart</h2>
                    <ul>
                        {/* Contoh item di cart */}
                        <li className='flex justify-between items-center mb-2'>
                            <span>Item 1</span>
                            <span>$10.00</span>
                        </li>
                        <li className='flex justify-between items-center mb-2'>
                            <span>Item 2</span>
                            <span>$20.00</span>
                        </li>
                    </ul>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='font-bold'>Total:</span>
                        <span className='font-bold'>$30.00</span>
                    </div>

                    <button className='mt-4 w-full bg-accentColor text-white p-2 rounded'>Checkout</button>
                </div>
            )}

        </header>

    )
}

export default Navbar
