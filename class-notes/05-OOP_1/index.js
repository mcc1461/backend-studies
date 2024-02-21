"use strict";

/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */
// Direkt obje isimlendirme PascalCase veya camelCase kullanılabilir.
// const exampleObject = {
//   propertyName: "value", //property, attribute, field
//   methodName: function () {
//     //method, function
//     return "Hello World";
//   },
//   methodNameAlternative() {
//     //method, function
//     return "Hello mcc1461";
//   },
// };

// console.log(exampleObject.propertyName);
// console.log(exampleObject.methodName());
// console.log(exampleObject.methodNameAlternative());

/* -------------------------------------------------------------------------- *

const Car = {
  
  // Property
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  color: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function() {
    // Method
    return "Engine started"
  },
  getDetails: function() {
    
    // Method
    return this.brand + " " + this.model + " " + this.year + " " + this.isAutoGear + " " + this.color
    + " " + this.details.color1 + " " + this.details.color2 + " " + this.details.engineSize
  },
  arrowMethod: () => {
    
    // Method
    return this
    //* Arrow function is globalScope. But this keyword is not defined. So that this keyword does not work here.
  }
}
console.log(Car.getDetails());


// console.log(Car.brand);
// console.log(Car["brand"]); // alternative
// console.log(Car.model);
// console.log(Car.year);
// console.log(Car.isAutoGear);
// console.log(Car.color);
// console.log(Car.color[0]);
// console.log(Car.details);
// console.log(Car.details.color1);
// console.log(Car.details.color2);
// console.log(Car.details.engineSize);
// console.log(Car.startEngine("value"))
// console.log(Car["startEngine"]()) // alternative

/* -------------------------------------------------------------------------- *
//? ARRAY DESTRUCTURING 
const testArray = ["value00", "value01", "value02", "value03", "value04"];

// const var0 = testArray[0];
// const var1 = testArray[1];
// const var2 = testArray[2];
// const var9 = testArray.slice(3,5);

// console.log(var0, var1, var2, var9);

//? Sıralama Önemli !

const [var0, var1, var2, ...var9] = testArray;

// console.log(var0, var1, var2, var9);

//? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
const [firstItem, secondItem, ...others] = testArray
console.log("1:", firstItem, "2:", secondItem, "3:", others.length)

// JavaScript'te bir nesneden başka bir nesne oluşturabildiğimiz için -> JavaScript, prototip tabanlı bir yaklaşımı temel alır deniliyor. Bu konu ile alakali mülakatlarda soru gelebilir, bir arkadasimiza sorulmustu.

// const myPrototype = {
//   sayHello: function() {
//       console.log("Merhaba!");
//   }
// };

// const myObject = Object.create(myPrototype);

// myObject.sayHello();  // Merhaba!

const newArray = ["value6",...testArray, "value7", "value8"]; //SPREAD OPERATOR

console.log(newArray);

/* -------------------------------------------------------------------------- *
const Car = {
  
  // Property
  brand: "Ford",
  model: "Mustang",
  year: 1967,
  isAutoGear: true,
  color: ["white", "red"],
  details: {
    color1: "white",
    color2: "red",
    engineSize: 4900,
  },
  startEngine: function() {
    // Method
    return "Engine started"
  },
  getDetails: function() {
    
    // Method
    return this.brand + " " + this.model + " " + this.year + " " + this.isAutoGear + " " + this.color
    + " " + this.details.color1 + " " + this.details.color2 + " " + this.details.engineSize
  },
  arrowMethod: () => {
    
    // Method
    return this
    //* Arrow function is globalScope. But this keyword is not defined. So that this keyword does not work here.
  }
}

/* -------------------------------------------------------------------------- *


//? Rest Operator (Key isimleri önemli !!! Sonda olmak zorunda...)

// const {year, model, brand, ...others} = Car;
const {year, model: newName, brand, ...others} = Car;

console.log(year, newName, brand, others);

//? Spread Operator (Herhangi bir yerde olabilir...)

// const newObj = {...Car, details: {...Car.details, engineSize: 5000}};
const newObj = {...Car, newKey: "new-value"};

//? Object to JSON:
// JSON undefined ve method çalıştırmaz. STRING gerektirir.
const json = JSON.stringify(Car);
console.log(typeof json, json, json.brand); // json is a string
// json.brand is undefined !!!

//? JSON to Object:

const obj = JSON.parse(json);
console.log(typeof obj, obj, obj.brand); // obj is an object

//? Object to Array:
// Array de destructuring ile yapılır.
//^ Keys:
const keys = Object.keys(Car);
console.log(object.keys(Car));
//^ Values:
const values = Object.values(Car);
console.log(object.values(Car));
//^ Entries:
const entries = Object.entries(Car);
console.log(object.entries(Car));

/* -------------------------------------------------------------------------- *

//? CONSTRUCTORS

const constructorFunction = function() {
  this.property = "value";

}

/* -------------------------------------------------------------------------- */

//? "NEW" KEYWORD

const carConstructor = function (brand, model, year){
  this.brand = brand
  this.model = model
  this.year = year
  this.startEngine = function() {
    console.log("Engine started") 
  }
}

const newCar = new carConstructor("Ford", "Mustang", 1967);
console.log(newCar);





/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

