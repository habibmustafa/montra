import database from "@react-native-firebase/database";


// !Create User Account
export const createAccount = async (user_id) => {
   const res = await database().ref("users/" + user_id).set({
      accounts: false,
      transfers: false,
   })

   return res;
};

// !Add Account
export const addAccount = async (user_id, id, name, type, balance) => {
   try {
      const res = await database()
         .ref("users/" + user_id + "/accounts/" + id)
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
