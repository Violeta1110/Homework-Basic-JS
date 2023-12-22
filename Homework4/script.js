// HOMEWORK #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are
//  *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory() {

    let name = prompt('What is your name?');
    let mood = prompt('what is your mood?');
    let activity = prompt('what activity did you do?');

    if (typeof name === 'string' && typeof mood === 'string' && typeof activity === 'string') {
        console.log(`This is ${name}. ${name} is nice person. Today ${name} is ${mood}. ${name} is 
        ${activity} all day.`);
    } else {
        console.log('Invalid values');
    }
}

tellStory()

// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number
//  and call it for every number.
//  If one of the numbers of the array is invalid show an error message instead of a result.

let fiveNumbers = [1,2,3,4,5];
function sumOfNumbers (numbers) {

    let sum = 0;
    for (let number of numbers) {
        sum = sum + number  
    }
    return sum;
}
let sumOfFiveNumbers = sumOfNumbers(fiveNumbers);
    console.log('Sum of numbers is:', sumOfFiveNumbers);


//     HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

let greetingStudents = ['Hello', 'there', 'Students', 'of', 'SEDC', '!'];
function showArrayStrings (stringsArray) {
    if (stringsArray.length === 0) {
        console.log('The array is empty.');
        return;
    }
    let printArray = stringsArray.join(' ');
    console.log(`${printArray}`);
}

showArrayStrings(greetingStudents)


// HOMEWORK #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20
//  will write in the console every number,
//  and will add the "\n" new line after every even number otherwise 
// it will add " " empty space.

let number = 1;

while (number<=20) {
    if (number % 2 === 0) {
        console.log(number + '\n');
    } else {
        console.log(number + ' ');
    }
    number ++;
}

// HOMEWORK #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

let array = [3, 5, 6, 8, 11];

function findMaxMinSum(array) {
    if (array.length === 0) {
      return 'Array is empty.';
    }
  
    let max = array[0];
    let min = array[0];
    let sum = array[0];
  
    for (let num of array) {
      if (num > max) {
        max = num;
      }
  
      if (num < min) {
        min = num;
      }
  
      sum += num;
    }
  
    return {
      Max: max,
      Min: min,
      Sum: sum
    }
  }

  let result = findMaxMinSum(array);
  console.log(`Max: ${result.Max}, Min: ${result.Min}, Sum: ${result.Sum}`);
  

