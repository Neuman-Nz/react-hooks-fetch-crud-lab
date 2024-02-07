import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([])
  
  useEffect(() =>{
    fetch('http://localhost:4000/questions')
  .then((r) => r.json())
  .then((questions) => setQuestions(questions))
  }, [])
 

  function onDeletedQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem 
          key={question.id} 
          question={question}
          onDeletedQuestion={onDeletedQuestion}
          />
        ))}</ul>
    </section>
  );
}

export default QuestionList;