import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import MaterialButton from "../../components/MaterialButton";
import { openInbox } from "react-native-email-link";

const ForgotPasswordEmailSent = ({ navigation }) => {
   return (
      <View className="px-4 bg-white h-full">
         {/* Image and Text */}
         <View className="pt-8 px-4 flex-1">
            <Image
               className="h-80 mb-10 w-full"
               source={require("../../assets/email-sent.png")}
            />

            <Text className="mb-6 text-center font-semibold text-2xl text-dark-100">
               Your email is on the way
            </Text>
            <Text className="text-center font-medium text-base text-dark-25">
               Check your email test@test.com and follow the instructions to
               reset your password
            </Text>
         </View>

         {/* Button */}
         <View className="mb-5">
            <MaterialButton
               onPress={() => {
                  openInbox()
                  navigation.navigate("Login");
               }}
               title="Go to Gmail"
               titleColor="#fff"
            />
         </View>
      </View>
   );
};

export default ForgotPasswordEmailSent;
