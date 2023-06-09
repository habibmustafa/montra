import React from "react";
import Svg, { Path } from "react-native-svg";
import {
   View,
   ScrollView,
   Text,
   TouchableWithoutFeedback,
   Dimensions, StatusBar, FlatList,
} from "react-native";
import TransactionItem from "../../../components/TransactionItem";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import Modal from "../../../components/Modal";
import { useSelector } from "react-redux";
import { accountTransactions, transactionFilter } from "../../../utils/filter";
import SvgIcons from "../../../utils/SvgIcons";
import strings from "../../../utils/Localization";

export const DetailAccountRight = (props) => {
   const navigation = useNavigation();

   return (
      <TouchableWithoutFeedback
         onPress={() => {
            navigation.navigate("EditAccount", { props });
         }}
      >
         <Svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <Path
               d="M20.19 8.45998L8.18996 20.46C7.91385 20.7302 7.56733 20.9173 7.18996 21L3.64996 21.71C3.32767 21.7737 2.99465 21.7571 2.68033 21.6615C2.366 21.566 2.08005 21.3945 1.84775 21.1622C1.61545 20.9299 1.44395 20.6439 1.34841 20.3296C1.25287 20.0153 1.23623 19.6823 1.29996 19.36L1.99996 15.85C2.08263 15.4726 2.26975 15.1261 2.53996 14.85L14.38 2.99998C14.7665 2.60387 15.2285 2.28909 15.7385 2.07417C16.2486 1.85925 16.7965 1.74854 17.35 1.74854C17.9034 1.74854 18.4513 1.85925 18.9614 2.07417C19.4715 2.28909 19.9334 2.60387 20.32 2.99998C21.0089 3.75992 21.3796 4.75549 21.3554 5.78095C21.3312 6.80641 20.914 7.78338 20.19 8.50998V8.45998Z"
               stroke="#212325"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </Svg>
      </TouchableWithoutFeedback>
   );
};

const DetailAccount = ({ route, navigation }) => {
   let { id } = route.params;
   const { userDb } = useSelector(state => state.user);
   const { language } = useSelector(state => state.local);

   const { name, balance, type } = userDb.accounts[id];

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

   React.useLayoutEffect(() => {
      navigation.setOptions({
         headerRight: () => (
            <DetailAccountRight
               id={id}
               name={name}
               balance={balance}
               type={type}
            />
         ),
      });
   }, [navigation]);

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("dark-content");
         navigation.setOptions({
            title: strings.detailaccount,
         });
      }, []),
   );

   return (
      <View className="bg-white h-full">
         {/* Header */}
         <View className="header mt-12 pb-5 items-center px-4">
            {/* svg */}
            <View className="p-2 bg-light-60 rounded-2xl mb-2">
               <SvgIcons icon={type} />
            </View>
            <Text className="font-semibold text-2xl text-black mb-3">
               {name}
            </Text>
            <Text className="font-bold text-3xl text-dark-50">
               ₼{balance.toFixed(2)}
            </Text>
         </View>

         <Divider
            style={{ height: 1.5, backgroundColor: "#91919F", opacity: 0.1 }}
         />

         {/* transactions */}
         <View className="pt-7">
            {userDb.accounts[id] && <FlatList
               data={accountTransactions(userDb, id)}
               keyExtractor={(item) => item.id}
               initialNumToRender={7}
               className="px-4"
               style={{ height: Dimensions.get("window").height - 314 }}
               ListEmptyComponent={
                  <Text className="font-medium text-sm text-light-20 self-center mt-48">
                     {strings.nomoneytransaction}
                  </Text>}
               renderItem={({ item, index }) => (
                  <View>
                     {/* Time */}
                     {(index === 0 ||
                        date(accountTransactions(userDb, id)[index - 1].timestamp) !==
                        date(item.timestamp)) && (
                        <View className="time pt-1.5 pb-3.5">
                           <Text className="font-semibold text-lg text-dark-100">
                              {date(item.timestamp, true)}
                           </Text>
                        </View>
                     )}
                     <TransactionItem {...item} />
                  </View>
               )}
            />}


         </View>
      </View>
   )
};

export default DetailAccount;
