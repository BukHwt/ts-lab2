import { LoudGreet } from "../src/LoudGreeter";

describe("LoudGreeter Class", () => {
  test("inherits the greeting property from parent", () => {
    const myLoudGreeting: LoudGreet = new LoudGreet("Welcome", 1);
    expect(myLoudGreeting.greeting).toBe("Welcome");
  });
});
