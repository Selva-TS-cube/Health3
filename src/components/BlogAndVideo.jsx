import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlayCircle, 
    faNewspaper, 
    faEye, 
    faCalendar 
} from '@fortawesome/free-solid-svg-icons';

const BlogAndVideo = () => {
    const [activeCategory, setActiveCategory] = useState('blogs');

    const blogPosts = [
        {
            title: "Exploring Tech Frontiers",
            description: "Dive into the latest technological innovations reshaping our world.",
            image: "https://placehold.co/300x200",
            date: "March 15, 2024",
            readTime: "5 min read"
        },
        {
            title: "Digital Innovation Insights",
            description: "Uncovering breakthrough strategies in digital transformation.",
            image: "https://placehold.co/300x200",
            date: "February 28, 2024",
            readTime: "7 min read"
        },
        {
            title: "Tech Boundaries Redefined",
            description: "How cutting-edge technologies are pushing the limits of possibility.",
            image: "https://placehold.co/300x200",
            date: "January 20, 2024",
            readTime: "6 min read"
        }
    ];

    const videoTutorials = [
        {
            title: "Mastering Tech Basics",
            description: "Comprehensive guide for beginners in technology.",
            image: "https://placehold.co/300x200",
            views: "10.5K",
            duration: "45 mins"
        },
        {
            title: "Advanced Techniques Unveiled",
            description: "Deep dive into professional-level tech skills.",
            image: "https://placehold.co/300x200",
            views: "8.2K",
            duration: "1 hr"
        },
        {
            title: "Expert Insights Roundtable",
            description: "Industry leaders share their most valuable insights.",
            image: "https://placehold.co/300x200",
            views: "15.7K",
            duration: "1.5 hrs"
        }
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Knowledge Hub
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with our latest insights, tutorials, and expert perspectives.
                    </p>
                </div>

                {/* Category Selector */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-full p-1 flex space-x-2 shadow-md">
                        <button
                            className={`px-6 py-2 rounded-full transition-all ${
                                activeCategory === 'blogs' 
                                    ? 'bg-purple-600 text-white' 
                                    : 'text-gray-600 hover:bg-purple-50'
                            }`}
                            onClick={() => setActiveCategory('blogs')}
                        >
                            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                            Blogs
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full transition-all ${
                                activeCategory === 'videos' 
                                    ? 'bg-purple-600 text-white' 
                                    : 'text-gray-600 hover:bg-purple-50'
                            }`}
                            onClick={() => setActiveCategory('videos')}
                        >
                            <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                            Videos
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeCategory === 'blogs' ? blogPosts : videoTutorials).map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                                />
                                {activeCategory === 'videos' && (
                                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FontAwesomeIcon 
                                            icon={faPlayCircle} 
                                            className="text-4xl text-white"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {item.description}
                                </p>

                                {/* Metadata */}
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    {activeCategory === 'blogs' ? (
                                        <>
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faCalendar} />
                                                <span>{item.date}</span>
                                            </div>
                                            <span>{item.readTime}</span>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-center space-x-2">
                                                <FontAwesomeIcon icon={faEye} />
                                                <span>{item.views} Views</span>
                                            </div>
                                            <span>{item.duration}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogAndVideo;