const Employee = require ("../lib/Employee")
test("can make object",() =>{
    const employee = new Employee ('Tony', "1", 'tony@yahoo.com');

    expect(employee.name).toBe('Tony');
    expect(employee.id).toBe("1");
    expect(employee.email).toBe('tony@yahoo.com');
})
test("can set name",() =>{
    const employee = new Employee ('Tony', "1", 'tony@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
})
test("can set id",() =>{
    const employee = new Employee ('Tony', "1", 'tony@yahoo.com');
    
    expect(employee.getId()).toEqual(expect.any(String));
})
test("can get name",() =>{
    const employee = new Employee ('Tony', "1", 'tony@yahoo.com');
    expect(employee.getName()).toEqual(expect.any(String));
})
