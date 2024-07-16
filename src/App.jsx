import React, { useState } from 'react';
import QuestionFrame from './components/QuestionFrame';
import data from './data';

function App() {
  const [clickedButtonIndices, setClickedButtonIndices] = useState({})

  const buttonColorHandler = (questionIndex, buttonIndex) => {
    setClickedButtonIndices((prevState) => ({
      ...prevState,
      [questionIndex]: buttonIndex,
    }))
  }
 

  const getButtonStyle = (questionIndex, buttonIndex) => ({
    backgroundColor: clickedButtonIndices.questionIndex === buttonIndex ? 'rgb(147, 176, 186)' : 'white',
  })

 

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
  ));

  return (
    <main>
      <img src="../src/logo/2.png" className="yellow-img" alt="yellow logo" />
      {questionData}
      <button className="newquiz-btn">New Quiz</button>
      <img src="../src/logo/1.png" className="blue-img" alt="blue logo" />
    </main>
  );
}

export default App;
