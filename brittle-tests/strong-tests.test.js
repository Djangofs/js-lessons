const reverseString = require('./brittle-tests').reverseString;

describe("Function: reverseString", () => {
  it("Should return an error when non-string input given", () => {
    // Arrange
    const input = [];

    // Act
    const response = reverseString(input);

    // Assert
    expect(response).toEqual(new Error("Function: reverseString only accepts string input"));
  });

  it("Should return type string when string input given", () => {
    // Arrange
    const input = "hello world";

    // Act
    const response = reverseString(input);

    // Assert
    expect(typeof response).toBe("string");
  });

  it("Should return empty string if empty string input given", () => {
    // Arrange
    const input = "";

    // Act
    const response = reverseString(input);

    // Assert
    expect(response).toBe("");
  });

  it("Should return reversed string when regular string given", () => {
    // Arrange
    const input = "hello world";

    // Act
    const response = reverseString(input);

    // Assert
    expect(response).toBe("dlrow olleh");
  });
});