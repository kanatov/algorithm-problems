function numIslands(grid) {
  function exploreIsland(coordinate, set, grid) {
    const explore = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];
    const q = [coordinate];
    while (q.length) {
      const [qx, qy] = q.shift();
      for (const [ex, ey] of explore) {
        const newX = ex + qx;
        const newY = ey + qy;
        const str = `${newX},${newY}`;
        if (
          grid[newY] !== undefined &&
          grid[newY][newX] !== undefined &&
          !set.has(str) &&
          grid[newY][newX] === "1"
        ) {
          set.add(str);
          q.push([newX, newY]);
        }
      }
    }
  }
  const set = new Set();
  let islands = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === "0" || set.has(`${x},${y}`)) continue;
      islands++;
      exploreIsland([x, y], set, grid);
    }
  }
  return islands;
}

const test = (grid, result) => {
  console.log(numIslands(grid), result);
};

test(
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ],
  1
);

test(
  [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ],
  3
);

test(
  [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ],
  1
);

test(
  [
    ["1", "0", "1"],
    ["1", "1", "1"],
    ["1", "0", "1"],
  ],
  1
);

test(
  [
    ["1", "0", "1"],
    ["0", "1", "0"],
    ["1", "0", "1"],
  ],
  5
);
test(
  [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ],
  1
);
