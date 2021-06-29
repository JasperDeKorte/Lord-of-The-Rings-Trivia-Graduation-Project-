import React, {useContext, Component } from 'react'
import axios from "axios";
import {
    NavLink
} from "react-router-dom";
import {motion} from 'framer-motion'
import {nameAvatarContext} from '../App'
import {soundContext} from "../App";

import {Howl} from "howler";
import swordSFX from "../audioclips/SwordPullOut.mp3";
import fail from "../audioclips/awh-disappointed-crowd-sound-effect.mp3"
import clock from "../assets/clock.png"
import {render} from "@testing-library/react";

const apiKey = 'PQhSLtNXHWFFaBqgDe0y'

export default function Quiz(props) {
//----------------------useStates and useContexts------------------
    const [quote, setQuote] = React.useState()
    const [character, setCharacter] = React.useState();
    const [score, setScore] = React.useState(0);
    const [showFact, setShowFact] = React.useState(true);
    const [counter, setCounter] = React.useState(30);
    const nameAvatarValue = useContext(nameAvatarContext);
    const soundToggleMute = useContext(soundContext)


//----------------------useEffect API Mounting------------------
    const axios = require("axios")


    React.useEffect(() => {
        async function fetchData1() {
            // const headers = {
            //             'Accept': 'application/json',
            //             'Authorization': `Bearer ${apiKey}`
            //         }
            // const response = await axios.get("https://the-one-api.dev/v2/movie")
            // console.log("dit is de response: ", response)
            // try {
            //     console.log("dit is de response: ", response)
            // } catch (e) {
            //     console.log(e)
            // }
        }

        fetchData1()
    }, [])

    // React.useEffect(() => {
    //     const headers = {
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${apiKey}`
    //     }
    //     const fetchData = async () => {
    //         const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
    //             headers: headers
    //         })
    //         const quotes = await rawQuotes.json();
    //         const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
    //         setQuote(quote.dialog)
    //         const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, {headers: headers})
    //         const characters = await rawCharacters.json();
    //         const character = characters.docs[0];
    //         setCharacter(character.name)
    //     };
    //     console.log("Dit is FetchData: ", fetchData())
    //     fetchData();
    // }, []);



//----------------------SoundEffect Variables------------------
    const sound2 = new Howl({
        src: [fail],
        autoplay: false,
        volume: 0.2,

    })
    const sound1 = new Howl({
        src: [swordSFX],
        autoplay: false,
        volume: 0.2,

    })

//----------------------Questions and facts arrays------------------
    const facts = [
        {fact: "Fact1"},
        {fact: "Fact2"},
        {fact: "Fact3"},
        {fact: "Fact4"},
    ]

    const questions = [
        {
            questionText:
                <div className="">
                    <motion.div
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        exit={{scaleY: 0}}
                    >
                        <h2>In LOTR, what does 'Golem' say when he freaks out again?</h2>
                        <div style={{padding: 20}}>
                        </div>
                    </motion.div>
                </div>,
            answerOptions: [
                {answerText: "FCKING HELP", isCorrect: true},
                {answerText: "IM DYING", isCorrect: false},
                {answerText: "GOLEM", isCorrect: false},
                {answerText: "FILTHY HOBBITS", isCorrect: false},
            ]
        },
        {
            questionText: <div>
                <h2>Thi sis question #2</h2>
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
                <h2>This is question #3</h2>
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
            </div>,
            answerOptions: [
                {answerText: "Answer 1", isCorrect: false},
                {answerText: "Answer 2", isCorrect: false},
                {answerText: "Answer 3", isCorrect: false},
                {answerText: "Answer 4", isCorrect: true},
            ]
        },
    ]

//----------------------Question Logics------------------
    const [currentQuestion, setCurrentQuestion] = React.useState(0);

    const [showScore, setShowScore] = React.useState(false);


    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            soundToggleMute.sound && sound1.play()
        } else {
            soundToggleMute.sound && sound2.play()
        }


        if (isCorrect === true) {
            setScore(score + 10);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setCounter(30)
        } else {
            setShowScore(true);
        }

        setCurrentQuestion(nextQuestion);
        if (nextQuestion < facts.length) {
            setShowFact(true)
        } else {
            setShowFact(false)
        }

    }
//----------------------Timer--------------------------
//     React.useEffect(() => {
//         const timer =
//             counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//             if (counter === 0) {
//                 const nextQuestion = currentQuestion + 1;
//                 if (nextQuestion < questions.length) {
//                     setCurrentQuestion(nextQuestion);
//                     setCounter(30)
//                 } else {
//                     setShowScore(true);
//                 }
//                 setCurrentQuestion(nextQuestion);
//                 if (nextQuestion < facts.length) {
//                     setShowFact(true)
//                 } else {
//                     setShowFact(false)
//                 }
//             }
//         return () => clearInterval(timer) ;
//     }, [counter]);

//----------------------Display----------------------------
        return (
            <>
                <motion.div
                    initial={{scaleY: 0}}
                    animate={{scaleY: 1}}
                    exit={{scaleY: 0}}
                >
                    <div className="randomFact">
                        {showFact ? (<>
                                <h1><img id="timerIcon" src={clock} alt=""/> {counter}</h1>
                                <div className="question-text">{facts[currentQuestion].fact}</div>
                                <button className="showFactQuestionButton" onClick={() => setShowFact(false)}>Show Question</button>
                            </>
                        ) : (
                            <div className="questionLayout">
                                {showScore ? (
                                    <>
                                        <h1>{nameAvatarValue.name}{nameAvatarValue.avatar}</h1>
                                        <p id='scoreEnding' className="score-section">You scored {score} out
                                            of {questions.length * 10} points!</p>
                                        <NavLink to="/">
                                            <button className="mainButtonStyling">back</button>
                                        </NavLink>
                                    </>

                                ) : (
                                    <>
                                        <div className="question-section">

                                                <div id="playerNamePosition">
                                                    <h1 >{nameAvatarValue.name}{nameAvatarValue.avatar}</h1>
                                                </div>

                                                <div id="timerIconPosition">
                                                    <h1><img id="timerIcon" src={clock} alt=""/> {counter}</h1>
                                                </div>

                                                <div id="livesPosition">
                                                    <h1 id="livesStyling">Lives: N.A. </h1>
                                                </div>

                                                <div id="scorePosition">
                                                    <h1 id="scoreStyling">Score: {score}</h1>
                                                </div>
                                        </div>



                                            <div className="question-count">
                                            <span style={{fontSize: 35}}>Question {currentQuestion + 1}/{questions.length}</span>
                                            </div>
                                            <div className="">{questions[currentQuestion].questionText}</div>

                                        <div id="showFactQuestionPosition">
                                            <button className="showFactQuestionButton" onClick={() => setShowFact(true)}>Show Fact</button>
                                        </div>

                                        <div className="answer-section">
                                            {questions[currentQuestion].answerOptions.map((answerOption) =>
                                                <button className="quizButtonStyling"
                                                        onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                </motion.div>
            </>

        )
}