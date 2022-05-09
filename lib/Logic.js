const fs = require('fs');
const team = [];
const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateTemplate = require('../src/template');

const manQuestions = [
    { type: "input", name: "manName", message: "Please enter your name" },
    { type: "input", name: "manId", message: "Please enter your id" },
    { type: "input", name: "manEmail", message: "Please enter your email" },
    { type: "input", name: "manOfficeNumber", message: "Please enter your office number" },
]
const EngQuestions = [
    { type: "input", name: "EngName", message: "Please enter your name" },
    { type: "input", name: "EngId", message: "Please enter your id" },
    { type: "input", name: "EngEmail", message: "Please enter your email" },
    { type: "input", name: "EngGitHub", message: "Please enter your github username" },
]
const intQuestions = [
    { type: "input", name: "intName", message: "Please enter your name" },
    { type: "input", name: "intId", message: "Please enter your id" },
    { type: "input", name: "intEmail", message: "Please enter your email" },
    { type: "input", name: "intSchool", message: "Please enter your school name" },
]

class Logic {
    constructor() {
        //
    }

    mainMenu() {
        return inquirer.prompt({
            type: "list",
            name: "direction",
            message: "Type of employee you'd like to create",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        })
            .then(answer => {
                console.log(answer)

                if (answer.direction === "Manager") {
                    inquirer.prompt(manQuestions).then(answer => {
                        const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.manOfficeNumber);
                        team.push(manager);
                        return this.mainMenu();
                    })
                } else if (answer.direction === "Engineer") {
                    inquirer.prompt(EngQuestions).then(answer => {
                        const engineer = new Engineer(answer.EngName, answer.EngId, answer.EngEmail, answer.EngGitHub);
                        team.push(engineer);
                        return this.mainMenu()
                    })

                } else if (answer.direction === "Intern") {
                    inquirer.prompt(intQuestions).then(answer => {
                        const intern = new Intern(answer.intName, answer.intId, answer.intEmail, answer.School);
                        team.push(intern);
                        return this.mainMenu()
                    })
                } else {
                    return this.writeTemplate(team);
                }

            });

    }
    writeTemplate (receiveTeam) {
        const writeTemplateFile = generateTemplate(receiveTeam);

        fs.writeFile('./dist/index.html', writeTemplateFile, (err) => {
            if(err) throw new Error(err);
        });
    }
};

module.exports = Logic;