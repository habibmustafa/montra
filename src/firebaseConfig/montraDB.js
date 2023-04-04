import database from "@react-native-firebase/database";
import { store } from "../store";

const user_uid = JSON.parse(store.getState().local.user).uid;

// !Create User Account
export const createAccount = async () => {
   await database().ref(`users/${user_uid}`).set({
      accounts: false, transfers: false,
   });

   return true;
};

// !Add Account
export const addAccount = async (data) => {
   try {
      await database().ref(`users/${user_uid}/accounts/${data.id}`).set({
         ...data,
         transactions: false,
      });

      return true;
   } catch (err) {
      console.log(err.code);
   }
};

// !Edit Account
export const editAccount = async (data) => {
   try {
      await database().ref(`users/${user_uid}/accounts/${data.id}`).update({
         name: data.name,
         type: data.type,
         balance: data.balance,
      });

      return true;
   } catch (err) {
      console.log(err.code);
   }
};

// !Add Transaction
export const addTransaction = async (data) => {
   try {
      if (data.type !== "transfer") {
         const accountRef = `users/${user_uid}/accounts/${data.account_id}/`;
         const updates = {};
         // await database().ref(accountRef + `transactions/${data.id}`).set({
         //    ...data, timestamp: new Date().getTime(),
         // });
         updates[accountRef + `transactions/${data.id}`] = {
            ...data, timestamp: new Date().getTime(),
         };
         updates[accountRef + `balance`] = database.ServerValue.increment(data.type === "income" ? data.amount : -data.amount);
         await database().ref().update(updates);

         return true;
      } else {
         const updates = {};
         // await database().ref(`users/${user_uid}/transfers/${data.id}`).set({
         //    ...data, timestamp: new Date().getTime(),
         // });
         updates[`users/${user_uid}/transfers/${data.id}`] = {
            ...data, timestamp: new Date().getTime(),
         };
         updates[`users/${user_uid}/accounts/${data.from}/balance`] = database.ServerValue.increment(-data.amount);
         updates[`users/${user_uid}/accounts/${data.to}/balance`] = database.ServerValue.increment(data.amount);
         await database().ref().update(updates);

         return true;
      }
   } catch (err) {
      console.log(err.code);
   }
};

// !Remove Transaction
export const removeTransaction = async (data) => {
   try {
      if (data.type !== "transfer") {
         const updates = {};
         const accountRef = `users/${user_uid}/accounts/${data.account_id}/`;

         await database().ref(accountRef + `transactions/${data.id}`).remove();
         updates[accountRef + `balance`] = database.ServerValue.increment(data.type === "income" ? -data.amount : data.amount);
         await database().ref().update(updates);
         return true;
      } else {
         const updates = {};
         const fromAccountRef = `users/${user_uid}/accounts/${data.from}/balance`;
         const toAccountRef = `users/${user_uid}/accounts/${data.to}/balance`;

         await database().ref(`users/${user_uid}/transfers/${data.id}`).remove();
         updates[fromAccountRef] = database.ServerValue.increment(-data.amount);
         updates[toAccountRef] = database.ServerValue.increment(data.amount);
         await database().ref().update(updates);

         return true;
      }
   } catch (err) {
      console.log(err.code);
   }
};
