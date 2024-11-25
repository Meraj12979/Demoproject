// reverse a string

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// check for palindrome
function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
        return str === reversed;
    
} 
console.log(isPalindrome("rececar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome('madam'));

// largest array number in array 

 const arr1 = [12,34,5,50,45,40,];
 const arr2 = [20,34,55,66,35,20];
 const arr3 = [ 90,60,50,95];
function largestNumber(...arr){
    return Math.max(...arr);
}
console.log(largestNumber(...arr1,...arr2,...arr3));

// factorial of a Number 
function  factorial(n){
    if(n===0) 
    return 1;
return n*factorial(n-1);
}
console.log(factorial(5));

// fibonacci Sequence 
function fibonacci(n){
    let Sequence = [0,1];
    for(let i = 2 ; i <n ; i++){
        Sequence[i]=Sequence[i-1] + Sequence[i-2];
    }
    return   Sequence;
}
console.log(fibonacci(15));

