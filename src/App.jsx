import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Resources from './components/Resources';
import Contact from './components/Contact';
import QuestionForm from './components/QuestionForm';
import ResultModal from './components/ResultModal';
import VrTherapy from './components/VrTherapy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WolframChatbot from './components/WolframChatbot';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/assessment" element={<QuestionForm />} />
          <Route path="/results" element={<ResultModal />} />
          <Route path="/vrtherapy" element={<VrTherapy />} />
          <Route path="/wolfram" element={<WolframChatbot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;