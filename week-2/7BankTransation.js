const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//  filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log("Credit Transactions:", creditTransactions);


//  map() to extract only transaction amounts
const transactionAmounts = transactions.map(t => t.amount);
console.log("Transaction Amounts:", transactionAmounts);


//  reduce() to calculate final account balance
let finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);

console.log("Final Account Balance:", finalBalance);



// (credit adds money, debit subtracts money)
const finalBalance1 = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);

console.log("Final Account Balance:", finalBalance1);


//  find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log("First Debit Transaction:", firstDebit);


//  findIndex() of transaction with amount 10000
const indexOf10000 = transactions.findIndex(t => t.amount === 10000);
console.log("Index of transaction with amount 10000:", indexOf10000);
     
    
  