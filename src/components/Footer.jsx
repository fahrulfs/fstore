import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-bgLightmode w-full">
            {/* footer top */}
            <div className="w-full p-4">
                <div className="container mt-10 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
                    {/* company info */}
                    <div className="md:w-[400px]">
                        <Link to="/">
                            <img src="/logo.svg" alt="" />
                        </Link>
                        <p className="section-parag-light my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <div className="flex items-center gap-6">
                            <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-accentColor" />
                            <FaTwitter className="w-5 h-5 cursor-pointer hover:text-accentColor" />
                            <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-accentColor" />
                            <FaInstagram className="w-5 h-5 cursor-pointer hover:text-accentColor" />
                        </div>
                    </div>

                    {/* Catalog */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">CATALOG</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Necklaces
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Hoodies
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Jewelry Box
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                T-shirt
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Jacket
                            </Link>
                        </div>
                    </div>

                    {/* CUSTOMER SERVICES */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Contact Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Track Your Order
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Product Care & Repair
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Book an Appointment
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Shipping & Returns
                            </Link>
                        </div>
                    </div>

                    {/* ABOUT US */}
                    <div className="text-Black">
                        <h4 className="font-semibold mb-3">ABOUT US</h4>
                        <div className="space-y-2">
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Our Producers
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                Sitemap
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                FAQ
                            </Link>
                            <Link to="/" className="text-sm block hover:text-accentColor">
                                About Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="bg-blackColor">
                <p className="text-center items-center py-3 section-parag-dark">© {currentYear} Fstore</p>
            </div>
        </footer>
    );
};

export default Footer;
