// Implement a recursive function that will return the nth number of the fibonacci sequence.

// Next number in the sequence is the sum of the previous two numbers:
// n:       0 1 2 3 4 5 6...
// fib(n):  0 1 1 2 3 5 8...

const fib = (n) => {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

// Test cases
console.log(fib(6)); // expect 8
console.log(fib(7)); // expect 13
console.log(fib(8)); // expect 21
