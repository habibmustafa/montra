import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { Switch } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import strings from "../../../utils/Localization";

const NotificationSettings = ({ navigation }) => {
   const [expenseSwitch, setExpenseSwitch] = React.useState(true);
   const [budgetSwitch, setBudgetSwitch] = React.useState(true);
   const [tipsSwitch, setTipsSwitch] = React.useState(false);

   useFocusEffect(
      React.useCallback(() => {
         navigation.setOptions({
            title: strings.notification,
         });
      }, []),
   );

   return (
      <View className="h-full bg-white">
         <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#eee")}
            onPress={() => {
               setExpenseSwitch(!expenseSwitch);
            }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">{strings.expensealert}</Text>
                  <Text className="text-[13px] text-light-20">
                     {strings.expensealerttext}
                  </Text>
               </View>

               <Text>
                  <Switch value={expenseSwitch} color="#7F3DFF" onValueChange={() => {
                     setExpenseSwitch(!expenseSwitch);
                  }} />
               </Text>
            </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#eee")}
            onPress={() => {
               setBudgetSwitch(!budgetSwitch);
            }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">{strings.budget}</Text>
                  <Text className="text-[13px] text-light-20">
                     {strings.budgettext}
                  </Text>
               </View>

               <Text>
                  <Switch value={budgetSwitch} color="#7F3DFF" onValueChange={() => {
                     setBudgetSwitch(!budgetSwitch);
                  }} />
               </Text>
            </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#eee")}
            onPress={() => {
               setTipsSwitch(!tipsSwitch);
            }}>
            <View className="flex-row items-center justify-between py-2.5 px-4 ">
               <View className="w-52">
                  <Text className="font-medium text-base text-dark-25 mb-1">{strings.tipsarticles}</Text>
                  <Text className="text-[13px] text-light-20">
                     {strings.tipsarticlestext}
                  </Text>
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
