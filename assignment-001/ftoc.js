
main()

function main() {
  var fahrenheit = window.prompt("insert your Fahrenheit degree");
  console.log(`the teperature in celsius is ${getCelsius(fahrenheit)} degrees`);
}

function getCelsius(fahrenheit) {
  return celsius = (fahrenheit - 32) * (5 / 9);
}