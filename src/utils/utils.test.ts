import {calculateSum} from '.';

describe('The Test Suite', () => {
  it('should validate color red', () => {
    // Arrange
    const a = 10;
    const b = 20;

    // Act
    const result = calculateSum(a, b);

    // Assert
    expect(result).toBe(30);
  });
});
