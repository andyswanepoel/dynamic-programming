// Previous solution is good for smaller values of n, but run time will be too long for larger numbers.

// Since there are many repeating portions of the tree,
// we can store those values and avoid calculatin them if they occur again

// memoization
// js object
// keys will be arguments

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];

  if (n === 0) return 0;
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

// Test cases
console.log(fib(6)); // expect 8
console.log(fib(7)); // expect 13
console.log(fib(8)); // expect 21
console.log(fib(50)); // expect 21
