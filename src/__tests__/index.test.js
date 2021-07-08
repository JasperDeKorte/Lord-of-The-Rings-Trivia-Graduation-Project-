const add = require("../pages/Quiz").add;

test("the add function add two numbers and returns the sum", () => {
    // Arrange
    const number1 = 5;
    const number2 = 10;


    // Act
    const sum = add(number1, number2);

    // Assert
    expect(sum).toBe(15);
})