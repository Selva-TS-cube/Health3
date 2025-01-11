import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHospital, 
    faHandHoldingMedical, 
    faUserMd, 
    faGlobeAmericas,
    faPlay,
    faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [activeVideo, setActiveVideo] = useState(false);

    const milestones = [
        { year: 2005, event: "Founded our first medical center", color: "bg-blue-100", icon: faHospital },
        { year: 2012, event: "Expanded to multiple locations", color: "bg-green-100", icon: faGlobeAmericas },
        { year: 2018, event: "Introduced advanced telemedicine services", color: "bg-purple-100", icon: faUserMd },
        { year: 2022, event: "Recognized as a leading healthcare provider", color: "bg-red-100", icon: faHandHoldingMedical }
    ];

    

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4">
            <div className="container mx-auto max-w-6xl space-y-16">
                {/* Header Section with Video Modal */}
                <div className="relative text-center">
                    <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
                        Our Healthcare Journey
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                        Transforming Healthcare, <br />Improving Lives
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        A legacy of compassionate care, medical innovation, and community commitment 
                        spanning over two decades.
                    </p>
                    
                    {/* Video Intro Button */}
<div className="flex justify-center">
    <button 
        onClick={() => setActiveVideo(true)}
        className="
            group 
            relative 
            flex 
            items-center 
            justify-center 
            w-32 
            h-32 
            bg-white 
            rounded-full 
            shadow-2xl 
            hover:scale-110 
            transition-all 
            duration-300 
            hover:shadow-purple-500/50
        "
    >
        {/* Pulsing Background */}
        <div className="
            absolute 
            inset-0 
            bg-purple-500 
            bg-opacity-20 
            rounded-full 
            animate-ping 
            group-hover:animate-none
        "></div>
        
        {/* Gradient Border */}
        <div className="
            absolute 
            inset-0 
            rounded-full 
            bg-gradient-to-r 
            from-purple-500 
            to-pink-500 
            opacity-0 
            group-hover:opacity-20 
            transition-opacity 
            duration-300
        "></div>
        
        {/* Play Icon */}
        <div className="
            flex 
            items-center 
            justify-center 
            w-24 
            h-24 
            bg-white 
            rounded-full 
            shadow-lg 
            z-10
        ">
            <FontAwesomeIcon 
                icon={faPlay} 
                className="
                    text-purple-600 
                    text-4xl 
                    transform 
                    group-hover:scale-125 
                    transition-transform 
                    duration-300
                " 
            />
        </div>
    </button>
</div>

{/* Video Modal */}
{activeVideo && (
    <div 
        className="
            fixed 
            inset-0 
            bg-black 
            bg-opacity-80 
            z-50 
            flex 
            items-center 
            justify-center 
            p-4
        "
        onClick={() => setActiveVideo(false)}
    >
        <div 
            className="
                relative 
                w-full 
                max-w-4xl 
                mx-auto
            "
            onClick={(e) => e.stopPropagation()}
        >
            {/* Close Button */}
            <button 
                onClick={() => setActiveVideo(false)}
                className="
                    absolute 
                    -top-12 
                    right-0 
                    text-white 
                    text-4xl 
                    hover:text-purple-300 
                    transition-colors 
                    z-60
                "
            >
                &times;
            </button>

            {/* Video Container */}
            <div 
                className="
                    bg-white 
                    rounded-2xl 
                    overflow-hidden 
                    shadow-2xl 
                    border-4 
                    border-white 
                    transform 
                    transition-all 
                    duration-300 
                    hover:scale-105
                "
            >
                {/* Responsive Video Wrapper */}
                <div className="relative pb-[56.25%] pt-25 h-0">
                    <iframe 
                        src="https://www.youtube.com/embed/-_Ib6SmpIFQ?si=agG1zqdYfsgVGqLS&amp;controls=1&amp;autoplay=1&amp;mute=0"
                        title="Healthcare Journey"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="
                            absolute 
                            top-0 
                            left-0 
                            w-full 
                            h-full 
                            rounded-xl
                        "
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
)}
                </div>

                {/* Our Story Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Our Inspiring Story
                        </h2>
                        <div className="space-y-4 text-gray-600 relative">
                            <FontAwesomeIcon 
                                icon={faQuoteLeft} 
                                className="absolute -left-8 top-0 text-purple-200 text-4xl" 
                            />
                            <p>
                                Founded in 2005, our healthcare organization began with a simple yet powerful mission: 
                                to provide exceptional, patient-centered medical care that transforms lives.
                            </p>
                            <p>
                                What started as a small medical center has grown into a comprehensive 
                                healthcare network, serving thousands of patients with cutting-edge 
                                medical solutions and compassionate care.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
                        <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Our Key Milestones
                            </h3>
                            <div className="space-y-4">
                                {milestones.map((milestone, index) => (
                                    <div 
                                        key={index} 
                                        className={`flex items-center space-x-4 p-4 rounded-lg ${milestone.color} hover:shadow-md transition-all`}
                                    >
                                        <div className="text-3xl text-purple-800 w-20 flex items-center justify-center">
                                            <FontAwesomeIcon icon={milestone.icon} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-2xl font-bold text-gray-800 mb-1">
                                                {milestone.year}
                                            </div>
                                            <div className="text-gray-700">
                                                {milestone.event}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guiding principles that define our commitment to excellence
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                    icon: "❤️",
                    title: "Compassionate Care",
                    description: "Delivering healthcare with empathy, respect, and personalized attention.",
                    gradient: "from-pink-500 to-red-500"
                },
                {
                    icon: "🛡️",
                    title: "Patient Safety",
                    description: "Committed to the highest standards of safety and quality in healthcare.",
                    gradient: "from-blue-500 to-purple-500"
                },
                {
                    icon: "🌍",
                    title: "Community Impact",
                    description: "Dedicated to improving community health and making healthcare accessible.",
                    gradient: "from-green-500 to-teal-500"
                }
            ].map((value, index) => (
                <div 
                    key={index} 
                    className="relative group"
                >
                    <div 
                        className="
                            absolute 
                            -inset-0.5 
                            bg-gradient-to-r 
                            from-purple-600 
                            to-pink-600 
                            rounded-2xl 
                            opacity-75 
                            group-hover:opacity-100 
                            transition 
                            duration-1000 
                            blur-sm 
                            group-hover:blur-lg
                        "
                    ></div>
                    <div 
                        className="
                            relative 
                            p-6 
                            bg-white 
                            ring-1 
                            ring-gray-900/5 
                            rounded-2xl 
                            space-y-5 
                            transform 
                            transition-all 
                            duration-300 
                            group-hover:-translate-y-2
                        "
                    >
                        <div 
                            className="
                                w-20 
                                h-20 
                                mx-auto 
                                flex 
                                items-center 
                                justify-center 
                                rounded-full 
                                bg-gradient-to-br 
                                from-purple-100 
                                to-pink-100 
                                group-hover:scale-110 
                                transition 
                                duration-300
                                text-6xl
                            "
                        >
                            {value.icon}
                        </div>
                        
                        <div className="text-center">
                            <h3 className="
                                text-2xl 
                                font-bold 
                                text-gray-800 
                                mb-3 
                                group-hover:text-purple-600 
                                transition 
                                duration-300
                            ">
                                {value.title}
                            </h3>
                            <p className="
                                text-gray-600 
                                text-base 
                                leading-relaxed
                            ">
                                {value.description}
                            </p>
                        </div>
                        
                        <div className="text-center pt-4">
                            <button className="
                                text-purple-600 
                                hover:text-purple-800 
                                font-semibold 
                                flex 
                                items-center 
                                justify-center 
                                mx-auto 
                                space-x-2 
                                group
                            ">
                                <span>Learn More</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 transform group-hover:translate-x-1 transition duration-300" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

                {/* Team Commitment Section */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-16 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Our Team's Unwavering Commitment
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto mb-10 opacity-90">
                            We are more than just a healthcare provider. We are a dedicated team of 
                            professionals committed to your health, well-being, and a brighter, 
                            healthier future.
                        </p>
                        <button className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-100 transition-all">
                            Meet Our Exceptional Team
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;