import React, {useContext, useEffect, useState} from 'react'
import axios from "axios"
import {
    NavLink
} from "react-router-dom";
import {motion} from 'framer-motion'
import App, {nameAvatarContext} from '../App'
import {soundContext} from "../App";
import StartMenu from "./StartMenu";
//--------------------------IMG & SFX Imports---------------------------------
import {Howl} from "howler";
import swordSFX from "../audioclips/SwordPullOut.mp3";
import fail from "../audioclips/awh-disappointed-crowd-sound-effect.mp3"
import clock from "../assets/clock.png"
import gollem from "../assets/Gollum.png"
import loadingBlade from "../assets/loadingBlade.gif"
//------------------------------Code-----------------------------------
const apiKey = 'PQhSLtNXHWFFaBqgDe0y'
export default function Quiz(props) {

    //--------------------ten zijde gelaten code-----------------------
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


//----------------------useStates and useContexts----------------------
    const [score, setScore] = useState(0);
    const [showFact, setShowFact] = useState(true);
    const [counter, setCounter] = useState(30);
    const [characters, setCharacters] = useState(null)
    const [quotes, setQuotes] = useState(null)
    const [movies, setMovies] = useState(null)

    const nameAvatarValue = useContext(nameAvatarContext);
    const soundToggleMute = useContext(soundContext)


//----------------------useEffect API Mounting-------------------------

    console.log("Wat is de state: ", characters)

    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }

        async function fetchData() {
            const responseCharacter = await axios.get("https://the-one-api.dev/v2/character/", {
                headers: headers
            });
            setCharacters(responseCharacter.data.docs);

            const responseQuote = await axios.get("https://the-one-api.dev/v2/quote/", {
                headers: headers
                });
            setQuotes(responseQuote.data.docs)

            const responseMovie = await axios.get("https://the-one-api.dev/v2/movie/", {
                headers: headers
            });
            setMovies(responseMovie.data.docs)
        }


        fetchData();
    }, [])

//---------------------------API Data Filtering--------------------------
   const Gollum = characters && characters.find((character) => {
       if (character._id === "5cd99d4bde30eff6ebccfe9e")
           return true

    });

    const quoteMrFrodo = quotes && quotes.find((quote) => {
        if (quote._id === "5cd96e05de30eff6ebcce88b")
            return true
    });

    const movieMrFrodo = movies && movies.find((movie) => {
        if (movie._id === "5cd95395de30eff6ebccde5d")
            return true
    });

    const characterMrFrodo = characters && characters.find((character) => {
        if (character._id === "5cd99d4bde30eff6ebccfd0d")
            return true
    });

    const moviesDuration = movies && movies.map((movie) => {
        return movie.runtimeInMinutes

    })
    let sum = movies && moviesDuration.reduce(function(a, b){
        return a + b;
    }, 0)
console.log(sum)

//----------------------SoundEffect Variables----------------------
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

//----------------------Questions and facts arrays-----------------------------------------
    const facts = [
//------------------------------Fact1------------------------------------------------------
        {fact:
                <div className="fact1">
                <h2 className="fact-thirdItem">Gollem, originally knows as Sméagol (or Trahald), was at first a Stoor,
                    on of the three early hobbit types.</h2>
                <img id="Gollum-img" className="fact-firstItem" src={gollem} alt="Image Not Available"/>
                <div className="fact-secondItem" style={{fontSize: 30}}>
                </div>
                <div>{characters ? (<>
                    <div>Name:
                        <span style={{fontWeight: "bold"}}>{Gollum.name}</span></div>
                    <div>Date of Birth:
                        <span style={{fontWeight: "bold"}}>{Gollum.birth}</span></div>
                    <div>Date of Death:
                        <span style={{fontWeight: "bold"}}>{Gollum.death}</span></div>
                    <div>Race:
                        <span style={{fontWeight: "bold"}}>{Gollum.race}</span></div>
                </>) : (
                    <h1>Loading...</h1>)}</div>
            </div>
        },
//-----------------------------Fact2----------------------------------------------------
        {fact: <div>
                <h2>Upon Sauron's defeat, Aragorn was crowned as king Elessar</h2>
            </div>},
//-----------------------------Fact3-----------------------------------------------------
        {fact: <div className="fact2">
                <>
                    {quotes && <h2>"{quoteMrFrodo.dialog}"</h2>}
                    {characters && <cite>- {characterMrFrodo.name}</cite>}
                    {movies && <h3>Movie: {movieMrFrodo.name}</h3>}
                </>
            </div>},
//-----------------------------Fact4-----------------------------------------------------
        {fact: <div>
                <h2>To watch all of the 3 extended editionsof TLOTR, <br/> you would have to spend 11 hours and 21 minutes to finish, almost half a day</h2>
            </div>},
    ]


    const questions = [
//----------------------------Question 1------------------------------------------------------
        {
            questionText:
                <div className="">
                    <motion.div
                        initial={{scaleY: 0}}
                        animate={{scaleY: 1}}
                        exit={{scaleY: 0}}
                    >
                        <h2>In LOTR, what does 'Gollum' say when he freaks out again?</h2>
                        <div style={{padding: 20}}>
                        </div>
                    </motion.div>
                </div>,
            answerOptions: [
                {answerText: "FCKING HELP", isCorrect: false},
                {answerText: "IM DYING", isCorrect: false},
                {answerText: "GOLEM", isCorrect: true},
                {answerText: "FILTHY HOBBITS", isCorrect: false},
            ]
        },
//----------------------------Question 2------------------------------------------------------
        {
            questionText: <div>
                <h2>In the Battle of the Black Gate, what does aragon say when they charge at the orcs?</h2>
            </div>,
            answerOptions: [
                {answerText: "For Asgard", isCorrect: false},
                {answerText: "For Frodo", isCorrect: true},
                {answerText: "For your mother", isCorrect: false},
                {answerText: "For myself", isCorrect: false},
            ]
        },
//----------------------------Question 3------------------------------------------------------
        {
            questionText: <div>
                <h2>What is the mountain called where the ring is to be destroyed</h2>
            </div>,
            answerOptions: [
                {answerText: "Mount Saron", isCorrect: false},
                {answerText: "Mount Mordor", isCorrect: false},
                {answerText: "Mount Orcs", isCorrect: false},
                {answerText: "Mount Doom", isCorrect: true},
            ]
        },
//----------------------------Question 4------------------------------------------------------
        {
            questionText: <div>
                <h2>How long are all of TLOTR and The Hobbit movies combined?</h2>
            </div>,
            answerOptions: [
                {answerText: "1 Min", isCorrect: false},
                {answerText: "3600 Min", isCorrect: false},
                {answerText: "1865 Min", isCorrect: false},
                {answerText: sum + " Min", isCorrect: true},
            ]
        },
    ]

//----------------------Question Logics--------------------------------
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);


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
//----------------------Timer-----------------------------------
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

//----------------------Display-------------------------------------
    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <div className="randomFact">
                    {showFact ? (<>
                            <h1 className="timerIcon-Facts"><img id="timerIcon" src={clock} alt=""/> {counter}</h1>

                            {characters ? (<div
                                className="question-text">{facts[currentQuestion].fact}</div>) : (
                                <h1><img id="loadingIcon" src={loadingBlade}  alt=""/></h1>)}

                            <button className="showFactQuestionButton" onClick={() => setShowFact(false)}>Show
                                Question
                            </button>
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
                                            <h1>{nameAvatarValue.name}{nameAvatarValue.avatar}</h1>
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
                                        <span
                                            style={{fontSize: 35}}>Question {currentQuestion + 1}/{questions.length}</span>
                                    </div>
                                    <div className="">{questions[currentQuestion].questionText}</div>

                                    <div id="showFactQuestionPosition">
                                        <button className="showFactQuestionButton"
                                                onClick={() => setShowFact(true)}>Show Fact
                                        </button>
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