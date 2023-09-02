run()

function run() {
    do {
        var inputNumber = window.prompt("insert your number: ");
    } while (isNaN(inputNumber));

    displayEvenOrOdd(inputNumber);
}

function displayEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
}

