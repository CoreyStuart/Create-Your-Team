const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "index.html");

 let team = [];

function questions() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'position',
        message: 'What role does this employee have?',
        choices: ['Engineer', 'Intern', 'Manager', 'Team is completed'],
    }]).then(function (input) {
        if(input.position === 'Engineer') {
            addEngineer();
        }
         else if (input.position === 'Intern') {
            addIntern();
        }
        else if (input.position === 'Manager') {
            addManager();
        }
        else {
            buildHTML();
        }
    })
}

function addEngineer() {
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
    ])
        .then(data => {
            const engineer = new Engineer(data.engName, data.engId, data.engEmail, data.Github);
             team.push(engineer);
            questions();
        })
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
    ])
        .then(data => {
            const intern = new Intern(data.intName, data.intId, data.intEmail, data.school);
             team.push(intern);
            questions();
        })
    
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
    ])
        .then(data => {
            const manager = new Manager(data.manName, data.manId, data.manEmail, data.officeNum);
             team.push(manager);
            questions();
        })
   
}

function buildHTML () {
    fs.writeFile("./dist/index.html",generateHTML(team), 'utf8', (err) => console.log(err))

}
questions();

const generateHTML = team => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Whole Team Gon Eat</title>
</head>
<body>
    
    <div class="col-12 p-5 bg-secondary ">
        <h1 class="text-center text-white">Team Full of Winners</h1>
    </div>
  <div class="row">
    <div class="bigContainer">

    ${createTeam(team)}

   </div>
</div>
</body>
</html>`
}

createTeam = team => {
    const createManager = manager => {
        return `
     <div class="card">
            <div class="card_header bg-secondary text-white">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
            </div>
         <div class="body text-dark">
            <div class="li-container">
                <ul class="li-group">
                    <li class="list-item">ID: ${manager.id}</li>
                    <li class="list-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-item">Office Number: ${manager.officeNum}</li>
                </ul>
            </div>
         </div>
     </div>
        `
    }

    const createEngineer = engineer => {
        return `
     <div class="card">
            <div class="card_header bg-secondary text-white">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.role()}</h3>
            </div>
         <div class="body text-dark">
            <div class="li-container">
                <ul class="li-group">
                    <li class="list-item">ID: ${engineer.id}</li>
                    <li class="list-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github()}">${engineer.github()}</a></li>
                </ul>
            </div>
         </div>
     </div>
        `
    }
    const createIntern = intern => {
        return `
     <div class="card">
            <div class="card_header bg-secondary text-white">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.role}</h3>
            </div>
         <div class="body text-dark">
            <div class="li-container">
                <ul class="li-group">
                    <li class="list-item">ID: ${intern.id}</li>
                    <li class="list-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-item">School: ${intern.school}</li>
                </ul>
            </div>
         </div>
     </div>
        `
    }

    const html = [];

    html.push(team.filter(employee => employee.role() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team.filter(employee => employee.role() === "Engineer")
        .map(engineer => createEngineer(engineer)).join("")
    );
    html.push(team.filter(employee => employee.role() === "Intern")
        .map(intern => createIntern(intern)).join("")
    );

    return html.join("");
}

