const Employee = require('../lib/Employee'); 

const testName = "Tom Scott";
const testId = "3";
const testEmail = "toms@gmail.com";
const testRole = "Employee";

test('creates an employee', () => {
    const employee = new Employee(testName, testId, testEmail);

    expect(employee.name).toBe(testName);
    expect(employee.id).toBe(testId);
    expect(employee.email).toBe(testEmail);
});