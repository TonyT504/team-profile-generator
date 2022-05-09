const Manager = require("../lib/Manager")

test("create manager object", () => {
    const manager = new Manager("Tony", "id", "me@me.com", "200");
    expect(manager.officeNumber).toBe("200");
})

test("get officeNumber", () => {
    const manager = new Manager("Tony", "id", "me@me.com", "200");
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})
test("get role of manager", () => {
    const manager = new Manager("Tony", "id", "me@me.com", "200");
    expect(manager.getRole()).toEqual(expect.any(String));
})