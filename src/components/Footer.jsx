import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTwitter, 
    faFacebook, 
    faInstagram, 
    faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-purple-100 to-white py-16">
            <div className="container mx-auto px-4">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center mb-4">
                            <img 
                                src="https://placehold.co/100x100" 
                                alt="Company Logo" 
                                className="rounded-full w-20 h-20 object-cover mr-4 shadow-lg"
                            />
                            <h2 className="text-2xl font-bold text-gray-800">ProductName</h2>
                        </div>
                        <p className="text-gray-600 text-center md:text-left mb-4">
                            Innovative solutions that transform your digital experience.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: faTwitter, color: 'text-blue-400' },
                                { icon: faFacebook, color: 'text-blue-600' },
                                { icon: faInstagram, color: 'text-pink-500' },
                                { icon: faLinkedin, color: 'text-blue-700' }
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className={`
                                        ${social.color} 
                                        hover:bg-purple-100 
                                        p-2 
                                        rounded-full 
                                        transition-all 
                                        hover:scale-110
                                    `}
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                'Home', 'About', 'Services', 
                                'Resources', 'Contact', 'Blog'
                            ].map((link, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            {[
                                { 
                                    icon: faEnvelope, 
                                    text: 'support@productname.com',
                                    color: 'text-red-500'
                                },
                                { 
                                    icon: faPhoneAlt, 
                                    text: '+1 (555) 123-4567',
                                    color: 'text-green-500'
                                },
                                { 
                                    icon: faMapMarkerAlt, 
                                    text: '123 Tech Lane, Innovation City',
                                    color: 'text-blue-500'
                                }
                            ].map((contact, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center space-x-3"
                                >
                                    <FontAwesomeIcon 
                                        icon={contact.icon} 
                                        className={`${contact.color} text-xl`} 
                                    />
                                    <span className="text-gray-600">{contact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-purple-200 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 mb-4 md:mb-0">
                            © {currentYear} ProductName. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-purple-600">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;