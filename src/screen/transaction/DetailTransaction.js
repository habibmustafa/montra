import React, { useLayoutEffect, useRef, useState } from "react";
import {
   View, Text, StatusBar, Image, Dimensions, TouchableWithoutFeedback,
} from "react-native";
import MaterialButton from "../../components/MaterialButton";
import { useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";
import Dialog from "../../components/Dialog";
import { useFocusEffect } from "@react-navigation/native";
import strings from "../../utils/Localization";

export const DetailTransactionRight = (params) => {
   const actionSheetRef = useRef(null);

   return (
      <>
         <TouchableWithoutFeedback
            onPress={() => {
               actionSheetRef.current?.show();
            }}
         >
            <Svg
               width="28"
               height="28"
               viewBox="0 0 32 32"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <Path
                  d="M27 6H20V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2H15C14.2044 2 13.4413 2.31607 12.8787 2.87868C12.3161 3.44129 12 4.20435 12 5V6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H6.09L7.64 23.5C7.76437 24.7376 8.34557 25.8844 9.27012 26.7165C10.1947 27.5486 11.3962 28.0062 12.64 28H19.4C20.6438 28.0062 21.8453 27.5486 22.7699 26.7165C23.6944 25.8844 24.2756 24.7376 24.4 23.5L25.91 8H27C27.2652 8 27.5196 7.89464 27.7071 7.70711C27.8946 7.51957 28 7.26522 28 7C28 6.73478 27.8946 6.48043 27.7071 6.29289C27.5196 6.10536 27.2652 6 27 6ZM14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6H14V5ZM14.09 21H14C13.7497 21.001 13.5081 20.9081 13.3229 20.7396C13.1378 20.5711 13.0225 20.3393 13 20.09L12.48 14.09C12.4575 13.8248 12.5412 13.5615 12.7128 13.358C12.8844 13.1545 13.1298 13.0275 13.395 13.005C13.6602 12.9825 13.9235 13.0662 14.127 13.2378C14.3305 13.4094 14.4575 13.6548 14.48 13.92L15.01 19.92C15.0209 20.0514 15.0058 20.1837 14.9654 20.3092C14.925 20.4347 14.8602 20.551 14.7747 20.6514C14.6892 20.7518 14.5847 20.8343 14.4672 20.8941C14.3497 20.9539 14.2215 20.9899 14.09 21ZM19 20.09C18.9775 20.3393 18.8623 20.5711 18.6771 20.7396C18.4919 20.9081 18.2503 21.001 18 21H17.91C17.7785 20.9887 17.6505 20.9515 17.5334 20.8905C17.4164 20.8295 17.3126 20.7459 17.228 20.6445C17.1434 20.5432 17.0797 20.4261 17.0405 20.3001C17.0014 20.174 16.9876 20.0414 17 19.91L17.53 13.91C17.5525 13.6448 17.6795 13.3994 17.883 13.2278C18.0865 13.0562 18.3498 12.9725 18.615 12.995C18.8802 13.0175 19.1256 13.1445 19.2972 13.348C19.4688 13.5515 19.5525 13.8148 19.53 14.08L19 20.09Z"
                  fill="white"
               />
            </Svg>
         </TouchableWithoutFeedback>
         <Dialog
            ref={actionSheetRef} data={params}
            id="transaction"
            title={strings.removetransactiontitle}
            description={strings.removetransactiondescription}
            modalDescription={`${strings.transactionsuccess} ${strings.removed}`}
         />
      </>
   );
};

const DetailTransaction = ({ navigation, route }) => {
   const { userDb } = useSelector((state) => state.user);

   let transaction;
   if (route.params.type === "transfer") {
      transaction = userDb.transfers[route.params.id];
   } else {
      transaction = userDb.accounts[route.params.account_id].transactions[route.params.id];
   }
   const { category, description, type, amount, from, to, account_id, timestamp } = transaction || route.params;

   let color;
   if (type === "expense") {
      color = "#FD3C4A";
   } else if (type === "income") {
      color = "#00A86B";
   } else if (type === "transfer") {
      color = "#0077FF";
   }

   const handleEdit = () => {
      if (type === "expense") {
         navigation.navigate("Expense", route.params);
      } else if (type === "income") {
         navigation.navigate("Income", route.params);
      }
      if (type === "transfer") {
         navigation.navigate("Transfer", route.params);
      }
   };

   useLayoutEffect(() => {
      navigation.setOptions({
         headerStyle: { backgroundColor: color }, headerRight: () => <DetailTransactionRight {...transaction} />,
      });
   }, [navigation]);

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("light-content");
         navigation.setOptions({
            title: strings.detailtransaction,
         });
      }, []),
   );

   return (
      <View className="h-full bg-white">

         {/* Header */}
         <View
            style={{ backgroundColor: color }}
            className="h-1/4 rounded-bl-3xl rounded-br-3xl justify-center items-center"
         >
            <View className="items-center mb-2">
               <Text className="text-light-80 font-bold text-5xl text-center mb-1">
                  ₼{amount.toFixed(2)}
               </Text>
               {type === "transfer" || (<Text className="text-light-80 font-medium text-base">
                  {strings[category.replace(/\s+/g, "").toLowerCase()]}
               </Text>)}
            </View>
            <View className="flex-row gap-x-3 mb-5">
               <Text className="text-light-60 font-medium text-center text-[13px] leading-4">
                  {new Date(timestamp).toDateString()}
               </Text>
               <Text className="text-light-60 font-medium text-center text-[13px] leading-4">
                  {new Date(timestamp).toTimeString().slice(0, 5)}
               </Text>
            </View>

            {/* Absolute */}
            <View
               className="bg-white border border-light-60 rounded-xl px-6 py-3 flex-row justify-between absolute -bottom-10"
               style={{ width: Dimensions.get("screen").width - 32 }}
            >
               <View className="items-center">
                  <Text className="text-light-20 font-medium text-sm mb-2">{strings.type}</Text>
                  <Text className="text-dark-100 font-semibold text-base capitalize">
                     {strings[type]}
                  </Text>
               </View>
               <View className="items-center">
                  <Text className="text-light-20 font-medium text-sm mb-2">
                     {type === "transfer" ? strings.from : strings.category}
                  </Text>
                  <Text className="text-dark-100 font-semibold text-base">
                     {type === "transfer" ? userDb.accounts[from].name : strings[category.replace(/\s+/g, "").toLowerCase()]}
                  </Text>
               </View>
               <View className="items-center">
                  <Text className="text-light-20 font-medium text-sm mb-2">
                     {type === "transfer" ? strings.to : strings.wallet}
                  </Text>
                  <Text className="text-dark-100 font-semibold text-base">
                     {type === "transfer" ? userDb.accounts[to].name : (account_id && userDb.accounts[account_id].name) || "Wallet"}
                  </Text>
               </View>
            </View>
         </View>

         {/* Content */}
         <View className="flex-1 pt-3.5 mx-4 mt-14 border-t-2 border-dashed border-light-40">
            {/* Description */}
            <View className="mb-8">
               <Text className="text-light-20 font-semibold text-base mb-3.5">
                  {strings.description}
               </Text>
               <Text className="text-dark-100 font-medium text-base">
                  {description}
               </Text>
            </View>

            {/* Attachment */}
            <View className="w-full">
               <Image
                  className="h-80 mb-10 w-10/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                  source={require("../../assets/onboarding2.png")}
               />
            </View>

            <MaterialButton
               style={{ position: "absolute", width: "100%", bottom: 20 }}
               title={strings.edit}
               titleColor="#FCFCFC"
               onPress={handleEdit}
            />
         </View>
      </View>);
};

export default DetailTransaction;
