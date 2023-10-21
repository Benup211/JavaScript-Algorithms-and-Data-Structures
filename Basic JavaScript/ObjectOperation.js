//  if your object has any non-string properties, JavaScript will automatically typecast them as strings.
const myDog = {
  "name":"Rajendra",
  "legs":2,
  "tails":1,
  "friends":["German shepherd","dalmation"]
};
//value are accessed by dot (.) operator
console.log(myDog.name);
//value accessed by ["keys"]
console.log(myDog["friends"]);