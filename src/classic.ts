import { Marks, EngineStatusE } from "./types";

let status: EngineStatusE = EngineStatusE.OFF;

function off(mark: Marks) {
  console.log(`car name is ${mark}`);
  switch (mark) {
    case Marks.LAMBA:
      console.log(`engine status is ${status}`);
      console.log(`engine turn on`);
      status = EngineStatusE.ON;
      console.log(`engine status is ${status}`);
      console.log(`engine turn off`);
      status = EngineStatusE.OFF;
      break;
    case Marks.FERRA:
      console.log(`car name is ${Marks.LAMBA}`);
      console.log(`engine status is ${status}`);
      console.log(`engine turn on`);
      status = EngineStatusE.ON;
      console.log(`engine status is ${status}`);
      console.log(`engine turn off`);
      status = EngineStatusE.OFF;
      break;
  }
  console.log(`engine status is ${status}`);
}

off(Marks.FERRA);
