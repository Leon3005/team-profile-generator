const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");

const questionResponses = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

const writeHTML = () => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Created Team Profile!");
    }
  };
  fs.writeFile("./utils/TestHTML.html", `hi`, "utf8", callback);
};

writeHTML();
