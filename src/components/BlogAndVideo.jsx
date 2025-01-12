import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlayCircle, 
    faNewspaper, 
    faEye, 
    faCalendar,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

const BlogAndVideo = () => {
    const [activeCategory, setActiveCategory] = useState('blogs');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const blogPosts = [
        {
            title: "6 Ways You Can Improve Your Mental Health Today",
            description: "Discussing mental health issues has been a taboo in Indian society. For neurological and physical issues, Indians would seek out...",
            image: "https://www.carehospitals.com/assets/images/main/mental-health-inner.webp",
            date: "March 15, 2024",
            readTime: "5 min read"
        },
        {
            title: "How Diet Affects Mental Health?",
            description: "Just like physical health, robust mental health is crucial to lead a balanced and happy life. A lot often people disregard their mental health, owing to various reasons including...",
            image: "https://www.carehospitals.com/assets/images/main/best-neuro-hospitals-in-india-inner.webp",
            date: "February 28, 2024",
            readTime: "7 min read"
        },
        {
            title: "6 Signs You're Struggling with Mental Health Problems",
            description: "Mental and Physical Health is closely related because peace of mind is important to work flawlessly during the day. A disturbed mind takes you nowhere and gives you plenty of health problems like...",
            image: "https://www.carehospitals.com/assets/images/main/mental-illness-signs-inner.webp",
            date: "January 20, 2024",
            readTime: "6 min read"
        }
    ];

    const videoTutorials = [
        {
            title: "Dr Samir Parikh Explains About Sadness, Anxiety & Depression",
            description: "Today on The Ranveer Show, we welcome Dr. Samir Parikh. He is a consultant psychiatrist and the Director of the Department of Mental Health and Behavioral Sciences...",
            image: "https://i.ytimg.com/vi/MFyEwdpC5pM/hqdefault.jpg",
            views: "10.5K",
            duration: "1.5 hrs",
            videoUrl: "https://www.youtube.com/embed/MFyEwdpC5pM"
        },
        {
            title: "6 Ways to Heal Trauma Without Medication",
            description: "Conventional psychiatric practices tell us that if we feel bad, take this drug and it will go away. But after years of research with some of the top psychiatric practitioners...",
            image: "https://i.ytimg.com/vi/ZoZT8-HqI64/hqdefault.jpg",
            views: "8.2K",
            duration: "9 mins",
            videoUrl: "https://www.youtube.com/embed/ZoZT8-HqI64"
        },
        {
            title: "How to Release Emotions Trapped in Your Body",
            description: "Trauma, anxiety, and other emotions can get trapped in your body. In this video, you'll learn how to release trapped emotions and heal stress, anxiety, and...",
            image: "https://i.ytimg.com/vi/GZw8fRPK-8k/hqdefault.jpg",
            views: "15.7K",
            duration: "16 mins",
            videoUrl: "https://www.youtube.com/embed/GZw8fRPK-8k"
        }
    ];

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
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
                                <div 
                                    className="relative overflow-hidden cursor-pointer"
                                    onClick={() => activeCategory === 'videos' && handleVideoClick(item)}
                                >
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

            {/* Video Modal */}
            {selectedVideo && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
                    onClick={closeVideoModal}
                >
                    <div 
                        className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <button 
                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
                                onClick={closeVideoModal}
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                            </button>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe 
                                    src={`${selectedVideo.videoUrl}?autoplay=1`}
                                    title={selectedVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {selectedVideo.title}
                            </h3>
                            <p className="text-gray-600">
                                {selectedVideo.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogAndVideo;