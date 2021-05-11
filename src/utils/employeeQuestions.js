const employeeQuestions = [
  {
    type: "input",
    message: "Please enter the engineer's name:",
    name: "name",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "id",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "email",
    when: (answers) => answers.employeeChoice === "engineer",
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub link:",
    name: "gitHub",
    when: (answers) => answers.employeeChoice === "engineer",
  },
];

module.exports = employeeQuestions;
