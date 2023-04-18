import { Text, StatusBar } from "react-native";
import { View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { setPin } from "../../store/localSlice";
import { useFocusEffect } from "@react-navigation/native";
import strings from "../../utils/Localization";

const SetupPin = ({ navigation }) => {
   const [enteredPin, setEnteredPin] = useState("");
   const [registerPin, setRegisterPin] = useState("");
   const toast = useToast();

   const { pin } = useSelector((state) => state.local);
   const { userDb } = useSelector((state) => state.user);

   const dispatch = useDispatch();

   const input = [1, 2, 3, 4];
   const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, ">"];

   useEffect(() => {
      let timer;

      if (enteredPin.toString().length === 4) {

         timer = setTimeout(() => {
            if (!pin) {
               if (!registerPin) {
                  setRegisterPin(enteredPin);
               } else {
                  if (registerPin === enteredPin) {
                     dispatch(setPin(enteredPin));
                     if (userDb && !userDb.accounts) {
                        navigation.navigate("SetupAccount");
                     } else {
                        navigation.navigate("Tab");
                     }
                  } else {
                     setRegisterPin("");
                     toast.show(strings.mismatchedpin);
                  }
               }
            } else {
               if (enteredPin === pin) {
                  if (userDb && !userDb.accounts) {
                     navigation.navigate("SetupAccount");
                  } else {
                     navigation.navigate("Tab");
                  }
               } else {
                  toast.show(strings.incorrectpin);
               }
            }
            setEnteredPin("");
            clearTimeout(timer);
         }, 1);
      }

      return () => clearTimeout(timer);
   }, [enteredPin]);

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setTranslucent(true);
         StatusBar.setBackgroundColor("transparent");
         StatusBar.setBarStyle("light-content");
      }, []),
   );


   return (
      <>
         <View className="bg-violet-100 flex-1 items-center" style={{ paddingTop: StatusBar.currentHeight }}>
            <Text className="pt-20 pb-16 text-light-100 font-semibold text-xl mini:pt-12 mini:pb-12 mini:text-lg">
               {!pin && !registerPin && strings.setuppin}
               {registerPin && strings.resetuppin}
               {pin && strings.enterpin}
            </Text>

            {/* Input */}
            <View className="input flex-1 flex-row gap-x-4">
               {input.map((item, index) => (
                  <View
                     key={index}
                     className={`w-5 h-5 rounded-full mini:w-4 mini:h-4 ${
                        enteredPin.toString().length < index + 1
                           ? `border-4 border-[#EEE5FF] opacity-40 mini:border-[3px]`
                           : "bg-light-100"
                     }`}
                  ></View>
               ))}
            </View>

            <View
               className="bg-violet-80 rounded-tl-3xl rounded-tr-3xl w-[95%] pt-14 items-center shadow-2xl shadow-dark-50">

               {/* Keyboard */}
               <View className="input flex-row flex-wrap w-[85%] mb-3 justify-center items-center mini:w-10/12">
                  {keyboard.map((item, index) => (
                     <View
                        key={index}
                        className="h-[90px] basis-1/3 justify-center items-center mini:h-[78px] mini:basis-1/3"
                     >
                        <TouchableRipple
                           onPress={() => {
                              if (!isNaN(item)) {
                                 setEnteredPin((value) => `${value}${item}`);
                              }
                              if (index == 11) {
                                 setEnteredPin((value) => value.slice(0, -1));
                              }
                           }}
                           rippleColor="#B18AFF"
                           disabled={index == 9 && true}
                           borderless={true}
                           className={`rounded-full h-20 w-28 border-violet-100 justify-center items-center mini:w-16 mini:h-16`}
                        >
                           <>
                              {index == 11 || (
                                 <Text className="text-light-100 text-[44px] justify-center mini:text-3xl mini:mt-1.5">
                                    {item}
                                 </Text>
                              )}
                              {index == 11 && (
                                 <MaterialCommunityIcons
                                    name="backspace-outline"
                                    size={30}
                                    color={enteredPin ? "#FFF" : "#bbb"}
                                 />
                              )}
                           </>
                        </TouchableRipple>
                     </View>
                  ))}
               </View>
            </View>
         </View>
      </>
   );
};

export default SetupPin;
