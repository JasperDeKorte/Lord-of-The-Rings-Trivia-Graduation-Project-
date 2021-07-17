import {motion} from "framer-motion";
import menuSword from "../assets/menuSword.png";
import React from "react";

function QuizQuestions(props) {

    return (
        <div className="">
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >

                <h2>{props.questionText}</h2>
                <div style={{padding: 20}}></div>
            </motion.div>
        </div>

    );
}
export default QuizQuestions

