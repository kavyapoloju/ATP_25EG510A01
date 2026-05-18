/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
 /* 1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/

//filter
   let stud=students.filter(
    marksObj => 
        marksObj.marks>=40)

console.log(stud)
//find
let scored=students.find(finding=>finding.marks===92)

console.log( "Find: ",scored)

//map
const graded=students.map(s=>{
    let grade;
    if (s.marks>=90)grade='A';
    else if (s.marks>=75)grade="B";
    else if (s.marks>=60)grade="C";
    else
    grade="D";
    return{...s,grade};
})
console.log(graded)

//findIndex
let stud1=students.findIndex(findings=>findings.name==='Kiran')

console.log("Find index: ",stud1);

//reduce()

 let stud2=students.reduce((sum,s)=>sum+s.marks,0)/students.length
 console.log(stud2)