// Concatenating Strings with Plus Operator
const myStr = "This is the start. "+"This is the end.";//add space inside ""
//concatenate with variavle
const myName = "Benup";
const myStr2 = "My name is "+myName+" and I am well!";
//Appending variable to string
const someAdjective = "easy!";
let myStr3 = "Learning to code is ";
myStr3+=someAdjective;

// Find the Length of a String
//.length method cound white space also
let lastNameLength = 0;
const lastName = "Benup Ghimire";
lastNameLength = lastName.length;
console.log(lastNameLength);

// Use Bracket Notation to Find the First Character in a String
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
//String value are immuatable once they are created i.e lastName[0]="D" -->error
const lastLetterOfLastName = lastName[lastName.length-1];//last letter
console.log(lastLetterOfLastName)
