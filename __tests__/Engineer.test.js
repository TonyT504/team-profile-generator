const Engineer = require("../lib/Engineer")

test("create engineer object", () => {
    const engineer = new Engineer ('name', 'id', 'email', 'tonyt504');

    expect(engineer.github).toBe('tonyt504');
});

test('get engineer github', () => {
    const engineer = new Engineer ('name', 'id', 'email', 'tonyt504');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test ('get engineer role', () => {
    const engineer = new Engineer ('name', 'id', 'email', 'tonyt504');

    expect(engineer.getRole()).toEqual(expect.any(String));
});