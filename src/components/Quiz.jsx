import React from 'react'
import QuizQuestionCard from './QuizQuestionCard.jsx';
import questions from "../data/questions.js"
import { useQuizContext } from "../context/QuizContext"
import { useNavigate } from 'react-router-dom';
function Quiz() {

  const { answers, selectAnswers, calculateResult } = useQuizContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions!");
      return;
    }
    calculateResult();
    navigate("/result");
    console.log(answers)
  };
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center text-blue-800">Learning Style Analyzer Quiz</h2>
      <p className="text-center text-gray-600">
        Answer the following questions to find your preferred learning style.
      </p>

      {questions.map((q) => (
        <QuizQuestionCard
          key={q.id}
          id={q.id}
          question={q.question}
          options={q.options}
          selectedOption={answers[q.id]}
          onSelect={selectAnswers}
        />
      ))}

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Quiz