const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
// const employeeQuestions = require("./utils/employeeQuestions");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");

const employees = [];

const collectEmployees = async () => {
  let inProgress = true;

  while (inProgress) {
    const answers = await questionAnswers(questions);

    const manager = new Manager(
      answers.Name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    if (answers.employeeChoice === "exit") {
      inProgress = false;
    } else {
      if (answers.employeeChoice === "engineer") {
        // const answers = await questionAnswers(employeeQuestions);
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        employees.push(engineer);
        console.log(engineer);
      }
      if (answers.employeeChoice === "intern") {
        // const engineer = await employeeQuestions();
        console.log("intern");
      }

      employees.push(manager);

      return employees;
    }
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
