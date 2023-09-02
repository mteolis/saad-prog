run() // this run function is the only thing that is executed, everything in the run() function will run in sequential order.
// this makes the code easier to read as you only have to read top to bottom in the run() function to know what will execute.

// run function that shows the sequential logical order of execution.
function run() {
    do { // this is a do-while loop, everything in the do {} code block will be executed no matter what, however if the while conidition returns true, it will restart the loop until the condition is false.
        var inputNumber = window.prompt("insert your number: ");
    } while (isNaN(inputNumber)); // in other words, while the user is entering an input that is NaN, it will loop again until the user enters a correct input (a valid number).

    displayEvenOrOdd(inputNumber); // calls the displayEvenOrOdd() function with the inputNumber entered by the user passed in as an argument.
}

// displayEvenOrOdd function that takes a number as a function parameter that is to be evaluated for even or odd.
function displayEvenOrOdd(number) {
    // this logic is pretty standard.
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

