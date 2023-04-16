import { setUser, removeUser } from "../store/localSlice";
import { ToastAndroid } from "react-native";
import { store } from "../store";
import { createAccount } from "./montraDB";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

GoogleSignin.configure({
   webClientId:
      "281862918534-476ol4ntpqj7n4us57t4t9kkad0d0oeh.apps.googleusercontent.com",
});

// !Register
export const register = async (data) => {
   try {
      const { user } = await auth().createUserWithEmailAndPassword(
         data.email,
         data.password
      );
      await auth().currentUser.updateProfile({
         displayName: data.name,
      });
      await createAccount();
      return user;
   } catch (err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
};

// !Login
export const login = async (data) => {
   try {
      const { user } = await auth().signInWithEmailAndPassword(data.email, data.password);
      return user;
   } catch (err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
};

// !With Google
export const signInWithGoogle = async () => {
   try {
      await GoogleSignin.hasPlayServices({
         showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const user = await auth().signInWithCredential(googleCredential);
      if (user.additionalUserInfo.isNewUser) {
         await createAccount();
      }

      // Sign-in the user with the credential
      return user.user;
   } catch (err) {
      console.log(err.code);
      ToastAndroid.show(err.code, 200);
   }
};

// Update username
export const updateUsername = async (username) => {
   try {
      await auth().currentUser.updateProfile({
         displayName: username,
      });
   } catch (err) {
      console.log(err);
   }
}

// !Logout
export const logout = async (user) => {
   try {
      database().ref(`users/${user.uid}`).off("value");
      console.log("Logout");
      return await auth().signOut();
   } catch (err) {
      console.log(err.code);
   }
};

// !User state changed
auth().onAuthStateChanged((user) => {
   if (user) {
      console.log("StateChanged: ", user);
      store.dispatch(setUser(user));
   } else {
      store.dispatch(removeUser());
      console.log("User is signed out");
   }
});

// !passwordReset
export const passwordReset = async (email) => {
   try {
      await sendPasswordResetEmail(auth, email);
      return "Gonderildi";
   } catch (err) {
      console.log(err.code);
   }
};
