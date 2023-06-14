/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;

if it occurs within (and including) 60 minutes 
of another transaction with the same name in a different city.

You are given an array of strings transaction where transactions[i] 
consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the 
second transaction occurs within a difference of 60 minutes, 
have the same name and is in a different city. Similarly the second one is invalid too.
*/

const transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]

function CheckInvalidTransactions(transactions){
    let invalidTransactions = []
    //loop through the array of transactions
    for(let i=0; i<transactions.length; i++){
        let firstTransaction = transactions[i].split(",")
        for(let j=i+1; j<transactions.length; j++){
            let secondTransaction = transactions[j].split(",")
            //check if the transaction have the same name in different cities 
            if(firstTransaction[0] == secondTransaction[0] && firstTransaction[3] != secondTransaction[3]){
                //find the difference in time 
                let difference = parseInt(secondTransaction[1]) - parseInt(firstTransaction[1])
                if(Math.abs(difference) <= 60) {
                    invalidTransactions.push(firstTransaction)
                    invalidTransactions.push(secondTransaction)
                }
            }
        }
        if(firstTransaction[2] > 1000){
            invalidTransactions.push(firstTransaction)
        } 
    }
    return [invalidTransactions.join(",").toString()]
}
console.log(CheckInvalidTransactions(transactions))