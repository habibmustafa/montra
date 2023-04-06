import React, { useEffect } from "react";
import {
   View,
   Text,
   Image,
   BackHandler,
   StatusBar,
   Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import MaterialButton from "../../components/MaterialButton";

const Onboarding = ({ navigation }) => {
   const beforeRemove = (e) => {
      BackHandler.exitApp();
      e.preventDefault();
   };

   useEffect(() => {
      navigation.addListener("beforeRemove", beforeRemove);
      return () => {
         navigation.removeListener("beforeRemove", beforeRemove);
      };
   }, []);

   return (
      <View className="px-4 h-full w-full bg-light-100">
         <StatusBar
            backgroundColor="#fff"
            animated={true}
            barStyle="dark-content"
         />
         <View className="illustration my-8 flex-1 mini:my-2 mini:mb-0">
            <Swiper
               loadMinimal={true}
               autoplay={true}
               autoplayTimeout={6}
               activeDotStyle={
                  Dimensions.get("window").width < 385
                     ? { height: 8, width: 8, borderRadius: 8 }
                     : { height: 16, width: 16, borderRadius: 16 }
               }
            >
               <View>
                  <Image
                     className="h-80 mb-10 w-11/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                     source={require("../../assets/onboarding1.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center mini:text-2xl mini:mb-2.5">
                     Gain total control{"\n"} of your money
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     Become your own money manager{"\n"} and make every cent
                     count
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-11/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                     source={require("../../assets/onboarding2.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center mini:text-2xl mini:mb-2.5">
                     Know where your{"\n"} money goes
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     Track your transaction easily,{"\n"} with categories and
                     financial report
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-11/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                     source={require("../../assets/onboarding3.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center mini:text-2xl mini:mb-2.5">
                     Planning ahead
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     Setup your budget for each category{"\n"} so you in control
                  </Text>
               </View>
            </Swiper>
         </View>
         <View className="buttons mb-5 justify-between mini:mb-4">
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
                  navigation.navigate("Login");
               }}
            />
         </View>
      </View>
   );
};

export default Onboarding;
