import React, { useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";

const Success = ({navigation}) => {

   useEffect(() => {
      let nav = setTimeout(() => {
         navigation.navigate("Root")
      }, 2000)

      return () => {
         clearTimeout(nav)
      }
   },[])

   return (
      <View className="bg-white flex-1 justify-center items-center">
         <StatusBar backgroundColor="#fff" animated={true} barStyle="default" />
         <View className="justify-center items-center">
            <Image className="w-32 h-32" source={require("../assets/success.png")} />
            <Text className="font-medium text-2xl text-dark-50">You are set!</Text>
         </View>
      </View>
   );
};

export default Success;
