import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./screen/Onboarding";
import Register from "./screen/Register";
import Login from "./screen/Login";
import ForgotPassword from "./screen/ForgotPassword";
import ForgotPasswordEmailSent from "./screen/ForgotPasswordEmailSent";
import { useEffect } from "react";
import SetupPin from "./screen/SetupPin";
import { NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { setUserDb } from "./store/userSlice";
import SetupAccount from "./screen/SetupAccount";
import AddAccount from "./screen/AddAccount";
import Success from "./screen/Success";
import TabsNavigator from "./navigations/TabsNavigator";
import SplashScreen from "react-native-splash-screen";
import database from "@react-native-firebase/database";

export default function App() {
   // Router stack
   const { Screen, Navigator } = createNativeStackNavigator();

   const dispatch = useDispatch();

   let { isLoggedIn, user } = useSelector((state) => state.local);

   user = JSON.parse(user);

   console.log(isLoggedIn);

   useEffect(() => {
      console.log("isLoggedIn: ", isLoggedIn);

      if (isLoggedIn) {
         database()
            .ref(`users/${user.uid}`)
            .on("value", (snapshot) => {
               const data = snapshot.val();

               if (snapshot.exists()) {
                  dispatch(setUserDb(data));
               }
            });
      }
   }, [isLoggedIn]);

   useEffect(() => {
      SplashScreen.hide();
   }, []);

   return (
      <NavigationContainer>
         <NativeBaseProvider>
            <PaperProvider>
               <SafeAreaView className="h-full">
                  <StatusBar
                     backgroundColor="#fff"
                     animated={true}
                     barStyle="dark-content"
                  />
                  <Navigator
                     initialRouteName="SetupPin"
                     screenOptions={{
                        headerShown: true,
                        animation: "default",
                        headerTitleAlign: "center",
                        headerShadowVisible: false,
                     }}
                  >
                     {isLoggedIn ? (
                        <Screen
                           name="SetupPin"
                           component={SetupPin}
                           options={{
                              headerShown: false,
                              // animation: "default",
                           }}
                        />
                     ) : (
                        <Screen
                           name="Onboarding"
                           component={Onboarding}
                           options={{
                              headerShown: false,
                           }}
                        />
                     )}

                     <Screen
                        name="Root"
                        component={TabsNavigator}
                        options={{
                           headerShown: false,
                           // animation: "default",
                        }}
                     />

                     <Screen
                        name="Register"
                        component={Register}
                        options={{
                           headerTitle: "Sign Up",
                        }}
                     />
                     <Screen
                        name="Login"
                        component={Login}
                        options={{
                           headerTitle: "Login",
                        }}
                     />
                     <Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{
                           headerTitle: "Forgot Password",
                        }}
                     />
                     <Screen
                        name="ForgotPasswordEmailSent"
                        component={ForgotPasswordEmailSent}
                        options={{
                           headerShown: false,
                        }}
                     />
                     <Screen
                        name="SetupAccount"
                        component={SetupAccount}
                        options={{
                           headerShown: false,
                        }}
                     />
                     <Screen
                        name="AddAccount"
                        component={AddAccount}
                        options={{
                           headerTitle: "Add new account",
                           headerStyle: { backgroundColor: "#7F3DFF" },
                           headerTintColor: "#FFF",
                        }}
                     />
                     <Screen
                        name="Success"
                        component={Success}
                        options={{
                           headerShown: false,
                        }}
                     />
                  </Navigator>
               </SafeAreaView>
            </PaperProvider>
         </NativeBaseProvider>
      </NavigationContainer>
   );
}
