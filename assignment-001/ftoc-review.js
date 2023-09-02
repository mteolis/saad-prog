var celsius; // you don't need this variable, it's never used.
var fahrenheit = window.prompt("insert your Fahrenheit degree "); // you can do all of your logic here, but for bigger applications it would be a good idea to have a main function
// the main function can be used to put the sequential logic of your application (example in ftoc.js file)

function converFah(fahrenheit) { // always properly nah your functions and variables, even though in this case it is obvious, after a while or even if viewed by someone else, this can be vague as we might not know what Fah refers to (convertFahrenheitToCelsius(fahrenheit) or even getCelsius(fahrenheit))
  return (celsius = (fahrenheit - 32) * (5 / 9)); // the outer-most () are not needed and just get in the way of reading the code
}

// again, the following line can be included in the main function (example in ftoc.js file)
// Also, string interpolation can be used in this case to make reading the output string a lot easier (example in ftoc.js)
document.write(
  "the teperature in celsius is  " + converFah(fahrenheit) + " degrees"
);