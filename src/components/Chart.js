import React, { memo } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { prettyPrint } from "../prettyPrint";

const Chart = ({data}) => {
   // labels: Array.from({ length: transactions.length }, (_, i) => i + 1),
   // data: transactions.map(transaction => transaction.amount),
   return (
      <LineChart
         data={{
            // labels: Array.from({ length: 5 }, (_, i) => i + 1),
            datasets: [
               {
                  data: [
                     0, 32, 53, 11, 44,43,24,35,12,34,75,12
                  ],
               },
            ],
         }}
         width={Dimensions.get("window").width+105} // from react-native
         height={185}

         yAxisInterval={10} // optional, defaults to 1
         chartConfig={{
            backgroundColor: "#e26a00",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `#7F3DFF`,
            style: {},
            // propsForDots: {
            //    r: "6",
            //    strokeWidth: "10",
            //    stroke: "#ffa726",
            // },
            strokeWidth: 5,
            fillShadowGradientOpacity: 0.25,
            fillShadowGradientTo: "#FFFFFF",
            fillShadowGradientToOffset: 0.8,
            // fillShadowGradientFrom: "#FDFCFF",
            fillShadowGradientToOpacity: 0.1,
         }}
         withHorizontalLabels={false}
         withVerticalLabels={false}
         withOuterLines={false}
         withInnerLines={false}
         fromZero
         withDots={false}
         transparent
         bezier
         style={{
            marginTop: 10,
            borderRadius: 16,
            marginLeft: -65,
         }}
      />
   );
};

export default memo(Chart);
