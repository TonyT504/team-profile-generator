const team = [];
const inquirer = require ("inquirer");
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const manQuestions = [
    { type:"input", name:"manName", message:"Please enter your name"},
    { type:"input", name:"manId", message:"Please enter your id"},
    { type:"input", name:"manEmail", message:"Please enter your email"},
    { type:"input", name:"manOfficeNumber", message:"Please enter your office number"},
]
const EngQuestions = [
    { type:"input", name:"EngName", message:"Please enter your name"},
    { type:"input", name:"EngId", message:"Please enter your id"},
    { type:"input", name:"EngEmail", message:"Please enter your email"},
    { type:"input", name:"EngGitHub", message:"Please enter your github username"},
]
const intQuestions = [
    { type:"input", name:"intName", message:"Please enter your name"},
    { type:"input", name:"intId", message:"Please enter your id"},
    { type:"input", name:"intEmail", message:"Please enter your email"},
    { type:"input", name:"intSchool", message:"Please enter your school name"},
]

function mainMenu (){
    inquirer.prompt({
        type:"list",
        name: "direction",
        message: "Type of employee you'd like to create",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    })
    .then(answer => {
        console.log(answer)
        if (answer.direction === "Manager"){
            inquirer.prompt(manQuestions).then(answer => {
                const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.manOfficeNumber);
                team.push(manager);
                return mainMenu();
            })
        }
    })
}
mainMenu();