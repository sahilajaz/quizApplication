import QuestionFrame from "./components/QuestionFrame"
import data  from "./data"

function App() {

    const questionData = data.results.map( el => { 
     return(
      <QuestionFrame key={el.type} 
      questionText={el.question} 
      option1={el.correct_answer}
      option2={el.incorrect_answers[0]}
      option3={el.incorrect_answers[1]}
      option4={el.incorrect_answers[2]}
      />
     )
    })
    
   
   
    
  return (
     <main>
        <img src="../src/logo/2.png" className="yellow-img"/>
       {questionData}
       <button className="newquiz-btn">new quiz</button>
       <img src="../src/logo/1.png" className="blue-img"/>
     </main>
  )
}

export default App
