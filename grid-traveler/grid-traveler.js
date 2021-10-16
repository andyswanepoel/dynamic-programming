const gridTraveler = (m, n, memo = {}) => {
  // since a m by n grid and an n by m grid will have the same returned value, we can check for either
  const key = m + "x" + n;
  const reversed_key = n + "x" + m;

  if (key in memo) return memo[key];
  if (reversed_key in memo) return memo[reversed_key];

  // non-memoized base cases
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);

  return memo[key];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
