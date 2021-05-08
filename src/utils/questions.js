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
];

// Exporting the questions array to be used in another file.
module.exports = questions;
