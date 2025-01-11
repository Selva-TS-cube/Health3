import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheck, 
    faHeartPulse, 
    faStethoscope, 
    faBrain 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Professional Mental Health Care Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Dedicated to providing compassionate psychiatric care and support for your mental wellbeing in a safe, confidential environment.
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Individual Therapy */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group">
                        <div className="flex items-center mb-6">
                            <div className="
                                w-16 h-16 
                                bg-purple-100 
                                rounded-full 
                                flex items-center 
                                justify-center 
                                mr-4 
                                group-hover:bg-purple-200 
                                transition-colors
                            ">
                                <FontAwesomeIcon 
                                    icon={faHeartPulse} 
                                    className="text-purple-600 text-2xl"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Individual Therapy
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            One-on-one sessions tailored to your specific needs and mental health goals.
                        </p>
                        <ul className="space-y-4 text-gray-700 mb-6">
                            {[
                                "Personalized treatment plans",
                                "Depression and anxiety management",
                                "Trauma and PTSD treatment"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <FontAwesomeIcon 
                                        icon={faCheck} 
                                        className="text-purple-500 mr-3"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="
                            w-full 
                            bg-purple-600 
                            text-white 
                            py-3 
                            rounded-lg 
                            hover:bg-purple-700 
                            transition-colors
                        ">
                            Learn More
                        </button>
                    </div>

                    {/* Medication Management */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group">
                        <div className="flex items-center mb-6">
                            <div className="
                                w-16 h-16 
                                bg-green-100 
                                rounded-full 
                                flex items-center 
                                justify-center 
                                mr-4 
                                group-hover:bg-green-200 
                                transition-colors
                            ">
                                <FontAwesomeIcon 
                                    icon={faStethoscope} 
                                    className="text-green-600 text-2xl"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Medication Management
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Expert psychiatric medication services designed to support your mental health journey.
                        </p>
                        <ul className="space-y-4 text-gray-700 mb-6">
                            {[
                                "Comprehensive evaluation",
                                "Regular monitoring and adjustments",
                                "Side effect management"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <FontAwesomeIcon 
                                        icon={faCheck} 
                                        className="text-green-500 mr-3"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="
                            w-full 
                            bg-green-600 
                            text-white 
                            py-3 
                            rounded-lg 
                            hover:bg-green-700 
                            transition-colors
                        ">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Wellness Journey Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="
                        bg-gradient-to-br 
                        from-purple-100 
                        to-blue-100 
                        w-full 
                        h-96 
                        flex 
                        items-center 
                        justify-center 
                        rounded-2xl 
                        shadow-xl
                        relative
                        overflow-hidden
                    ">
                        <div className="
                            absolute 
                            inset-0 
                            bg-gradient-to-br 
                            from-purple-200 
                            to-blue-200 
                            opacity-20 
                            blur-2xl
                        "></div>
                        <div className="
                            w-64 
                            h-64 
                            bg-white 
                            rounded-full 
                            shadow-lg 
                            flex 
                            items-center 
                            justify-center
                        ">
                            <FontAwesomeIcon 
                                icon={faBrain} 
                                className="text-6xl text-purple-600"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Your Journey to Mental Wellness Starts Here
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our modern facility provides a comfortable and private environment for your mental health care. 
                            We use evidence-based treatments and stay current with the latest advances in psychiatric care.
                        </p>
                        <button className="
                            bg-purple-600 
                            text-white 
                            px-8 
                            py-4 
                            rounded-full 
                            shadow-lg 
                            hover:bg-purple-700 
                            hover:shadow-xl 
                            transition-all 
                            transform 
                            hover:-translate-y-1
                        ">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;