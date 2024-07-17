import React, { useState , useEffect } from 'react';
import QuestionFrame from './components/QuestionFrame';
import data from './data';

function App() {
  const [clickedButtonIndices, setClickedButtonIndices] = useState({})
  const [sizeOfObject, setSizeOfObject] = useState(0);
  

  const buttonColorHandler = (questionIndex, buttonIndex, answer) => {
    setClickedButtonIndices((prevState) => ({
      ...prevState, 
      [questionIndex]: {
        buttonIndex,
        answer
      }
    }))
  } 

 

  const getButtonStyle = (questionIndex, buttonIndex) => ({
    backgroundColor: clickedButtonIndices[questionIndex]?.buttonIndex === buttonIndex ? 'rgb(147, 176, 186)' : 'white',
  })

   useEffect(() => {
       setSizeOfObject(Object.keys(clickedButtonIndices).length)
   } , [clickedButtonIndices])

   const totalLengthOfDataArray = data.results.length
  
   
   const questionData = data.results.map((el, index) => (
     <QuestionFrame
     key={index}
     questionIndex={index}
     questionText={el.question}
     correctAns={el.correct_answer}
     incorrectAns={el.incorrect_answers}
     handleColor={buttonColorHandler}
     changeButtonStyle={getButtonStyle}
     />
    ))
    
    const selectedtedAnswer = Object.values(clickedButtonIndices).map( e => e.answer)
    const correctAnswer = data.results.map( ans => ans.correct_answer)
    
    const checkingAnswer = () => {
     console.log(correctAnswer)
    }

    const showAnswerButton = (
       <button className="newquiz-btn" onClick={checkingAnswer}>show answer</button>
    )
  
    const newQuizButton = (
      <button className="newquiz-btn">new quiz</button>
    )
    
    
    return (
      <main>
      <img src="../src/logo/2.png" className="yellow-img" alt="yellow logo" />
      {questionData}  
      {totalLengthOfDataArray === sizeOfObject ? showAnswerButton : newQuizButton}
      <img src="../src/logo/1.png" className="blue-img" alt="blue logo" />
    </main>
  )
}

export default App
