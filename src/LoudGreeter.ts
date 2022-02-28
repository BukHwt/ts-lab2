import { Greeter } from "./Greeter";

export class LoudGreet extends Greeter {
  private extra: string = "!";
  constructor(greeting: string, extra: number) {
    super(greeting);
  }
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}
