import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FirstPage = () => {
    return (
        <main style={{ minHeight: '70vh' }} className="bg-gradient-to-br from-purple-50 to-white flex items-center">
            <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative">
                    <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
                        <div className="bg-gray-200 h-96 flex items-center justify-center">
                            <FontAwesomeIcon 
                                icon={faImage} 
                                className="text-6xl text-gray-400 opacity-70 transition-all hover:scale-110" 
                            />
                        </div>
                    </div>
                    {/* Floating Badges */}
                    <div className="absolute -top-6 -right-6 bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                        <span className="text-sm text-gray-700">Verified Solution</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    {/* Animated Heading */}
                    <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-4">
                        🚀 Mental Health Assessment
                    </div>
                    
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Understand Your Psychological Wellness
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-8">
                        Gain insights into your mental health through our comprehensive 
                        and scientifically-backed assessment tool. Take the first step 
                        towards understanding your psychological well-being.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                        <Link 
                            to="/assessment"
                            className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg"
                        >
                            <span>Take your Assessment</span>
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                        
                        <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all transform hover:scale-105">
                            Learn More
                        </button>
                    </div>

                    {/* Feature Highlights */}
                    <div className="mt-8 flex space-x-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                            <span>Confidential</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                            <span>Professional</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                            <span>Personalized</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FirstPage;