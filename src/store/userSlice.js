const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   userDb: false
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserDb: (state, action) => {
         state.userDb = action.payload
      } 
   },
});

export const { setUserDb } = userSlice.actions;

export default userSlice.reducer;