const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");
const questionAnswers = require("./utils/questionAnswers");
const managerQuestions = require("./utils/managerQuestions");

const collectEmployees = async () => {
  const employees = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await questionAnswers();

    if (answers.employeeChoice === "exit") {
      inProgress = false;
    } else {
      if (answers.employeeChoice === "manager") {
        const managerChoice = await managerQuestions();
        employees.push(managerChoice);
      }

      // if (answers.employeeChoice === "aquatic") {
      //   const aquaticAnimal = await createAquaticAnimal();
      //   animals.push(aquaticAnimal);
      // }

      // if (answers.employeeChoice === "aerial") {
      //   const aerialAnimal = createAerialAnimal();
      //   animals.push(aerialAnimal);
      // }
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
  const employees = await collectEmployees();
  writeHTML(employees);
};

init(questions);
