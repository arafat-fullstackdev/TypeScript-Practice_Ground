//* Tuple */
let myTuple = ["11", 33, "Hello", true];
// console.log(myTuple[0]);
// console.log(myTuple[1]);
// console.log(myTuple[3]);
// console.log(myTuple[4]);
//! part 2 //
// let tuple = ["55", "TypeScript"];
// tuple[2] = "yep";
// console.log(tuple);

//*! Important: Use  for critical alerts *//

//? Should we use #00FF00 or #008000 for the green shade? ?//
//! Avoid using #FFFF00, as it's too bright for text backgrounds //
//*-------------------------------------
//*Section: Background Colors
//*-------------------------------------*//

//? Day 03//
type Person = {
  employeeName: string;
  employeeJob?: string;
};

let employee: Person = {
  employeeName: "Dimitri Farabi",
  employeeJob: "Developer",
};

console.log(employee);
type point = {
  readonly a: number;
  readonly b: number;
};

let powerValue: point = {
  a: 11,
  b: 22,
};
console.log(powerValue);
