const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderResults = howSum(remainder, numbers, memo);

    if (remainderResults !== null) {
      memo[target] = [...remainderResults, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return memo[target];
};

// Test cases

console.log(howSum(7, [2, 3])); // true
console.log(howSum(7, [5, 3, 4, 7])); // true
console.log(howSum(7, [2, 4])); // false
console.log(howSum(8, [2, 3, 5])); // true
console.log(howSum(300, [7, 14])); // false
