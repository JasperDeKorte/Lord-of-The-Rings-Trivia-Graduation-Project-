import React from 'react'
import App from "../App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InputPage from "./InputPage";


export default function Quiz(props) {
    const questions = [
        {
            questionText: "question #1",
            answerOptions: [
                {answerText: "jemoeder1", isCorrect: true},
                {answerText: "je vader 2", isCorrect: false},
                {answerText: "je zus 3", isCorrect: false},
                {answerText: "je broer 4", isCorrect: false},
            ]
        },
        {
            questionText: "question #2",
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: true},
                {answerText: "Answer 3", isCorrect: false},
                {answerText: "Answer 4", isCorrect: false},
            ]
        },
        {
            questionText: "question #3",
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: true},
                {answerText: "Answer 4", isCorrect: false},
            ]
        },
        {
            questionText: "question #4",
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: false},
                {answerText: "Answer 4", isCorrect: true},
            ]
        },
    ]
    const [currentQuestion, setCurrentQuestion] = React.useState(0)

    const [showScore, setShowScore] = React.useState(false)


        const handleAnswerButtonClick = (isCorrect) => {
            if(isCorrect === true) {
                alert("this answer is correct")
            }

            const nextQuestion = currentQuestion +1;
            if(nextQuestion < questions.length){
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
            setCurrentQuestion(nextQuestion)
        }



    return (
        <>
        <div className="app">
            { showScore ? (
                <div className="score-section">you score 1 out of {questions.length}</div>
            ) : (
                <>
                <div className="question-section">
                    <div className="question-count">
                        <span>question 1</span>/{questions.length}
                    </div>
                    <div className="question-text">{questions[currentQuestion].questionText}</div>
                </div>
                <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
                        <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                </div>
                </>
            )}
        </div>





            <Link to="/">
                <button className="mainButtonStyling">Back</button>
            </Link>
        </>

    )
}