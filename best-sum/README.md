# Best Sum

Problem statement:
Write a function that takes in targetSum and an array of numbers.

The function should return the shortest subarray of the numbers which together can sum to the targetSum. If it is not possible, return `null`.

Numbers are all non-negative and you can use a number as many times as you want.

```javascript
const bestSum = (target, numbers) => {
    // returns subarry of numbers or null;
}

```

## Solution

From each node, you have the `numbers.length` branches.

If `target - numbers[i]` < 0, that value will return null.

If `target - numbers[i]` === 0. that value will return the edge that was subtracted as an array, ie `numbers[i].

When bubbling up, if one child returns `null` and one child returns an array, the array will take priority.
If a node can return multiple options, we should return the shortest array.

## Complexity

Without memoization: O(n^m)
With memoization: O(m * n)