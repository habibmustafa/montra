import React, { useRef, useState } from "react";
import {
   Text,
   View,
   StatusBar,
   TouchableHighlight,
   FlatList, Dimensions,
} from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { useSelector } from "react-redux";
import TransactionItem from "../../components/TransactionItem";
import { useFocusEffect } from "@react-navigation/native";
import FilterDialog from "./FilterDialog";
import { transactionFilter } from "../../utils/filter";
import Dropdown from "../../components/Dropdown";
import strings from "../../utils/Localization";

const Transaction = ({ navigation }) => {
   const { transactions } = useSelector((state) => state.user);
   const { language } = useSelector((state) => state.local);
   const actionSheetRef = useRef(null);
   const [filter, setFilter] = useState(["expense", "income", "transfer"]);
   const [sort, setSort] = useState("Newest");
   const [datex, setDatex] = useState("Month");

   const date = (params = false, render = false) => {
      const dateTime = new Date(params).getDate();
      if (render) {
         if (dateTime === new Date().getDate()) {
            return strings.today;
         } else if (dateTime === new Date().getDate() - 1) {
            return strings.yesterday;
         } else {
            return new Date(params).toLocaleString(language, {
               weekday: "short",
               day: "numeric",
               month: "long",
               year: "numeric",
            });
         }
      } else {
         return dateTime;
      }
   };

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("dark-content");
      }, []),
   );

   return (
      <>
         <View className="h-full bg-white" style={{ paddingTop: StatusBar.currentHeight }}>
            {/* Header */}
            <View className="header px-4 py-4 flex-row justify-between items-center bg-white">
               <View className="w-[100px]">
                  <Dropdown
                     value={datex}
                     data={[
                        { label: strings.week, value: "Week" },
                        { label: strings.month, value: "Month" },
                        { label: strings.year, value: "Year" },
                     ]}
                     onChange={(val) => {
                        setDatex(val.value);
                     }}
                     style={{ paddingVertical: 5, borderRadius: 24 }}
                  />
               </View>

               <TouchableHighlight
                  activeOpacity={0.99}
                  underlayColor="#eee"
                  style={{ borderRadius: 8 }}
                  onPress={() => {
                     actionSheetRef.current?.show();
                  }}
               >
                  <Svg
                     width="40"
                     height="40"
                     viewBox="0 0 40 40"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <Path
                        d="M31 12.5H9C8.86739 12.5 8.74022 12.4473 8.64645 12.3536C8.55268 12.2598 8.5 12.1326 8.5 12C8.5 11.8674 8.55268 11.7402 8.64645 11.6464C8.74022 11.5527 8.86739 11.5 9 11.5H31C31.1326 11.5 31.2598 11.5527 31.3536 11.6464C31.4473 11.7402 31.5 11.8674 31.5 12C31.5 12.1326 31.4473 12.2598 31.3536 12.3536C31.2598 12.4473 31.1326 12.5 31 12.5Z"
                        fill="black"
                        stroke="#212325"
                     />
                     <Path
                        d="M27 21H13C12.7348 21 12.4804 20.8946 12.2929 20.7071C12.1054 20.5196 12 20.2652 12 20C12 19.7348 12.1054 19.4804 12.2929 19.2929C12.4804 19.1054 12.7348 19 13 19H27C27.2652 19 27.5196 19.1054 27.7071 19.2929C27.8946 19.4804 28 19.7348 28 20C28 20.2652 27.8946 20.5196 27.7071 20.7071C27.5196 20.8946 27.2652 21 27 21Z"
                        fill="black"
                     />
                     <Path
                        d="M23 29H17C16.7348 29 16.4804 28.8946 16.2929 28.7071C16.1054 28.5196 16 28.2652 16 28C16 27.7348 16.1054 27.4804 16.2929 27.2929C16.4804 27.1054 16.7348 27 17 27H23C23.2652 27 23.5196 27.1054 23.7071 27.2929C23.8946 27.4804 24 27.7348 24 28C24 28.2652 23.8946 28.5196 23.7071 28.7071C23.5196 28.8946 23.2652 29 23 29Z"
                        fill="black"
                     />
                     <Rect
                        x="0.5"
                        y="0.5"
                        width="39"
                        height="39"
                        rx="7.5"
                        stroke="#F1F1FA"
                     />
                  </Svg>
               </TouchableHighlight>
            </View>

            {/* Financial Report */}

            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#D3BDFF48"
               style={{ borderRadius: 8 }}
               onPress={() => {
                  navigation.navigate("ReportIntro");
               }}
               className="financial-report mx-4 my-2 px-4 py-3.5 flex-row justify-between items-center bg-[#EEE5FF] rounded-lg "
            >
               <>
                  <Text className="text-base text-violet-100">
                     {strings.seeyourfinancialreport}
                  </Text>

                  {/* svg */}
                  <Svg
                     width="32"
                     height="32"
                     viewBox="0 0 32 32"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <Path
                        d="M12.6076 24.9903L12.5999 24.9901L12.5921 24.99C12.5259 24.9898 12.4605 24.9764 12.3996 24.9506C12.3386 24.9249 12.2834 24.8873 12.2371 24.84L12.2346 24.8375C12.1415 24.7439 12.0892 24.6171 12.0892 24.485C12.0892 24.3532 12.1413 24.2267 12.2341 24.1331C12.2343 24.1329 12.2344 24.1327 12.2346 24.1325L17.8936 18.4736L17.8938 18.4734C18.5492 17.8171 18.9174 16.9275 18.9174 16C18.9174 15.0725 18.5492 14.183 17.8938 13.5267L17.8936 13.5265L12.2496 7.88249C12.1743 7.78871 12.1353 7.67078 12.1399 7.55028C12.1448 7.42444 12.197 7.30508 12.286 7.21603C12.3751 7.12698 12.4944 7.07481 12.6203 7.06995C12.7411 7.06528 12.8594 7.10459 12.9533 7.18028L18.6469 12.814C18.6472 12.8143 18.6474 12.8145 18.6476 12.8148C19.0664 13.2326 19.3986 13.7289 19.6253 14.2753C19.8522 14.822 19.969 15.4081 19.969 16C19.969 16.5919 19.8522 17.178 19.6253 17.7247C19.3985 18.2714 19.066 18.768 18.6469 19.186L18.6468 19.1862L12.9868 24.8362L12.9868 24.8361L12.9827 24.8403C12.934 24.8901 12.8755 24.9291 12.811 24.9549C12.7464 24.9807 12.6772 24.9928 12.6076 24.9903Z"
                        fill="black"
                        stroke="#7F3DFF"
                     />
                  </Svg>
               </>
            </TouchableHighlight>


            {/* transactions */}
            {transactions && (
               <FlatList
                  data={transactionFilter(transactions, filter, sort, datex)}
                  keyExtractor={(item) => item.id}
                  initialNumToRender={7}
                  className="mb-[70px] px-4"
                  ListEmptyComponent={
                     <View style={{ height: Dimensions.get("window").height - 240 }}
                           className="justify-center items-center">
                        <Text className="font-medium text-sm text-light-20">{strings.nomoneytransaction}</Text>
                     </View>}
                  renderItem={({ item, index }) => (
                     <>
                        {(index === 0 ||
                           date(transactionFilter(transactions, filter, sort)[index - 1].timestamp) !==
                           date(item.timestamp)) && (
                           <View className="time pt-1.5 pb-3.5">
                              <Text className="font-semibold text-lg text-dark-100">
                                 {date(item.timestamp, true)}
                              </Text>
                           </View>
                        )}
                        <TransactionItem {...item} />
                     </>
                  )}
               />
            )}
            <FilterDialog
               ref={actionSheetRef}
               getFilter={(e) => {
                  setFilter(e);
               }}
               getSort={(e) => {
                  setSort(e);
               }}
            />
         </View>
      </>
   );
};

export default Transaction;
