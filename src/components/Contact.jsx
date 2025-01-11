import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt, 
    faPhone, 
    faEnvelope, 
    faClock,
    faHeadset,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic
        console.log('Form Submitted', formData);
        // Reset form after submission
        setFormData({
            email: '',
            phone: '',
            description: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Information Section */}
                    <div>
                        <div className="mb-12">
                            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
                                Connect with Us
                            </div>
                            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                                Get in Touch with Our Mental Health Experts
                            </h1>
                            <p className="text-gray-600 leading-relaxed">
                                We understand taking the first step can be challenging. Our compassionate team is here to support you on your journey to better mental health.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-8">
                            {[
                                {
                                    icon: faMapMarkerAlt,
                                    text: "123 Healing Street, Medical District, NY 10001",
                                    color: "text-blue-500"
                                },
                                {
                                    icon: faPhone,
                                    text: "+1 (555) 123-4567",
                                    color: "text-green-500"
                                },
                                {
                                    icon: faEnvelope,
                                    text: "care@mentalhealthclinic.com",
                                    color: "text-red-500"
                                },
                                {
                                    icon: faClock,
                                    text: "Monday - Friday: 9:00 AM - 6:00 PM",
                                    color: "text-purple-500"
                                }
                            ].map((contact, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="
                                        w-12 h-12 
                                        bg-white 
                                        rounded-full 
                                        shadow-md 
                                        flex 
                                        items-center 
                                        justify-center 
                                        mr-4
                                    ">
                                        <FontAwesomeIcon 
                                            icon={contact.icon} 
                                            className={`${contact.color} text-xl`}
                                        />
                                    </div>
                                    <span className="text-gray-700">{contact.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Emergency Support */}
                        <div className="
                            bg-gradient-to-br 
                            from-red-100 
                            to-pink-100 
                            p-6 
                            rounded-2xl 
                            shadow-lg
                        ">
                            <div className="flex items-center mb-4">
                                <FontAwesomeIcon 
                                    icon={faHeadset} 
                                    className="text-red-600 text-3xl mr-4"
                                />
                                <h2 className="text-xl font-bold text-gray-800">
                                    Emergency Support
                                </h2>
                            </div>
                            <p className="text-gray-600 mb-2">
                                For immediate assistance outside business hours
                            </p>
                            <p className="text-red-600 font-bold text-lg">
                                Crisis Hotline: 1-800-273-8255
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="
                        bg-white 
                        p-8 
                        rounded-2xl 
                        shadow-2xl 
                        border 
                        border-gray-100
                    ">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Contact Information
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Please provide your contact details below
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label 
                                    className="block text-gray-700 mb-2" 
                                    htmlFor="email"
                                >
                                    Email address
                                </label>
                                <input 
                                    className="
                                        w-full 
                                        p-3 
                                        border 
                                        border-gray-300 
                                        rounded-lg 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-purple-500
                                    "
                                    type="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email" 
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    className="block text-gray-700 mb-2" 
                                    htmlFor="phone"
                                >
                                    Phone number
                                </label>
                                <input 
                                    className="
                                        w-full 
                                        p-3 
                                        border 
                                        border-gray-300 
                                        rounded-lg 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-purple-500
                                    "
                                    type="tel" 
                                    id="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number" 
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    className="block text-gray-700 mb-2" 
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea 
                                    className="
                                        w-full 
                                        p-3 
                                        border 
                                        border-gray-300 
                                        rounded-lg 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-purple-500
                                    "
                                    id="description" 
                                    rows="4" 
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Tell us more about your request..." 
                                    required
                                ></textarea>
                            </div>
                            <button 
                                className=" 
                                    w-full 
                                    bg-purple-600 
                                    text-white 
                                    p-3 
                                    rounded-lg 
                                    hover:bg-purple-700 
                                    transition duration-300
                                " 
                                type="submit"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;