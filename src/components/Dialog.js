import React, { memo, useLayoutEffect, useState } from "react";
import { View, Text, Dimensions, StatusBar } from "react-native";
import MaterialButton from "./MaterialButton";
import Modal from "../components/Modal";
import { useNavigation } from "@react-navigation/native";
import { removeAccount, removeTransaction } from "../firebaseConfig/montraDB";
import ActionSheet from "react-native-actions-sheet";
import { logout } from "../firebaseConfig/auth";
import { useSelector } from "react-redux";
import strings from "../utils/Localization";

const Dialog = React.forwardRef(({ id, data, title, description, modalDescription = false }, ref) => {
   const navigation = useNavigation();
   const [visible, setVisible] = useState(false);
   let { user } = useSelector((state) => state.local);
   const { userDb } = useSelector((state) => state.user);
   user = JSON.parse(user);

   const handleSubmit = async () => {
      ref.current?.hide();
      if (id === "transaction") {
         const balance = {
            accountBalance: data.type !== "transfer" ? userDb.accounts[data.account_id].balance : false,
            fromBalance: data.type === "transfer" ? userDb.accounts[data.from].balance : false,
            toBalance: data.type === "transfer" ? userDb.accounts[data.to].balance : false,
         };
         removeTransaction(data, balance);
         setVisible(true);
      } else if(id === "account") {
         removeAccount(data.id)
         setVisible(true);
      }
      else if (id === "logout") {
         await logout(user);
      }
   };

   useLayoutEffect(() => {
      let timeOut;

      if (visible) {
         timeOut = setTimeout(() => {
            if(id === "account") {
               navigation.navigate('Account')
            } else {
               navigation.goBack();
            }
         }, 1700);
      }
      return () => {
         clearTimeout(timeOut);
      };
   }, [visible]);

   return (
      <>
         <ActionSheet ref={ref} containerStyle={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 16,
            paddingTop: 12,
            paddingBottom: Dimensions.get("screen").height - Dimensions.get("window").height - StatusBar.currentHeight,
         }} closeOnTouchBackdrop closeOnPressBack gestureEnabled headerAlwaysVisible
                      indicatorStyle={{ backgroundColor: "#D3BDFF" }}>
            <View className="w-full">
               <View>
                  <Text className="text-black font-semibold text-lg text-center my-2">{title}</Text>
                  <Text className="text-[#91919F] font-medium text-base text-center mb-6">{description}</Text>
               </View>
               <View className="flex-row justify-between w-full">
                  <MaterialButton
                     title={strings.no} titleColor="#7F3DFF" color="#EEE5FF" style={{ width: "48%" }}
                     onPress={() => {
                        ref.current?.hide();
                     }}
                  />
                  <MaterialButton
                     title={strings.yes} titleColor="#fff" style={{ width: "48%" }}
                     onPress={handleSubmit} />
               </View>
            </View>
         </ActionSheet>
         {/* Modal */}
         {modalDescription && <Modal
            visible={visible}
            text={modalDescription}
         />}
      </>
   );
});

export default memo(Dialog);
