// voordat u hier begint wil ik graag even wat duidelijk maken.
// Wat ik heb gedaan
// is dat ik de functie heb nagebootst met lokale referenties.
// De reden hiervoor is is dat wij niet hebben geleerd om tests te schrijven
// specifiek in react. Nu kan dit uiteraard wel met normale functies, alleen is het
// zo dat al mijn functies die gebruiken iets van useState of UseContext, en het is mij
// tot op heden niet gelukt hiervoor een test te schrijven, en na wat onderzoek online,
// moet er hiervoor een hoop gedaan worden.

// Ik hoop dat ik op deze manier kan laten zien dat ik alsnog een test kan schrijven
// op de vanilla javascript manier zonder react, en dat dit ook word goedgekeurd.

function findByAnswer(question, answer) {
    for (let i = 0; i < question.length; i++) {
        const currentQuestion = question[i]
        if (currentQuestion.question === answer) {

            return currentQuestion
        }
    }
    console.log("Dit is question en answer", question, answer)

}

test("This test finds the correct answer in an array filled with objects", () => {
    // Arrange
    const questionArray = [
        { question: "Dit is vraag 1", answer: "antwoord 1" },
        { question: "Dit is vraag 2", answer: "antwoord 2" },
        { question: "Dit is vraag 3", answer: "antwoord 3" },
        { question: "Dit is vraag 4", answer: "antwoord 4" }
        ];

    const answerToFind = "antwoord 2"

//Act
    const result = findByAnswer(questionArray, answerToFind);
    console.log("Dit is de Result:", result)

// Assert
    expect(result).toEqual({ question: "Dit is vraag 2", answer: "antwoord 2" },)

})

// Zoals u misschien ziet, faalt mijn test. Ik heb de voorbeelden uit edhub gebruikt en hier mijn eigen
// versie van gemaakt. Maar tot nu toe kan ik er niet met mijn hoofd bij waarom result op Undefined blijft staan.
// Naar mijn idee heb ik bijna hetzelfde staan als op het voorbeeld, alleen met andere woorden. Maar tevergeefs.