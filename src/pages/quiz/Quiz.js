import React, {useContext, useEffect, useState} from 'react'
import axios from "axios"
import {
    NavLink
} from "react-router-dom";
import {motion} from 'framer-motion'
import {SoundContext, NameAvatarContext, GlobalStateContext} from '../../App'
//--------------------------IMG & SFX Imports---------------------------------
import {sound1, sound3} from "../../helpers/Sounds";
import crown from "../../assets/crown.png"
import clock from "../../assets/clock.png"
import gollum from "../../assets/Gollum.png"
import loadingBlade from "../../assets/loadingBlade.gif"
import QuizQuestions from "../../components/QuizQuestions";
import QuizFacts from "../../components/QuizFacts";
import menuSword from "../../assets/menuSword.png";
//------------------------------Code-----------------------------------
const apiKey = 'PQhSLtNXHWFFaBqgDe0y'

export default function Quiz() {

//----------------------useStates and useContexts----------------------
    const [showFact, setShowFact] = useState(true);
    const [counter, setCounter] = useState(30);
    const [characters, setCharacters] = useState(null)
    const [quotes, setQuotes] = useState(null)
    const [movies, setMovies] = useState(null)

    const nameAvatarValue = useContext(NameAvatarContext);
    const soundToggleMute = useContext(SoundContext)
    const globalState = useContext(GlobalStateContext)


//----------------------useEffect API Mounting-------------------------
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
    let sum = movies && moviesDuration.reduce(function (a, b) {
        return a + b;
    }, 0)

//----------------------SoundEffect Variables----------------------


//----------------------Questions and facts arrays-----------------------------------------
    const facts = [
//------------------------------Fact1------------------------------------------------------
        {
            fact:
                <div className="fact1">
                    {characters ?
                        (
                            <QuizFacts
                                factText="Gollum, originally knows as Sméagol (or Trahald), was at first a Stoor,
                            on of the three early hobbit types."
                                bottomImage={<img id="Gollum-img" src={gollum} alt=""/>}
                                topImage={<img id="Gollum-img2" src={gollum} alt=""/>}
                                nameText="Name: "
                                dateOfBirthText="Date of birth: "
                                dateOfDeathText="Date of death: "
                                raceText="Race: "
                                gollumName={Gollum.name}
                                gollumBirth={Gollum.birth}
                                gollumDeath={Gollum.death}
                                gollumRace={Gollum.race}/>
                        ) : (
                            <h1>Loading...</h1>
                        )
                    }
                </div>
        },
//-----------------------------Fact2----------------------------------------------------
        {
            fact: <div>
                <QuizFacts
                    factText="Upon Sauron's defeat, Aragorn was crowned as king Elessar"
                    topImage={<img id="crown" src={crown} alt=""/>}
                />
            </div>
        },
//-----------------------------Fact3-----------------------------------------------------
        {
            fact: <div className="fact2">
                <>
                    {quotes && <h2>"{quoteMrFrodo.dialog}"</h2>}
                    {characters && <cite>- {characterMrFrodo.name}</cite>}
                    {movies && <h3>Movie: {movieMrFrodo.name}</h3>}
                </>
            </div>
        },
//-----------------------------Fact4-----------------------------------------------------
        {
            fact: <div>
                <QuizFacts factText="To watch all of the 3 extended editions of TLOTR,"
                           factTextLine2="you would have to spend 11 hours and 21 minutes to finish them,"
                           factTextline3="almost half a day..."
                />
            </div>
        },
    ]


    const questions = [
//----------------------------Question 1------------------------------------------------------
        {
            questionText:
                <QuizQuestions
                    questionText="In TLOTR, what does Gollum say when he freaks out again?"
                />,
            answerOptions: [
                {answerText: "OMG HELP", isCorrect: false},
                {answerText: "IM DYING", isCorrect: false},
                {answerText: "GOLLUM", isCorrect: true},
                {answerText: "FILTHY HOBBITS", isCorrect: false},
            ]
        },
//----------------------------Question 2------------------------------------------------------
        {
            questionText: <QuizQuestions
                questionText="In the Battle of the Black Gate, what does aragon say when they charge at the orcs?"
            />,
            answerOptions: [
                {answerText: "For Asgard", isCorrect: false},
                {answerText: "For Frodo", isCorrect: true},
                {answerText: "For Gimli", isCorrect: false},
                {answerText: "For myself", isCorrect: false},
            ]
        },
//----------------------------Question 3------------------------------------------------------
        {
            questionText: <QuizQuestions
                questionText="What is the mountain called where the ring is to be destroyed?"
            />,
            answerOptions: [
                {answerText: "Mount Saron", isCorrect: false},
                {answerText: "Mount Mordor", isCorrect: false},
                {answerText: "Mount Orcs", isCorrect: false},
                {answerText: "Mount Doom", isCorrect: true},
            ]
        },
//----------------------------Question 4------------------------------------------------------
        {
            questionText: <QuizQuestions
                questionText="How long are all of TLOTR and The Hobbit movies combined?"
            />,
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
            soundToggleMute.sound && sound3.play()
        }


        if (isCorrect === true) {
            globalState.setScore(globalState.score + 10);
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

    //-----------------Saving Data------------------------------
    function saveData() {
        localStorage.setItem(`highscoreName${globalState.saveEdit}`, nameAvatarValue.name)
        localStorage.setItem(`highscoreScore${globalState.saveEdit}`, globalState.score)

        globalState.setSaveEdit(globalState.saveEdit + 1)

        if (globalState.saveEdit > 10) {
            globalState.setSaveEdit(0)
        }
        globalState.setScore(0)
    }

//----------------------Timer-----------------------------------
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if (counter === 0) {
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
        return () => clearInterval(timer) ;
    }, [counter, currentQuestion, facts.length, questions.length]);

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
                                <h1><img id="loadingIcon" src={loadingBlade} alt=""/></h1>)}

                            <button className="showFactQuestionButton" onClick={() => setShowFact(false)}>Show
                                Question
                            </button>
                        </>
                    ) : (
                        <div className="questionLayout">
                            {showScore ? (
                                <>
                                    <motion.div
                                        initial={{scaleY: 0}}
                                        animate={{scaleY: 1}}
                                        exit={{scaleY: 0}}
                                        transition={{duration: 2}}
                                    >
                                        <div className="questionLayout">
                                            <div id="scoreEnding">
                                                <h2>{nameAvatarValue.name}{nameAvatarValue.avatar}</h2>
                                                <div>You scored {globalState.score} out
                                                    of {questions.length * 10} points!</div>
                                            </div>
                                            <NavLink to="/">
                                                <button className="mainButtonStyling" onClick={saveData}>back</button>
                                            </NavLink>
                                        </div>
                                    </motion.div>
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

                                        <div id="scorePosition">
                                            <h1 id="scoreStyling">Score: {globalState.score}</h1>
                                        </div>
                                    </div>


                                    <div className="question-count">
                                        <span
                                            style={{fontSize: 35}}>Question {currentQuestion + 1}/{questions.length}</span>
                                    </div>

                                    <div className="">{questions[currentQuestion].questionText}</div>

                                    <div id="showFactQuestionButtonPosition">
                                        <button className="showFactQuestionButton"
                                                onClick={() => setShowFact(true)}>Show Fact
                                        </button>
                                    </div>

                                    <div className="answer-section">
                                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                                            <button className="quizButtonStyling"
                                                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
                                    </div>
                                    <div>
                                        <img id="quizSword2" src={menuSword} alt=""/>
                                        <img id="quizSword1" src={menuSword} alt=""/>
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

