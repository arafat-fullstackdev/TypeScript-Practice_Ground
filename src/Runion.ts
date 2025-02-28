//export let a: (number|string)[] = [];
 let Eaone: string[] = [];
Eaone.push("TS");
console.log(Eaone);

let code:(number| string[]) =[];  // make  union type number|string
code.push("JS");

console.log(code);

let cn:{
    name: string,
    year: number,
    country: string,
    value: boolean
}

//? Explicit type
cn={
name: "TypeScript",
year: 1996,
country: "USA",
value: true,
}

console.log(cn);