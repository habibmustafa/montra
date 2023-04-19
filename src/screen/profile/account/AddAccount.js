import React from "react";
import {
   View,
   StatusBar,
   Keyboard,
   Dimensions,
} from "react-native";
import NewScreen from "../../../components/NewScreen";
import Input from "../../../components/Input";
import MaterialButton from "../../../components/MaterialButton";
import { addAccount } from "../../../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import uuid from "react-native-uuid";
import { useFocusEffect } from "@react-navigation/native";
import Dropdown from "../../../components/Dropdown";
import strings from "../../../utils/Localization";

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
         navigation.setOptions({
            title: strings.addnewaccount
         })
      }, []),
   );

   const items = [
      { label: strings.cash, value: "Cash" },
      { label: strings.creditcard, value: "Credit card" },
      { label: strings.savings, value: "Savings" },
      { label: strings.investment, value: "Investment" },
      { label: strings.business, value: "Business" },
      { label: strings.othermiscellaneous, value: "Other/miscellaneous" },
   ];
   return (
      <View className="h-full bg-red-20">
         <NewScreen
            color="#7F3DFF"
            text={strings.balance}
            input={(value) => {
               setAmount(value);
            }}
            // value="67"
         >
            <Input
               label={strings.name}
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
               <Dropdown
                  placeholder={strings.accounttype}
                  position="top"
                  data={items}
                  value={selectedList}
                  onChange={(val) => {
                     setSelectedList(val.value);
                  }}
               />

            </View>
            <MaterialButton
               onPress={handleAddAccount}
               title={strings.continue}
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
