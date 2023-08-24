function canTransport(goatsWeights, raftCapacity, maxTrips) {
  let tripCount = 0;
  let untransportedGoats = [...goatsWeights].sort((a, b) => b - a);

  while (untransportedGoats.length > 0) {
    let weightOnRaft = 0;
    let selectedGoats = [];
    for (let i = 0; i < untransportedGoats.length; i++) {
      if (weightOnRaft + untransportedGoats[i] <= raftCapacity) {
        weightOnRaft += untransportedGoats[i];
        selectedGoats.push(untransportedGoats[i]);
      }
    }

    for (let weight of selectedGoats) {
      let idx = untransportedGoats.indexOf(weight);
      if (idx !== -1) {
        untransportedGoats.splice(idx, 1);
      }
    }
    tripCount++;
  }
  return tripCount <= maxTrips;
}

function findMinRaftCapacity(totalGoats, maxTrips, allGoatsWeights) {
  let start = Math.max(...allGoatsWeights);
  let end = allGoatsWeights.reduce((a, b) => a + b, 0);
  let bestCapacity = end;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (canTransport(allGoatsWeights, mid, maxTrips)) {
      bestCapacity = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return bestCapacity;
}

let originalTestInputs = [
  { total: 6, trips: 2, weights: [26, 7, 10, 30, 5, 4] },
  { total: 6, trips: 2, weights: [4, 8, 15, 16, 23, 42] },
  {
    total: 15,
    trips: 3,
    weights: [
      666, 42, 7, 13, 400, 511, 600, 200, 202, 111, 313, 94, 280, 72, 42,
    ],
  },
];

let additionalTestInputs1 = [
  { total: 3, trips: 1, weights: [5, 5, 5] },
  { total: 4, trips: 2, weights: [1, 2, 3, 4] },
  { total: 5, trips: 2, weights: [10, 10, 10, 10, 10] },
];

let additionalTestInputs2 = [
  { total: 3, trips: 1, weights: [1, 2, 5] },
  { total: 5, trips: 3, weights: [100, 200, 300, 400, 500] },
  { total: 5, trips: 2, weights: [50, 100, 50, 150, 50] },
];

for (let input of originalTestInputs) {
  console.log(findMinRaftCapacity(input.total, input.trips, input.weights));
}
