console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Calling helloName should say Hello, Luis!:', helloName('Luis'));


// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('Calling addNumbers with 1 and 2:', addNumbers(1, 2));
console.log('Calling addNumbers with 5 and 5:', addNumbers(5, 5));
console.log('Calling addNumbers with 20 and 7:', addNumbers(20, 7));



// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('Multiplying 3 numbers: 1 2 3:', multiplyThree(1, 2, 3));
console.log('Multiplying 3 numbers: 10 10 10:', multiplyThree(10, 10, 10));
console.log('Multiplying 3 numbers: 6 10 43:', multiplyThree(6, 10, 43));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  } 
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let emptyArray = [];
let officeSupplies = ['Pencil', 'Notebook', 'Ball Pen', 'Graph Paper', 'Paper Clips'];
function getLast( array ) {
  let index = array.length - 1;
  return array[index];
}
console.log('officeSupplies array contains:', officeSupplies);
console.log('Last item of officeSupplies is', getLast(officeSupplies));
console.log('This is an empty array called emptyArray', emptyArray);
console.log('Caling getLast for empty array, should return undefined', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array){
  for(i of array){
    if(i === value){
      return true;
    } 
  }
  return false;
}

console.log('is Notebook in the array? should say true', find('Notebook', officeSupplies));
console.log('is Paper Clips in the array? should say true', find('Paper Clips', officeSupplies));
console.log('is ink in the array? should say false', find('ink', officeSupplies));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)){
    return true;
  }else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let nums = [];
  
  // TODO: loop to add items
  let i = 0;
  while(i <= 10){
    nums.push(i);
    i++;
  }
  let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}

console.log('Pushed an array from 0 to 10, all added together should equal 55', sumAll());


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function getPositive(a, b, c, d, e, f){
  let input = [a, b, c, d, e, f];
  let onlyPositive = [];
  for(num of input){
    if(num > 0){
      onlyPositive.push(num);
    }
  }
  return onlyPositive;
}

console.log('Running getPositive function, should show 1 4 7 8', getPositive(1, -6, -3, 4, 7, 8));
console.log('Running getPositive function, should show 6 3 4 7', getPositive(-1, 6, 3, 4, 7, -8));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//I will be writing a function from edabit that takes an integer minutes and converts it to seconds.

function convert(mins){
let secs = mins * 60;
return secs;
}

console.log('Should convert 5 mins to 300 secs', convert(5));
console.log('Should convert 3 mins to 180 secs', convert(3));
console.log('Should convert 2 mins to 120 secs', convert(2));
