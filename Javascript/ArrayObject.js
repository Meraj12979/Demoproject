// creating object
const  car = {
  carName : "fortuner",
  model : 2024,
  color : " white",
  mileage : 15,
  start:function(){
    console.log("Car get started");
  },
  getDetails : function(){
    console.log(`My car name is ${this.carName},model is ${this.model} 
        and color is ${this.color} giving mileage ${this.mileage}`)
  }
};

console.log(car.start());
console.log(car.getDetails());   
 

// joining two obj as  single  object 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4: "d"}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
  
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));


//nested object 

let person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  },
  contact: {
    email: "alice@example.com",
    phone: {
      home: "555-1234",
      mobile: "555-5678"
    }
  }
};
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.contact);
 

  //Object in depth is important
   
  const mySym = Symbol("key1");
  const Users = {
      name : "Meraj Alam",
      age : 30,
      profession: "engineer",
      passout : 2022,
      location : "Bihar",
      [mySym] : "key1",
  };
Users.greeting = function(){
  console.log(`Hello JS Users  ${this.name} who is professionally ${this.profession}`);
}
  console.log(Users);
  console.log(Users.greeting());
  Object.freeze(Users);

  // Use of of push and pop with array object by using function
  const myArray = [
    {name : "Farhan", age : 20},
    { name : "samim", age : 18},
    { name : "sarwar ", age : 16},
  ];
  function pushElement(element){
    myArray.push(element);
    console.log(`Element${JSON.stringify(element)} added to array.`),
    console.log(`Current array is`,myArray);
  }
  pushElement({name:"akhtar",age : 13});
 
    
  

  