const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

const manager1 = new Manager("John", "749", "john@john.com", "9182928383");

console.log(manager1);

module.exports = Manager;
