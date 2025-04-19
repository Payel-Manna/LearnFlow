import React from 'react'

function QuizQuestionCard({ id, question, options, selectedOption, onSelect }) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <p className="font-semibold text-lg mb-4 text-gray-800">{question}</p>
      <div className="space-y-3">
        {options.map((opt, index) => (
          <label
            key={index}
            className={`flex items-center space-x-3 cursor-pointer p-2 rounded-md border ${
              selectedOption === opt.type
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            } hover:bg-blue-50 transition-colors duration-200`}
          >
            <input
              type="radio"
              name={`question-${id}`}
              value={opt.type}
              checked={selectedOption === opt.type}
              onChange={() => onSelect(id, opt.type)}
              className="accent-blue-600"
            />
            <span className="text-gray-700">{opt.text}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestionCard