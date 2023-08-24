# Raft Problem Solver

## Overview

This program is designed to determine the minimum raft capacity required to transport all of Georgi's goats across a river. Georgi's strategy is to transport the heaviest goats first. In each trip, he first takes the heaviest untransported goat, then the next heaviest that fits, and continues this process until no more goats can be accommodated on the raft.

## Implementation

### 1. `canTransport(goatsWeights, raftCapacity, maxTrips)`:

This function checks if it's feasible to transport all goats with a given raft capacity within a specific number of trips.

- **goatsWeights**: An array of integers representing the weights of each goat.
- **raftCapacity**: An integer representing the raft's capacity.
- **maxTrips**: The maximum number of trips allowed.

### 2. `findMinRaftCapacity(totalGoats, maxTrips, allGoatsWeights)`:

Utilizing a binary search approach, this function determines the minimal raft capacity needed.

- **totalGoats**: Total number of goats.
- **maxTrips**: The maximum number of trips allowed.
- **allGoatsWeights**: An array of integers representing the weights of each goat.

### 3. Test Cases:

Predefined test cases are provided within the code. For instance:

{ total: 6, trips: 2, weights: [26, 7, 10, 30, 5, 4] }

The output for the above test is `42`.

## How to Run

1. Ensure you have Node.js installed.
2. Navigate to the directory containing the program.
3. Execute the following command: node raftProblem.js

### Adding New Tests

To add new test cases, append your test object (with `total`, `trips`, and `weights` properties) to the appropriate `testInputs` array and rerun the program.
