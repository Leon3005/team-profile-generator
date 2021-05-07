class Employee {
  constructor(name, id, email) {
    (this.name = name), (this.email = email), (this.id = id);
  }
  getName() {
    console.log(this.name);
  }
  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log("Employee");
  }
}

module.exports = Employee;
