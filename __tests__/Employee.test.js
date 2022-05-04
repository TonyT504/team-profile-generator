const Employee = require ("../lib/Employee")
test("can make object",() =>{
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})
test("can set name",() =>{
    const employee = new Employee("Tony");
    expect(employee.name).toBe("Tony");
})
test("can set id",() =>{
    const employee = new Employee("Tony", 1);
    expect(employee.id).toBe(1);
})
test("can get name",() =>{
    const employee = new Employee("Tony");
    expect(employee.getName()).toBe("Tony");
})
