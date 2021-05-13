//Importing all used files
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const askRole = require("./utils/askRole");

//Creating an empty array to store employees in (to generate cards)
const employees = [];

//The below function will run the askRole questions after the Manager details have been entered. It will also push the manager details into the employee array.
const collectManager = async () => {
  let inProgress = true;
  while (inProgress) {
    const answers = await questionAnswers(questions);
    initRole(askRole);

    const manager = new Manager(
      answers.Name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);

    return employees;
  }
  return employees;
};

//collectEmployees is used to run the role specific questions and store Engineer and Intern details into the employees array. If exit is chosen, the questions will end.
const collectEmployees = async () => {
  let inProgress = true;
  while (inProgress) {
    const roleAnswer = await questionAnswers(askRole);

    if (roleAnswer.employeeChoice === "exit") {
      console.log("Created Team Profile!");
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
        initRole(askRole);
      }
      if (roleAnswer.employeeChoice === "intern") {
        const intern = new Intern(
          roleAnswer.internName,
          roleAnswer.internId,
          roleAnswer.internEmail,
          roleAnswer.internSchool
        );
        employees.push(intern);
        initRole(askRole);
      }

      return employees;
    }
  }
  return employees;
};

//writeHTML is used to write the questions answers to the HTML file. It uses the generateHTML function to know what to generate (cards).
const writeHTML = (answers) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    }
  };
  fs.writeFile(`../dist/index.html`, generateHTML(answers), "utf8", callback);
};

//init and initRole are creating variables for the answers to the questions and passing them into writeHTML so that they are generated on the HTML.
const init = async () => {
  const answers = await collectManager();
  writeHTML(answers);
};

const initRole = async () => {
  const roleAnswers = await collectEmployees();
  writeHTML(roleAnswers);
};

init(questions);
