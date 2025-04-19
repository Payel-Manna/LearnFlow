import React from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { result,resetQuiz } = useQuizContext();
  const navigate = useNavigate();

  if (!result) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg">No result found. Please take the quiz first.</p>
        <button
          onClick={() => navigate("/quiz")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Take Quiz
        </button>
      </div>
    );
  }

  const tips = {
    visual: "You learn best with images, diagrams, and charts.",
    auditory: "You understand concepts well through listening and discussions.",
    kinesthetic: "You prefer hands-on activities and learning by doing.",
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">Your Learning Style</h2>
      <p className="text-center text-xl text-blue-700 font-semibold">
        {result.dominantStyle.toUpperCase()}
      </p>
      <p className="text-center italic">{tips[result.dominantStyle]}</p>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Your Scores</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="capitalize">Visual</span>
            <span className="font-bold">{result.visual}</span>
          </li>
          <li className="flex justify-between">
            <span className="capitalize">Auditory</span>
            <span className="font-bold">{result.auditory}</span>
          </li>
          <li className="flex justify-between">
            <span className="capitalize">Kinesthetic</span>
            <span className="font-bold">{result.kinesthetic}</span>
          </li>
        </ul>
        

      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/skillTree")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Skill Tree
        </button>
        <button
          onClick={() =>{  
             resetQuiz()
             navigate("/quiz")}}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;

// import React from "react";
// import { useQuizContext } from "../context/QuizContext";
// import { useNavigate } from "react-router-dom";

// function Result() {
//   const { result } = useQuizContext();
//   const navigate = useNavigate();

//   if (!result) {
//     return (
//       <div className="text-center mt-10">
//         <p className="text-lg">No result found. Please take the quiz first.</p>
//         <button
//           onClick={() => navigate("/quiz")}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Take Quiz
//         </button>
//       </div>
//     );
//   }

//   const tips = {
//     visual: "You learn best with images, diagrams, and charts.",
//     auditory: "You understand concepts well through listening and discussions.",
//     kinesthetic: "You prefer hands-on activities and learning by doing.",
//   };

//   const scores = result.scores || {};

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10 space-y-4">
//       <h2 className="text-2xl font-bold text-center">Your Learning Style</h2>
//       <p className="text-center text-xl text-blue-700 font-semibold">
//         {result.dominantStyle.toUpperCase()}
//       </p>
//       <p className="text-center italic">{tips[result.dominantStyle]}</p>

//       <div className="mt-6">
//         <h3 className="font-semibold text-lg mb-2">Your Scores</h3>
//         <ul className="space-y-2">
//           {Object.entries(result.scores).map(([style, score]) => (
//             <li key={style} className="flex justify-between">
//               <span className="capitalize">{style}</span>
//               <span className="font-bold">{score}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={() => navigate("/skillTree")}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Go to Skill Tree
//         </button>
//         <button
//           onClick={() => navigate("/quiz")}
//           className="bg-gray-400 text-white px-4 py-2 rounded"
//         >
//           Retake Quiz
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Result;
