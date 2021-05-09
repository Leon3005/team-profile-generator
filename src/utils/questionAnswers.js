const inquirer = require("inquirer");

const questionAnswers = async (questions) => inquirer.prompt(questions);

module.exports = getAnswers;
