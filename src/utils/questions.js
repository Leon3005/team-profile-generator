const questions = [
  {
    type: "input",
    message: "Please enter the manager name:",
    name: "Name",
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
    message: "Please enter the manager's ID:",
    name: "id",
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
    message: "Please enter the manager's email address:",
    name: "email",
    validate: (inputtedEmail) => {
      if (inputtedEmail) {
        return true;
      } else {
        console.log("-- Please enter an email address");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please enter the office number:",
    name: "officeNumber",
    validate: (inputtedNumber) => {
      if (isNaN(inputtedNumber)) {
        console.log("-- Please enter a valid phone number");
        return false;
      } else {
        return true;
      }
    },
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
