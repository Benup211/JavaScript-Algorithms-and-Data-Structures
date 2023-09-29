// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = [11,"Benup","Ghimire"];
console.log("Array:",myArray);
//Nest arrary within array
const myArray2 = [[1,"Aaryash"],[11,"Benup"]]
console.log("Nested array:",myArray2);
// Access Array Data with Indexes
let arrVal=myArray2[1][1];
console.log("Access value:",arrVal);
// Modify Array Data With Indexes
myArray2[1][0]=2; //mutable array
console.log("After assign:",myArray2);

// Manipulate Arrays With push Method
myArray2.push([5,"Aditya"]);
console.log("After push value:",myArray2);

//Manipulate Arrays With pop Method
let popVal=myArray2.pop();
console.log("Popped value:",popVal);

// Manipulate Arrays With <--shift--> Method
//Like pop but remove first value of array
let shiftValue=myArray2.shift();
console.log("Shift value:",shiftValue);

// Manipulate Arrays With unshift Method
//opposite of push i.e add value in first of array
console.log("Before unshift:",myArray2)
myArray2.unshift([1,"Rajendra"]);
console.log("After unshift",myArray2);


/*                        Capstone              */
/* Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list. */
console.log("\n#########Capstone Project#############\n");
const myList = [];
myList.unshift(["Onion",20]);
myList.unshift(["Garlic",10]);
myList.unshift(["Snacks",3]);
myList.unshift(["Noodle",5]);
myList.unshift(["Chocolate",15]);
console.log(myList);
console.log("\n#########################################");