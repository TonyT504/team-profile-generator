const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

test("can set officeNumber", () => {
    const manager = new Manager("Tony", 1, "me@me.com", 200)
    expect(manager.officeNumber).toBe(200)
})
test("can get officeNumber", () => {
    const manager = new Manager("Tony", 1, "me@me.com", 200)
    expect(manager.getOfficeNumber()).toBe(200)
})
test("get role of manager", () => {
    const manager = new Manager("Tony", 1, "me@me.com", 200)
    expect(manager.getRole()).toBe("Manager")
})