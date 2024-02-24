class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    console.log(`My name is ${this.name}`)
  } 
}

class BankAccount extends Person {
   _balance = 0
   constructor(name, balance) {
     super(name)
     this._balance = balance
   }
   deposit (amount) {
     this._balance += amount
   }
   withdraw (amount) {
     this._balance -= amount
   }
   get getBalance() {
     return this._balance
   }
   setBalance(amount) {
     this._balance = amount
   }
}

const account = new BankAccount('Cate', 100)
account.deposit(50)
account.withdraw(25)
console.log(account.getBalance())

get getBalance {
  return this._balance
}