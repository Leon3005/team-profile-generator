const Employee = require("../lib/employee");
const employee1 = new Employee("Leon", "1722", "leonwheeler08@gmail.com");

describe("Employee's details", () => {
  it("should return the inputted name", () => {
    const expected = "Leon";
    const actual = employee1.getName();
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "1722";
    const actual = employee1.getId();
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "leonwheeler08@gmail.com";
    const actual = employee1.getEmail();
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Employee";
    const actual = employee1.getRole();
    expect(actual).toEqual(expected);
  });
});
