function findBig(a, b, c) {
  let big = a;

  if (b > big) {
    big = b;
  }

  if (c > big) {
    big = c;
  }

  return big;
}

console.log(findBig(10, 25, 15));