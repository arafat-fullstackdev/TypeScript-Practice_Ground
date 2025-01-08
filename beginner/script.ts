function add(a:number, b:number): number {
   return a + b; 
}
console.log("Addition of Parameter:", add(11,22))

function multiply(c: number, d:number): number{
    return c * d;
    // console.log(multiply(44 * 66));
}
console.log("Multiplication of Parameter", multiply(44,66));

//* push()
let fruits: string[] = ['Apple', 'Banana', 'Orange', 'Grape'];
console.log(fruits);

fruits.push('Mango');
console.log(fruits);