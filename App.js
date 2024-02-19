import './App.css';
import React,{useState,useContext} from 'react';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import Endscreen from "./Components/Endscreen";

import { QuizContext } from "./Helpers/Contexts";

function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  
  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "Quiz" && <Quiz/>}
      {gameState === "Endscreen" && <Endscreen/>}
      </QuizContext.Provider>
    
      
    </div>
  );
}

export default App;
