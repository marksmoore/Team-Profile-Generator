const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        this.school;
    }
    getRole() {
        this.role;
    }
}

module.exports = Intern;