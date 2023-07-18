const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 5, name: "Carlos" }', async () => {
        let user = await users.createUser(5, "Carlos");
        expect(user.pk_user).toBe(5);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    // updateUser function test
    //Se agrega test
    test('updateUser with {pk_user: 5, name: "pedro", status:"false"}', async () => {
        let user = await users.updateUser(5, "pedro", true);
        expect(user.pk_user).toBe(5);
    });

    // se agrega test
    test('deleteUser with {pk_user: 123}', async () => {
        let user = await users.deleteUser(123)
        expect(user.pk_user).toBe(123);
    });
})