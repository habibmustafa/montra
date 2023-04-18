import { Text, View, ScrollView, Dimensions } from "react-native";
import React from "react";
import strings from "../../../utils/Localization";

const Notification = () => {
   return (
      <ScrollView className="bg-white">
         <View
            style={{ height: Dimensions.get("screen").height - 160 }}
            className="justify-center items-center"
         >
            <Text className="font-medium text-sm text-light-20">{strings.nonotification}</Text>
         </View>
      </ScrollView>
   );
};

export default Notification;
