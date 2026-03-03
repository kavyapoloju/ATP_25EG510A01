const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];
let newEmp = {
  eno: 106,
  name: "Teja",
  marks: [72, 75, 80]
};

employees.splice(1, 0, newEmp);

console.log(employees);
let index = employees.findIndex(emp => emp.name === "Kiran");

if (index !== -1) {
  employees.splice(index, 1);
}

console.log(employees);
let sneha = employees.find(emp => emp.name === "Sneha");

if (sneha) {
  sneha.marks[sneha.marks.length - 1] = 75;
}

console.log(employees);