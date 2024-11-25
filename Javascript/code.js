
function fstLargestNum(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
 const class1 = [90,85,45,55,33,45];
  const class2 = [86,34,44,80,45,99];
  const class3 = [70,45,55,56,33,78];
  const class4 = [90,80,70,60,79,67];
const alltopper = [
  fstLargestNum(class1),
  fstLargestNum(class2),
  fstLargestNum(class3),
  fstLargestNum(class4),
  
]
console.log(alltopper);
console.log(fstLargestNum(alltopper));

// use of filter 

const allenStudent = [
 
  { name : "Zulfeqar" , rollno :1802392, age : 18},
  { name : "Mitrasen ", rollno : 1802393, age : 19},
  { name : " Mufazal" , rollno : 1802394, age : 20},
  { name : "Wakar", rollno : 1802395, age : 23},
  { name : "mahi ", rollno  : 1802396 , age : 24},
];

const mapedStudent = allenStudent.filter((student)=>{
      return student.age>18;
     
   });

console.log(mapedStudent);






