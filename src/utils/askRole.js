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
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "engineerId",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "engineerEmail",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub link:",
    name: "engineerGitHub",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the intern's name:",
    name: "internName",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
  },
  {
    type: "input",
    message: "Please enter the intern's ID:",
    name: "internId",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
  },
  {
    type: "input",
    message: "Please enter the intern's email address:",
    name: "internEmail",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
  },
  {
    type: "input",
    message: "Please enter the intern's School:",
    name: "internSchool",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
  },
];

module.exports = askRole;
