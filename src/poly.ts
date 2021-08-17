import { Marks, EngineStatusE } from "./types";

interface Engine {
  status: EngineStatusE;
  on: () => void;
  off: () => void;
}

interface Pont {
  name: string;
  showName: () => string;
}

class Lamba implements Engine, Pont {
  name = Marks.LAMBA;
  status = EngineStatusE.OFF;

  showName = () => {
    return this.name;
  };

  getStatus = () => this.status;

  on = () => {
    this.status = EngineStatusE.ON;
    return this.status;
  };
  off = () => {
    this.status = EngineStatusE.OFF;
    return this.status;
  };
}

class Ferra implements Engine, Pont {
  name = Marks.FERRA;
  status = EngineStatusE.OFF;

  showName = () => {
    return this.name;
  };

  getStatus = () => this.status;

  on = () => {
    this.status = EngineStatusE.ON;
    return this.status;
  };
  off = () => {
    this.status = EngineStatusE.ON;
    console.log(`You cant stop me fool`);
    return this.status;
  };
}

const carA = new Lamba();
console.log(`car name is ${carA.showName()}`);
console.log(`engine status is ${carA.getStatus()}`);
console.log(`engine turn on`);
carA.on();
console.log(`engine status is ${carA.getStatus()}`);
console.log(`engine turn off`);
carA.off();
console.log(`engine status is ${carA.getStatus()}`);

const carB = new Ferra();
console.log(`car name is ${carB.showName()}`);
console.log(`engine status is ${carB.getStatus()}`);
console.log(`engine turn on`);
carB.on();
console.log(`engine status is ${carB.getStatus()}`);
console.log(`engine turn off`);
carB.off();
console.log(`engine status is ${carB.getStatus()}`);
