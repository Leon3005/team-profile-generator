const Employee = require("./employee");

class Manager extends Employee {
  constructor(Name, id, email, officeNumber) {
    super(Name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
