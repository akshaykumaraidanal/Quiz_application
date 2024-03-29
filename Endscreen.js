import React,{ useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
import "../App.css";

 export default function Endscreen() {

  const { score, setScore, setGameState} = useContext(QuizContext);

  const restartQuiz = () =>
  {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className="Endscreen">
      <h1>Quiz Finished</h1>

      <h3>{score} / {Questions.length}</h3>
      <button className="color4" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}



