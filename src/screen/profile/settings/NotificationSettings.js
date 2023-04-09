import React from "react";
import { StatusBar, Text, TouchableNativeFeedback, View } from "react-native";
import { Switch } from "react-native-paper";

const NotificationSettings = () => {
   const [expenseSwitch, setExpenseSwitch] = React.useState(true);
   const [budgetSwitch, setBudgetSwitch] = React.useState(true);
   const [tipsSwitch, setTipsSwitch] = React.useState(false);

   return (
      <View className="h-full bg-white">
         <StatusBar backgroundColor="#fff" animated={true} barStyle="dark-content" />
         <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#eee")}
                                  onPress={() => {
                                     setExpenseSwitch(!expenseSwitch);
                                  }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">Expense Alert</Text>
                  <Text className="text-[13px] text-light-20">Get notification about you’re
                     expense</Text>
               </View>

               <Text>
                  <Switch value={expenseSwitch} color="#7F3DFF" onValueChange={() => {
                     setExpenseSwitch(!expenseSwitch);
                  }} />
               </Text>
            </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#eee")}
                                  onPress={() => {
                                     setBudgetSwitch(!budgetSwitch);
                                  }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">Budget</Text>
                  <Text className="text-[13px] text-light-20">Get notification when you’re
                     budget exceeding the limit</Text>
               </View>

               <Text>
                  <Switch value={budgetSwitch} color="#7F3DFF" onValueChange={() => {
                     setBudgetSwitch(!budgetSwitch);
                  }} />
               </Text>
            </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#eee")}
                                  onPress={() => {
                                     setTipsSwitch(!tipsSwitch);
                                  }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">Tips & Articles</Text>
                  <Text className="text-[13px] text-light-20">Small & useful pieces of pratical financial advice</Text>
               </View>

               <Text>
                  <Switch value={tipsSwitch} color="#7F3DFF" onValueChange={() => {
                     setTipsSwitch(!tipsSwitch);
                  }} />
               </Text>
            </View>
         </TouchableNativeFeedback>

      </View>
   );
};

export default NotificationSettings;
