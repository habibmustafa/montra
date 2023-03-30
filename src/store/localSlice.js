const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   user: null,
   isLoggedIn: false,
   pin: false,
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
      } 
   },
});

export const { setUser, removeUser, setPin } = localSlice.actions;

export default localSlice.reducer;


// if (!pin) {
//    if (!registerPin.first) {
//       setRegisterPin({ ...pin, first: enteredPin });
//    } else {
//       setRegisterPin({ ...pin, second: enteredPin });

//       if (registerPin.first == registerPin.second) {
//          dispatch(setPin(registerPin.second));
//       } else {
//          setRegisterPin({ first: "", second: "" });
//       }
//    }
// } 

// else {

// const [registerPin, setRegisterPin] = useState({ first: "", second: "" });
// {"Let’s  setup your PIN"}
//                {registerPin.second && "Ok. Re type your PIN again."}