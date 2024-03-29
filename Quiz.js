import React, { useState,useContext } from 'react';
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";
// import React, { Component } from 'react';



  export default function Quiz() {

    const {score, setScore,setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion]= useState(0);
    const [optionChosen, setOptionChosen]= useState("");

    

  //   class Quiz extends Component {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     setOptionChosen: null,
  //   };
  // }

  // handleOptionClick(option) {
  //   this.setState({ selectedOption: option });
  // }

    const nextQuestion = () => {
      if (Questions[currQuestion].answer == optionChosen){
        setScore(score+1);
      }
      setCurrQuestion(currQuestion+1);
    };

    const finishQuiz = () => {
      if (Questions[currQuestion].answer == optionChosen){
        setScore(score+1);
      }
      setGameState("Endscreen");


    };

  return (
    <div className="Quiz">
        <h1>{Questions [currQuestion].prompt}</h1>
        <div className="options">
          <button className ="color" onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}{""}</button>
          <button className ="color1" onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}{""}</button>
          <button className ="color2" onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}{""}</button>
          <button className ="color3" onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}{""}</button>
        </div>

        {currQuestion == Questions.length - 1 ? (
          <button className="color7" onClick={finishQuiz}>Finish Quiz</button>
        ): (
        
        <button className="color6" onClick={nextQuestion}>  Next </button>
        )}

        
    </div>
  );
}

