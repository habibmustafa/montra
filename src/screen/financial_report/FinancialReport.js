import React, { useState } from "react";
import {
   Dimensions,
   FlatList,
   ScrollView,
   StatusBar,
   Text,
   TouchableHighlight,
   TouchableNativeFeedback,
   TouchableWithoutFeedback,
   View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Chart from "../../components/Chart";
import DropdownPicker from "../../components/DropdownPicker";
import MaterialButton from "../../components/MaterialButton";
import SvgIcons from "../../utils/SvgIcons";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import Items from "./Items";
import {
   accountBalanceFilter,
   lastSpendFilter,
   transactionsBalanceFilter,
} from "../../utils/filter";

const date = (params = false, render = false) => {
   const dateTime = new Date(params).getDate();
   if (render) {
      if (dateTime === new Date().getDate()) {
         return "Today";
      } else if (dateTime === new Date().getDate() - 1) {
         return "Yesterday";
      } else {
         return new Date(params).toDateString();
      }
   } else {
      return dateTime;
   }
};

const FinancialReport = ({ navigation }) => {
   const [datex, setDatex] = useState("Month");
   const [selected, setSelected] = useState("Account");
   const { transactions, userDb } = useSelector((state) => state.user);
   const [sort, setSort] = useState("Highest");
   const [transactionButton, setTransactionButton] = useState({
      data: [
         { id: 1, value: "Expense" },
         { id: 2, value: "Income" },
      ],
      isActive: "Expense",
   });
   const [chart, setChart] = useState({
      data: [
         { id: 1, value: "LineChart" },
         { id: 2, value: "CircleChart" },
      ],
      isActive: "LineChart",
   });

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("dark-content");
      }, []),
   );

   const colors = [
      "#FCAC12",
      "#0077FF",
      "#FD3C4A",
      "#7F3DFF",
      "#00A86B",
      "#FCAC12",
      "#0077FF",
      "#FD3C4A",
   ];

   return (
      <ScrollView className="h-full bg-white">
         {/* Chart */}
         <View>
            {/* Details */}
            <View className="flex-row justify-between items-center py-2 px-4">
               <View className="w-24">
                  <Dropdown
                     value={datex}
                     data={[
                        { label: "Month", value: "Month" },
                        { label: "Year", value: "Year" },
                     ]}
                     onChange={(val) => {
                        setDatex(val.value);
                     }}
                  />
               </View>

               {/* Buttons */}
               <View className="flex-row items-center rounded-lg border border-light-60">
                  {chart.data.map((item) => (
                     <TouchableWithoutFeedback
                        key={item.id}
                        onPress={() => {
                           setChart({ ...chart, isActive: item.value });
                        }}
                     >
                        <View
                           className={`p-2 ${
                              item.value === "LineChart"
                                 ? "rounded-tl-lg rounded-bl-lg"
                                 : "rounded-tr-lg rounded-br-lg"
                           } ${item.value === chart.isActive && "bg-violet-100"}`}
                        >
                           <SvgIcons
                              icon={item.value}
                              color={`${
                                 item.value === chart.isActive ? "#FFF" : "#7F3DFF"
                              }`}
                           />
                        </View>
                     </TouchableWithoutFeedback>
                  ))}
               </View>
            </View>

            {/* Amount */}
            {chart.isActive === "LineChart" && (
               <Text className="mb-3 mt-5 px-5 font-bold text-[32px] text-black">
                  ₼
                  {transactionsBalanceFilter(
                     transactions,
                     transactionButton.isActive.toLowerCase(),
                  )}
               </Text>
            )}
            <Chart
               version={chart.isActive}
               donutData={accountBalanceFilter(
                  userDb.accounts,
                  transactionButton.isActive.toLowerCase(),
                  datex.toUpperCase(),
               ).map((item, index) => {
                  return {
                     name: item.name,
                     value: item.balance,
                     color: colors[index],
                  };
               })}
               data={lastSpendFilter(
                  transactions,
                  0,
                  transactionButton.isActive.toLowerCase(),
               )}
            />
         </View>

         {/* Buttons */}
         <View className="mx-4 mt-3 p-1 h-14 bg-light-60 rounded-[32px] flex-row items-center justify-around">
            {transactionButton.data.map((item) => (
               <TouchableWithoutFeedback
                  key={item.id}
                  onPress={() => {
                     setTransactionButton({
                        ...transactionButton,
                        isActive: item.value,
                     });
                  }}
               >
                  <View
                     className={`h-full justify-center items-center w-1/2 rounded-[32px] ${
                        transactionButton.isActive === item.value && "bg-violet-100"
                     }`}
                  >
                     <Text
                        className={`font-medium text-base text-black ${
                           transactionButton.isActive === item.value && "text-light-80"
                        }`}
                     >
                        {item.value}
                     </Text>
                  </View>
               </TouchableWithoutFeedback>
            ))}
         </View>

         {/* Items */}
         <View className="mt-6">
            {/* Head */}
            <View className="flex-row px-4 justify-between items-center">
               <View className="w-[116px]">
                  <Dropdown
                     value={selected}
                     data={[
                        { label: "Account", value: "Account" },
                        { label: "Category", value: "Category" },
                     ]}
                     onChange={(val) => {
                        setSelected(val.value);
                     }}
                  />
               </View>

               <TouchableHighlight
                  activeOpacity={0.99}
                  underlayColor="#eee"
                  style={{ borderRadius: 8 }}
                  onPress={() => {
                     setSort(sort === "Highest" ? "Lowest" : "Highest");
                  }}
                  className="p-1 border border-light-60 rounded-lg"
               >
                  <SvgXml
                     xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M27 8.5H15C14.8674 8.5 14.7402 8.44732 14.6464 8.35355C14.5527 8.25978 14.5 8.13261 14.5 8C14.5 7.86739 14.5527 7.74022 14.6464 7.64645C14.7402 7.55268 14.8674 7.5 15 7.5H27C27.1326 7.5 27.2598 7.55268 27.3536 7.64645C27.4473 7.74021 27.5 7.86739 27.5 8C27.5 8.13261 27.4473 8.25979 27.3536 8.35355C27.2598 8.44732 27.1326 8.5 27 8.5Z" fill="black" stroke="#212325"/>
                              <path d="M21 17H15C14.7348 17 14.4804 16.8946 14.2929 16.7071C14.1054 16.5196 14 16.2652 14 16C14 15.7348 14.1054 15.4804 14.2929 15.2929C14.4804 15.1054 14.7348 15 15 15H21C21.2652 15 21.5196 15.1054 21.7071 15.2929C21.8946 15.4804 22 15.7348 22 16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17Z" fill="black"/>
                              <path d="M17 25H15C14.7348 25 14.4804 24.8946 14.2929 24.7071C14.1054 24.5196 14 24.2652 14 24C14 23.7348 14.1054 23.4804 14.2929 23.2929C14.4804 23.1054 14.7348 23 15 23H17C17.2652 23 17.5196 23.1054 17.7071 23.2929C17.8946 23.4804 18 23.7348 18 24C18 24.2652 17.8946 24.5196 17.7071 24.7071C17.5196 24.8946 17.2652 25 17 25Z" fill="black"/>
                              <path d="M10.9999 7C10.7347 7 10.4804 7.10536 10.2928 7.29289C10.1053 7.48043 9.99994 7.73478 9.99994 8V22.45L5.70994 18.15C5.52164 17.9617 5.26624 17.8559 4.99994 17.8559C4.73364 17.8559 4.47824 17.9617 4.28994 18.15C4.10164 18.3383 3.99585 18.5937 3.99585 18.86C3.99585 19.1263 4.10164 19.3817 4.28994 19.57L8.87994 24.16C9.4485 24.7081 10.2103 25.01 10.9999 25C11.2652 25 11.5195 24.8946 11.707 24.7071C11.8946 24.5196 11.9999 24.2652 11.9999 24V8C11.9999 7.73478 11.8946 7.48043 11.707 7.29289C11.5195 7.10536 11.2652 7 10.9999 7Z" fill="black"/>
                              </svg>
                           `}
                  />
               </TouchableHighlight>
            </View>

            {/* Content */}
            {/*<Items item={selected} />*/}

            <View className="accounts flex-1 my-4">
               {accountBalanceFilter(
                  userDb.accounts,
                  transactionButton.isActive.toLowerCase(),
                  datex.toUpperCase(),
                  sort,
               ).map((account) => (
                  <TouchableNativeFeedback
                     key={account.id}
                     background={TouchableNativeFeedback.Ripple("#eee")}
                     onPress={() => {
                        navigation.navigate("DetailAccount", { ...account });
                     }}
                  >
                     <View className="flex-row justify-between items-center px-4 h-20 border-b-[1px] border-[#F7F7F7] ">
                        {/* svg */}
                        <View className={`p-2 bg-light-60 rounded-2xl`}>
                           <SvgIcons icon={account.type} />
                        </View>
                        <Text className="flex-1 ml-2 font-semibold text-lg text-black">
                           {account.name}
                        </Text>
                        <Text className="font-semibold text-lg text-dark-50 mr-2">
                           ₼{account.balance.toFixed(2)}
                        </Text>
                     </View>
                  </TouchableNativeFeedback>
               ))}
            </View>
         </View>
      </ScrollView>
   );
};

export default FinancialReport;
