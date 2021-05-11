const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
const managerQuestions = require("./utils/managerQuestions");
const Manager = require("../lib/manager");

const employees = [];

const promptEmployees = async () => {
  const questionsChoice = [
    {
      type: "list",
      message: "Select the employee you would like to add:",
      name: "employeeChoice",
      choices: [
        {
          name: "Engineer",
          value: "engineer",
        },
        {
          name: "Intern",
          value: "intern",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ];
  const answers = await questionAnswers(questionsChoice);

  return answers;
};

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
    // employees.push(answers);

    // if (answers.employeeChoice === "aquatic") {
    //   const aquaticAnimal = await createAquaticAnimal();
    //   animals.push(aquaticAnimal);
    // }

    // if (answers.employeeChoice === "aerial") {
    //   const aerialAnimal = createAerialAnimal();
    //   animals.push(aerialAnimal);
    // }
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
  const answers = await collectEmployees();
  writeHTML(answers);
};

init(questions);
