import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { categories, questionsText, labels } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

function QuestionForm() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(
    Object.fromEntries(Object.keys(categories).map((cat) => [cat, {}]))
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(1);

  const allQuestions = Object.entries(categories).flatMap(([category, questionIds]) =>
    questionIds.map((questionId) => ({ category, questionId }))
  );

  const handleAnswerChange = (category, questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [questionId]: value,
      },
    }));
  };

  const calculateAverage = (answers) => {
    const averages = {};
    for (const category in answers) {
      const categoryAnswers = Object.values(answers[category]);
      const total = categoryAnswers.reduce((sum, val) => sum + val, 0);
      averages[category] = categoryAnswers.length > 0 ? total / categoryAnswers.length : 0;
    }
    return averages;
  };

  const findHighestAverageCategory = (averages) => {
    return Object.entries(averages).reduce(
      (max, [category, avg]) => (avg > max.avg ? { category, avg } : max),
      { category: "", avg: 0 }
    ).category;
  };

  const handleSubmit = () => {
    const averages = calculateAverage(answers);
    const highestCategory = findHighestAverageCategory(averages);
    
    navigate('/results', { 
      state: { 
        highestCategory,
        averages 
      } 
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setAnimationDirection(1);
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setAnimationDirection(-1);
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const { category, questionId } = allQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
  const isAnswered = answers[category][questionId] !== undefined;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 py-10 px-5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Psychological Assessment
          </h1>
        </div>

        {/* Progress */}
        <div className="p-6 bg-gray-50">
          <div className="mb-4 flex items-center">
            <div className="flex-grow bg-gray-300 rounded-full h-3 mr-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {currentQuestion + 1} / {allQuestions.length}
            </span>
          </div>
        </div>

        {/* Question Container */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: animationDirection * 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -animationDirection * 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="p-8"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-purple-100">
              <p className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {questionsText[questionId]}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8).keys()].map((value) => (
                  <motion.label
                    key={value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex 
                      items-center 
                      justify-center 
                      p-3 
                      rounded-lg 
                      cursor-pointer 
                      transition-all 
                      ${answers[category][questionId] === value 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-white text-gray-700 hover:bg-purple-100'}
                    `}
                  >
                    <input
                      type="radio"
                      name={`${category}-${questionId}`}
                      value={value}
                      checked={answers[category][questionId] === value}
                      onChange={() => handleAnswerChange(category, questionId, value)}
                      className="hidden"
                    />
                    <span className="text-base font-medium">{labels[value]}</span>
                  </motion.label>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="p-6 bg-gray-50 flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`
              px-6 py-3 
              rounded-full 
              shadow-md 
              flex 
              items-center 
              space-x-2 
              ${currentQuestion === 0 
                ? 'bg-gray-300 text-gray-600' 
                : 'bg-purple-500 text-white hover:bg-purple-600'}
            `}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Previous</span>
          </motion.button>

          {currentQuestion === allQuestions.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmit}
              disabled={!isAnswered}
              className={`
                px-6 py-3 
                rounded-full 
                shadow-md 
                flex 
                items-center 
                space-x-2 
                ${isAnswered 
                  ? ' bg-purple-500 text-white hover:bg-purple-600' 
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
              `}
            >
              <FontAwesomeIcon icon={faCheck} />
              <span>Submit</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextQuestion}
              className="px-6 py-3 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faArrowRight} />
              <span>Next</span>
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default QuestionForm;