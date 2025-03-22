class Node {
  constructor(val = {}, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.q = null;
    this.tail = null;
    this.length = 0;
  }
  set(val) {
    const newNode = new Node(val);
    if (!this.q) {
      this.q = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
  }
  get() {
    if (!this.length || !this.q) return null;
    const first = this.q;
    this.q = this.q.next;
    this.length--;
    return first.val;
  }
}

function minKnightMoves(startX = 0, startY = 0, targetX = 0, targetY = 0) {
  if (startX === targetX && startY === targetY) return 0;
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const set = new Set([`${startX},${startY}`]);
  const queue = new Queue();
  queue.set({
    x: startX,
    y: startY,
    step: 0,
  });
  while (queue.length) {
    const { x, y, step } = queue.get();
    const newStep = step + 1;
    if (newStep > 10) break;
    for (const [mx, my] of moves) {
      const newX = x + mx;
      const newY = y + my;
      if (newX < 0 || newX > 7 || newY < 0 || newY > 7) continue;
      if (newX === targetX && newY === targetY) return newStep;
      const newStr = `${newX},${newY}`;
      if (!set.has(newStr)) {
        set.add(newStr);
        queue.set({ x: newX, y: newY, step: newStep });
      }
    }
  }
  return 0;
}

console.log("\n\n   Start: (A, 1)");
console.log("   A B C D E F G H");
console.log(" .-----------------.");
for (let i = 0; i < 8; i++) {
  const row = [];
  for (let j = 0; j < 8; j++) {
    row.push(minKnightMoves(0, 0, i, j));
  }
  console.log(i + 1 + "|", row.join(" "), "|");
}
console.log(" '-----------------'");

console.log("\n\n   Start: (E, 5)");
console.log("   A B C D E F G H");
console.log(" .-----------------.");
for (let i = 0; i < 8; i++) {
  const row = [];
  for (let j = 0; j < 8; j++) {
    row.push(minKnightMoves(4, 4, j, i));
  }
  console.log(i + 1 + "|", row.join(" "), "|");
}
console.log(" '-----------------'");
