// array of questions for user
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


const questions = () =>
inquirer
  .prompt([{
    type: 'input',
    message: 'what is the project tile?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What are some installation steps for your APP?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'any contributions?',
    name: 'contribution',
  },
  {
    type: 'input',
  message: 'do you have a current test?',
  name: 'test',
  },
  {
    type: 'input',
  message: 'How would you use your App?',
  name: 'usage',
  },
  {
    type: 'input',
    message: 'How would you describe your APP?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Any credits?',
    name: 'credit',
  },
  {
    type: 'list' ,
    message: 'What Licenses did you use?',
    name: 'licenses',
    choices: ['BSD License', 'MIT License', 'Mozilla License', 'Apache license', 'GNU Public Licesnse', 'Other', 'NONE'],
  },
  {
    type: 'input',
    message: 'what is your github?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your Email?',
    name: 'email',

  }])


// function to write README file
questions()
  .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
  .then(()=> console.log('Success you wrote a README.md!'))
  .catch((err)=> console.error(err));

