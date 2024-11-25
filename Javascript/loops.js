// for loop
for( let i=0;i<=5;i++){
  if(i==5){
      console.log(" 5 is best number",);
  }
  let element = i;
  console.log(element);
}

for ( let i=1; i<=5; i++){
  console.log(`The Outer loop : ${i}`);
  for(j=0;j<=5;j++){
      console.log(`Inner loop : ${j} and outer loop:${i}`);
  }
  
}

for (let i = 0 ; i<=5;i++){
  if(i==2){
      console.log("2 is detected");
      break;
  }
  console.log(i);
}

let Fruits = ["Apple","orange","Grapes","Banana"];
for( let i = 0; i < Fruits.length ; i++){
console.log(Fruits[i]);
}

// loops with decrement
for( let i=5;i>= 1; i--){
  console.log(i);
}
// do-while loop 
let i = 10;
do{
console.log(i);
i++;
}while(i< 12);


// for of loop 
let arrayNumbers = [10,30,20,50];
console.log("Iterated numbers for of loop :-")
for(let number of arrayNumbers){
  console.log(number);
}

// for in loop 
let personAli = {
  name : "Md. Ali ",
  age : 30,
  city : "Pune",
};
for (let key in personAli){
  console.log(key,personAli[key]);
}

// filter in array 
const numbers = [1,2,3,4,5,6,7,8,9];
const evenNumber = numbers.filter((num)=>{
return num%2 === 0;
});
console.log(evenNumber);

// map in array  

const number = [1,2,3,4,5,6,7,8,9,10];
const squareNumber = number.map((num)=>{
    return num*2;
} );
console.log(squareNumber);

// for each loop in  array 

const number1 = [23,20,69,56];
const iterateNumber = number1.forEach((element,index)=>{
    console.log(`Element at ${index} is ${element}`);
});
console.log(iterateNumber);  


// Reduce in javascript 
const myNums = [1,2,3,4,];
const totalNumber = myNums.reduce((acc,currval)=>{
  console.log(`acc: ${acc} and currval:${currval}`);
    return acc+currval;
  
},0);
console.log(totalNumber);

const shoppingCart = [
  { itemName : "js course", price: 2999},
  { itemName : "py  course", price: 999},
  { itemName : "datascience course", price:5999},
  { itemName : "mobile dev course", price: 12999},
];


const pricetoPay = shoppingCart.reduce((acc,item)=>{
  console.log(`acc: ${acc} and item.price${item.price}`);
  return acc + item.price;
},0);
console.log(pricetoPay);


 