const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   userDb: false,
   allAccountBalance: null,
   transactions: null,
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserDb: (state, action) => {
         state.userDb = action.payload;

         // allAccountBalance
         const balances = Object.values(action.payload.accounts).map(
            (account) => account.balance
         );
         state.allAccountBalance = balances.reduce(
            (acc, curr) => acc + curr,
            0
         );

         // transactions
         let transaction = [];
         const tr = Object.values(action.payload.accounts).map(
            (account) => account.transactions
         );
         tr.forEach((item) => {
            if (item) {
               Object.values(item).map((item2) => transaction.push(item2));
            }
         });
         state.transactions = transaction.sort(
            (a, b) => b.timestamp - a.timestamp
         );
      },
   },
});

export const { setUserDb } = userSlice.actions;

export default userSlice.reducer;
