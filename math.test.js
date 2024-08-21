// tests/math.test.js
const { add, subtract, multiply, divide } = require('../src/math');

describe('Math functions', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiplies 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divides 6 / 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });
    

    test('throws an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero');
    });
});
