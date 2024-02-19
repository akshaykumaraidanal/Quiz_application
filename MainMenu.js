import React, { useContext } from 'react';
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
  
    const { gameState,setGameState } = useContext(QuizContext);


  return (
    <div className="Menu">
    <button className="color5"
     onClick={() => {
        setGameState("Quiz");
    }}
    >
    Start Quiz</button>
     </div>
  );
}
