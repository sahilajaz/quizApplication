import React from 'react';
import he from 'he';

const QuestionFrame = (props) => {
   
  return (
    <div className="question-screen">
      <div className="question-area">
        <div className="question-frame">
          <h3 className="question-text">{he.decode(props.questionText)}</h3>
          <div className="question-option">
            <button
              className="option-button"
              onClick={() => props.handleColor(props.questionIndex, 1)}
              style={props.changeButtonStyle(props.questionIndex, 1)}
            >
              {props.correctAns}
            </button>
            <button
              className="option-button"
              onClick={() => props.handleColor(props.questionIndex, 2)}
              style={props.changeButtonStyle(props.questionIndex, 2)}
            >
              {props.incorrectAns[0]}
            </button>
            <button
              className="option-button"
              onClick={() => props.handleColor(props.questionIndex, 3)}
              style={props.changeButtonStyle(props.questionIndex, 3)}
            >
              {props.incorrectAns[1]}
            </button>
            <button
              className="option-button"
              onClick={() => props.handleColor(props.questionIndex, 4)}
              style={props.changeButtonStyle(props.questionIndex, 4)}
            >
              {props.incorrectAns[2]}
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default QuestionFrame;
