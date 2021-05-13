//The below is prompting the user to answer questions and is being stored in questionAnswers
const inquirer = require("inquirer");

const questionAnswers = async (questions) => inquirer.prompt(questions);

module.exports = questionAnswers;
