import { app } from "./";
import { getDatabase, ref, set } from "firebase/database";

export const montraDB = getDatabase(app);

// !Create User Account
export const createAccount = (user_id) => {
   set(ref(montraDB, "users/" + user_id), {
      accounts: false,
      transfers: false 
   })
}

// !Add Account
export const addAccount = async (user_id, id, name, type, balance) => {
   try {
      const res = await set(ref(montraDB, "users/" + user_id + "/accounts/" + id), {
         id,
         name,
         type,
         balance,
         transactions: false
      })
      return res
   } catch(err) {
      console.log(err.code);
   }
}