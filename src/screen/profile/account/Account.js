import {
   View,
   Text,
   StatusBar,
   Image,
   ScrollView,
   TouchableNativeFeedback,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import MaterialButton from "../../../components/MaterialButton";
import SvgIcons from "../../../utils/SvgIcons";

const Account = ({ navigation }) => {
   const { userDb, allAccountBalance } = useSelector((state) => state.user);

   const colors = {
      "Cash": "bg-green-20",
      "Credit card": 'bg-red-20',
      "Savings": 'bg-blue-20',
      "Investment": 'bg-yellow-20',
      "Business": 'bg-violet-20',
      "Other/miscellaneous": 'bg-dark-25',
   }
   return (
      <View className="bg-white h-full pb-5">
         {/* Account balance */}
         <View className="account-balance justify-center items-center h-[216px] mt-2.5">
            <Image
               className="h-full w-full absolute"
               style={{ resizeMode: "cover" }}
               source={require("../../../assets/account.png")}
            />
            <View className="items-center">
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
                     navigation.navigate("DetailAccount", { ...account });
                  }}
               >
                  <View className="flex-row justify-between items-center p-4 border-b-[1px] border-[#F7F7F7] ">
                     {/* svg */}
                     <View className={`p-2 bg-light-60 rounded-2xl`}>
                        <SvgIcons icon={account.type} />
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
