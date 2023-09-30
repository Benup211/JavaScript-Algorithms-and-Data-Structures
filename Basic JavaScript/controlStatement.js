// Understanding Boolean Values
function checkBoolean(){
    return true;
}
console.log(checkBoolean());

// Use Conditional Logic with If Statements
// if(condition true)-->execute the body{}

function trueorflase(boolval){
    if(boolval){
        return "The pass value was true";
    }
        return "The pass was false";
}
console.log(trueorflase(1));
console.log(trueorflase(0));

// Comparison with the Equality Operator i.e == (equality check,convert both data into similar type and compare)
// Comparison with the Equality Operator i.e ===(check type of data also)

//Comparison with the Inequality Operator i.e !=
// Comparison with the Strict Inequality Operator i.e !==(check type of data also)
// Comparison with the Greater Than Operator i.e >
// Comparison with the Greater Than Or Equal To Operator i.e >=
// Comparison with the Less Than Operator i.e <
//Comparison with the Less Than Or Equal To Operator i.e <=
// Comparisons with the Logical And Operator i.e && (add two logical operation together), ||(or operation)
//if else if and else

/*            Capstone of if-elseif-else            */
/*Golf Code
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.*/
function golfscore(par,strokes){
    if(strokes==1){
        return "Hole-in-one!";
    }
    else if(strokes<=par-2){
        return "Eagle";
    }
    else if(strokes==par-1){
        return "Birdie";
    }
    else if(strokes==par){
        return "Par";
    }
    else if(strokes==par+1){
        return "Bogey";
    }
    else if(strokes==par+2){
        return "Double Bogey";
    }
    else{
        return "Go Home!";
    }
}
console.log(golfscore(3,2));
console.log(golfscore(3,7));


//Switch Case

// Selecting from Many Options with Switch Statements
//match one of option in many selection
//note: case are checked with ===
//syntax
/*
    switch(selectec_value){
        case A:
            body;
            break;
        case B:
            body of b;
            break;
        case C:
        case D:
        case E:
            body of c,d,and e
            break;
        default:
            body of default;
            break;   
    }
*/

/*          Control Statement Capstone                 */
/* Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet
*/
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count>0){
    return count+" Bet";
  }
  else{
    return count+" Hold";
  }

}
cc(2); cc(3); cc(7); cc('K');
console.log(cc('A'));
