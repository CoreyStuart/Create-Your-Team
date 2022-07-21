const Employee = require('./lib/Employee');
const Engieneer = require('./lib/Engenieer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "index.html");

// let team = [];

function questions() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'position',
        message: 'What role does this employee have?',
        choices: ['Engieneer', 'Intern', 'Manager', 'Team is completed'],
    }]).then(function (input) {
        if(Engieneer) {
            addEngieneer();
        }
         else if (Intern) {
            addIntern();
        }
        else if (Manager) {
            addManager();
        }
        else {
            buildHTML();
        }
    })
}

function addEngieneer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'What is the name of this person?',
        },
        {
            type: 'input',
            name: 'engId',
            message: 'What is the ID of the employee?',
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is their Github account?',
        }
        .then(data => {
            const engieneer = new Engieneer(data.engName, data.engId, engEmail, Github);
            // team.push(engieneer);
            questions();
        })
    ])
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the name of this intern?',
        },
        {
            type: 'input',
            name: 'intId',
            message: 'What is the ID of the intern?',
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did they attend?',
        }
        .then(data => {
            const intern = new Intern(data.intName, data.intId, intEmail, school);
            // team.push(intern);
            questions();
        })
    ])
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manName',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'manId',
            message: 'What is the ID of this manager?',
        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is their office number?',
        }
        .then(data => {
            const manager = new manager(data.manName, data.manId, manEmail, officeNum);
            // team.push(engieneer);
            questions();
        })
    ])
}

function buildHTML () {
    fs.writeFile('./dist/index.html', 'utf8', (err) => console.log(err))

}