import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import MaterialButton from "../components/MaterialButton";
import { logout } from "../firebaseConfig/auth";

const Profile = ({navigation}) => {
   
   let { user } = useSelector((state) => state.local);
   user = JSON.parse(user);

   return (
      <View className="px-4 h-full justify-center">
         <MaterialButton
            title="Logout"
            titleColor="white"
            onPress={async () => {
               await logout(user);
               navigation.navigate("Onboarding");
            }}
         />
      </View>
   );
};

export default Profile;
