import React, { memo } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import { prettyPrint } from "../prettyPrint";

const Chart = ({ data }) => {

   return (
      <LineChart
         data={{
            labels: Array.from({ length: 5 }, (_, i) => i + 1),
            datasets: [
               {
                  data: data,
               },
            ],
         }}
         width={Dimensions.get("window").width - 4} // from react-native
         height={185}

         yAxisInterval={10} // optional, defaults to 1
         chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#ddd",
            backgroundGradientTo: "#ddd",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `#7F3DFF`,
            style: {},
            propsForBackgroundLines: {
               stroke: "#c3c3d4",
            },
            propsForLabels: {
               stroke: "#292B2D",
               fontWeight: "100",
               fontSize: 10,
            },
            // propsForDots: {
            //    r: "6",
            //    strokeWidth: "10",
            //    stroke: "#ffa726",
            // },
            strokeWidth: 4,
            fillShadowGradientOpacity: 0.40,
            fillShadowGradientTo: "#B18AFF",
            fillShadowGradientToOffset: 0.4,
            // fillShadowGradientFrom: "#FDFCFF",
            fillShadowGradientToOpacity: 0.1,
         }}
         // withHorizontalLabels={false}
         withVerticalLabels={false}
         // withOuterLines={false}
         // withInnerLines={false}
         withDots={false}
         transparent
         bezier
         style={{
            marginTop: 10,
            borderRadius: 16,
            marginLeft: -16,
         }}
      />
   );
};

export default memo(Chart);


