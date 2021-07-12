
export default function findByAnswer(question, answer) {

    for (let i = 0; i < question.length; i++) {
        const currentQuestion = question[i]
        if (currentQuestion.answer === question) {

            return currentQuestion
        }
    }

}



