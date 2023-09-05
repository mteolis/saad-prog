run();
function run() {
  // filling up a list of valid numbers
  let userList = [];
  let i = 0;
  while (i < 3) {
    let userInput = prompt("Enter a number : ");
    if (!isNaN(userInput)) {
      userList.push(userInput);
      i++;
    }
  }
  let userAnswer;
  var minimum = userList[0];
  var maximum = userList[0];

  do {
    userAnswer = prompt("Type 1 for minimum or type 2 for maximum");
  } while (userAnswer !== "1" && userAnswer !== "2");

  if (userAnswer === "1") {
    findMin();
  } else if (userAnswer === "2") {
    findMax();
  }
  function findMin() {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i] < minimum) {
        minimum = userList[i];
      }
    }

    console.log(minimum);
  }

  function findMax() {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i] > maximum) {
        maximum = userList[i];
      }
    }

    console.log(maximum);
  }
}
