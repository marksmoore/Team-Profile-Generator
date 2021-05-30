const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generatePage = require('./src/template');
const writeFile = require('./src/generate')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the Employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the Employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter the employees Name!');
                  return false;
                }
              }
        },
        {
            type:'text',
            name: 'id',
            message: "What is the Employee's ID number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log('You need to enter the Employees ID!');
                  return false;
                }
              }
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Employee's email?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('You need to enter the Employees email!');
                  return false;
                }
              }
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the Manager's office number?",
                        validate: officeInput => {
                            if (officeInput) {
                              return true;
                            } else {
                              console.log("You need to enter the Manager's office number!");
                              return false;
                            }
                          }
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        // console.log(employeeArr)
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?",
                        validate: githubInput => {
                            if (githubInput) {
                              return true;
                            } else {
                              console.log("You need to enter the Engineer's Github username!");
                              return false;
                            }
                          }
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?",
                        validate: schoolInput => {
                            if (schoolInput) {
                              return true;
                            } else {
                              console.log('You need to enter the employees Name!');
                              return false;
                            }
                          }
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            }
        })
};



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })