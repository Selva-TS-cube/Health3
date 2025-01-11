import React from 'react';
import Navbar from './Navbar';
import Features from './Features';
import BlogAndVideo from './BlogAndVideo';
import FirstPage from './FirstPage';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            <FirstPage />
            <Features />
            <BlogAndVideo />
            <Footer />
        </div>
    );
};

export default HomePage;