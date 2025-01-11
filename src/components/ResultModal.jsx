import React from "react";
import { useLocation } from "react-router-dom";

function ResultModal() {
  const location = useLocation();
  const { highestCategory } = location.state || {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-purple-100 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
        <p className="text-lg text-gray-600">
          The category with the highest average is: <strong>{highestCategory}</strong>
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none"
        >
          Proceed to VR analysis!
        </button>
      </div>
    </div>
  );
}

export default ResultModal;