

  // sorting an array of object by age 

const persons = [
    {name:"Mohan Das",age:30},
    {name: "Mitrasen Yadav",age:25},
    {name: "Shami",age:35},
    {name: "Raju",age:26},
    {name: "Shyam",age:35}
  ];

  const sortedResult =  persons.sort((a,b)=>{
    if(a.age === b.age){
     return a.name > b.age? 1: -1 ;
    }
    else{
      return a.age - b.age ;
    }
  });
  console.log(sortedResult);

  

// forEach array
const StudentMark = [90,85,80,75,70,91];
let iterateNumbers=StudentMark.forEach((element,index)=>{
  console.log( `Number at ${index} is ${element}`);
});
console.log(iterateNumbers);


// for each 
const studentName = [
  {name:"Mohan Das",age:30},
  {name: "Mitrasen Yadav",age:25},
  {name: "Shami",age:35},
  {name: "Raju",age:26},
  {name: "Shyam",age:35}
];

let StudentwithAge = studentName.forEach((student)=>{
  console.log(`The student name ${student.name} and their age is ${student.age}`);
})
console.log(StudentwithAge);


// Maping on Array object 
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  
  let updatedPriceOnproducts = products.map((product)=>{
    return{
      ...product,
      price : product.price*1.10
    };
  
  });
  
  console.log(updatedPriceOnproducts);

// filtering on array object 
const collegeStudent = [
  {name : "Raj", age : 25},
  { name : "Sahil", age : 24},
  { name : "Soyeb", age : 26},
  { name : "Sakil", age : 23},
];

let filteredStudent =  collegeStudent.filter((student)=>{
  return  student.age >24;
});
 filteredStudent.forEach((student)=>{
   console.log( `The student ${student.name} is ${student.age} years old`);
 });
