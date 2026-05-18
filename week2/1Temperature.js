let temperatures=[32,35,28,40,38,30,42];
console.log(temperatures)

//filter() temperatures above 35
console.log("above 35 temparature")
let el1=temperatures.filter(element=> element>35)
console.log(el1)
//map() to convert all temparatures from celisius-> Fahrenheit
    //F=(C*9/5)+32
console.log("convert to Fahrenheit")
       let fahreheint=temperatures.map(temp=>(temp*9/5)+32);
       console.log(fahreheint);

// reduce() to calculate average temperature
const average=temperatures.reduce((sum,temp)=>sum+temp,0)/temperatures.length;
console.log(average);

//find() first temperature above 40
const el2=temperatures.find(temp1=>temp1>40)
console.log(el2)


// findIndex() of temperature 28
const el3=temperatures.findIndex(temp3=>temp3===28)
console.log(el3)