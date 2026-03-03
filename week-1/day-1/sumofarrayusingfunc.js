
function sumofarray(marks)
{
let total=0
for(let index=0;index<marks.length;index++){
    total+=marks[index];

}
return total
}
let a=[99,29,78,67,98]
console.log(sumofarray(a))