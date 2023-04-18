import { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart";
import { lastSpendFilter } from "../../utils/filter";
import strings from "../../utils/Localization";

const SpendFrequency = () => {
   const [button, setButton] = useState({
      elements: [
         { id: 1, label: 'short', value: 8 },
         { id: 2, label: 'wide', value: 12 },
      ],
      isActive: 1,
   });

   const { transactions } = useSelector((state) => state.user);
   // prettyPrint(
   //    filterFrequency()
   // );

   // labels: Array.from({ length: transactions.length }, (_, i) => i + 1),
   // data: transactions.map(transaction => transaction.amount),
   const arr = lastSpendFilter(
      transactions,
      button.elements[button.isActive - 1].value,
   );

   while (arr.length < 6) {
      arr.unshift(0);
   }

   return (
      <View>
         <Text className="px-4 font-semibold text-lg text-dark-100 mb-1">
            {strings.spendfrequency}
         </Text>

         {/* Chart */}
         <Chart data={arr} />

         {/* Segmented buttons */}
         <View className="flex-row mx-4 justify-between border-2 border-light-80 rounded-2xl -mt-1">
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
                  } py-2 px-6 basis-1/2  rounded-2xl justify-center items-center`}
               >
                  <Text
                     className={`font-medium text-light-20 ${
                        element.id == button.isActive &&
                        "font-bold text-yellow-100"
                     }`}
                  >
                     {strings[element.label]}
                  </Text>
               </TouchableHighlight>
            ))}
         </View>
      </View>
   );
};

export default (SpendFrequency);
