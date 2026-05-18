
// Exercise 1: Copy & Extend Array


let fruits = ["apple", "banana"];

// Copy using spread and add "orange"
let moreFruits = [...fruits, "orange"];

console.log("Exercise 1 Output:");
console.log(fruits);
console.log(moreFruits);



// Exercise 2: Update User Object


let user = {
  name: "Ravi",
  city: "Hyderabad"
};

// Clone object and add new property
let updatedUser = { ...user, age: 25 };

console.log("\nExercise 2 Output:");
console.log(user);
console.log(updatedUser);



// Exercise 3: Sum Using REST


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("\nExercise 3 Output:");
console.log(sum(10, 20, 30));  // 60
console.log(sum(5, 15));      // 20
console.log(sum(1, 2, 3, 4)); // 10