// Syntax to Access javascript properties.

/*
objectname.property   //person.age
*/

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}

console.log(myObj.cars[0].name)
console.log(myObj.cars[0].models[0])
  