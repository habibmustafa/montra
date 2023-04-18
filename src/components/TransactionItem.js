import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import SvgIcons from "../utils/SvgIcons";

const TransactionItem = (props) => {
   const {category, description, type, amount, timestamp} = props

   const colors = {
      "Food and Drink": "bg-red-20",
      "Transportation": 'bg-violet-20',
      "Shopping": 'bg-yellow-20',
      "Entertainment": 'bg-yellow-20',
      "Personal care and Health": 'bg-blue-20',
      "Housing": 'bg-violet-20',
      "Credit and Debt": 'bg-red-20',
      "Education": 'bg-blue-20',
      "Savings and Investments": 'bg-green-20',
      "Salary": 'bg-green-20',
      "Sales": 'bg-red-20',
      "Scholarship": 'bg-yellow-20',
      "Refunds": 'bg-violet-20',
      "Prize or Award": 'bg-green-20',
      "Passive Income": 'bg-dark-25',
      "Transfer": 'bg-blue-20'
   }

   const navigation = useNavigation()
   return (
      <TouchableHighlight
         activeOpacity={0.99}
         underlayColor="#eee"
         onPress={() => {
            navigation.navigate("DetailTransaction", {...props})
         }}
         className={`flex-row justify-between items-center p-4 bg-light-80 rounded-3xl mb-2`}
      >
         <>
            {/* SVG */}
            <View className={`${colors[category]} rounded-2xl p-3.5 mr-2.5`}>
               <SvgIcons icon={category} />
            </View>

            {/* Content */}
            <View className="flex-1">
               <Text className="font-semibold text-base text-dark-25 mb-3">
                  {/*{l(category.replace(/\s+/g, "").toLowerCase())}*/}
               </Text>
               <Text className="font-medium text-[13px] text-light-20">
                  {description}
               </Text>
            </View>

            {/* Amount and Time */}
            <View>
               <Text
                  className={`font-semibold text-base text-blue-100 ${
                     type == "income" && " text-green-100"} ${type == "expense" && "text-red-100"
                  } mb-3 text-right`}
               >
                  {type == "income" && "+"}{type == "expense" && "-"} ₼{amount.toFixed(2)}
               </Text>
               <Text className="font-medium text-[13px] text-light-20 text-right">
                  {new Date(timestamp).toTimeString().slice(0, 5)}
               </Text>
            </View>
         </>
      </TouchableHighlight>
   );
};

export default memo(TransactionItem);
