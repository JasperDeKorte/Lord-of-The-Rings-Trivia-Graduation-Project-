import React from 'react'
import App from "../App";
import axios from "axios";
import {

    NavLink
} from "react-router-dom";

const apiKey = 'PQhSLtNXHWFFaBqgDe0y'

export default function Quiz(props) {
    const [quote, setQuote] = React.useState()
    const [character, setCharacter] = React.useState();
    const [counstScore, setCountScore] = React.useState();

    React.useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
        const fetchData = async () => {
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
                headers: headers
            })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            setQuote(quote.dialog)
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
            console.log(rawQuotes, rawCharacters)
        };

        fetchData();
    }, []);


    const [score, setScore] = React.useState(0);

    const questions = [
        {

            questionText: <div>
                <blockquote>{quote}</blockquote>
                <cite>- {character}</cite>
                <p>{score}</p>
            </div>,
            answerOptions: [
                {answerText: "answer #1", isCorrect: true},
                {answerText: "answer #2", isCorrect: false},
                {answerText: "answer #3", isCorrect: false},
                {answerText: "answer #4", isCorrect: false},

            ]
        },
        {
            questionText: <div>
                <blockquote>{quote}</blockquote>
                <cite>- {character}</cite>
                <p>{score}</p>
            </div>,
            answerOptions: [
                {answerText: "answer #1", isCorrect: false},
                {answerText: "answer #2", isCorrect: true},
                {answerText: "answer #3", isCorrect: false},
                {answerText: "answer #4", isCorrect: false},
            ]
        },
        {
            questionText: <div>
                <blockquote>{quote}</blockquote>
                <cite>- {character}</cite>
                <p>{score}</p>
            </div>,
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: true},
                {answerText: "Answer 4", isCorrect: false},
            ]
        },
        {
            questionText: <div>
                <blockquote>{quote}</blockquote>
                <cite>- {character}</cite>
                <p>{score}</p>
            </div>,
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



    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score +10);
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
                    <div className="score-section">you scored {score} out of {questions.length * 10}</div>
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