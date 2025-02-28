"use strict";
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
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Delete"] = -1] = "Delete";
})(Status || (Status = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "ERROR";
    LogLevel["debug"] = "DEBUG";
    LogLevel["info"] = "INFO";
})(LogLevel || (LogLevel = {}));
let myStatus = Status.Active;
let myLog = LogLevel.info;
console.log(myStatus);
console.log(myLog);
