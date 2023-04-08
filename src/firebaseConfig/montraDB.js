import database from "@react-native-firebase/database";
import messaging from "@react-native-firebase/messaging"
import { store } from "../store";

const user_uid = JSON.parse(store.getState().local.user).uid;

async function firebaseConfig() {
   await messaging().registerDeviceForRemoteMessages();
}
firebaseConfig();

// !Create User Account
export const createAccount = async () => {
   await database().ref(`users/${user_uid}`).set({
      accounts: false, transfers: false,
   });

   return true;
};

// !Add Account
export const addAccount = (data) => {
   database().ref(`users/${user_uid}/accounts/${data.id}`).set({
      ...data,
      transactions: false,
   }).then(() => {
      console.log("Success");
   }).catch(err => console.log(err.code));

};

// !Edit Account
export const editAccount = (data) => {
   database().ref(`users/${user_uid}/accounts/${data.id}`).update({
      name: data.name,
      type: data.type,
      balance: data.balance,
   }).then(() => {
      console.log("Success");
   }).catch(err => console.log(err.code));

};

// !Add Transaction
export const addTransaction = (data, balance) => {
   if (data.type !== "transfer") {
      const accountRef = `users/${user_uid}/accounts/${data.account_id}/`;
      const updates = {};
      // await database().ref(accountRef + `transactions/${data.id}`).set({
      //    ...data, timestamp: new Date().getTime(),
      // });
      updates[accountRef + `transactions/${data.id}`] = {
         ...data, timestamp: new Date().getTime(),
      };
      // updates[accountRef + `balance`] = database.ServerValue.increment(data.type === "income" ? data.amount : -data.amount);
      updates[accountRef + `balance`] = (data.type === "income" ? balance.accountBalance + data.amount : balance.accountBalance - data.amount);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));
   } else {
      const updates = {};
      // await database().ref(`users/${user_uid}/transfers/${data.id}`).set({
      //    ...data, timestamp: new Date().getTime(),
      // });
      updates[`users/${user_uid}/transfers/${data.id}`] = {
         ...data, timestamp: new Date().getTime(),
      };
      // updates[`users/${user_uid}/accounts/${data.from}/balance`] = database.ServerValue.increment(-data.amount);
      // updates[`users/${user_uid}/accounts/${data.to}/balance`] = database.ServerValue.increment(data.amount);
      updates[`users/${user_uid}/accounts/${data.from}/balance`] = (balance.fromBalance - data.amount);
      updates[`users/${user_uid}/accounts/${data.to}/balance`] = (balance.toBalance + data.amount);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));
   }
};

// !Edit Transaction
export const editTransaction = (data, balance) => {

   if (data.type !== "transfer") {
      const accountRef = `users/${user_uid}/accounts/${data.account_id}/`;
      const updates = {};

      updates[accountRef + `transactions/${data.id}`] = {
         ...data, timestamp: new Date().getTime(),
      };

      const change = balance.transactionAmount - data.amount;
      updates[accountRef + `balance`] = (data.type === "income" ? balance.accountBalance - change : balance.accountBalance + change);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));

   } else {
      const updates = {};
      updates[`users/${user_uid}/transfers/${data.id}`] = {
         ...data, timestamp: new Date().getTime(),
      };
      // updates[`users/${user_uid}/accounts/${data.from}/balance`] = database.ServerValue.increment(balance - data.amount);
      // updates[`users/${user_uid}/accounts/${data.to}/balance`] = database.ServerValue.increment(data.amount - balance);
      const change = balance.transactionAmount - data.amount;
      updates[`users/${user_uid}/accounts/${data.from}/balance`] = (balance.fromBalance - change);
      updates[`users/${user_uid}/accounts/${data.to}/balance`] = (balance.toBalance + change);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));
   }
};

// !Remove Transaction
export const removeTransaction = (data, balance) => {
   if (data.type !== "transfer") {
      const updates = {};
      const accountRef = `users/${user_uid}/accounts/${data.account_id}/`;

      database().ref(accountRef + `transactions/${data.id}`).remove().then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));

      updates[accountRef + `balance`] = (data.type === "income" ? balance.accountBalance - data.amount : balance.accountBalance + data.amount);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));
   } else {
      const updates = {};
      const fromAccountRef = `users/${user_uid}/accounts/${data.from}/balance`;
      const toAccountRef = `users/${user_uid}/accounts/${data.to}/balance`;

      database().ref(`users/${user_uid}/transfers/${data.id}`).remove().then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));
      updates[fromAccountRef] = (balance.fromBalance + data.amount);
      updates[toAccountRef] = (balance.toBalance - data.amount);
      database().ref().update(updates).then(() => {
         console.log("Success");
      }).catch((err) => console.log(err.code));

   }
};
