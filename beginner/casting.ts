// TS Casting
let myVar : any = 'Hello, TS';
let stringLen: number = (myVar as string).length;
console.log(myVar);
console.log(stringLen); 

let myLet: any = 'Hi,Planet';
let result: number= (myLet as boolean).toString().length
console.log(result);