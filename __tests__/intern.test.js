const Intern = require("../lib/intern");
const intern1 = new Intern(
  "Leon",
  "1722",
  "leonwheeler08@gmail.com",
  "Birmingham School"
);

describe("Intern's details", () => {
  it("should return the inputted name", () => {
    const expected = "Leon";
    const actual = intern1.Name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "1722";
    const actual = intern1.id;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "leonwheeler08@gmail.com";
    const actual = intern1.email;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted school", () => {
    const expected = "Birmingham School";
    const actual = intern1.getSchool();
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Intern";
    const actual = intern1.getRole();
    expect(actual).toEqual(expected);
  });
});
