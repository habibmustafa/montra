import React, { useDeferredValue, useEffect } from "react";
import {
   Text,
   View,
   Dimensions,
   ScrollView,
   StatusBar,
   BackHandler,
} from "react-native";
import { Avatar } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import { LineChart } from "react-native-chart-kit";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import { prettyPrint } from "../prettyPrint";
import TransactionItem from "../components/TransactionItem";

const Home = ({ navigation }) => {
   const [value, setValue] = React.useState("");

   const { userDb, allAccountBalance, transactions } = useSelector(
      (state) => state.user
   );

   const beforeRemove = (e) => {
      BackHandler.exitApp();
      e.preventDefault();
   };

   useEffect(() => {
      navigation.addListener("beforeRemove", beforeRemove);
      return () => {
         navigation.removeListener("beforeRemove", beforeRemove);
      };
   }, []);

   const date = (params = false) => {
      const dateTime = new Date(params).getDate();
      return dateTime;
   };

   if (!userDb) {
      return (
         <View className="h-full bg-white justify-center items-center">
            <Text>Loading</Text>
         </View>
      );
   } else
      return (
         <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
            <StatusBar
               backgroundColor="#FFF7E6"
               animated={true}
               barStyle="dark-content"
            />

            <LinearGradient
               // Background Linear Gradient
               colors={["#FFF7E6", "#FFFFFF", "#FFFFFF"]}
               className="pb-20"
            >
               <View className="bg-[#FFF7E6] pb-6 mb-3 rounded-bl-[32px] rounded-br-[32px]">
                  {/* Head */}
                  <View className="head py-3 my-2 px-4">
                     <View className="title flex-row justify-between items-center">
                        <Avatar.Text size={34} label="HM" />

                        <View className="flex-row justify-center items-center px-4 py-2 border-[1px] border-light-60 rounded-[40px]">
                           <Svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <Path
                                 d="M12.009 14.5575L12.0001 15.3075L11.9912 14.5575C11.2017 14.5669 10.4405 14.2647 9.87244 13.7166L6.2345 10.0401L9.87976 13.6853L9.88672 13.6923L9.89386 13.6991C10.4624 14.2385 11.2163 14.5393 12.0001 14.5393C12.7839 14.5393 13.5378 14.2385 14.1063 13.6991L14.1135 13.6923L14.1204 13.6853L17.7657 10.0401L14.1277 13.7166C13.5597 14.2647 12.7985 14.5669 12.009 14.5575Z"
                                 fill="black"
                                 stroke="#7F3DFF"
                                 stroke-width="1.5"
                              />
                           </Svg>

                           <Text className="font-medium ml-1">October</Text>
                        </View>
                        <Svg
                           width="32"
                           height="32"
                           viewBox="0 0 32 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <Path
                              d="M26 21.5C25.8608 22.2171 25.472 22.8616 24.9026 23.3193C24.3333 23.777 23.6203 24.0181 22.89 24H9.11001C8.37977 24.0181 7.66671 23.777 7.09738 23.3193C6.52805 22.8616 6.13927 22.2171 6.00001 21.5C5.89663 20.885 5.98746 20.2531 6.25988 19.6921C6.5323 19.1312 6.97276 18.669 7.52001 18.37C7.66786 18.2883 7.79065 18.1679 7.87522 18.0216C7.95979 17.8754 8.00293 17.7089 8.00001 17.54V14C7.99726 12.4041 8.4719 10.8438 9.3629 9.51978C10.2539 8.19575 11.5206 7.16847 13 6.57C13.004 5.77435 13.3239 5.01287 13.8893 4.45307C14.4547 3.89328 15.2194 3.58102 16.015 3.585C16.8107 3.58898 17.5721 3.90886 18.1319 4.47428C18.6917 5.03971 19.004 5.80435 19 6.6C20.4923 7.25496 21.7605 8.33179 22.6489 9.69803C23.5372 11.0643 24.0068 12.6604 24 14.29V17.54C23.9931 17.7049 24.0302 17.8688 24.1075 18.0146C24.1848 18.1605 24.2996 18.2832 24.44 18.37C24.9946 18.6631 25.4434 19.1227 25.7233 19.6842C26.0031 20.2456 26.0999 20.8807 26 21.5V21.5Z"
                              fill="#7F3DFF"
                           />
                           <Path
                              d="M16.0001 28C16.6981 27.9958 17.3829 27.809 17.9864 27.4581C18.5899 27.1072 19.091 26.6046 19.4401 26H12.5601C12.9091 26.6046 13.4102 27.1072 14.0137 27.4581C14.6172 27.809 15.302 27.9958 16.0001 28Z"
                              fill="#7F3DFF"
                           />
                        </Svg>
                     </View>
                  </View>

                  {/* Amount */}
                  <View className="amount px-4">
                     {/* total */}
                     <View className="items-center mb-8">
                        <Text className="font-medium text-sm text-light-20 mb-2.5">
                           Account Balance
                        </Text>
                        <Text className="font-semibold text-[40px] text-dark-75">
                           ₼{allAccountBalance.toFixed(2)}
                        </Text>
                     </View>

                     {/* transaction amount */}
                     <View className="flex-row justify-between items-center">
                        {/* Income */}
                        <View className="bg-green-100 rounded-[28px] flex-row min-w-[45%] max-w-[48%] justify-center items-center py-4 px-3.5">
                           {/* svg */}
                           <View className="bg-light-80 justify-center items-center w-12 h-12 rounded-2xl mr-2.5">
                              <Svg
                                 width="32"
                                 height="32"
                                 viewBox="0 0 32 32"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <Path
                                    d="M23 14H9C7.67392 14 6.40215 14.5268 5.46447 15.4645C4.52678 16.4021 4 17.6739 4 19V25C4 26.3261 4.52678 27.5979 5.46447 28.5355C6.40215 29.4732 7.67392 30 9 30H23C24.3261 30 25.5979 29.4732 26.5355 28.5355C27.4732 27.5979 28 26.3261 28 25V19C28 17.6739 27.4732 16.4021 26.5355 15.4645C25.5979 14.5268 24.3261 14 23 14ZM16 26C15.2089 26 14.4355 25.7654 13.7777 25.3259C13.1199 24.8864 12.6072 24.2616 12.3045 23.5307C12.0017 22.7998 11.9225 21.9956 12.0769 21.2196C12.2312 20.4437 12.6122 19.731 13.1716 19.1716C13.731 18.6122 14.4437 18.2312 15.2196 18.0769C15.9956 17.9225 16.7998 18.0017 17.5307 18.3045C18.2616 18.6072 18.8864 19.1199 19.3259 19.7777C19.7654 20.4355 20 21.2089 20 22C20 23.0609 19.5786 24.0783 18.8284 24.8284C18.0783 25.5786 17.0609 26 16 26Z"
                                    fill="#00A86B"
                                 />
                                 <Path
                                    d="M16 24C17.1046 24 18 23.1046 18 22C18 20.8954 17.1046 20 16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24Z"
                                    fill="#00A86B"
                                 />
                                 <Path
                                    d="M16 2C15.7348 2 15.4805 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V8.59L12.46 6.05C12.2687 5.88617 12.0227 5.80057 11.771 5.81029C11.5193 5.82001 11.2806 5.92434 11.1025 6.10244C10.9244 6.28053 10.82 6.51927 10.8103 6.77095C10.8006 7.02262 10.8862 7.2687 11.05 7.46L15.29 11.71C15.3822 11.8 15.4908 11.8713 15.61 11.92C15.7334 11.9723 15.866 11.9992 16 11.9992C16.134 11.9992 16.2666 11.9723 16.39 11.92C16.5092 11.8713 16.6179 11.8 16.71 11.71L21 7.46C21.1639 7.2687 21.2495 7.02262 21.2397 6.77095C21.23 6.51927 21.1257 6.28053 20.9476 6.10244C20.7695 5.92434 20.5308 5.82001 20.2791 5.81029C20.0274 5.80057 19.7813 5.88617 19.59 6.05L17 8.59V3C17 2.73478 16.8947 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2Z"
                                    fill="#00A86B"
                                 />
                              </Svg>
                           </View>

                           {/* text */}
                           <View className="items-start">
                              <Text className="font-medium text-sm text-light-80">
                                 Income
                              </Text>
                              <Text className="font-semibold text-[22px] text-light-80">
                                 ₼
                                 {transactions
                                    .filter(
                                       (transaction) =>
                                          transaction.type == "income"
                                    )
                                    .map((transaction) => transaction.amount)
                                    .reduce((acc, curr) => acc + curr, 0)
                                    .toFixed(2)}
                              </Text>
                           </View>
                        </View>

                        {/* Expense */}
                        <View className="bg-red-100 rounded-[28px] flex-row min-w-[45%] max-w-[48%] justify-center items-center py-4 px-3.5">
                           {/* svg */}
                           <View className="bg-light-80 justify-center items-center w-12 h-12 rounded-2xl mr-2.5">
                              <Svg
                                 width="33"
                                 height="32"
                                 viewBox="0 0 33 32"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <Path
                                    d="M23.1975 14H9.19751C7.87143 14 6.59966 14.5268 5.66198 15.4645C4.72429 16.4021 4.19751 17.6739 4.19751 19V25C4.19751 26.3261 4.72429 27.5979 5.66198 28.5355C6.59966 29.4732 7.87143 30 9.19751 30H23.1975C24.5236 30 25.7954 29.4732 26.733 28.5355C27.6707 27.5979 28.1975 26.3261 28.1975 25V19C28.1975 17.6739 27.6707 16.4021 26.733 15.4645C25.7954 14.5268 24.5236 14 23.1975 14ZM16.1975 26C15.4064 26 14.633 25.7654 13.9752 25.3259C13.3174 24.8864 12.8047 24.2616 12.502 23.5307C12.1992 22.7998 12.12 21.9956 12.2744 21.2196C12.4287 20.4437 12.8097 19.731 13.3691 19.1716C13.9285 18.6122 14.6412 18.2312 15.4171 18.0769C16.1931 17.9225 16.9973 18.0017 17.7282 18.3045C18.4591 18.6072 19.0839 19.1199 19.5234 19.7777C19.9629 20.4355 20.1975 21.2089 20.1975 22C20.1975 23.0609 19.7761 24.0783 19.0259 24.8284C18.2758 25.5786 17.2584 26 16.1975 26Z"
                                    fill="#FD3C4A"
                                 />
                                 <Path
                                    d="M16.1975 24C17.3021 24 18.1975 23.1046 18.1975 22C18.1975 20.8954 17.3021 20 16.1975 20C15.0929 20 14.1975 20.8954 14.1975 22C14.1975 23.1046 15.0929 24 16.1975 24Z"
                                    fill="#FD3C4A"
                                 />
                                 <Path
                                    d="M16.9076 2.29C16.8146 2.19627 16.704 2.12188 16.5822 2.07111C16.4603 2.02034 16.3296 1.9942 16.1976 1.9942C16.0656 1.9942 15.9349 2.02034 15.813 2.07111C15.6912 2.12188 15.5806 2.19627 15.4876 2.29L11.2476 6.54C11.054 6.72698 10.9426 6.98321 10.9379 7.25232C10.9332 7.52144 11.0356 7.78139 11.2226 7.975C11.4096 8.16861 11.6658 8.28001 11.9349 8.2847C12.204 8.28939 12.464 8.18698 12.6576 8L15.1976 5.41V11C15.1976 11.2652 15.303 11.5196 15.4905 11.7071C15.678 11.8946 15.9324 12 16.1976 12C16.4628 12 16.7172 11.8946 16.9047 11.7071C17.0922 11.5196 17.1976 11.2652 17.1976 11V5.41L19.7376 8C19.9239 8.18474 20.1753 8.2889 20.4376 8.29C20.5775 8.29761 20.7175 8.27573 20.8484 8.22577C20.9793 8.17581 21.0983 8.09889 21.1976 8C21.3838 7.81264 21.4884 7.55919 21.4884 7.295C21.4884 7.03081 21.3838 6.77736 21.1976 6.59L16.9076 2.29Z"
                                    fill="#FD3C4A"
                                 />
                              </Svg>
                           </View>

                           {/* text */}
                           <View className="items-start">
                              <Text className="font-medium text-sm text-light-80">
                                 Expense
                              </Text>
                              <Text className="font-semibold text-[22px] text-light-80">
                                 ₼
                                 {transactions
                                    .filter(
                                       (transaction) =>
                                          transaction.type == "expense"
                                    )
                                    .map((transaction) => transaction.amount)
                                    .reduce((acc, curr) => acc + curr, 0)
                                    .toFixed(2)}
                              </Text>
                           </View>
                        </View>
                     </View>
                  </View>
               </View>

               {/* Chart */}
               <View>
                  <Text className="px-4 font-semibold text-lg text-dark-100">
                     Spend Frequency
                  </Text>
                  <LineChart
                     data={{
                        labels: [
                           "January",
                           "February",
                           "March",
                           "April",
                           "May",
                           "June",
                        ],
                        datasets: [
                           {
                              data: [240, 1223, 700, 57, 924, 248],
                           },
                        ],
                     }}
                     width={Dimensions.get("window").width + 165} // from react-native
                     height={185}
                     // yAxisLabel="$"
                     // yAxisSuffix="k"
                     yAxisInterval={1} // optional, defaults to 1
                     chartConfig={{
                        backgroundColor: "#e26a00",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `#7F3DFF`,
                        style: {
                           borderRadius: 16,
                        },
                        propsForDots: {
                           r: "6",
                           strokeWidth: "10",
                           stroke: "#ffa726",
                        },
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

                  {/* Segmented buttons */}
                  <View className="flex-row mx-4 justify-between border-[1px] border-violet-20 rounded-2xl -mt-1">
                     <View className="py-2 px-6 bg-yellow-20 basis-1/4 rounded-2xl justify-center items-center">
                        <Text className="font-bold text-yellow-100">Today</Text>
                     </View>
                     <View className="py-2 px-6 basis-1/4  rounded-2xl justify-center items-center">
                        <Text className="font-medium text-light-20">Week</Text>
                     </View>
                     <View className="py-2 px-6 basis-1/4  rounded-2xl justify-center items-center">
                        <Text className="font-medium text-light-20">Month</Text>
                     </View>
                     <View className="py-2 px-6 basis-1/4  rounded-2xl justify-center items-center">
                        <Text className="font-medium text-light-20">Year</Text>
                     </View>
                  </View>
               </View>

               {/* Recent Transaction */}
               <View className="recent-transaction px-4 mt-7">
                  {/* header */}
                  <View className="flex-row justify-between mb-3">
                     <Text className="font-semibold text-lg text-dark-25">
                        Recent Transaction
                     </Text>
                     <View className="px-4 py-2 bg-violet-20 rounded-[40px]">
                        <Text className="font-medium text-violet-100">
                           See All
                        </Text>
                     </View>
                  </View>

                  {/* transactions */}
                  <View>
                     {transactions.map((transaction) =>
                        date(transaction.timestamp) == date() || (
                           <TransactionItem
                              key={transaction.id}
                              {...transaction}
                           />
                        )
                     )}
                  </View>
               </View>
            </LinearGradient>
         </ScrollView>
      );
};

export default Home;
