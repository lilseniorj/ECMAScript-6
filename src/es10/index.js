let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = "           Hello Wolrd";
console.log(hello);
console.log(hello.trimStart());


let hello = "HELLO WORLD           ";
console.log(hello)
console.log(hello.trimEnd());


try {

} catch {

}

let entries = [["name", "Jesus"], ["age", 18]];
console.log(Object.fromEntries(entries));

let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);