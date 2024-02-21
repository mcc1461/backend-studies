// 1. What is the output of the following code block ?
// console.log(Number(0.1) + Number(0.2));
// console.log(0.1 + 0.2 == 0.3);

/*
let a = (8/3).toFixed(5);
let b = parseInt(a);
let c = Number(a);
console.log(b)
console.log("b:", b);
console.log("c:", Math.round(c));

console.log(a);
console.log(typeof a);
console.log(typeof b);
console.log((5 / 4).toFixed(5)); 
console.log(Number(0.1 + 0.2) == 0.3); 
*/

// 2. What is the output of the following code block ?
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// 3. Write program to find the sum of positive numbers. But if the user enters a negative numbers, the
// loop ends, if the negative number entered is not added to sum

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let sum = 0;

// const getNumber = () => {
//   readline.question('Enter a positive number (Enter a negative number to stop): ', (number) => {
//       const num = parseInt(number);
//       if (num < 0) {
//           console.log(`Sum of positive numbers: ${sum}`);
//           readline.close();
//       } else if (num == undefined || num == null || isNaN(num)) {
//           getNumber(); // Tekrar sayı iste
//       }
//       else {
//           sum += num;
//           getNumber(); // Tekrar sayı iste
//       }
//   });
// };

// getNumber(); // İlk sayıyı iste


// Define a variable to hold the sum
// let sum = 0;
// let num;
// for (;;) {

//   // Get the number from the user
//   num = parseFloat(prompt("Enter a number: "));
  
//   // If the number is negative, end the loop
//   if (num < 0 || isNaN(num)) {
//     break;
//   }
  
//   // Add the number to the sum
//   sum += num;
// }
//   console.log("sum:",sum) 

// let sum=0;
// while(true){
//     let num=parseFloat(prompt("Enter a number: "));
//     if(num<0 || isNaN(num)){
//         break;
//     }
//     sum+=num;
// }
// console.log("sum:",sum)

// console.log(typeof NaN)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof 0)
// console.log(typeof '')
// console.log(typeof false)
// console.log(typeof true)
// console.log(typeof Symbol('x'))
// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof function(){})





// 4. What is the output of the following code block ?
// null == undefined
// null === undefined
// isNaN(2 +  null)
// isNaN(2 + undefined)
// null ? console.log("true") : console.log("false")

// 5. What is the output of the following code block ?
// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//   while (hash.length != count)
//     hash += "#";
//   hash += "\n";
//   count += n;
//   n++;
// }
// console.log(hash);
// console.log(2+null)
// 6. What is the output of the following code block ?
// let firstName = null
// let lastName = null
// let nickName = "coderBond"
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous")

// 7. What is the output of the following code block ?
// function onZoom(x){
//     console.log("Zoom active for", x)
//   }

//   function startClass(x,y,z){
//       console.log(" Class starts at", x);
//       y(z);
//   }
//   startClass("20:00",onZoom,"FS");

// 8. What is the output of the following code block ?
// console.log
// ((function f(n){return ((n > 1) ? n * f(n-1) : n)})(5));

// 9. What is the output of the following code block ?
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// 10. What is the output of the following code block ?
// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]);
// let b = [undefined];
// b[2] = 1;
// console.log(b);
// console.log(b.map(e => 99));

// 11. What is the output of the following code block ?
// function orderPizza(type, ingredients, callback) {
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
// $10`;
//         callback(msg);
//     }, 3000);
// }
// orderPizza('Vegeterian', 'Cheese', function(message){
//   console.log(message);
// });

// 12. What is the output of the following code block ?
// class Employee{
//     constructor(id,name){
// this.id=id;
//         this.name=name;
//     }
//     detail(){
//         console.log(this.id+" "+this.name)
// } }
// let e1=new Employee(10,"Qadir Adamson");
// let e2=new Employee("Victor Hug");
// let e3=new Employee(12)
// e1.detail();
// e2.detail();
// e3.detail();

// 13. What is the output of the following code block ?
// class Animal {
//     constructor(name, weight) {
//         this.name = name;
//         this.weight = weight;
//     }
//     eat() {
//         return `${this.name} is eating`;
// } sound(){
//         return `${this.name} is says`;
//     }
// }
// class Cat extends Animal {
//     constructor(name, weight) {
//         super(name, weight);
// } sound(){
//         return `${super.sound()}  Meow!`;
//     }
// }
// let felix=new Cat("felix",5)
// console.log(felix.sound())


// EMRE PART

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the
// number you passed to the function. For example, if the input is 4 then your function should
// return 10 because 1 + 2 + 3 + 4 = 10.
// Examples
// addUp(4) - 10
// addUp(13) - 91
// addUp(600) - 180300

// This challenge will help you interpret mathematical relationships both algebraically and
// geometrically.
// Create a function that takes a number (step) as an argument and returns the number of
// matchsticks in that step. See step 1, 2 and 3 in the image above.
// Examples
// matchHouses(1) - 6
// matchHouses(4) - 21
// matchHouses(87) - 436

// Create a function that takes an array of numbers and return both the minimum and
// maximum numbers, in that order.
// Examples
// minMax([1, 2, 3, 4, 5]) - [1, 5]
// minMax([2334454, 5]) - [5, 2334454]
// minMax([1]) - [1, 1]

// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write
// a function to detect what the word is, knowing the following rules:
// . The wanted word is in lowercase.
// . The crowd of letters is all in uppercase.
// . Note that the word will be spread out amongst the random letters, but their letters
// remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") - "cat"
// detectWord("bEEFGBuFBRrHgUHINFYaYr") - "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") - "embezzlement"

// Create a function that takes two dates and returns the number of days between the first
// and second date.
// Examples
// getDays(
// new Date("June 14, 2019"),
// new Date("June 20, 2019")
// - 6
// getDays(
// new Date("December 29, 2018"),
// new Date("January 1, 2019")
// - 3
// // Dates may not all be in the same month/year.
// getDays(
// new Date("July 20, 2019"),
// new Date("July 30, 2019")
// - 10


// 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// function addUp(num) {
//     let sum = 0
//     for(let i =1; i<=num;i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(addUp(3));

// 2. Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// function kibrit(adım){
//     if(adım===1){
//         return 6;
//     }else {
//         return 5*adım+1
//     }
// }
// console.log(kibrit(3));

// 3.Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]
// }

// console.log(minMax([1,5,8,89,3,2,-1]));

// 4.A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// function detectWord(letter) {
//     return letter.split("").filter(item=> item===item.toLowerCase()).join("")
// }
// console.log(detectWord("UcERTaTUIUIt"));

// 5.Create a function that takes two dates and returns the number of days between the first and second date.

// function getDays(date1, date2) {
//     return Math.abs((date1-date2)/(1000*60*60*24))
// }
// console.log(getDays(new Date("june 14, 2019"), new Date("june 20, 2068")));

