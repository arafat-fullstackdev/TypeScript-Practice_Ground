// function greet(name: string): string{
//     return `Hello ${name}!`;
// }

// const greeting:string =greet("TypeScript");
// console.log(greeting);

function greetingOption(name:string, greetingGreet?:string): string{
    if(greetingGreet){
        return `${greetingGreet}, ${name}`;
    }else{
        return `Hello ${name}!`;
    }
}

const customGreet:string = greetingOption("TypeScript", "Hi");
console.log(customGreet);