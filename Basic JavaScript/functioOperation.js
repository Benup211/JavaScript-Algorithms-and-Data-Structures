// syntax
/*
function functionName(){
    body
}
functionName();//calling the function
 */
function greeting(){
    console.log("Hello Benup");
}
greeting();
// Passing Values to Functions with Arguments
function sums(para1,para2){
  console.log(para1+para2);
}
sums(1,10);
// Return a Value from a Function with Return
function timesFive(num){
  return (num*5);
}
console.log(timesFive(3));

// Global Scope and Functions
//<-- Variables which are declared without the let or const keywords are automatically created in the global scope.-->
// Local Scope and Functions
//Variable declared in the function are local scope
// Global vs. Local Scope in Functions
let a=5;
function display(){
    let a=8;
    console.log("Local scope value:",a);
} 
console.log("Global scope value:",a);
display();

// Assignment with a Returned Value
let mulVal;
function multiplyTen(num){
    return num*10;
}
mulVal=multiplyTen(5);
console.log(mulVal);

//<--                 Capstone       -->
/*
Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/
let testArr = [1, 2, 3, 4, 5];
function nextInLine(arr,number){
    arr.push(number);
    arr.shift();
}
nextInLine(testArr,6);
console.log(testArr);

