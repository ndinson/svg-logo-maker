// TODO: Create application which generates a 300x200 pixel image in browser based off of the criteria entered.
// TODO: Create a basic instructional prompt for using app.
// TODO: Create a prompt to enter up to three characters.
// TODO: Create a prompt for the text color (using keyword or hexadecimal number).
// TODO: Create a prompt for the shape.
// TODO: Create a prompt for the shape color (using keyword or hexadecimal number).
// TODO: Add function that creates an SVG file named `logo.svg`, after all questions have been answered.
// TODO: Create output text "Generated logo.svg" in the command line.

// Package used for collectiing input from the user.
const inquirer = require('inquirer');

// File system module needed to write svg.log file.
const fs = require('fs');

console.log('Please answer the following questions to generate your new SVG logo.')

// Function wrapper to load user prompt. 
function loadPrompt() {
// Array of questions that collect input from user, the criteria of logo being created.
inquirer.prompt ([
  {
    type: 'input',
    message: 'What text would you like to your logo? (Enter up to three characters)',
    name: 'text',
  },
  {
    type: 'input',
    message: 'What color would you like the text to be? (Enter keyword or hexadecimal number)',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    name: 'shape',
    choices: ['Square', 'Circle', 'Triangle']
  },
  {
    type: 'input',
    message: 'What color would you like the shape to be? (Enter keyword or hexadecimal number)',
    name: 'shapeColor',
  },
])
.then((answers) => {
  if (answers.text.length > 3) {
    console.log('Text must be a maximum of three characters only!')
    loadPrompt()
  }
  else {
// Function to create content of logo.svg file.    
    fs.writeFile('logo.svg', answers, (err) =>
      err ? console.error(err) : console.log('Generated logo.svg') 
  )}  
})
}

// Fires off inquirer prompt questions when user initializes app.
loadPrompt();



