// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
      message: 'Enter the Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter Description',
      name: 'description',
    },

    {
        type: 'input',
        message: 'Enter the Installation Instruction',
        name: 'installation',
      },
   
      {
        type: 'input',
        message: 'Contribution Guidlines',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Test Instructions',
        name: 'test',
      },
      {
        type: 'list',
        choices: ["MIT", "Apache 2.0", "IBM-IPL 1.0", "None"],
        message: 'Choice License ',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Github Username',
        name: 'GitHub',
      },
      
    ];
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
// }
// inquirer
//   .prompt(questions)
  
//   .then((response) =>
//     console.log (response)
      
      
//   );

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.writeFile("generated-README.md", data, (error)  => {
        error ? console.log(error) : console.log("created-README-file")
    })
}

// // TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        writeToFile("generated-README.md", generateMarkdown(data))
    })
}

// // Function call to initialize app
init();
