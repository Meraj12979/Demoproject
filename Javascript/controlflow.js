
let day1 = 5;
let dayName;
switch(day1){
  case 1: 
  dayName = "Monday";
  break;

  case 2:
    dayName = "Tuesday";
    break;

    case 3:
      dayName ="Wednesday";
      break;

      case 4 :
        dayName = "Thurday";
        break;
        
        case 5 :
          dayName = "Friday";
          console.log("today is ");
          break;

          case 6 : 
          dayName = "Saturday";
          break;

          case 7 : 
          dayName = "Sunday";
          break;
          
          default :
          dayName ="Invalid day";
    
}
console.log(dayName);

const month = "march";
switch(month){
  case "jan":
    console.log("january");
    break;

    case "feb":
      console.log("february");
      break;

      case "march":
        console.log("march");
        break;

        default:
          console.log("Invalid month");

}


// falsy value :- 0,-0,BigInt 0n, "",empty, undefined , null , NaN
// truley values :- "0" , 'false' ," ", [],{}, function(){}

const userEmail = [];
if(userEmail.length==0){
  console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
  console.log("Object is empty");
}

// Nullish colescing operator (??):null , undefined
let val1 =10;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10 ?? 20;
console.log(val1);

//Ternary operator
// Condition ? true : false
 const iceCreamPrice = 100;
 iceCreamPrice <=80 ? console.log("less than 100"): console.log(" more than 80");

 // if condition 
 let age = 20
 if(age>=18){
  console.log("You are adult");
 }

 // if else condition
 let Age  = 16;
 if(Age>=18){
  console.log("you are adult");
 }else{
  console.log("you are minar");
 }

//if-else if-else ladder
let Score = 85;
if(Score =>90){
  console.log("Grade:A");
}else if(Score>=80){
  console.log("Grade :B");
}else if(Score>=70){
  console.log("Grade:B");
}else{
  console.log("Grade : f");
}

// Nested if 

let aGe = 21;
let hasId = true;
if(aGe>=18){
  if(hasId){
    console.log("You can enter in club");
  }else{
    console.log("you need ID to  enter in club");
  }
}else{
  console.log("you are too young to enter in club");
}
