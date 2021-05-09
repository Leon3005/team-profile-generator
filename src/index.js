const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateHTML = require("./utils/generateHTML");

const questionResponses = async (questions) => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
  return answers;
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
