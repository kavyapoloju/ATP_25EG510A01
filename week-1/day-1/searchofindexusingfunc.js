
function searchAnElement(marks,se)
{

for(let index=0;index<marks.length;index++){
    if(marks[index]==se)
    {
        return index
    }
}
return "not found"
}
let a=[99,29,78,67,98]
console.log(searchAnElement(a,78))