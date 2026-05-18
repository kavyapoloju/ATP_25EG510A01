
//shopping 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


   /* 1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"*/
//filter
let el1=cart.filter(instackObj=> instackObj.inStock)
console.log(el1)

//map
let el2=cart.map(testobj=>({name:testobj.name,totalPrice:testobj.price*testobj.quantity}))
console.log(el2)
//reduce
let grandtotal=cart.reduce((total,item)=>total+(item.price*item.quantity),0)
console.log(grandtotal)


//find

let tst=cart.find(tst1=>tst1.name === 'Mouse')
console.log(tst)
//findIndex

let test=cart.findIndex(element=> element.name === 'Keyboard')
console.log(test)









