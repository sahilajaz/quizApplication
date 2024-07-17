import React from 'react';
import he from 'he';

const QuestionFrame = (props) => {

  const answers = [props.correctAns, ...props.incorrectAns]

  const buttonElements = answers.map((answer, id) => (
    <button
      className="option-button"
      key={id}
      onClick={() => props.handleColor(props.questionIndex, id)}
      style={props.changeButtonStyle(props.questionIndex, id)}>
      {answer}
    </button>
  ))

 
   
  return (
    <div className="question-screen">
      <div className="question-area">
        <div className="question-frame">
          <h3 className="question-text">{he.decode(props.questionText)}</h3>
          <div className="question-option">
          {buttonElements}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default QuestionFrame;
