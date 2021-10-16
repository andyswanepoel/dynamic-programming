# Fibonacci Sequence

## Classic Recursive Function

By implementing the classic recursive function, our time complexity will be O(n^2) and our space complexity will be O(n).

This can be visualized by the nodes in our tree roughly doubling each time.

The [Fibonacci Trees](https://inst.eecs.berkeley.edu/~cs61bl/r//cur/trees/fibonacci-tree.html) page from the University of California, Berkeley shows a good example of the tree growing. We also notice that the left and right side of the tree share a lot of commmon nodes. This gives us a good opportunity to store values and reduce our time complexity

Here is the [classic recursive function implementation in Javascript](fib.js).

## Recursive Function with Memoization

As seen in the UC Berkeley example, the left and right side of the tree share a lot of common nodes. If we have already calculate the fib of that node, we shouldn't need to calculate it again. This will allow us to cut out time complexity down to O(n).

For each call, we add an additional base case to check if that value of fib has been calculated.
If it has, we return it. If it hasn't, we can add it to the memo and return that value.

Here is the [recursive function with memoization implementation in Javascript](fib-memo.js).
