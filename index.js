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

console.log('Please answer the following questions/ selections to generate your new SVG logo.')

// Array of questions that collect input from user, the criteria of logo being created.
inquirer.prompt ([
  {
    type: 'input',
    message: 'Enter up to 3 characters that will represent your logo.',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What color would you like the text to be?',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Select a shape for your logo.',
    name: 'shape',
    choices: ['Square', 'Circle', 'Triangle']
  },
  {
    type: 'input',
    message: 'What color would you like the shape to be?',
    name: 'shapeColor',
  },
])