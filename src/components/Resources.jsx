import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMicrophone, 
    faShieldAlt, 
    faVrCardboard,
    faBookOpen,
    faCalendarAlt,
    faPlayCircle
} from '@fortawesome/free-solid-svg-icons';

const Resources = () => {
    const [activeVideo, setActiveVideo] = useState(false);
    const blogPosts = [
        {
            title: "Revolutionizing Mental Health with VR",
            description: "Exploring the transformative potential of virtual reality in psychiatric care.",
            image: "https://placehold.co/400x200",
            date: "Jan 15, 2024",
            readTime: "5 min read"
        },
        {
            title: "AR Therapy: A New Frontier",
            description: "How augmented reality is changing the landscape of mental health treatment.",
            image: "https://placehold.co/400x200",
            date: "Feb 1, 2024",
            readTime: "7 min read"
        },
        {
            title: "Personalized Digital Healing",
            description: "The intersection of technology and compassionate mental health support.",
            image: "https://placehold.co/400x200",
            date: "Mar 10, 2024",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <header className="text-center mb-16">
                    <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
                        Innovative Mental Health Technology
                    </div>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                        VR & AR Psychiatric Care
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Revolutionizing mental health treatment through immersive, cutting-edge technology
                    </p>
                </header>

                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-purple-600 mb-6">
                            Immersive Therapeutic Experiences
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our innovative VR and AR technologies provide personalized, adaptive mental health treatments 
                            that transform traditional therapeutic approaches with unprecedented precision and empathy.
                        </p>
                        <div className="space-y-6 mb-8">
                            {[
                                {
                                    icon: faMicrophone,
                                    text: "Personalized Virtual Therapy Sessions",
                                    color: "text-purple-500"
                                },
                                {
                                    icon: faShieldAlt,
                                    text: "Secure and Confidential AR Consultations",
                                    color: "text-green-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="
                                        w-14 h-14 
                                        bg-white 
                                        rounded-full 
                                        shadow-md
                                        flex 
                                        items-center 
                                        justify-center 
                                        mr-4
                                        transform 
                                        hover:scale-110 
                                        transition-transform
                                    ">
                                        <FontAwesomeIcon 
                                            icon={item.icon} 
                                            className={`${item.color} text-2xl`}
                                        />
                                    </div>
                                    <span className="text-gray-700 text-lg">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <button className="
                                px-8 py-4 
                                bg-purple-600 
                                text-white 
                                font-semibold 
                                rounded-full 
                                hover:bg-purple-700 
                                transition-colors
                                shadow-lg
                                hover:shadow-xl
                                flex
                                items-center
                                space-x-2
                            ">
                                <span>Book Consultation</span>
                            </button>
                            <button 
                                onClick={() => setActiveVideo(true)}
                                className="
                                    px-8 py-4 
                                    border-2 
                                    border-purple-600 
                                    text-purple-600 
                                    font-semibold 
                                    rounded-full 
                                    hover:bg-purple-50 
                                    transition-colors
                                    flex
                                    items-center
                                    space-x-2
                                "
                            >
                                <FontAwesomeIcon icon={faPlayCircle} />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="
                            relative 
                            w-full 
                            max-w-md 
                            bg-gradient-to-br 
                            from-purple-100 
                            to-blue-100 
                            rounded-3xl 
                            shadow-2xl 
                            overflow-hidden
                            transform 
                            hover:scale-105 
                            transition-transform
                            group
                        ">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 blur-2xl"></div>
                            <img 
                                src="https://placehold.co/400x400" 
                                alt="VR and AR Technology in Mental Health" 
                                className="
                                    relative 
                                    z-10 
                                    w-full 
                                    h-full 
                                    object-cover
                                    group-hover:scale-110
                                    transition-transform
                                "
                            />
                        </div>
                    </div>
                </section>

                {/* Blog Posts Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover stories, research, and inspiration in mental health technology
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div 
                                key={index} 
                                className="
                                    bg-white 
                                    rounded-2xl 
                                    shadow-xl 
                                    overflow-hidden 
                                    transform 
                                    hover:-translate-y-4 
                                    transition-transform
                                    group
                                "
                            >
                                <div className="relative">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform" />
                                    <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 rounded-br-lg">
                                        {post.readTime}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {post.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center text-gray-500">
                                            <FontAwesomeIcon 
                                                icon={faCalendarAlt} 
                                                className="mr-2"
                                            />
                                            <span>{post.date}</span>
                                        </div>
                                        <button className="
                                            text-purple-600 
                                            hover:text-purple-800 
                                            font-semibold 
                                            flex 
                                            items-center
                                        ">
                                            Read More
                                            <FontAwesomeIcon 
                                                icon={faBookOpen} 
                                                className="ml-2"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Load More Section */}
                <div className="text-center">
                    <button className="
                        px-8 
                        py-4 
                        bg-purple-600 
                        text-white 
                        font-semibold 
                        rounded-full 
                        hover:bg-purple-700 
                        transition-colors
                        shadow-lg
                    ">
                        Load More Posts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resources;