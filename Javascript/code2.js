function secondLargestNumber(arr){
    if(arr.lenght<2){
        return "invalid";
    }
    arr.sort((a,b)=>a-b);
    for(let i = arr.length-2; i>=0; i--){
        if(arr[i]!==arr[arr.length-1]){
            return arr[i];
        }
       return;
    }
}
 const arr = [21,23,34,45,56,];
console.log(secondLargestNumber(arr));


  // find smallest number in array 

  function findSmallest(arr){
    return Math.min(...arr);
  }

  const num = [1,-2,3,4,6,7,8];
  const smallest = findSmallest(num);
  console.log(smallest);
  

  // find larget one in an array
  function findLargest(arr) {
    return Math.max(...arr.filter(num=>num!==undefined));
}
const arr12 = [12, 34, , 55, 55, 66];
const largest = findLargest(arr12);
console.log(largest);