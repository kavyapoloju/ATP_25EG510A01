const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//insert at 2
employees.splice(2,0,{eno:104,name:"varsha",marks:[10,20]})
console.log(employees)

//remove kiran details
 employees.splice(4,1)
console.log(employees)

//upadate sneha marks 95 t0 75

let result=employees.find(emp => emp.name==="Sneha")
result.marks.splice(2,1,75)
console.log(employees)