import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faVrCardboard, 
  faBrain, 
  faHeartbeat, 
  faUser, 
  faInfoCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const VrTherapy = () => {
  const [activeCard, setActiveCard] = useState(null);

  const therapyOptions = [
    {
      title: "Anxiety Management VR",
      description: "Immersive exposure therapy environments",
      icon: faHeartbeat,
      color: "from-blue-100 to-purple-100",
      details: "Advanced VR scenarios designed to help patients gradually confront and manage anxiety triggers in a controlled, safe digital environment.",
      image: "https://recovered.sfo3.cdn.digitaloceanspaces.com/media/15844/Anxiety-disorders-(1).jpg?v=1722503273",
      vrModel: "Calm Mountain Landscape",
      difficulty: "Beginner Friendly",
      link: "https://jayasudhan-m.github.io/VRAnxiety/"
    },
    {
      title: "Depression Relief VR",
      description: "Trauma processing virtual environments",
      icon: faBrain,
      color: "from-green-100 to-teal-100",
      details: "Specialized VR scenarios with guided therapeutic interventions to help patients process and manage depressive experiences safely.",
      image: "https://img.freepik.com/free-vector/depression-concept-illustration_114360-3747.jpg",
      vrModel: "Mood Elevation Scenario",
      difficulty: "Advanced Level",
      link: "https://jayasudhan-m.github.io/VRDepression/"
    },
    {
      title: "Paranoia Management VR",
      description: "Immersive distraction and relief experiences",
      icon: faVrCardboard,
      color: "from-red-100 to-pink-100",
      details: "Cutting-edge VR experiences that help patients understand and manage paranoid thoughts in a controlled, supportive environment.",
      image: "https://img.freepik.com/free-vector/paranoia-concept-illustration_114360-8077.jpg",
      vrModel: "Safe Space Simulation",
      difficulty: "Intermediate",
      link: "https://jayasudhan-m.github.io/VRParanoia/"
    },
    {
      title: "Phobia Exposure VR",
      description: "Interactive phobia management simulations",
      icon: faUser,
      color: "from-purple-100 to-indigo-100",
      details: "Innovative VR training programs creating realistic scenarios to help individuals overcome specific phobias in a controlled setting.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
      vrModel: "Phobia Confrontation Simulator",
      difficulty: "Adaptive Difficulty",
      link: "https://jayasudhan-m.github.io/VRDog/"
    }
  ];

  const handleVRSessionLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            Virtual Reality Therapeutic Innovations
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Immersive VR Therapy Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming mental health treatment through advanced virtual reality technologies
          </p>
        </motion.div>

        {/* Therapy Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {therapyOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`
                bg-white 
                rounded-3xl 
                shadow-2xl 
                overflow-hidden 
                transform 
                transition-all 
                relative
                group
                ${activeCard === index ? 'ring-4 ring-purple-500' : ''}
              `}
            >
              {/* Difficulty Badge */}
              <div className="absolute top-4 right-4 z-10 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {option.difficulty}
              </div>

              {/* Image */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-opacity"></div>
                
                {/* VR Headset Icon */}
                <div className="absolute top-4 left-4 bg-white/70 rounded-full p-2">
                  <FontAwesomeIcon 
                    icon={faVrCardboard} 
                    className="text-2xl text-purple-600"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <FontAwesomeIcon 
                      icon={option.icon} 
                      className="text-2xl text-purple-600 mr-3"
                    />
                    <h2
                      className="text-2xl font-bold text-gray-800">
                      {option.title}
                    </h2>
                  </div>
                  <FontAwesomeIcon 
                    icon={faInfoCircle} 
                    className="text-xl text-gray-400 cursor-pointer hover:text-purple-600"
                    onClick={() => setActiveCard(activeCard === index ? null : index)}
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>

                { 
                /* Expandable Details */}
                <AnimatePresence>
                  {activeCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-700 bg-purple-50 p-4 rounded-lg"
                    >
                      <p>{option.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  className="
                    mt-4 
                    w-full 
                    bg-purple-600 
                    text-white 
                    py-3 
                    rounded-lg 
                    hover:bg-purple-700 
                    transition
                    flex
                    items-center
                    justify-center
                    space-x-2
                  "
                  onClick={() => handleVRSessionLink(option.link)}
                >
                  <span>View Session</span>
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="h-5 w-5" 
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VrTherapy;