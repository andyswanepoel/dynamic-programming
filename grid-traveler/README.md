# Grid Traveler

Problem statement:
You are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or to the right.

In how many ways can you travel to the goal on a grid with dimensions m \* n?

ie, m rows and n columns.

## Solution

Similar to the fibonacci solution, we can break each grid down into smaller sub-grids. For example if a player starts with a move down on a 4x3 grid, they have effectively created a new 3x3 grid for which we need to now calculate the number of moves. If the first move was to the right, they would have effectively created a new 4x2 grid.

When either of the dimensions of a grid are 1, there is only 1 way a player can move.
If either of the dimensions of a grid are 0, there will be 0 ways a player can move.
These two will make up our base cases.

Similar to fibonacci, we can implement memoization to decrease out time complexity.

Here is the [grid traveler implementation in Javascript](grid-traveler.js).
