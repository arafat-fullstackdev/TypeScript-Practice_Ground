//* direction //
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// let myDirection: Direction = Direction.Up;
// let myDirection1: Direction = Direction.Down;
// let myDirection2: Direction = Direction.Right;
// let myDirection3: Direction = Direction.Left;
// console.log(myDirection);
// console.log(myDirection1);
// console.log(myDirection2);
// console.log(myDirection3); 
//? Active & LOg */
enum Status {
    Active= 1,
    Inactive=0,
    Delete = -1,

}
enum LogLevel{
    Error= "ERROR",
    debug ="DEBUG",
    info= "INFO",
}

let myStatus: Status= Status.Active;
let myLog: LogLevel = LogLevel.info;

console.log(myStatus);
console.log(myLog);
