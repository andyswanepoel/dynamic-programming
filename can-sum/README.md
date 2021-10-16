# Can Sum

Problem statement:
Write a function that takes in targetSum and an array of numbers.

The function should return a boolean indicating if it is possible to generate the targetSum from the numbers in the array.

Numbers are all non-negative and you can use a number as many times as you want.

```javascript
const canSum = (target, numbers) => {
    // returns true or false;
}

```

## Solution

From each node, you have the `numbers.length` branches.

If `target - numbers[i]` < 0, that value will not return true.

If `target - numbers[i]` === 0. that value will return true.

## Complexity

Without memoization: O(n^m)
With memoization: O(m * n)