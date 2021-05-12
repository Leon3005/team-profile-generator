const Manager = require("../lib/manager");

const manager1 = new Manager("John", "749", "john@john.com", 9182928383);

describe("Manager's details", () => {
  it("should return the inputted name", () => {
    const expected = "John";
    const actual = manager1.Name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "749";
    const actual = manager1.id;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "john@john.com";
    const actual = manager1.email;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted office number", () => {
    const expected = 9182928383;
    const actual = manager1.officeNumber;
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Manager";
    const actual = manager1.getRole();
    expect(actual).toEqual(expected);
  });
  it("should be a number", () => {
    const expected = 9182928383;
    const actual = manager1.officeNumber;
    expect(actual).toEqual(Number);
  });
});
