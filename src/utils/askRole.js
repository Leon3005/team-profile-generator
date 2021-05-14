//Array of questions that will be asked depending on which role the user chooses.
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
    //The below is used to check if the user has inputted anything.
    validate: (inputtedName) => {
      if (inputtedName) {
        return true;
      } else {
        console.log("-- Please enter a name");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "engineerId",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
    validate: (inputtedId) => {
      if (isNaN(inputtedId)) {
        console.log("-- Please enter a valid ID");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "engineerEmail",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
    validate: (inputtedEmail) => {
      if (inputtedEmail && inputtedEmail.includes("@")) {
        return true;
      } else {
        console.log("-- Please enter an email address");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the engineer's GitHub username:",
    name: "engineerGitHub",
    when: (roleAnswer) => roleAnswer.employeeChoice === "engineer",
    validate: (inputtedGit) => {
      if (inputtedGit) {
        return true;
      } else {
        console.log("-- Please enter a github username");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's name:",
    name: "internName",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
    validate: (inputtedName) => {
      if (inputtedName) {
        return true;
      } else {
        console.log("-- Please enter a name");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's ID:",
    name: "internId",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
    validate: (inputtedId) => {
      if (isNaN(inputtedId)) {
        console.log("-- Please enter a valid ID");
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's email address:",
    name: "internEmail",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
    validate: (inputtedEmail) => {
      if (inputtedEmail && inputtedEmail.includes("@")) {
        return true;
      } else {
        console.log("-- Please enter an email address");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the intern's School:",
    name: "internSchool",
    when: (roleAnswer) => roleAnswer.employeeChoice === "intern",
    validate: (inputtedSchool) => {
      if (inputtedSchool) {
        return true;
      } else {
        console.log("-- Please enter a school");
        return false;
      }
    },
  },
];

module.exports = askRole;
