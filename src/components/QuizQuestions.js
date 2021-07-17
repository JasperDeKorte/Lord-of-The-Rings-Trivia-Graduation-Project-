import {motion} from "framer-motion";
import React from "react";

function QuizQuestions(props) {

    return (
        <div className="">
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >

                <h1 className="questionTextAllignment">{props.questionText}</h1>
                <div style={{padding: 20}}></div>
            </motion.div>
        </div>

    );
}
export default QuizQuestions

