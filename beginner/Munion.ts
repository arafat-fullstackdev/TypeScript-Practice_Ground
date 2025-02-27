let result : number | string;
result = 22;
result = 'Hello, TypeScript!';
console.log(result); 

type resultType= number| string;

function resProcess(res:resultType): void{
    console.log("Result:", res);
}
resProcess(25);
resProcess("Sure");