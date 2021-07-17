import add from "../helpers/add"

test('The add() function takes two numbers and sums them together', () => {
    // ARRANGE
    const number1 = 5;
    const number2 = 10;

    // ACT
    const outcome = add(5, 10);

    // ASSERT
    expect(outcome).toEqual(15);
});