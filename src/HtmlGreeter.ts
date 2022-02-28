import { Greeter } from "./Greeter";

class HTMLGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}> ${super.greet(name)} </${this.tagName}>`;
  }
}

const omg: HTMLGreeter = new HTMLGreeter("OMG");
console.log(omg.greet("Rue"));
