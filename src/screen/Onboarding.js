import React, {useEffect} from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import MaterialButton from "../components/MaterialButton";

const Onboarding = ({ navigation }) => {

   useEffect(() => {
      navigation.addListener("beforeRemove", (e) => {
         e.preventDefault();
      });
   }, []);

   return (
      <View className="px-4 h-full w-full bg-light-100">
         <View className="illustration my-8 flex-1">
            <Swiper
               autoplay={true}
               autoplayTimeout={5}
               activeDotStyle={{ height: 16, width: 16, borderRadius: 16 }}
            >
               <View>
                  <Image
                     className="h-80 mb-10 w-full"
                     source={require("../assets/onboarding1.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center">
                     Gain total control{"\n"} of your money
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20">
                     Become your own money manager{"\n"} and make every cent
                     count
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-full"
                     source={require("../assets/onboarding2.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center">
                     Know where your{"\n"} money goes
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20">
                     Track your transaction easily,{"\n"} with categories and
                     financial report
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-full"
                     source={require("../assets/onboarding3.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center">
                     Planning ahead
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20">
                     Setup your budget for each category{"\n"} so you in control
                  </Text>
               </View>
            </Swiper>
         </View>
         <View className="buttons mb-5 justify-between">
            <MaterialButton
               title="Sign Up"
               size={18}
               style={{ marginBottom: 16 }}
               titleColor="#fff"
               onPress={() => {
                  navigation.navigate("Register");
               }}
            />
            <MaterialButton
               title="Login"
               size={18}
               color="#EEE5FF"
               titleColor="#7F3DFF"
               onPress={() => {
                  navigation.push("Login");
               }}
            />
         </View>
      </View>
   );
};

export default Onboarding;