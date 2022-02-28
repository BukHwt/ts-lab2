import { Greeter } from "../src/Greeter";

describe("greeter class", () => {
  test("return a greeting when given a constructor and the method is called", () => {
    const myGreeting: Greeter = new Greeter("Welcome");
    expect(myGreeting.greet("Steve")).toBe("Welcome, Steve");
  });
  test("return a greeting when given a constructor and the method is called", () => {
    const myGreeting: Greeter = new Greeter("Hola");
    expect(myGreeting.greet("Estaban")).toBe("Hola, Estaban");
  });
  test("greeting property is properly set by constructor", () => {
    const myGreeting: Greeter = new Greeter("Hey");
    expect(myGreeting.greeting).toBe("Hey");
  });
});
