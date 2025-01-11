import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white/90 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCube} className="text-2xl text-gray-500 mr-2" />
                    <Link to="/" className="text-2xl font-bold text-gray-800">ProductName</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-600 hover:text-purple-600 focus:outline-none"
                    >
                        <FontAwesomeIcon 
                            icon={isMenuOpen ? faTimes : faBars} 
                            className="text-2xl"
                        />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">Home</Link>
                    <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About Us</Link>
                    <Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</Link>
                    <Link to="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">Resources</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</Link>
                </nav>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link 
                        to="/wallet" 
                        className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Pontem Wallet
                    </Link>
                    <Link 
                        to="/signin" 
                        className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link 
                        to="/signup" 
                        className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-transform hover:scale-105"
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                        <nav className="flex flex-col p-4 space-y-3">
                            <Link to="/" onClick={closeMenu} className="text-gray-600 hover:text-purple-600">Home</Link>
                            <Link to="/about" onClick={closeMenu} className="text-gray-600 hover:text-purple-600">About Us</Link>
                            <Link to="/services" onClick={closeMenu} className="text-gray-600 hover:text-purple-600">Services</Link>
                            <Link to="/resources" onClick={closeMenu} className="text-gray-600 hover:text-purple-600">Resources</Link>
                            <Link to="/contact" onClick={closeMenu} className="text-gray-600 hover:text-purple-600">Contact Us</Link>
                            
                            <div className="flex flex-col space-y-3 pt-4 border-t">
                                <Link 
                                    to="/wallet" 
                                    onClick={closeMenu}
                                    className="text-center px-4 py-2 border border-gray-300 text-gray-600 rounded-full"
                                >
                                    Pontem Wallet
                                </Link>
                                <Link 
                                    to="/signin" 
                                    onClick={closeMenu}
                                    className="text-center px-4 py-2 text-gray-600"
                                >
                                    Sign In
                                </Link>
                                <Link 
                                    to="/signup" 
                                    onClick={closeMenu}
                                    className="text-center px-4 py-2 bg-purple-600 text-white rounded-full"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;