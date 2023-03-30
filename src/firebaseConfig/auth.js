import { app } from "./";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   sendPasswordResetEmail
} from "firebase/auth";
import { setUser, removeUser } from "../store/localSlice";
import { ToastAndroid } from "react-native";
import { store } from "../store";
import { createAccount, montraDB } from "./montraDB";
import { off, ref } from "firebase/database";
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

// !Register
export const register = async (email, password, username) => {
   try {
      const { user } = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      );
      await updateProfile(auth.currentUser, {
         displayName: username,
      });
      createAccount(user.uid)
      return user;
   } catch (err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
};

// !Login
export const login = async (email, password) => {
   try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
   } catch (err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
};

// !With Google
export const signInWithGoogle = async () => {
   try {
      const { user } = await signInWithPopup(auth, provider)
      // GoogleAuthProvider.credentialFromResult(result)
      // const token = credential.accessToken

      console.log(user);



   } catch(err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
}

// !Logout
export const logout = async (user) => {
   try {
      off(ref(montraDB, `users/${user.uid}`), 'value')
      store.dispatch(removeUser())
      return await signOut(auth);
   } catch (err) {
      console.log(err.code);
   }
};

// !User state changed
onAuthStateChanged(auth, async (user) => {
   if (user) {
      console.log(1);
      store.dispatch(setUser(user))
   } else {
      console.log("User is signed out");
   }
});

// !passwordReset
export const passwordReset = async (email) => {
   try {
      await sendPasswordResetEmail(auth, email)
      return "Gonderildi";
   } catch(err) {
      console.log(err.code);
   }
}