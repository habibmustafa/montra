import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const NewScreen = ({color, text, children, input} ) => {
   const [amount, setAmount] = useState("");
   const dotIndexRef = React.useRef(-1);
   const commaIndexRef = React.useRef(-1);
   const regex = /^[0-9]*(?:[\.\,][0-9]*)?$/;


   const handleAmountChange = (text) => {
      // sadece sayılar, nokta ve virgül kabul edilir
      if (regex.test(text)) {
         let newAmount = text;
         // en fazla bir kez nokta veya virgül kabul edilir
         dotIndexRef.current = text.indexOf(".");
         commaIndexRef.current = text.indexOf(",");
         if (dotIndexRef.current !== -1 && commaIndexRef.current !== -1) {
            return;
         } else if (dotIndexRef.current !== -1) {
            newAmount = newAmount.replace(",", "");
         } else if (commaIndexRef.current !== -1) {
            newAmount = newAmount.replace(".", "");
            newAmount = newAmount.replace(",", ".");
         }
         // ilk nokta veya virgül tıklama durumunda "0." şeklinde görüntülenir
         if (newAmount === "." || newAmount === "," || newAmount === "0") {
            newAmount = "0.";
         }
         // 0. durumunda backspace tuşu çalışır
         if (newAmount === "0." && amount === "0.") {
            setAmount(0);
            input(0)
         } else {
            setAmount(newAmount);
            input(newAmount)
         }
      }
      

   };

   return (
      <View className="flex-1" style={{backgroundColor: color}}>
         <View className="input flex-1 px-4" style={{backgroundColor: color}}>
            <View className="flex-1"></View>

            <Text className="text-light-80 font-semibold text-lg mb-1.5 mini:text-base">{text}</Text>

            <View className="flex-row items-center">
               <Text className="text-[64px] text-light-40 font-medium mini:text-5xl">₼</Text>
               <TextInput
                  keyboardType="numeric"
                  className="font-medium text-[64px] w-full text-light-80 p-0 mini:text-5xl"
                  placeholder="0"
                  placeholderTextColor="#F2F4F5"
                  value={amount}
                  onChangeText={handleAmountChange}
                  caretHidden

               />
            </View>
         </View>

         <View className="enter bg-white rounded-tl-[32px] rounded-tr-[32px] pt-6 pb-5 px-4 mini:pt-4 mini:pb-4">
            {children}

            
         </View>
      </View>
   );
};

export default NewScreen;
