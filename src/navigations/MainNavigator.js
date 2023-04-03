import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screen/Onboarding";
import Register from "../screen/Register";
import Login from "../screen/Login";
import ForgotPassword from "../screen/ForgotPassword";
import ForgotPasswordEmailSent from "../screen/ForgotPasswordEmailSent";
import SetupPin from "../screen/SetupPin";
import { useSelector } from "react-redux";
import SetupAccount from "../screen/SetupAccount";
import AddAccount from "../screen/AddAccount";
import Success from "../screen/Success";
import TabNavigator from "./TabNavigator";
import Account from "../screen/Account";
import Income from "../screen/Income";
import Expense from "../screen/Expense";
import Transfer from "../screen/Transfer";

export default function MainNavigator() {
   // Router stack
   const Stack = createNativeStackNavigator();

   const { isLoggedIn } = useSelector((state) => state.local);

   console.log("IsLoggedIn: ", isLoggedIn);

   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="SetupPin"
            screenOptions={{
               headerShown: true,
               animation: "default",
               headerTitleAlign: "center",
               headerShadowVisible: false,
            }}
         >
            {isLoggedIn ? (
               <>
                  <Stack.Screen
                     name="SetupPin"
                     component={SetupPin}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="Tab"
                     component={TabNavigator}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="SetupAccount"
                     component={SetupAccount}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="AddAccount"
                     component={AddAccount}
                     options={{
                        headerTitle: "Add new account",
                        headerStyle: { backgroundColor: "#7F3DFF" },
                        headerTintColor: "#FFF",
                     }}
                  />
                  <Stack.Screen
                     name="Success"
                     component={Success}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="Account"
                     component={Account}
                     options={{animation:'slide_from_right'}}
                  />
                  <Stack.Screen
                     name="Income"
                     component={Income}
                     options={{
                        headerStyle: { backgroundColor: "#00A86B" },
                        headerTintColor: "#FFF",
                     }}
                  />
                  <Stack.Screen
                     name="Expense"
                     component={Expense}
                     options={{
                        headerStyle: { backgroundColor: "#FD3C4A" },
                        headerTintColor: "#FFF",
                     }}
                  />
                  <Stack.Screen
                     name="Transfer"
                     component={Transfer}
                     options={{
                        headerStyle: { backgroundColor: "#0077FF" },
                        headerTintColor: "#FFF",
                     }}
                  />
               </>
            ) : (
               <>
                  <Stack.Screen
                     name="Onboarding"
                     component={Onboarding}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="Register"
                     component={Register}
                     options={{
                        headerTitle: "Sign Up",
                     }}
                  />
                  <Stack.Screen
                     name="Login"
                     component={Login}
                     options={{
                        headerTitle: "Login",
                     }}
                  />
                  <Stack.Screen
                     name="ForgotPassword"
                     component={ForgotPassword}
                     options={{
                        headerTitle: "Forgot Password",
                     }}
                  />
                  <Stack.Screen
                     name="ForgotPasswordEmailSent"
                     component={ForgotPasswordEmailSent}
                     options={{
                        headerShown: false,
                     }}
                  />
               </>
            )}
         </Stack.Navigator>
      </NavigationContainer>
   );
}
