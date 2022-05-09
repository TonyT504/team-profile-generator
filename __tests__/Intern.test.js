const Intern = require("../lib/Intern.js");

test("create intern object", () => {
    const intern = new Intern('', '', '', 'SMU');

    expect(intern.school).toBe('SMU');
});

test('get school name', () => {
    const intern = new Intern('', '', '', 'SMU')
    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("get role of intern", () => {
    const intern = new Intern('', '', '', 'SMU');

    expect(intern.getRole()).toEqual(expect.any(String));
});