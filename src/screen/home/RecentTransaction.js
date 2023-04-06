import React, { memo } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import TransactionItem from "../../components/TransactionItem";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";

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
               Recent Transaction
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
               <Text className="font-medium text-violet-100">See All</Text>
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
               <View className="mt-10 items-center">
                  <Svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 50 50"
                     width="50px"
                     height="50px"
                     fill="#81818F"
                  >
                     <Path d="M 21 2 C 10.519531 2 2 10.519531 2 21 C 2 31.480469 10.519531 40 21 40 C 25.882813 40 30.320313 38.125 33.6875 35.09375 L 46.28125 47.71875 C 46.679688 48.117188 47.320313 48.117188 47.71875 47.71875 C 48.117188 47.320313 48.117188 46.679688 47.71875 46.28125 L 35.09375 33.6875 C 38.125 30.320313 40 25.882813 40 21 C 40 10.519531 31.480469 2 21 2 Z M 21 4 C 30.402344 4 38 11.597656 38 21 C 38 25.628906 36.148438 29.8125 33.15625 32.875 C 33.042969 32.957031 32.945313 33.066406 32.875 33.1875 C 29.8125 36.171875 25.621094 38 21 38 C 11.597656 38 4 30.402344 4 21 C 4 11.597656 11.597656 4 21 4 Z M 21 6 C 12.730469 6 6 12.730469 6 21 C 6 24.777344 7.40625 28.234375 9.71875 30.875 L 30.875 9.71875 C 28.234375 7.40625 24.777344 6 21 6 Z M 19.8125 8 L 22.1875 8 L 22.1875 10.6875 C 23.878906 10.972656 25.015625 11.683594 25.8125 12.65625 L 24.1875 14.28125 C 23.523438 13.421875 22.488281 12.84375 21 12.84375 C 17.472656 12.84375 17.03125 15.203125 17.03125 16.28125 C 17.03125 17.820313 17.960938 18.644531 19.28125 19.1875 L 17.375 21.09375 C 15.722656 20.347656 14.46875 19.078125 14.46875 16.53125 C 14.46875 12.460938 17.863281 10.859375 19.8125 10.625 Z M 32.28125 11.125 L 11.125 32.28125 C 13.765625 34.59375 17.222656 36 21 36 C 29.269531 36 36 29.269531 36 21 C 36 17.222656 34.59375 13.765625 32.28125 11.125 Z M 24.71875 20.8125 C 26.613281 21.632813 28.0625 23.007813 28.0625 25.65625 C 28.066406 30.304688 23.941406 31.582031 22.1875 31.75 L 22.1875 34 L 19.8125 34 L 19.8125 31.71875 C 18.65625 31.546875 17.019531 31.089844 15.75 29.78125 L 17.4375 28.125 C 18.164063 28.9375 19.28125 29.53125 21 29.53125 C 24.65625 29.53125 25.53125 27.835938 25.53125 25.90625 C 25.53125 24.074219 24.378906 23.234375 22.84375 22.6875 Z" />
                  </Svg>
                  <Text className="font-medium text-base text-light-20 mt-2">
                     No Recently Transaction
                  </Text>
               </View>
            )}
         </View>
      </View>
   );
};

export default memo(RecentTransaction);
