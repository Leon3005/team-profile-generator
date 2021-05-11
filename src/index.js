const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
const employeeQuestions = require("./utils/employeeQuestions");
const Manager = require("../lib/manager");

const employees = [];

const collectEmployees = async () => {
  let inProgress = true;

  while (inProgress) {
    const answers = await questionAnswers(questions);

    const employee = new Manager(
      answers.Name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    employees.push(employee);
    return employees;
  }
  return employees;
};

const writeHTML = (answers) => {
  console.log(answers);
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Created Team Profile!");
    }
  };
  fs.writeFile(
    "../dist/TestHTML.html",
    generateHTML(answers),
    "utf8",
    callback
  );
};

const init = async () => {
  const manager = await collectEmployees();
  writeHTML(manager);
};

init(questions);
