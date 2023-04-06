import React, { memo, useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import MaterialButton from "./MaterialButton";
import Modal from "../components/Modal";
import { useNavigation } from "@react-navigation/native";
import { removeTransaction } from "../firebaseConfig/montraDB";
import ActionSheet from "react-native-actions-sheet";

const RemoveDialog = React.forwardRef(({ data, text }, ref) => {
   const navigation = useNavigation();
   const [visible, setVisible] = useState(false);

   const handleSubmit = async () => {
      ref.current?.hide();
      if(text === "transaction") {
         await removeTransaction(data);
      }
      setVisible(true);
   };

   useLayoutEffect(() => {
      let timeOut;

      if (visible) {
         timeOut = setTimeout(() => {
            navigation.goBack();
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
            paddingBottom: 0,
         }} closeOnTouchBackdrop closeOnPressBack gestureEnabled headerAlwaysVisible
                      indicatorStyle={{ backgroundColor: "#D3BDFF" }}>
            <View className="w-full">
               <View>
                  <Text className="text-black font-semibold text-lg text-center my-2">Remove this {text}?</Text>
                  <Text className="text-[#91919F] font-medium text-base text-center mb-6">Are you sure do you wanna
                     remove
                     this {`\n`} {text}?</Text>
               </View>
               <View className="flex-row justify-between w-full">
                  <MaterialButton title="No" titleColor="#7F3DFF" color="#EEE5FF" style={{ width: "48%" }}
                                  onPress={() => {
                                     ref.current?.hide();
                                  }}
                  />
                  <MaterialButton title="Yes" titleColor="#fff" style={{ width: "48%" }} onPress={handleSubmit} />
               </View>
            </View>
         </ActionSheet>
         {/* Modal */}
         <Modal
            visible={visible}
            text={`${text.charAt(0).toUpperCase()+text.slice(1)} has been successfully removed`}
         />
      </>
   );
});

export default memo(RemoveDialog);
