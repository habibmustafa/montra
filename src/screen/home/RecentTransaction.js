import React, { memo } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import TransactionItem from "../../components/TransactionItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { l } from "../../localication";

const date = (params = new Date().getTime()) => {
   const dateTime = new Date(params).getDate();
   return dateTime;
};

const RecentTransaction = () => {
   const navigation = useNavigation();
   const { transactions } = useSelector((state) => state.user);

   return (
      <View className="recent-transaction px-4 mt-7">
         {/* header */}
         <View className="flex-row justify-between mb-3">
            <Text className="font-semibold text-lg text-dark-25">
               {l('recenttransactions')}
            </Text>
            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#D3BDFF"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  navigation.navigate("Transaction");
               }}
               className="px-4 py-2 bg-violet-20 rounded-[40px]"
            >
               <Text className="font-medium text-violet-100">{l('seeall')}</Text>
            </TouchableHighlight>
         </View>

         {/* transactions */}
         <View>
            {transactions
               .filter((transaction) => date(transaction.timestamp) == date())
               .map((transaction) => (
                  <TransactionItem key={transaction.id} {...transaction} />
               ))}

            {!transactions.find(
               (transaction) => date(transaction.timestamp) == date()
            ) && (
               <View className="mt-2 items-center py-16 bg-[#fafafa] rounded-3xl mb-2">

                  <Text className="font-medium text-sm text-light-20 mt-2">
                     There have been no transactions recently
                  </Text>
               </View>
            )}
         </View>
      </View>
   );
};

export default memo(RecentTransaction);
