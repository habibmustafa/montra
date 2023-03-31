const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   userDb: false,
   allAccountBalance: null
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserDb: (state, action) => {
         state.userDb = action.payload

         // allAccountBalance
         const balances = Object.values(action.payload.accounts).map(account => account.balance);
         state.allAccountBalance = balances.reduce((acc, curr) => acc + curr, 0);
      } 
   },
});

export const { setUserDb } = userSlice.actions;

export default userSlice.reducer;