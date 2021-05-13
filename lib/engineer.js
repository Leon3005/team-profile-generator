const Employee = require("./employee");

//Creating a new instance of Employee called Engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    console.log("Github");
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
