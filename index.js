const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./generateMd");

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a detailed description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What commands should be run to install dependencies?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is needed for this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What further contributions does this project need?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What commands should be run for testing?",
        name: "tests"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "None"
        ]
    }
];

function writeToFile(fileName, data) {
    let content = generateMd(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

function initiate() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

initiate();