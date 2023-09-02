var inputNumber = window.prompt("insert your number "); // this can be moved into a run or main function to make the code cleaner and easier to read.

if (isNaN(inputNumber)) { // if this statement evaluates to false, the program will just end. So the user will have to rerun the program if they wanted to input a new number in the case that they entered an invalid argument (NaN).
  console.log(`${inputNumber} is not a number , please enter a valid number `);
} else {
  if (inputNumber % 2 === 0) {
    console.log(`${inputNumber} is even`);
  } else {
    console.log(`${inputNumber}  is odd`);
  }
}