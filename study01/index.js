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
console.log(2+null)
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


