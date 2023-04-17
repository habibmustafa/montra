const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   user: null,
   isLoggedIn: false,
   pin: false,
   language: 'en'
};

export const localSlice = createSlice({
   name: "local",
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = JSON.stringify(action.payload);
         state.isLoggedIn = true;
      },
      removeUser: (state) => {
         state.user = null;
         state.isLoggedIn = false;
         state.pin = false;
      },
      setPin: (state, action) => {
         state.pin = action.payload
      },
      setLanguage: (state, action) => {
         state.language = action.payload
      }
   },
});

export const { setUser, removeUser, setPin, setLanguage } = localSlice.actions;

export default localSlice.reducer;
