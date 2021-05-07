const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    console.log("Girhub");
  }
  getRole() {
    console.log("Engineer");
  }
}

const engineer1 = new Engineer(
  "Leon",
  "1722",
  "leonwheeler08@gmail.com",
  "Leon3005"
);

console.log(engineer1);
