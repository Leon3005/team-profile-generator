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
];

// Exporting the questions array to be used in another file.
module.exports = questions;
