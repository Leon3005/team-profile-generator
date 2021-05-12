const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const askRole = require("./utils/askRole");

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

    if (roleAnswer.employeeChoice === "exit") {
      inProgress = false;
    } else {
      if (roleAnswer.employeeChoice === "engineer") {
        const engineer = new Engineer(
          roleAnswer.engineerName,
          roleAnswer.engineerId,
          roleAnswer.engineerEmail,
          roleAnswer.engineerGitHub
        );
        employees.push(engineer);
        console.log(engineer);
        await questionAnswers(askRole);
        // init(askRole);
      }
      if (roleAnswer.employeeChoice === "intern") {
        const intern = new Intern(
          roleAnswer.internName,
          roleAnswer.internId,
          roleAnswer.internEmail,
          roleAnswer.internSchool
        );
        employees.push(intern);
        console.log(intern);
        await questionAnswers(askRole);
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
  const answers = await collectEmployees();
  writeHTML(answers);
};

init(questions);
