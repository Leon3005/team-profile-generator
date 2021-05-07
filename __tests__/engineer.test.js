const Engineer = require("../lib/engineer");

describe("Engineer's details", () => {
  it.only("should return the inputted name", () => {
    const engineer1 = new Engineer(
      "Leon",
      "1722",
      "leonwheeler08@gmail.com",
      "Leon3005"
    );
    const expected = "Leon";
    const actual = engineer1.name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {});
  it("should return the inputted email", () => {});
  it("should return the inputted github link", () => {});
  it("should return the role", () => {});
});
