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
import { useFocusEffect } from "@react-navigation/native";
import { l } from "../../localication";

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

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setTranslucent(true)
         StatusBar.setBackgroundColor('transparent');
         StatusBar.setBarStyle("dark-content")
      }, [])
   )

   return (
      <View className="px-4 h-full w-full bg-light-100" style={{paddingTop: StatusBar.currentHeight}}>
         <View className="illustration my-8 flex-1 mini:my-2 mini:mb-0">
            <Swiper
               loadMinimal={true}
               autoplay={false}
               autoplayTimeout={4}
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
                     {l("onboarding1title")}
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     {l("onboarding1text")}
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-11/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                     source={require("../../assets/onboarding2.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center mini:text-2xl mini:mb-2.5">
                     {l("onboarding2title")}
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     {l("onboarding2text")}
                  </Text>
               </View>
               <View>
                  <Image
                     className="h-80 mb-10 w-11/12 self-center mini:h-48 mini:w-2/3 mini:mb-5 mini:mt-4"
                     source={require("../../assets/onboarding3.png")}
                  />
                  <Text className="font-bold text-[32px] mb-4 text-dark-50 text-center mini:text-2xl mini:mb-2.5">
                     {l("onboarding3title")}
                  </Text>
                  <Text className="font-medium text-base text-center text-light-20 mini:text-sm">
                     {l("onboarding3text")}
                  </Text>
               </View>
            </Swiper>
         </View>
         <View className="buttons mb-5 justify-between mini:mb-4">
            <MaterialButton
               title={l("signup")}
               size={18}
               style={{ marginBottom: 16 }}
               titleColor="#fff"
               onPress={() => {
                  navigation.navigate("Register");
               }}
            />
            <MaterialButton
               title={l("login")}
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
