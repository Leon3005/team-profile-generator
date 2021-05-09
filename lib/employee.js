class Employee {
  constructor(Name, id, email) {
    (this.Name = Name), (this.email = email), (this.id = id);
  }
  getName() {
    console.log(this.Name);
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
