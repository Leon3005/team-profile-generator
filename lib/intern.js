const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    console.log(this.school);
  }
  getRole() {
    console.log("Intern");
  }
}

const intern1 = new Intern("Bob", "293", "bob@bob.com", "Dame Eliz");

console.log(intern1);
