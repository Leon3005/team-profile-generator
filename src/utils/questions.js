const questions = [
  {
    type: "list",
    message: "Select the employee you would like to add:",
    name: "employeeChoice",
    choices: [
      {
        name: "Manager",
        value: "manager",
      },
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
