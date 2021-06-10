import React from 'react'
import App from "../App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import InputPage from "./InputPage";


export default function Quiz(props) {
    const questions = [
        {
            questionText: "question #1",
            answerOptions: [
                {answerText: "answer #1", isCorrect: true},
                {answerText: "answer #2", isCorrect: false},
                {answerText: "answer #3", isCorrect: false},
                {answerText: "answer #4", isCorrect: false},
            ]
        },
        {
            questionText: "Wie zn moeder?",
            answerOptions: [
                {answerText: "answer #1", isCorrect: false},
                {answerText: "answer #2", isCorrect: true},
                {answerText: "answer #3", isCorrect: false},
                {answerText: "answer #4", isCorrect: false},
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
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);

    const [score, setScore] = React.useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score +1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        setCurrentQuestion(nextQuestion)
    }





    return (
        <>
            <div className="app">
                {showScore ? (
                    <>
                    <div className="score-section">you scored {score} out of {questions.length}</div>
                    <NavLink to="/">
                        <button className="mainButtonStyling">back</button>
                    </NavLink>
                    </>

                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOption) =>
                                <button className="quizButtonStyling"
                                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                        </div>
                    </>
                )}
            </div>
        </>

    )
}