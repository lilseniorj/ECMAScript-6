const obj = {
  name: "Jesus",
  age: 18,
  country: "colombia",
};

let { country, ...all } = obj;
cnosle.log(all);

const objt = {
  name: "Jesus",
  age: 18,
};

const obj1 = {
  ...objt,
  country: "COL"
}
console.log(obj1);


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test Error"))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Finalizo"))

  const regextData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regextData.exec("2018-04-20");
  const year = match[1]
  const month = match[2]
  const day = match[3]
  console.log(year, month, day);