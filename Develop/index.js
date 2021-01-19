// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs')
const utils = require('utils')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer
  .prompt([{
    type: 'input',
    message: 'what is the project tile?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'what are some instructions on how to use your APP?',
    name: 'instrucitons',
  },
  {
    type: 'input',
    message: 'How would you describe your APP?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Any credits?',
    name: 'installation',
  },
  {
    type: 'checkbox' ,
    message: 'What Licenses did you use?',
    name: 'licenses',
    choices: ['BSD Licesnse', 'MIT License', 'GPL License', 'Apache license', 'GNU Public Licesnse', 'Other', 'NONE'],
  },
  {
    type: 'input',
    message: 'what is your github?',
    name: 'github?',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'Email',

  }]).then()


// function to write README file
fs.writeToFile('README.md', data, (err)=>
    {if (err) throw err;
    console.log('Congrats you have made a README.md!');
});

// function to initialize program
function init() {

}

// function call to initialize program
init()
