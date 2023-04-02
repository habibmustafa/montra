import React, { memo, useState } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { prettyPrint } from "../prettyPrint";
import Chart from "./Chart";

const SpendFrequency = () => {
   const [button, setButton] = useState({
      elements: [
         { id: 1, value: "Today" },
         { id: 2, value: "Week" },
         { id: 3, value: "Month" },
         { id: 4, value: "Year" },
      ],
      isActive: 1,
   });

   const { transactions } = useSelector((state) => state.user);
   // prettyPrint(
   //    filterFrequency()
   // );

   // labels: Array.from({ length: transactions.length }, (_, i) => i + 1),
   // data: transactions.map(transaction => transaction.amount),

   return (
      <View>
         <Text className="px-4 font-semibold text-lg text-dark-100">
            Spend Frequency
         </Text>

         {/* Chart */}
         <Chart />

         {/* Segmented buttons */}
         <View className="flex-row mx-4 justify-between border-[1px] border-violet-20 rounded-2xl -mt-1">
            {button.elements.map((element) => (
               <TouchableHighlight
                  activeOpacity={0.99}
                  underlayColor="#F1F1FA"
                  style={{ borderRadius: 24 }}
                  onPress={() => {
                     setButton({ ...button, isActive: element.id });
                  }}
                  key={element.id}
                  className={`${
                     element.id == button.isActive && "bg-yellow-20"
                  } py-2 px-6 basis-1/4  rounded-2xl justify-center items-center`}
               >
                  <Text
                     className={`font-medium text-light-20 ${
                        element.id == button.isActive &&
                        "font-bold text-yellow-100"
                     }`}
                  >
                     {element.value}
                  </Text>
               </TouchableHighlight>
            ))}
         </View>
      </View>
   );
};

export default memo(SpendFrequency);
