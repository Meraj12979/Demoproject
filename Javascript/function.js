// function  declaration

function userLogin(username){
    if(username===undefined){
        return `${username} please enter username`;
    }
    return `${username} logged in class website`;
}
console.log(userLogin("Meraj Alam"));

// taking one parameter and value should pass more as argument

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(100,200,300,400));

// function in Object

 const user = {
    username : "Meraj Alam",
    age : 30,
 }
 function handleObject(anyObj){
    return `username is ${anyObj.username} age is ${anyObj.age}`;
 }
 
 console.log(handleObject(user));

 // Passing an Array to a Function
 
 const newArray = [100,200,300,400,500];
 function handleArray(getArray){
return getArray;
 }
  console.log(handleArray(newArray));


  // scope level and mini scope 
  function addOne(num){
    return num+1;

  } 
  const addTwo  = function(num){
    console.log(num+1);
  }
  addTwo(4);
 console.log(addTwo(7 ));

 // using of this in function
  const chaiCode=()=>{
  username = "hitesh";
  console.log(this.username);
 }
 chaiCode();

 // Map and Map methods
 const map = new Map();
 map.set("name","John");
 map.set("age",20);
 map.set("city","pune");
 console.log(map);
 console.log(map.get("name"));
 console.log(map.has("job"));
 console.log(map.size);



