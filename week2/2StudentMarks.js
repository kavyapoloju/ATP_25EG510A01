const courses = ["javascript", "react", "node", "mongodb", "express"];


//  filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Courses length > 5:", longCourses);


//  map() to convert course names to uppercase
const upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase Courses:", upperCourses);


//  reduce() to generate a single string
const courseString = courses
  .map(course => course.toUpperCase())
  .reduce((acc, course, index) => {
    return index === 0 ? course : acc + " | " + course;
  }, "");

console.log("Formatted String:", courseString);


//  find() the course "react"
const foundReact = courses.find(course => course === "react");
console.log("Found Course:", foundReact);


//  findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of node:", nodeIndex);