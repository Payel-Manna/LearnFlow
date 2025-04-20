import React, { createContext, useContext, useState } from 'react'

const QuizContext=createContext()

export const useQuizContext=()=>useContext(QuizContext);

export const QuizContextProvider=(({children})=>{
    const[answers,setAnswers]=useState({})
    const[result,setResult]=useState(null)

    function selectAnswers(quesID,type){
        setAnswers((prev)=>({...prev,[quesID]:type}))
    }

    function calculateResult(){

        const scores={visual:0,auditory: 0, kinesthetic: 0}
        Object.values(answers).forEach((type)=>{
          scores[type]++;
        })

        const dominantStyle = Object.keys(scores).find(
            (key) => scores[key] === Math.max(...Object.values(scores))
          );
          const finalResult={dominantStyle,...scores}
          setResult(finalResult)

          console.log('Result calculated:', finalResult);  

          fetch("https://6803a1cf79cb28fb3f5934dd.mockapi.io/quiz/result/result", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(finalResult),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("Result saved to MockAPI:", data);
            })
            .catch((err) => {
              console.error("Failed to save result:", err);
            });
    }
    function resetQuiz() {
        setAnswers({});
        setResult(null);
      }
      

    return (
        <QuizContext.Provider
          value={{ answers, selectAnswers, calculateResult, result ,resetQuiz}}>
          {children}
        </QuizContext.Provider>
    )
})