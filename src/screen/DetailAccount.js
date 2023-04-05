import React from "react";
import Svg, { Path } from "react-native-svg";
import {
   View,
   ScrollView,
   Text,
   TouchableWithoutFeedback,
   Dimensions,
} from "react-native";
import TransactionItem from "../components/TransactionItem";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { accountTransactions } from "../utils/filter";

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
   let { id, name, balance, type } = route.params;
   const { userDb } = useSelector(state => state.user);

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

   return (
      <ScrollView className="bg-white px-4">
         {/* Header */}
         <View className="header mt-12 pb-5 items-center">
            {/* svg */}
            <View className="p-2 bg-light-60 rounded-2xl mb-2">
               <Svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <Path
                     d="M23.91 8.09C23.6104 8.02985 23.3056 7.9997 23 8H11C10.7348 8 10.4805 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4805 6.10536 10.7348 6 11 6H23C22.5343 5.37902 21.9304 4.875 21.2361 4.52786C20.5418 4.18073 19.7763 4 19 4H9.00004C8.22381 4 7.45825 4.18073 6.76397 4.52786C6.0697 4.875 5.46578 5.37902 5.00004 6C4.347 6.86342 3.99565 7.91744 4.00004 9V23C4.00004 24.3261 4.52682 25.5979 5.46451 26.5355C6.40219 27.4732 7.67396 28 9.00004 28H23C24.3261 28 25.5979 27.4732 26.5356 26.5355C27.4733 25.5979 28 24.3261 28 23V13C27.9985 11.8329 27.5888 10.7031 26.8418 9.80634C26.0948 8.90959 25.0577 8.30241 23.91 8.09ZM21.24 21C21.1603 21.0096 21.0798 21.0096 21 21C20.2044 21 19.4413 20.6839 18.8787 20.1213C18.3161 19.5587 18 18.7956 18 18C18 17.2044 18.3161 16.4413 18.8787 15.8787C19.4413 15.3161 20.2044 15 21 15C21.3416 14.9978 21.6807 15.0589 22 15.18C22.6374 15.416 23.1757 15.8615 23.5268 16.4434C23.8779 17.0253 24.021 17.7092 23.9327 18.383C23.8444 19.0569 23.5299 19.6808 23.0408 20.1526C22.5516 20.6244 21.9167 20.9161 21.24 20.98V21Z"
                     fill="#5233FF"
                  />
                  <Path
                     d="M21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17C20.4477 17 20 17.4477 20 18C20 18.5523 20.4477 19 21 19Z"
                     fill="#FF64C8"
                  />
               </Svg>
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
         <View className="pt-7 pb-3">
            {accountTransactions(userDb, id).length ? (
               accountTransactions(userDb, id).map((transaction, index) => (
                  <View key={transaction.id}>
                     {/* Time */}
                     {(index === 0 ||
                        date(accountTransactions(userDb, id)[index - 1].timestamp) !==
                        date(transaction.timestamp)) && (
                        <View className="time pt-1.5 pb-3.5">
                           <Text className="font-semibold text-lg text-dark-100">
                              {date(transaction.timestamp, true)}
                           </Text>
                        </View>
                     )}
                     <TransactionItem {...transaction} />
                  </View>
               ))
            ) : (
               <Text className="font-medium text-sm text-light-20 self-center mt-56">
                  No money transaction
               </Text>
            )}
         </View>
      </ScrollView>
   );
};

export default DetailAccount;
