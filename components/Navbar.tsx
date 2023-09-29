import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/logo.jpg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const blurStyle = {
        backdropFilter: offset < 90 ? 'none' : 'blur(10px)',
        backgroundColor: offset < 90 ? 'transparent' : 'rgba(255, 255, 255, 0.5)',
    };

    return (
        <nav className={`fixed w-full z-20 top-0 left-0  ${offset < 90 ? 'h-28' : 'opacity-100 border-b'}`} style={blurStyle}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={'/'} className="flex items-center">
                    <Image src={logo} alt="Sandy Salon" width={150} height={150} /> {/* Increase width and height */}
                </Link>
                <div className="flex md:order-2">
                    <Link href="/contact">
                        <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                            Contact
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={handleMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={`${isMenuOpen ? 'flex backdrop-blur-md text-base hover:text-blue-600 ' : 'hidden'} flex-col items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="w-full h-full flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link className="block py-2 pl-3 pr-4  text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " href="/" passHref>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " href="/about" passHref>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " href="/services" passHref>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " href="/pricing" passHref>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
