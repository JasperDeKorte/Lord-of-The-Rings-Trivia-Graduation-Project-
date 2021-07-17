// voordat u hier begint wil ik graag even wat duidelijk maken.
// Wat ik in de Helpers folder voor handleAnswerButtonClick functie heb gedaan
// is dat ik de functie heb nagebootst met lokale referenties.
// De reden hiervoor is is dat wij niet hebben geleerd om tests te schrijven
// specifiek in react. Nu kan dit uiteraard wel met normale functies, alleen is het
// zo dat al mijn functies die gebruiken iets van useState of UseContext, en het is mij
// tot op heden niet gelukt hiervoor een test te schrijven, en na wat onderzoek online,
// moet er hiervoor een hoop gedaan worden.

// Ik hoop dat ik op deze manier kan laten zien dat ik alsnog een test kan schrijven
// op de vanilla javascript manier zonder react, en dat dit ook word goedgekeurd.
// Ik heb dit ook met Nova erover gehad en zij heeft bevestigd dat wij niet hebben
// geleerd om tests te schrijven in React.

function findByAnswer(question, answer) {
    // for (let i = 0; i < question.length; i++) {
    //     const currentQuestion = question[i]
    //     if (currentQuestion.question === answer) {
    //
    //         return currentQuestion
    //     }
    // }
    console.log(question, answer)

}

test("This test finds the correct answer in an array filled with objects", () => {
    // Arrange
    const questionArray = [
        { question: "Dit is vraag 1", answer: "antwoord 1" },
        { question: "Dit is vraag 2", answer: "antwoord 2" },
        { question: "Dit is vraag 3", answer: "antwoord 3" },
        { question: "Dit is vraag 4", answer: "antwoord 4" },
        ];

    const answerToFind = "antwoord 2"

//Act
    const result = findByAnswer(questionArray, answerToFind);
    console.log(result)

// Assert


})