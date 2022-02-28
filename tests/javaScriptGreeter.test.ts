import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("javascript greeter class", () => {
  test("did the method override work", () => {
    const myJSGreeting: JavaScriptGreeter = new JavaScriptGreeter("Welcome");
    expect(myJSGreeting.greet("Steve")).toBe("console.log (Welcome, Steve)");
  });
  test("inherit greeting property from parent", () => {
    const myJSGreeting: JavaScriptGreeter = new JavaScriptGreeter("Welcome");
    expect(myJSGreeting.greeting).toBe("Welcome");
  });
});
