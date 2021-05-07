class Employee {
  constructor(name, id, email) {
    (this.name = name), (this.email = email), (this.id = id);
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    return "Employee";
  }
}
