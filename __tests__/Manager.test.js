const Manager = require("../lib/Manager.js");

const testName = "Jimbo Fisher";
const testId = "10";
const testEmail = "jimbo@gmail.com";
const testOfficeNumber = "222";

test('creates a Manager', () => {
    const manager = new Manager(testName, testId, testEmail, testOfficeNumber);
  
    expect(manager.name).toBe(testName);
    expect(manager.id).toBe(testId);
    expect(manager.email).toBe(testEmail);
    expect(manager.officeNumber).toBe(testOfficeNumber);
  });