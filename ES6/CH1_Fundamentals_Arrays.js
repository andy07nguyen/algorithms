/**
 * Algorithm Challenges - The Dojo Collection
 * V 0.95
 * By Martin Puryear, Coding Dojo Inc.
 * 
 */
"use strict";

// Countdown: Create a function that accepts a number as an input. Return an array that
// counts down by one, from number down to 0. How long is the array?

/*
const countdownCalculator = (input) => {
  const returnArray = []
  while (input >= 0) {
    returnArray.push(input--)
  }
  return returnArray
}

let countdown = countdownCalculator(20)

console.log(`${countdown} \n Array length = ${countdown.length}`)
*/


// Print and Return: Your function will receive an array with two numbers. Print the
// first value, and return the second.

/*
const printAndReturn = (array) => {
  console.log(array[0])
  return array[1]
}

console.log(printAndReturn([1, 2]))
*/


// First Plus Length: Given an array, return the sum of the first value plus the array's length.
// What happens if the array's first is not a number, but a string or a boolean?

/*
const firstPlusLength = (array) => 
  typeof array[0] === 'number' ? 
  array[0] + array.length :   // If first value in array is a number, return value + array length
  array.length;               // Otherwise return array length

console.log(firstPlusLength(["hello", 1, 2, 3]))
*/


// Greater Than Second: Given array [1,3,5,7,9,13], print the numbers that are greater than
// its second value.

/*
const greaterThanSecond = array => {  
  array.length >= 2 ?
  array.forEach(value => {
    if (value > array[1])
      console.log(value)
  }) : 
  console.log(`Array does not have a second property`);
}

greaterThanSecond([7,3,5,7,9,13])
*/


// Greater Than Second, Generalized: Write a function that accepts ANY array and returns
// a new array with the array values that are greater than it's 2nd value.

/*
const greaterThanSecondGeneralized = array =>  {
  let greaterThanArray = [];

  array.length >= 2 ?
  array.forEach(value => {
    if (value > array[1]) greaterThanArray.push(value)
  }) : greaterThanArray = array;

  return greaterThanArray
}

console.log(greaterThanSecondGeneralized([7,3,5,7,9,13]))
*/


// This Length, That Value: Build a function that takes two numbers and returns an array
// which has the length of the first number, and each value is the second number.

/*
const arrayBuilder = (num1, num2) => Array(num1).fill(num2)

// Without using built-in array methods

const programatticArrayBuilder = (num1, num2) => {
  let newArray = []
  while (newArray.length < num1) newArray.push(num2)
  return newArray
}

console.log(programatticArrayBuilder(7,2))
*/


// Fit the First Value: Your function should accept an array. If value at [0] is greater
// than array's length, print "TOO BIG!". If it's smaller, "too small!". Otherwise "Just right!"

/*
const goldiLocks = (array) => {
  if (array[0] > array.length) {
    console.log("TOO BIG!")
  } else if (array[0] < array.length) {
    console.log("too small".)
  } else if (array[0] === array.length) {
    console.log("Just right!")
  }
}

goldiLocks([2])
goldiLocks([-1])
goldiLocks([1])
*/


// Fahrenheit To Celsius: Create a function that accepts a temperature in Fahrenheit and returns
// the temperature converted to Celsius.

/*
const fahrenheitToCelsius = (temperature) => (temperature - 32) * 5/9

console.log(fahrenheitToCelsius(99))
*/


// Celsius to Fahrenheit: Do the same thing but backwards yaaaaaaaaay!

/*
const celsiusToFahrenheit = (temperature) => (9/5 * temperature) + 32

console.log(celsiusToFahrenheit(37.22222222222222))
*/
