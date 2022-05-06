function  newFunction(name, age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "COL";
  console.log(name, age, country);
}

// ES6
function newFunction2(name = "Oscar", age = 32, country = "COL") {
  console.log(name,age,country);
};

newFunction2();
newFunction2("Ricardo", "23", "COL");

let hello = "HELLO";
let world = "WORLD";
let epiPhrase = hello + " " + world;
console.log(epiPhrase);
let epiPhrase2 = `${hello} ${world}`;
console.log(epiPhrase2);

let lorem = "Now that we know who you are, I know who I am \n" + 
"Other epic phrase we need"

//ES6
let lorem2 = `Other epic phrase we need
now is other epic phrase`;

console.log(lorem);
console.log(lorem2);

let person = {
  "Name": "Oscar",
  "Age": 32,
  "Country": "COL",
}

console.log(person.Name, person.Age);

let { Name} = person;
console.log(Name);

{
  var globalVar = "Global Var";
}

{
  let globlaLet = "Global Let";
  console.log(globlaLet);
}
 
console.log(globalVar);

var a = "B";
a = "A";
console.log(a);


let name = "Oscar";
let age = 23;

//ES5
obj = { name: name, age: age};
//ES6
obj2 = { name, age};
console.log(obj2);

const names = [
  {
    name: "jesus",
    age: 23,    
  }
  {
    name: "David",
    age: 34,
  }
]

let listOfNames = names.map(function ( item){
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, cousntry) =>{
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;


const helloPromise = () => {
  return new Promise((resolve, reject) =>{
    if(true) {
      resolve("HEYYY!!!");
    } else {
      reject("UpS");
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA,valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
  }

  const calc = new calculator();
  console.log(calc.sum(2, 2));

  import { hello } from "./module.js";

  hello();

  function* helloWorld() {
    if(true) {
      yield "HEllO, ";
    }
    if(true) {
      yield "World";
    }
  };

  const generatorHello = helloWorld();
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);
  console.log(generatorHello.next().value);

