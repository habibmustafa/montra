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
export const transactionsBalanceFilter = (transactions, type, month = date("MONTH"), year = date("YEAR")) => {

   let value = transactions
      .filter(
         (transaction) =>
            transaction.type == type &&
            date("MONTH", transaction.timestamp) == month &&
            date("YEAR", transaction.timestamp) == year
      )
      .map((transaction) => transaction.amount)
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2);

   return  value;
};

// .filter((transaction) => transaction.type === "expense")

export const lastSpendFilter = (transactions, num) => {
   let value = transactions.filter(transaction => transaction.type == "expense").map(transaction => transaction.amount).slice(-num)

   return value
}
