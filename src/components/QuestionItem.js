import React from "react";

function QuestionItem({ question,onDeletedQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



  
  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeletedQuestion(question))
  }

  function handleAnswerChange(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        correctIndex: e.target.selectedIndex
      })
    })
    .then((resp) => resp.json())
    .then((data)=> console.log(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleAnswerChange(e)}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;