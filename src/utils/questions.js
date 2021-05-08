const questions = [
  {
    type: "input",
    message: "Please enter the manager name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter the manager's ID:",
    name: "managerId",
  },
  {
    type: "input",
    message: "Please enter the manager's email address:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter the office number:",
    name: "managerOfficeNum",
  },
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
  {
    type: "input",
    message: "Enter the engineer's name:",
    name: "engineerName",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Enter the engineer's ID:",
    name: "engineerId",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Enter the engineer's email:",
    name: "engineerEmail",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Enter the engineer's GitHub username:",
    name: "engineerGithub",
    when: (answers) => answers.employeeChoice === "engineer",
  },
];

// Exporting the questions array to be used in another file.
module.exports = questions;
