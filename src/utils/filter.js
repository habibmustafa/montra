import transaction from "../screen/transaction/Transaction";

const date = (time, timestamp = new Date().getTime()) => {
   if (time == "DATE") {
      const dateTime = new Date(timestamp).getDate();
      return dateTime;
   } else if (time == "MONTH") {
      const dateTime = new Date(timestamp).getMonth();
      return dateTime;
   } else if (time == "YEAR") {
      const dateTime = new Date(timestamp).getFullYear();
      return dateTime;
   }
};

// Transaction filter
export const transactionsBalanceFilter = (transactions, type, month = date("MONTH"), year = date("YEAR"), allAccountBalance = false) => {
   if (type == "expense" || type == "income") {
      let value = transactions
         .filter((transaction) => transaction.type == type && date("MONTH", transaction.timestamp) == month && date("YEAR", transaction.timestamp) == year)
         .map((transaction) => transaction.amount)
         .reduce((acc, curr) => acc + curr, 0)
         .toFixed(2);

      return value;
   } else if (type == "all") {
      const expense = transactions
         .filter((transaction) => transaction.type == "expense" && date("MONTH", transaction.timestamp) > month && date("YEAR", transaction.timestamp) >= year)
         .map((transaction) => transaction.amount)
         .reduce((acc, curr) => acc + curr, 0);

      const income = transactions
         .filter((transaction) => transaction.type == "income" && date("MONTH", transaction.timestamp) > month && date("YEAR", transaction.timestamp) >= year)
         .map((transaction) => transaction.amount)
         .reduce((acc, curr) => acc + curr, 0);

      const detucted = income - expense;
      const allBalance = allAccountBalance - detucted;

      return allBalance.toFixed(2);
   }
};

// .filter((transaction) => transaction.type === "expense")

export const lastSpendFilter = (transactions, num) => {
   let value = transactions
      .filter((transaction) => transaction.type === "expense").sort((a, b) => a.timestamp - b.timestamp).map((transaction) => transaction.amount).slice(-num);

   return value;
};

export const accountTransactions = (user, id) => {
   let value = user.accounts[id].transactions ? Object.values(user.accounts[id].transactions) : [];
   user.transfers && Object.values(user.transfers).filter(transaction => transaction.to === id || transaction.from === id).forEach(transaction => value.push(transaction));

   value = value.sort((a, b) => b.timestamp - a.timestamp);
   return value;
};

export const transactionFilter = (transactions, filter=['expense', 'income', 'transfer'], sort='Newest') => {
   let value = transactions.filter(transaction => filter.includes(transaction.type))

   if(sort === "Highest") {
      value = value.sort((a,b) => b.amount - a.amount)
   }
   else if(sort === "Lowest") {
      value = value.sort((a,b) => a.amount - b.amount)
   }
   else if(sort === "Newest") {
      value = value.sort((a,b) => b.timestamp - a.timestamp)
   }
   else if(sort === "Oldest") {
      value = value.sort((a,b) => a.timestamp - b.timestamp)
   }


   return value
}
