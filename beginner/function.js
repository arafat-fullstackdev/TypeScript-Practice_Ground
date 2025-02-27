// function greet(name: string): string{
//     return `Hello ${name}!`;
// }
// const greeting:string =greet("TypeScript");
// console.log(greeting);
function greetingOption(name, greetingGreet) {
    if (greetingGreet) {
        return "".concat(greetingGreet, ", ").concat(name);
    }
    else {
        return "Hello ".concat(name, "!");
    }
}
var customGreet = greetingOption("TypeScript", "Hi");
console.log(customGreet);
