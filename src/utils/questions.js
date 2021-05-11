const questions = [
  {
    type: "input",
    message: "Please enter the manager name:",
    name: "Name",
  },
  {
    type: "input",
    message: "Please enter the manager's ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Please enter the manager's email address:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the office number:",
    name: "officeNumber",
  },

  // {
  //   type: "input",
  //   message: "Enter the engineer's name:",
  //   name: "engineerName",
  //   when: (answers) => answers.employeeChoice === "engineer",
  // },
  // {
  //   type: "input",
  //   message: "Enter the engineer's ID:",
  //   name: "engineerId",
  //   when: (answers) => answers.employeeChoice === "engineer",
  // },
  // {
  //   type: "input",
  //   message: "Enter the engineer's email:",
  //   name: "engineerEmail",
  //   when: (answers) => answers.employeeChoice === "engineer",
  // },
  // {
  //   type: "input",
  //   message: "Enter the engineer's GitHub username:",
  //   name: "engineerGithub",
  //   when: (answers) => answers.employeeChoice === "engineer",
  // },
];

// Exporting the questions array to be used in another file.
module.exports = questions;
