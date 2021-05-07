const Engineer = require("../lib/engineer");
const engineer1 = new Engineer(
  "Leon",
  "1722",
  "leonwheeler08@gmail.com",
  "Leon3005"
);

describe("Engineer's details", () => {
  it("should return the inputted name", () => {
    const expected = "Leon";
    const actual = engineer1.name;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted id", () => {
    const expected = "1722";
    const actual = engineer1.id;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted email", () => {
    const expected = "leonwheeler08@gmail.com";
    const actual = engineer1.email;
    expect(actual).toEqual(expected);
  });
  it("should return the inputted github link", () => {
    const expected = "Leon3005";
    const actual = engineer1.github;
    expect(actual).toEqual(expected);
  });
  it("should return the role", () => {
    const expected = "Engineer";
    const actual = engineer1.getRole();
    expect(actual).toEqual(expected);
  });
});
