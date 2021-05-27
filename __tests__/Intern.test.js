const Intern = require("../lib/Intern.js");

const testName = "Andy Smith";
const testId = 15;
const testEmail = "andys@gmail.com";
const testSchool = "University of Texas";

test("creates an Intern", () => {
    const intern = new Intern(testName, testId, testEmail, testSchool);
  
    expect(intern.name).toBe(testName);
    expect(intern.id).toBe(testId);
    expect(intern.email).toBe(testEmail);
    expect(intern.school).toBe(testSchool);
  });