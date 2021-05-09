const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");

const questionResponses = async (questions) => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  return answers;
};

const collectEmployees = async () => {
  const employees = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await questionResponses();

    if (answers.employeeChoice === "exit") {
      inProgress = false;
    } else {
      if (answers.employeeChoice === "terrestrial") {
        const terrestrialAnimal = await createTerrestrialAnimal();
        animals.push(terrestrialAnimal);
      }

      if (answers.employeeChoice === "aquatic") {
        const aquaticAnimal = await createAquaticAnimal();
        animals.push(aquaticAnimal);
      }

      if (answers.employeeChoice === "aerial") {
        const aerialAnimal = createAerialAnimal();
        animals.push(aerialAnimal);
      }
    }
  }

  return animals;
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
  const answers = await questionResponses(questions);
  writeHTML(answers);
};

init(questions);
