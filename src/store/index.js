import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localReducer from "./localSlice";
import userReducer from "./userSlice";
// import transactionReducer from "./transactionSlice";

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
 };
 
const persistedReducer = persistReducer(persistConfig, localReducer);
// const transactionPresistedReducer = persistReducer(persistConfig, transactionReducer);

const store = configureStore({
   reducer: {
      local: persistedReducer,
      user: userReducer
      // transaction: transactionReducer,
   },
   middleware: getDefaultMiddleware({serializableCheck: false})
});


const persistor = persistStore(store);

export { store, persistor };