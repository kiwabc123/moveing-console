import { Direction } from "./enum";
import { moveRobot } from "./moveRobot";
import { parseCommands } from "./parseCommand";

const promptSync = require("prompt-sync")({sigint:true});
 
let command = promptSync("What's your Command : ")

let finalPosition = moveRobot(parseCommands(command))
console.log(`Final Position: X: ${finalPosition[0]} Y: ${finalPosition[1]} Direction :${Direction[finalPosition[2]]}}`)

