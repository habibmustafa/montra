import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setUserDb } from "./store/userSlice";
import database from "@react-native-firebase/database";
import MainNavigator from "./navigations/MainNavigator";
import SplashScreen from "react-native-splash-screen";
import NetInfo from '@react-native-community/netinfo';

export default function App() {
   const dispatch = useDispatch();

   let { isLoggedIn, user } = useSelector((state) => state.local);

   user = JSON.parse(user);

   useEffect(() => {

      if (isLoggedIn) {
         database().ref(`users/${user.uid}`).on("value", (snapshot) => {
            const data = snapshot.val();

            if (snapshot.exists()) {
               dispatch(setUserDb(data));
            }
         });
      }
   }, [isLoggedIn]);

   useEffect(() => {
      SplashScreen.hide();
      const unsubscribe = NetInfo.addEventListener( async state => {
         console.log("Connection type", state.type);
         console.log("Is connected?", state.isConnected);
         if (state.isConnected) {
            await database().goOnline();
         } else {
            await database().goOffline();
         }
      })

      return () => {
         unsubscribe();
      };
   }, []);

   return (
      <NativeBaseProvider>
         <PaperProvider>
            <SafeAreaView className="h-full">
               <MainNavigator />
            </SafeAreaView>
         </PaperProvider>
      </NativeBaseProvider>
   );
}
