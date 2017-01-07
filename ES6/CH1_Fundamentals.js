/**
 * Algorithm Challenges - The Dojo Collection
 * V 0.95
 * By Martin Puryear, Coding Dojo Inc.
 * 
 */
"use strict";

// Chapter 1: Fundamentals

// 1. Set variable myNumber equal to the value 42. Then set variable myName equal to your name.
//    Now swap values - put the value of myNumber into myName, and vice versa.

/*
let myNumber = 42,
    myName = "Nitish";

const swapValues = (arg1, arg2) => {
  myName != arg1 ? 
  [myName, myNumber] = [arg1, arg2] :
  [myName, myNumber] = [arg2, arg1]
}

console.info(`Value of variable myName is ${myName} and value of myNumber is ${myNumber}`)
swapValues(myNumber, myName)
console.info(`Value of variable myName is ${myName} and value of myNumber is ${myNumber}`)
*/


// 2. Create a function named beCheerful(). Within this function, console.log "good morning!"
//    Call this function 98 times.

/*
const beCheerful = () => console.log("good morning")

for (let i = 0; i < 98; i++) {
  beCheerful()
}
*/


// 3. Print all integers from 2000 to 5280, inclusive. Do this using a WHILE loop.

/*
let startingInt = 2000

while (startingInt < 5281) {
  console.log(startingInt++)
}
*/


// 4. Print all the integers from -52 to 1066. Do this using a FOR loop.

/*
let startingInt = -52

for (startingInt; startingInt < 1067; startingInt++) {
  console.log(startingInt)
}
*/


// 5. Print all the multiples of 6, from 6 to 60,0000. DO this using a WHILE loop.

/*
let integerValue = 6;
const multiplesOf = 6;

while (integerValue < 60001) {
  if (integerValue % multiplesOf === 0) 
    console.log(`${integerValue} divided by ${multiplesOf} is ${integerValue/multiplesOf}`)

  integerValue++
}
*/


// 6. Using a FOR loop, print the multiples of 3 from -300 to 0. SKIP numbers -3 and -6.

/*for (let i = -300; i < 1; i+=3) {
  if (i != -3 && i != -6) {
    console.log(i)
  }
}

for (let i = -300; i < 1; i+=3) {
  if (i != (-3 && -6)) console.log(i)
}
*/


// 7. Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

/*
let year = 2016

do {
  console.log(year)
  year -= 4
} while (year > 0)
*/


// 8. Print all integer multiples of 5, from 512 ot 4096. Afterwards, log how many there were.

/*
let multiplesOfFive = 0

for (let i = 512; i < 4097; i++) {
  if (i % 5 === 0) {
    console.log(i)
    multiplesOfFive++
  }
}

console.log(multiplesOfFive)
*/


// 9. Print out all integers from 1 to 100. If the number is evenly dvisible by 5, print "Coding"
// instead of the number. If it is evenly divisible by 10, also print "Dojo" instead of the number.

/*
let ints = 1

while (ints < 101) {
  if (ints % 10 === 0 ) {
    console.log("Dojo")
  } else if (ints % 5 === 0) {
    console.log("Coding")
  } else {
    console.log(ints)
  }

  ints++
}
*/


// 10. Your function will be given an input paramter 'incoming'. Console.log the value of 'incoming'.

/*
const randomFunction = incoming => console.log(incoming)

randomFunction("You beautiful doll, you great big beautiful doll!")
*/


// 11. Make a function that accepts three paramters: 'first', 'second', and 'last'. Print all the 
//     multiples of 'last', from 'second' to 'first'. Do this using a FOR loop.

/*
const threeParams = (finalValue, startValue, isMultiplesOf) => {
  for (startValue; startValue <= finalValue; startValue++) {
    if (startValue % isMultiplesOf === 0)
      console.log(startValue)
  }
}

threeParams(416779, 1, 3)
*/

// 12. Write a function that determines whether 

/*
const checkLeapYear = (year) => {
  let returnStatement = `The year ${year}`;

  (year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ?
    console.log(`${returnStatement} is a leap year`)
  : console.log(`${returnStatement} is not a leap year`);
}

checkLeapYear(1904)
*/


// 13. Print all the odd integers from -300,000 to 300,000. What is the sum
//     of all these numbers?

/*
let sum = 0

for (let i = -300000; i < 300001; i++) {
  if (i % 2 != 0) {
    sum += i
    console.log(`Odd integer value: ${i}, Current running total: ${sum}`)
  }
}

console.log(`Sum of all odd integer values between -300,000 and 300,000 is ${sum}`)
*/


// 14. Construct a function that accepts four parameters. Print all the multiples of param1,
//     from param2 to param3 inclusive, unless that multiple is equal to param4. Do this using
//     a WHILE loop. Given (3,5,17,9), print (6, 12, 15)

/*
const fourParamFunction = (param1, param2, param3, param4) => {
  for (param2; param2 <= param3; param2++) {
    param2 % param1 === 0 && param2 != param4 ? 
    console.log(param2): undefined;
  }
}

fourParamFunction(3,5,17,9)
*/
