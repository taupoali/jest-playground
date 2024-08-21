// tests/userService.test.js
const { getUser, createUser } = require('../src/userService');
const { findUserById, saveUser } = require('../src/database');

jest.mock('../src/database');

describe('User Service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should create a new user', () => {
        const user = { name: 'John Doe', email: 'john@example.com' };
        saveUser.mockReturnValue({ ...user, id: 1 });

        const result = createUser(user);

        expect(saveUser).toHaveBeenCalledWith(user);
        expect(result).toEqual({ ...user, id: 1 });
    });

    test('should get a user by ID', () => {
        const user = { id: 1, name: 'Jane Doe', email: 'jane@example.com' };
        findUserById.mockReturnValue(user);

        const result = getUser(1);

        expect(findUserById).toHaveBeenCalledWith(1);
        expect(result).toEqual(user);
    });

    test('should throw an error when creating a user with invalid data', () => {
        expect(() => createUser({})).toThrow('Invalid user data');
    });
});
