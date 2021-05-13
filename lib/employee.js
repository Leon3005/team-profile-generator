//Creating the base Employee class
class Employee {
  constructor(Name, id, email) {
    (this.Name = Name), (this.email = email), (this.id = id);
  }
  getName() {
    return this.Name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
