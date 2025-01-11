import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faVrCardboard, 
  faBrain 
} from '@fortawesome/free-solid-svg-icons';

function ResultModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const { highestCategory, averages } = location.state || {};
  const [showDetails, setShowDetails] = useState(false);

  // Mapping categories to descriptions and icons
  const categoryDetails = {
    depression: {
      description: "Indicates potential signs of depression. Personalized VR therapy can help manage symptoms.",
      icon: faBrain,
      color: "text-blue-600"
    },
    anxiety: {
      description: "Suggests anxiety-related patterns. VR exposure therapy can provide effective coping strategies.",
      icon: faChartLine,
      color: "text-purple-600"
    },
    stress: {
      description: "Highlights stress management needs. VR relaxation techniques can be beneficial.",
      icon: faVrCardboard,
      color: "text-green-600"
    }
  };

  const selectedCategoryDetails = categoryDetails[highestCategory.toLowerCase()] || {
    description: "Unique insights into your mental health profile.",
    icon: faBrain,
    color: "text-gray-600"
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm flex justify-center items-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <FontAwesomeIcon 
              icon={selectedCategoryDetails.icon} 
              className={`text-5xl mb-4 ${selectedCategoryDetails.color}`} 
            />
            <h2 className="text-3xl font-bold text-white">Assessment Results</h2>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className={`text-xl font-semibold ${selectedCategoryDetails.color} mb-4`}>
              {highestCategory} Profile Detected
            </p>
            <p className="text-gray-600 mb-6">
              {selectedCategoryDetails.description}
            </p>

            {/* Category Breakdown */}
            <div 
              onClick={() => setShowDetails(!showDetails)}
              className="cursor-pointer bg-gray-100 p-4 rounded-lg mb-6 hover:bg-gray-200 transition"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">View Category Breakdown</span>
                <span className={`text-sm ${showDetails ? 'rotate-180' : ''} transition`}>
                  ▼
                </span>
              </div>
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    {Object.entries(averages).map(([category, score]) => (
                      <div key={category} className="flex justify-between mb-2">
                        <span className="capitalize">{category}</span>
                        <span>{(score * 10).toFixed(2)}/10</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-4"
          >
            <button
              onClick={() => navigate('/vrtherapy', { 
                state: { 
                  highestCategory, 
                  averages 
                } 
              })}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faVrCardboard} />
              <span>Start VR Therapy</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResultModal;