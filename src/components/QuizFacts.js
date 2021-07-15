import {motion} from "framer-motion";
import React from "react";

function QuizFacts(props) {

    return (
        <div className="fact1">
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                {props.topImage}
                <h2 className="randomFact">{props.factText}</h2>
                <h2 className="randomFact">{props.factTextLine2}</h2>
                <h2 className="randomFact">{props.factTextline3}</h2>
                {props.bottomImage}
                <div style={{padding: 20}}></div>

                <div className="fact-firstItem">
                    <div className="fact-GollumInfo">
                        <div>{props.nameText}</div>
                        <div>{props.dateOfBirthText} </div>
                        <div>{props.dateOfDeathText}</div>
                        <div>{props.raceText}</div>
                    </div>

                    <div className="fact-GollumInfo">
                        <div style={{fontWeight: "bold"}}> {props.gollumName}</div>
                        <div style={{fontWeight: "bold"}}> {props.gollumBirth}</div>
                        <div style={{fontWeight: "bold"}}> {props.gollumDeath}</div>
                        <div style={{fontWeight: "bold"}}> {props.gollumRace}</div>
                    </div>
                </div>
            </motion.div>
        </div>

    );
}
export default QuizFacts