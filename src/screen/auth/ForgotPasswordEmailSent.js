import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import MaterialButton from "../../components/MaterialButton";
import { openInbox } from "react-native-email-link";
import strings from "../../utils/Localization";

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
               {strings.emailway}
            </Text>
            <Text className="text-center font-medium text-base text-dark-25">
               {strings.emailwaytext}
            </Text>
         </View>

         {/* Button */}
         <View className="mb-5">
            <MaterialButton
               onPress={() => {
                  openInbox()
                  navigation.navigate("Login");
               }}
               title={strings.gogmail}
               titleColor="#fff"
            />
         </View>
      </View>
   );
};

export default ForgotPasswordEmailSent;
