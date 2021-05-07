const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super();
    this.github = github;
  }
  getGithub() {
    console.log("getgithub");
  }
  getRole() {
    console.log("getrole");
  }
}

const engineer1 = new Engineer("hi");

console.log(engineer1);
