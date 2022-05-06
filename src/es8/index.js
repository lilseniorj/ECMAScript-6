// Object entries decuelve los valores de una matriz.

const data = {
   frontend: "Jesus",
   backend: "David",
   design: "Ana"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //Muestra la cantidad de elementos que hay

// Muestra los valores en forma de String
const data1 = {
  frontend: "Jesus",
   backend: "David",
   design: "Ana"
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);


const strign = "hello";
console.log(strign.padStart(7, "Hi "));
console.log(strign.padEnd(12, "--------"));
console.log("Food".padEnd(12, "--------"));


// Async and Await

const helloWorld = () => {
   return new Promise((resolve, reject) => {
      (false)
         ? setTimeout(() => resolve("Hello world"), 3000)
         : reject(new Error("Test Error"))
   }) 
};

const helloAsync = async () => {
   const hello = await helloWorld();
   console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
   try {
      const hello = await helloWorld();
      console.log(hello);
   } catch (error) {
      console.log(error);
   }
};

anotherFunction();
