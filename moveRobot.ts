import { Command, Direction } from "./enum";

export const moveRobot=(commands: string[]) =>{
    // starting position
    let x = 0, y = 0;
    let direction = Number(Direction.North)
    commands.forEach(command=>
        {
            if (command === Command.Right) {
                direction = (direction + 1) % 4
            } else if (command === Command.Left) {
                direction = (direction + 3) % 4; 
            } else if (command.startsWith(Command.Walk)) {
                let distance = parseInt(command.slice(1));
                switch (direction) {
                    case Direction.North: 
                        y += distance;
                        break;
                    case Direction.East: 
                        x += distance;
                        break;
                    case Direction.South: 
                        y -= distance;
                        break;
                    case Direction.West: 
                        x -= distance;
                        break;
                }
            }
        })
    

    return [x, y, direction]
}