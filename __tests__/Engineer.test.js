const Engineer = require("../lib/Engineer.js");

const testName = "Mark Moore";
const testId = "5";
const testEmail = "msmo1960@gmail.com";
const testGithub = "marksmoore";

test('creates an engineer', () => {
    const engineer = new Engineer(testName, testId, testEmail, testGithub);

    expect(engineer.name).toBe(testName);
    expect(engineer.id).toBe(testId);
    expect(engineer.email).toBe(testEmail);
    expect(engineer.github).toBe(testGithub);
})
