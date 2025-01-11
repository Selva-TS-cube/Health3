import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faRocket, 
    faCog, 
    faShieldAlt, 
    faUsers, 
    faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

const featuresData = [
    {
        title: "Performance Optimization",
        description: "Experience unparalleled performance with our cutting-edge technology that pushes the boundaries of innovation.",
        buttonText: "Learn More",
        icon: faRocket,
        image: "https://placehold.co/300x200",
        color: "bg-blue-50",
        iconColor: "text-blue-500"
    },
    {
        title: "Workflow Automation",
        description: "Streamline your processes with powerful automation tools designed to increase efficiency and productivity.",
        buttonText: "Discover More",
        icon: faCog,
        image: "https://placehold.co/300x200",
        color: "bg-green-50",
        iconColor: "text-green-500"
    },
    {
        title: "Advanced Security",
        description: "Enhance your digital protection with our state-of-the-art security measures and comprehensive safeguards.",
        buttonText: "Secure Now",
        icon: faShieldAlt,
        image: "https://placehold.co/300x200",
        color: "bg-red-50",
        iconColor: "text-red-500"
    },
    {
        title: "Team Collaboration",
        description: "Enable seamless collaboration with intuitive tools that connect your team and clients effortlessly.",
        buttonText: "Join Us",
        icon: faUsers,
        image: "https://placehold.co/300x200",
        color: "bg-purple-50",
        iconColor: "text-purple-500"
    }
];

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Explore Our Powerful Features
                    </h1>
                    <p className="text-lg text-gray-600">
                        Discover how our innovative solutions can transform your digital experience and drive your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuresData.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`
                                ${feature.color} 
                                rounded-2xl 
                                p-6 
                                shadow-lg 
                                hover:shadow-xl 
                                transition-all 
                                duration-300 
                                transform 
                                hover:-translate-y-2
                                relative
                                overflow-hidden
                                group
                            `}
                            onMouseEnter={() => setActiveFeature(index)}
                            onMouseLeave={() => setActiveFeature(null)}
                        >
                            {/* Feature Header */}
                            <div className="flex items-center mb-4">
                                <div className={`
                                    ${feature.iconColor} 
                                    bg-white 
                                    rounded-full 
                                    w-16 
                                    h-16 
                                    flex 
                                    items-center 
                                    justify-center 
                                    mr-4 
                                    shadow-md
                                    group-hover:rotate-12
                                    transition-transform
                                `}>
                                    <FontAwesomeIcon 
                                        icon={feature.icon} 
                                        className="text-3xl"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {feature.title}
                                </h2>
                            </div>

                            {/* Feature Description */}
                            <p className="text-gray-600 mb-6">
                                {feature.description}
                            </p>

                            {/* Action Button */}
                            <button 
                                className={`
                                    flex 
                                    items-center 
                                    space-x-2 
                                    ${feature.iconColor} 
                                    hover:bg-opacity-20 
                                    px-4 
                                    py-2 
                                    rounded-full 
                                    transition-colors
                                `}
                            >
                                <span>{feature.buttonText}</span>
                                <FontAwesomeIcon 
                                    icon={faArrowRight} 
                                    className="ml-2"
                                />
                            </button>

                            {/* Feature Image */}
                            <div 
                                className={`
                                    mt-6 
                                    rounded-lg 
                                    overflow-hidden 
                                    ${activeFeature === index ? 'opacity-100' : 'opacity-70'}
                                    transition-opacity
                                `}
                            >
                                <img 
                                    src={feature.image} 
                                    alt={`Illustration for ${feature.title}`}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;