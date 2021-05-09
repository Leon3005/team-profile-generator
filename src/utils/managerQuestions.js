const Manager = require("../../lib/manager");
const questionsFile = require("./questions");
const questionAnswers = require("./questionAnswers");

const createManager = async () => {
  const questions = [
    ...questionsFile,
    {
      type: "input",
      message: "Please enter the manager name:",
      name: "Name",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the manager's ID:",
      name: "id",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the manager's email address:",
      name: "email",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the office number:",
      name: "officeNumber",
      when: (answers) => answers.employeeChoice === "manager",
    },
  ];

  const answers = await questionAnswers(questions);

  const employee = new Manager(
    answers.Name,
    answers.id,
    answers.email,
    answers.officeNumber
  );

  return employee;
};

module.exports = createManager;
