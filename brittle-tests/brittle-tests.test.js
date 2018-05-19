jest.mock('./split-string');
const splitString = require('./split-string');
const reverseString = require('./brittle-tests').reverseStringRefactor;

describe("Function: reverseString", () => {
  it("Should call splitString", () => {
    // Arrange
    splitString.mockReturnValue(["h", "e", "l", "l", "o"])
    const input = "hello";

    // Act
    const response = reverseString(input);

    // Assert
    expect(splitString.mock.calls.length).toBe(1);
  });

  it("Should return reversed string when regular string given", () => {
    // Arrange
    splitString.mockReturnValue(["h", "e", "l", "l", "o"])
    const input = "hello";

    // Act
    const response = reverseString(input);

    // Assert
    expect(response).toBe("olleh");
  });
});