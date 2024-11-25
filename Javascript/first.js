
// creating class as person
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello my name is ${this.name}.`);
    }
    isAdult(){
      return  this.age >= 18;
    }
}

let person1 = new Person("Mohan",30);
person1.introduce();
 console.log(person1.isAdult());


  // BankAccount Class
  class BankAccount{
    constructor(accountHolder,balance=0,){
        this.accountHolder = accountHolder;
         this.balance = balance;
        
    }
    deposit(amount){
this.balance+=amount ;
console.log(`Deposited amount is ${amount}. New Balance is ${this.balance}`);       
    }
    withdraw(amount){
        if(amount>this.amount ){
            console.log(" insufficient fund");
        }
        else{
            this.balance -=amount;
            console.log(`Withdraw amount is ${amount}.New balance is ${this.balance}`);
        }
    }
    checkBalance(){
        console.log(`Balance:${this.balance}`);
    }
  }
  let account  = new BankAccount("Mitrasen",100);
  account.deposit(50);
  account.withdraw(30);
  account.checkBalance();

  
  // Number and math
  const score = 200;
  console.log(score);
  const balance = new Number(300);
  console.log(balance);


  // Math
  console.log("Math.PI is ",Math.PI);
    
  // date and time in javascript 
   let myDate = new Date();
   console.log(myDate.toString());
   console.log(myDate.toLocaleDateString());
   console.log(typeof myDate);
   let myCreatedDate = new Date(2024,9,12);
   console.log(myCreatedDate);
   console.log(myCreatedDate.getDate());
   let myTimeStamp = Date.now();
   console.log(myTimeStamp);
   console.log(myTimeStamp.getTime);
   console.log(Date.now());
   console.log(new Date().getMonth()+1);
   console.log(myDate);
   console


// String 

   let str1 = "Apna";
   let str2 = "College";
   console.log(str1.toUpperCase());
   console.log(str2.toUpperCase());
   let res = str1.concat ( str2);
   console.log(res);

   console.log(str1.replace("A","S"));


   // Array and array method 
   
   const myArr = [1,2,3,4,5,6];
    console.log( "A",myArr);
   const sliceArray = myArr.slice(0,2);
   console.log(sliceArray);
   console.log("B",myArr);
    const spliceArray = myArr.splice(1,3);
    console.log(spliceArray);
    console.log("c",myArr);
       

    const marvel_heroes = [" thor","ironman","spderman"];
    const dc_heroes =["superman","flash","batman"];
    const all_heroes = marvel_heroes.concat(dc_heroes);
    console.log(all_heroes);
    const another_array = [1,2,3,4,[5,6,7],8,[9,[10,11,12]]]
    const real_another_array = another_array.flat(Infinity);
    console.log(real_another_array);

    let score1 = 100;
    let score2 = 200;
    let score3 = 300;
    console.log(Array.of(score1,score2,score));






  


        
  