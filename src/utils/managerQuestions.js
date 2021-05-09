const Manager = require("../../lib/manager");
const questionsFile = require("./questions");
const questionAnswers = require("./questionAnswers");

const createManager = async () => {
  const questions = [
    ...questionsFile,
    {
      type: "input",
      message: "Please enter the manager name:",
      name: "managerName",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the manager's ID:",
      name: "managerId",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the manager's email address:",
      name: "managerEmail",
      when: (answers) => answers.employeeChoice === "manager",
    },
    {
      type: "input",
      message: "Please enter the office number:",
      name: "managerOfficeNum",
      when: (answers) => answers.employeeChoice === "manager",
    },
  ];

  const answers = await questionAnswers(questions);

  const employee = new Manager(answers);

  return employee;
};

module.exports = createManager;
