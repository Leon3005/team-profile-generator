const askRole = [
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
    message: "Please enter the engineer's name:",
    name: "engineerName",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "engineerId",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "engineerEmail",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub link:",
    name: "engineerGitHub",
    when: (answers) => answers.employeeChoice === "engineer",
  },
];

module.exports = askRole;
