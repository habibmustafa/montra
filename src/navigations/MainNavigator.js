import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screen/onboarding/Onboarding";
import Register from "../screen/auth/Register";
import Login from "../screen/auth/Login";
import ForgotPassword from "../screen/auth/ForgotPassword";
import ForgotPasswordEmailSent from "../screen/auth/ForgotPasswordEmailSent";
import SetupPin from "../screen/onboarding/SetupPin";
import { useSelector } from "react-redux";
import SetupAccount from "../screen/setup/SetupAccount";
import AddAccount from "../screen/profile/account/AddAccount";
import Success from "../screen/setup/Success";
import TabNavigator from "./TabNavigator";
import Account from "../screen/profile/account/Account";
import Income from "../screen/operation/Income";
import Expense from "../screen/operation/Expense";
import Transfer from "../screen/operation/Transfer";
import Notification from "../screen/home/notification/Notification";
import NotificationRight from "../screen/home/notification/NotificationRight";
import DetailAccount from "../screen/profile/account/DetailAccount";
import EditAccount from "../screen/profile/account/EditAccount";
import DetailTransaction from "../screen/transaction/DetailTransaction";
import Settings from "../screen/profile/settings/Settings";
import Currency from "../screen/profile/settings/Currency"
import Language from "../screen/profile/settings/Language"
import Theme from "../screen/profile/settings/Theme"
import NotificationSettings from "../screen/profile/settings/NotificationSettings"
import ExportData from "../screen/profile/exportData/ExportData";
import ReportIntro from "../screen/financial_report/ReportIntro";
import FinancialReport from "../screen/financial_report/FinancialReport";

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
               animation: "fade_from_bottom",
               headerTitleAlign: "center",
               headerShadowVisible: false,
               statusBarAnimation: 'fade',

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
                     options={{
                        // animation: "fade_from_bottom",
                     }}
                  />
                  <Stack.Screen
                     name="DetailAccount"
                     component={DetailAccount}
                     options={{
                        headerTitle: "Detail account",
                        // animation: "fade_from_bottom",
                     }}
                  />
                  <Stack.Screen
                     name="EditAccount"
                     component={EditAccount}
                     options={{
                        headerTitle: "Edit account",
                        headerStyle: { backgroundColor: "#7F3DFF" },
                        headerTintColor: "#FFF",
                     }}
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
                  <Stack.Screen
                     name="DetailTransaction"
                     component={DetailTransaction}
                     options={{
                        headerTitle: "Detail Transaction",
                        headerTintColor: "#FFF",
                     }}
                  />
                  <Stack.Screen
                     name="Notification"
                     component={Notification}
                     options={{
                        animation: "slide_from_right",
                        headerRight: NotificationRight,
                     }}
                  />
                  <Stack.Screen
                     name="Settings"
                     component={Settings}
                  />
                  <Stack.Screen
                     name="Currency"
                     component={Currency}
                  />
                  <Stack.Screen
                     name="Language"
                     component={Language}
                  />
                  <Stack.Screen
                     name="Theme"
                     component={Theme}
                  />
                  <Stack.Screen
                     name="NotificationSettings"
                     component={NotificationSettings}
                     options={{
                        headerTitle: "Notification"
                     }}
                  />
                  <Stack.Screen
                     name="ExportData"
                     component={ExportData}
                     options={{
                        headerTitle: "Export Data"
                     }}
                  />
                  <Stack.Screen
                     name="ReportIntro"
                     component={ReportIntro}
                     options={{
                        headerShown: false,
                     }}
                  />
                  <Stack.Screen
                     name="FinancialReport"
                     component={FinancialReport}
                     options={{
                        headerTitle: 'Financial Report',
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
