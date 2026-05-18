function findBig(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

let result = findBig(12, 45, 30);
console.log("Big number is:", result);