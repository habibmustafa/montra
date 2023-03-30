import { SafeAreaView, Text, StatusBar } from "react-native";
import { View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { useEffect, useState } from "react";
import { useToast } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { setPin } from "../store/localSlice";

const SetupPin = ({ navigation }) => {
   const [enteredPin, setEnteredPin] = useState("");
   const [registerPin, setRegisterPin] = useState("");
   const [error, setError] = useState(false);
   const toast = useToast();

   const { pin } = useSelector((state) => state.local);
   const { userDb } = useSelector((state) => state.user);

   const dispatch = useDispatch();

   const input = [1, 2, 3, 4];
   const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, ">"];

   useEffect(() => {
      const timer = setTimeout(() => {
         if (enteredPin.toString().length == 4) {
            if (!pin) {
               if (!registerPin) {
                  setRegisterPin(enteredPin);
               } else {
                  if (registerPin == enteredPin) {
                     dispatch(setPin(enteredPin));
                     if (!userDb.accounts) {
                        navigation.navigate("SetupAccount");
                     }
                     else {
                        navigation.navigate("Root");
                     }
                  } else {
                     setRegisterPin("");
                     toast.show({
                        title: "The entered PINs do not match. Please try again",
                        placement: "top",
                        duration: 2000,
                        backgroundColor: 'red.500',
                     });
                  }
               }
            } else {
               if (enteredPin == pin) {
                  // console.log("Success");
                  if (!userDb.accounts) {
                     navigation.navigate("SetupAccount");
                  }
                  else {
                     navigation.navigate("Root");
                  }
               } else {
                  // console.log("Failed");
                  setError(true);
                  toast.show({
                     title: "Pin code is incorrect",
                     placement: "top",
                     duration: 1700,
                     backgroundColor: 'red.500',
                  });
               }
            }
            setEnteredPin("");
         }
      }, 1);

      return () => clearTimeout(timer);
   }, [enteredPin]);

   return (
      <>
         <StatusBar backgroundColor="#7F3DFF" animated={true} barStyle="default" />

         <SafeAreaView className="bg-violet-100 flex-1 items-center">
            <Text className="pt-20 pb-16 text-light-100 font-bold text-xl">
               {!pin && !registerPin && "Let’s  setup your PIN"}
               {registerPin && "Ok. Re type your PIN again."}
               {pin && "Enter PIN"}
            </Text>

            {/* Input */}
            <View className="input flex-1 flex-row gap-x-4">
               {input.map((item, index) => (
                  <View
                     key={index}
                     className={`w-5 h-5 rounded-full ${
                        enteredPin.toString().length < index + 1
                           ? `border-4 border-[#EEE5FF] opacity-40`
                           : "bg-light-100"
                     }`}
                  ></View>
               ))}
            </View>

            {/* Keyboard */}
            <View className="input flex-row flex-wrap w-11/12 mb-3 justify-center items-center">
               {keyboard.map((item, index) => (
                  <View
                     key={index}
                     className="h-[90px] basis-1/3 justify-center items-center"
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
                        className={`rounded-full h-20 w-20 border-violet-100 justify-center items-center`}
                     >
                        <>
                           {index == 11 || (
                              <Text className="text-light-100 text-5xl justify-center mt-3">
                                 {item}
                              </Text>
                           )}
                           {index == 11 && (
                              <Icon
                                 name="backspace-outline"
                                 size={38}
                                 color="#fff"
                              />
                           )}
                        </>
                     </TouchableRipple>
                  </View>
               ))}
            </View>
         </SafeAreaView>
      </>
   );
};

export default SetupPin;
