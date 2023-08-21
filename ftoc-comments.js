
main() // this is the only function that is called when the application executes (in order from first line to last like a script)
// putting all the logic sequentially in main() makes the code easier to read.

// main function to hold all of the logic in sequential order of execution.
function main() {
  var fahrenheit = window.prompt("insert your Fahrenheit degree"); // sets the fahrenheit var to hold the value of the input from the window prompt
  console.log(`the teperature in celsius is ${getCelsius(fahrenheit)} degrees`); // prints the output to the console
  // uses string interpolation to make the output string easier to read
  // doesn't need to store any values in a variable since the value returned by the getCelsius(fahrenheit) function is only used once for printing the ouput, then discarded
}

// function to get the celsius value from a fahrenheit value passed
// Again, you could have named this convertFahrenheitToCelsius(fahrenheit) as well, but make sure to use descriptive words to make your code more friendly for others to read
function getCelsius(fahrenheit) {
  return celsius = (fahrenheit - 32) * (5 / 9); // no need for extra braces, brackets, etc.
}