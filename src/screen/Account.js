import {
   View,
   Text,
   StatusBar,
   Image,
   ScrollView,
   TouchableHighlight,
   TouchableNativeFeedback
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import MaterialButton from "../components/MaterialButton";

const Account = ({ navigation }) => {
   const { userDb, allAccountBalance } = useSelector((state) => state.user);

   return (
      <View className="bg-white h-full pb-5">
         <StatusBar
            backgroundColor="#FFF"
            animated={true}
            barStyle="dark-content"
         />

         {/* Account balance */}
         <View className="account-balance justify-center items-center h-[216px] mt-2.5">
            <Image
               className="h-full w-full absolute"
               style={{ resizeMode: "cover" }}
               source={require("../assets/account.png")}
            />
            <View>
               <Text className="font-medium text-sm text-light-20">
                  Account Balance
               </Text>
               <Text className="font-semibold text-[40px] text-dark-75">
                  ₼{allAccountBalance.toFixed(2)}
               </Text>
            </View>
         </View>

         {/* Accounts */}
         <ScrollView className="accounts flex-1 my-4">
            {Object.values(userDb.accounts).map((account) => (
               <TouchableNativeFeedback
                  key={account.id}
                  background={TouchableNativeFeedback.Ripple("#eee")}
                  onPress={() => {
                     navigation.navigate("Account");
                  }}
               >
                  <View className="flex-row justify-between items-center p-4 border-b-[1px] border-[#F7F7F7] ">
                     {/* svg */}
                     <View className="p-2 bg-light-60 rounded-2xl">
                        <Svg
                           width="32"
                           height="32"
                           viewBox="0 0 32 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <Path
                              d="M23.91 8.09C23.6104 8.02985 23.3056 7.9997 23 8H11C10.7348 8 10.4805 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4805 6.10536 10.7348 6 11 6H23C22.5343 5.37902 21.9304 4.875 21.2361 4.52786C20.5418 4.18073 19.7763 4 19 4H9.00004C8.22381 4 7.45825 4.18073 6.76397 4.52786C6.0697 4.875 5.46578 5.37902 5.00004 6C4.347 6.86342 3.99565 7.91744 4.00004 9V23C4.00004 24.3261 4.52682 25.5979 5.46451 26.5355C6.40219 27.4732 7.67396 28 9.00004 28H23C24.3261 28 25.5979 27.4732 26.5356 26.5355C27.4733 25.5979 28 24.3261 28 23V13C27.9985 11.8329 27.5888 10.7031 26.8418 9.80634C26.0948 8.90959 25.0577 8.30241 23.91 8.09ZM21.24 21C21.1603 21.0096 21.0798 21.0096 21 21C20.2044 21 19.4413 20.6839 18.8787 20.1213C18.3161 19.5587 18 18.7956 18 18C18 17.2044 18.3161 16.4413 18.8787 15.8787C19.4413 15.3161 20.2044 15 21 15C21.3416 14.9978 21.6807 15.0589 22 15.18C22.6374 15.416 23.1757 15.8615 23.5268 16.4434C23.8779 17.0253 24.021 17.7092 23.9327 18.383C23.8444 19.0569 23.5299 19.6808 23.0408 20.1526C22.5516 20.6244 21.9167 20.9161 21.24 20.98V21Z"
                              fill="#5233FF"
                           />
                           <Path
                              d="M21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17C20.4477 17 20 17.4477 20 18C20 18.5523 20.4477 19 21 19Z"
                              fill="#FF64C8"
                           />
                        </Svg>
                     </View>
                     <Text className="flex-1 ml-2 font-semibold text-lg text-black">
                        {account.name}
                     </Text>
                     <Text className="font-semibold text-lg text-dark-50 mr-2">
                        ₼{account.balance.toFixed(2)}
                     </Text>
                  </View>
               </TouchableNativeFeedback>
            ))}
         </ScrollView>

         {/* Add account */}
         <MaterialButton
            title="+ Add new account"
            titleColor="#FFF"
            style={{ marginHorizontal: 16 }}
            onPress={() => {
               navigation.navigate("AddAccount");
            }}
         />
      </View>
   );
};

export default Account;