import React from "react";
import { Dimensions, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import Swiper from "react-native-swiper";
import { useFocusEffect } from "@react-navigation/native";
import SvgIcons from "../../utils/SvgIcons";
import MaterialButton from "../../components/MaterialButton";
import { transactionFilter, transactionsBalanceFilter } from "../../utils/filter";
import { useSelector } from "react-redux";

const ReportIntro = ({navigation}) => {
   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("light-content");
      }, []),
   );

   const { transactions } = useSelector(state => state.user);
   const expense = transactionFilter(transactions, ["expense"], "Highest")[0]
   const income = transactionFilter(transactions, ["income"], "Highest")[0]
   const colors = {
      "Food and Drink": "bg-red-20",
      "Transportation": "bg-violet-20",
      "Shopping": "bg-yellow-20",
      "Entertainment": "bg-yellow-20",
      "Personal care and Health": "bg-blue-20",
      "Housing": "bg-violet-20",
      "Credit and Dept": "bg-red-20",
      "Education": "bg-blue-20",
      "Savings and Investments": "bg-green-20",
      "Salary": "bg-green-20",
      "Sales": "bg-red-20",
      "Scholarship": "bg-yellow-20",
      "Refunds": "bg-violet-20",
      "Prize or Award": "bg-green-20",
      "Passive Income": "bg-dark-25",
      "Transfer": "bg-blue-20",
   };

   return (
      <Swiper
         loadMinimal={false}
         loop={false}
         paginationStyle={{ bottom: "95%" }}
         showsButtons={true}
         buttonWrapperStyle={{ position: "absolute", top: -Dimensions.get("window").height / 2.4 }}
         prevButton={
            <View style={{
               position: "absolute",
               zIndex: 50,
               top: 0,
               height: Dimensions.get("window").height-160,
               width: Dimensions.get("window").width / 2,
               backgroundColor: "transparent",
            }}>
            </View>
         }
         nextButton={
            <View style={{
               position: "absolute",
               zIndex: 50,
               top: 0,
               right: 0,
               height: Dimensions.get("window").height-160,
               width: Dimensions.get("window").width / 2,
               backgroundColor: "transparent",
            }}>
            </View>
         }
         dotStyle={{
            height: 3,
            width: Dimensions.get("window").width / 3.5,
            borderRadius: 10,
            backgroundColor: "#FFFFFF24",
         }}
         activeDotStyle={{
            height: 3,
            width: Dimensions.get("window").width / 3.5,
            borderRadius: 10,
            backgroundColor: "#FFF",
         }}
      >
         <View
            className="bg-red-100 h-full w-full items-center px-4"
            style={{ paddingTop: StatusBar.currentHeight }}
         >
            <View className="mt-16 flex-1 justify-between pb-5 w-full items-center">
               <Text className="head font-semibold text-2xl text-light-100 opacity-75">
                  This month
               </Text>
               <View className="items-center">
                  <Text className="font-bold text-[32px] text-light-100 mb-6">
                     You Spend 💸
                  </Text>
                  <Text
                     className="font-bold text-[64px] text-light-100">₼{transactionsBalanceFilter(transactions, "expense")}</Text>
               </View>
               <View className="bg-white py-4 rounded-3xl w-full items-center">
                  <Text className="font-semibold text-2xl text-dark-100 mb-3.5 text-center">
                     and your biggest{`\n`}spending is from
                  </Text>
                  <View className="border border-light-40 rounded-3xl px-4 py-3 flex-row justify-center items-center mb-2">
                     <View className={`${colors[expense.category]} rounded-lg p-2 mr-2`}>
                        <SvgIcons icon={expense.category} size={18} />
                     </View>
                     <Text className="font-semibold text-lg text-dark-100">
                        {expense.category}
                     </Text>
                  </View>
                  <Text className="font-semibold text-4xl text-dark-100">₼ {expense.amount}</Text>
               </View>
            </View>
         </View>

         <View
            className="bg-green-100 h-full w-full items-center px-4"
            style={{ paddingTop: StatusBar.currentHeight }}
         >
            <View className="mt-16 flex-1 justify-between pb-5 w-full items-center">
               <Text className="head font-semibold text-2xl text-light-100 opacity-75">
                  This month
               </Text>
               <View className="items-center">
                  <Text className="font-bold text-[32px] text-light-100 mb-6">
                     You Earned 💰
                  </Text>
                  <Text
                     className="font-bold text-[64px] text-light-100">₼{transactionsBalanceFilter(transactions, "income")}</Text>
               </View>
               <View className="bg-white py-4 rounded-3xl w-full items-center">
                  <Text className="font-semibold text-2xl text-dark-100 mb-3.5 text-center">
                     your biggest{`\n`}Income is from
                  </Text>
                  <View
                     className="border border-light-40 rounded-3xl px-4 py-3 flex-row justify-center items-center mb-2">
                     <View className={`${colors[income.category]} rounded-lg p-2 mr-2`}>
                        <SvgIcons icon={income.category} size={18} />
                     </View>
                     <Text className="font-semibold text-lg text-dark-100">
                        {income.category}
                     </Text>
                  </View>
                  <Text className="font-semibold text-4xl text-dark-100">₼ {income.amount}</Text>
               </View>
            </View>
         </View>
         <View
            className="bg-violet-100 h-full w-full items-center px-4"
            style={{ paddingTop: StatusBar.currentHeight }}
         >
            <View className="mt-40 flex-1 justify-between pb-5 w-full items-center">
               <View className="items-start">
                  <Text className="font-bold text-[32px] text-light-100 mb-3.5">
                     “Financial freedom is freedom from fear.”
                  </Text>
                  <Text className="font-semibold text-2xl text-light-100">
                     -Robert Kiyosaki
                  </Text>
               </View>
               <MaterialButton
                  title="See the full detail" color="#FFF" titleColor="#7F3DFF" style={{ width: "100%" }}
                  onPress={() => {
                     navigation.navigate('FinancialReport')
                  }} />
            </View>
         </View>
      </Swiper>
   );
};

export default ReportIntro;
