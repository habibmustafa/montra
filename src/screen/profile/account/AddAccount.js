import React from "react";
import {
   View,
   StatusBar,
   Keyboard,
   Dimensions,
} from "react-native";
import NewScreen from "../../../components/NewScreen";
import Input from "../../../components/Input";
import DropdownPicker from "../../../components/DropdownPicker";
import MaterialButton from "../../../components/MaterialButton";
import { addAccount } from "../../../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import uuid from "react-native-uuid";
import { useFocusEffect } from "@react-navigation/native";

const AddAccount = ({ navigation }) => {
   const [selectedList, setSelectedList] = React.useState("");
   const [amount, setAmount] = React.useState(0);
   const [name, setName] = React.useState("");
   const toast = useToast();

   let { user } = useSelector((state) => state.local);
   let { userDb } = useSelector((state) => state.user);
   user = JSON.parse(user);

   const handleAddAccount = () => {
      if (/.{3,}/.test(name.trim()) && selectedList) {
         const data = {
            id: uuid.v4(),
            name: name.trim(),
            type: selectedList,
            balance: Number(amount),
         };
         addAccount(data);

         if (Object.keys(userDb.accounts).length <= 1) {
            navigation.navigate("Success");
         } else {
            navigation.goBack();
         }
      } else {
         toast.show("Choose a minimum 3-character name and type for the account")
      }
   };

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("light-content");
      }, []),
   );

   const items = [
      { label: "Cash", value: "Cash" },
      { label: "Credit card", value: "Credit card" },
      { label: "Savings", value: "Savings" },
      { label: "Investment", value: "Investment" },
      { label: "Business", value: "Business" },
      { label: "Other/miscellaneous", value: "Other/miscellaneous" },
   ];
   return (
      <View className="h-full bg-red-20">
         <NewScreen
            color="#7F3DFF"
            text="Balance"
            input={(value) => {
               setAmount(value);
            }}
            // value="67"
         >
            <Input
               label="Name"
               textContentType="name"
               value={name}
               text
               style={{
                  marginBottom: 12,
               }}
               onChangeText={(e) => {
                  setName(e);
               }}
            />

            <View
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <DropdownPicker
                  label="Account Type"
                  items={items}
                  selectedList={selectedList}
                  setSelectedList={(val) => {
                     setSelectedList(val);
                  }}
               />

            </View>
            <MaterialButton
               onPress={handleAddAccount}
               title="Continue"
               titleColor="#FCFCFC"
               style={{
                  marginTop: Dimensions.get("window").width < 385 ? 24 : 36,
               }}
            />
         </NewScreen>
      </View>
   );
};

export default AddAccount;
