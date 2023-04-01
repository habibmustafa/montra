import database from "@react-native-firebase/database";
import { store } from "../store";


const user_uid = JSON.parse(store.getState().local.user).uid;


// !Create User Account
export const createAccount = async () => {
   const res = await database().ref("users/" + user_uid).set({
      accounts: false,
      transfers: false,
   })

   return res;
};

// !Add Account
export const addAccount = async (id, name, type, balance) => {
   try {
      const res = await database()
         .ref("users/" + user_uid + "/accounts/" + id)
         .update({
            id,
            name,
            type,
            balance,
            transactions: false,
         });

      return res;
   } catch (err) {
      console.log(err.code);
   }
};

// !Add Transaction
export const addTransaction = async (accounts_id, transaction_id, type, amount, description, category, balance) => {
   try {
      const res = await database().ref("users/" + user_uid + "/accounts/" + accounts_id + "/transactions/" + transaction_id).set({
         id: transaction_id,
         type,
         amount,
         description,
         category,
         timestamp: new Date().getTime()
      })

      await database().ref("users/" + user_uid + "/accounts/" + accounts_id).update({
         balance: type == "income" ? balance + amount : balance - amount
      })

      return res
   } catch(err) {
      console.log(err.code);
   }
}
