import React, { useEffect, useRef } from "react";
import {
   View,
   Text,
   ScrollView,
   StatusBar,
   Keyboard,
   Dimensions,
} from "react-native";
import NewScreen from "../components/NewScreen";
import Input from "../components/Input";
import SelectList from "../components/SelectList";
import MaterialButton from "../components/MaterialButton";
import { addAccount } from "../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "native-base";
import uuid from "react-native-uuid";

const AddAccount = ({ navigation }) => {
   const [selectedList, setSelectedList] = React.useState("");
   const [amount, setAmount] = React.useState(0);
   const [name, setName] = React.useState("");
   const toast = useToast();
   const ref = useRef()

   let { user } = useSelector((state) => state.local);
   user = JSON.parse(user);

   const handleAddAccount = async () => {
      if (/.{3,}/.test(name.trim()) && selectedList) {
         let id = uuid.v4();
         await addAccount(
            user.uid,
            id,
            name.trim(),
            selectedList,
            Number(amount)
         );
         navigation.navigate("Success");
      } else {
         toast.show({
            title: "Choose a minimum 3-character name and type for the account",
            placement: "top",
            duration: 1700,
            variant: "solid",
            backgroundColor: "red.500",
         });
      }
   };

   const data = [
      { key: "1", value: "Cash" },
      { key: "2", value: "Credit card" },
      { key: "3", value: "Savings" },
      { key: "4", value: "Investment" },
      { key: "5", value: "Business" },
      { key: "6", value: "Other/miscellaneous" },
   ];
   return (
      <View className="h-full bg-red-20">
         <StatusBar
            backgroundColor="#7F3DFF"
            animated={true}
            barStyle="default"
         />
         <NewScreen
            color="#7F3DFF"
            text="Balance"
            input={(value) => {
               setAmount(value);
            }}
         >
            
               <Input
                  label="Name"
                  textContentType="name"
                  value={name}
                  onChangeText={(e) => {
                     setName(e);
                  }}
               />

               <View
                  onTouchStart={() => {
                     Keyboard.dismiss();
                  }}
               >
                  <SelectList
                     label="Account Type"
                     data={data}
                     setSelected={(val) => {
                        setSelectedList(val);
                     }}
                  />
               </View>
               <MaterialButton
                  onPress={handleAddAccount}
                  title="Continue"
                  titleColor="#FCFCFC"
                  style={{
                     marginTop: Dimensions.get("window").width < 385 ? 24 : 40,
                  }}
               />
         </NewScreen>
      </View>
   );
};

export default AddAccount;

{
   /* <Input
               label="Name"
               textContentType="name"
               value={name}
               onChangeText={(e) => {
                  setName(e);
               }}
            />

            <View
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <SelectList
                  label="Account Type"
                  data={data}
                  setSelected={(val) => {
                     setSelectedList(val);
                  }}
               />
            </View>
            <MaterialButton
               onPress={handleAddAccount}
               title="Continue"
               titleColor="#FCFCFC"
               style={{ marginTop: Dimensions.get("window").width <385 ? 24 : 40 }}
            /> */
}
