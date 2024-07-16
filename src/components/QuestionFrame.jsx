import he from "he"

const QuestionFrame = (props) => {
       
    return (
        <div className="question-screen">
            <div className="question-area">
                <div className="question-frame">
                    <h3 className="question-text">{he.decode(props.questionText)}</h3>
                    <div className="question-option">
                        <button className="option-button">{props.option1}</button>
                        <button className="option-button">{props.option2}</button>
                        <button className="option-button">{props.option3}</button>
                        <button className="option-button">{props.option4}</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default QuestionFrame