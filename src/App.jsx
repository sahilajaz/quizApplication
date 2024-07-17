import React, { useState , useEffect } from 'react';
import QuestionFrame from './components/QuestionFrame';
import data from './data';

function App() {
  const [clickedButtonIndices, setClickedButtonIndices] = useState({})
  const [sizeOfObject, setSizeOfObject] = useState(0);
  

  const buttonColorHandler = (questionIndex, buttonIndex) => {
    setClickedButtonIndices((prevState) => ({
      ...prevState, 
      [questionIndex]: buttonIndex
    }))
  } 
  
  



  const getButtonStyle = (questionIndex, buttonIndex) => ({
    backgroundColor: clickedButtonIndices[questionIndex] === buttonIndex ? 'rgb(147, 176, 186)' : 'white',
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

  const showAnswerButton = (
     <button className="newquiz-btn">show answer</button>
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
  );
}

export default App
