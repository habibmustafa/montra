import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import MaterialButton from "../components/MaterialButton";

const SetupAccount = ({navigation}) => {

   useEffect(() => {
      navigation.addListener("beforeRemove", (e) => {
         e.preventDefault();
      });
   }, []);

   return (
      <>
         <StatusBar backgroundColor="#fff" animated={true} barStyle="default" />
         <View className="bg-light-100 h-full px-4 pb-8">
            <View className='flex-1'>
               <Text className="mt-16 mb-9 font-medium text-4xl text-dark-50">Let’s setup your account!</Text>
               <Text className="font-medium text-base text-dark-25">Account can be your bank, credit card or your wallet.</Text>
            </View >
            <MaterialButton title="Let’s go" titleColor="#FCFCFC" onPress={() => navigation.navigate("AddAccount")} />
         </View>
      </>
   );
};

export default SetupAccount;
