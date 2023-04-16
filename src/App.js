import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDb } from "./store/userSlice";
import database from "@react-native-firebase/database";
import MainNavigator from "./navigations/MainNavigator";
import SplashScreen from "react-native-splash-screen";
import NetInfo from "@react-native-community/netinfo";
import { ToastProvider } from "react-native-toast-notifications";
import { Alert, Dimensions, StatusBar, Text, View } from "react-native";
import messaging from "@react-native-firebase/messaging";

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
      const unsubscribe = NetInfo.addEventListener(async state => {
         console.log("Connection type", state.type);
         console.log("Is connected?", state.isConnected);
         if (state.isConnected) {
            await database().goOnline();
         } else {
            await database().goOffline();
         }
      });

      messaging().onMessage(async remoteMessage => {
         Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
      });

      return () => {
         unsubscribe();
      };
   }, []);

   const Toast = (toast) => (
      <View style={{ width: Dimensions.get("window").width - 32, marginTop: StatusBar.currentHeight }}
            className={`w-full rounded-lg py-1 px-2 bg-red-80 ${toast.type === "success" && "bg-green-80"}`}>
         <Text className="text-center font-medium text-light-80">{toast.message}</Text></View>
   );

   return (
      <PaperProvider>
         <ToastProvider animationType="zoom-in" placement="top" duration={2500}
                        renderToast={(toast) => Toast(toast)}>
            <View className="h-full">
            <MainNavigator />
            </View>
         </ToastProvider>
      </PaperProvider>
   )
}
