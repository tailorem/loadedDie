var countdownGenerator = function (x) {
  count = x;

  return function() {
    if (count > 0) {
      console.log("T-minus " + count + "...");
    }
    if (count === 0) {
      console.log("Blast off!");
    }
    if (count < 0) {
      console.log("Rockets already gone!");
    }
    return count--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


// Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

