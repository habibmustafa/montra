import React from "react";
import {
   View,
   StatusBar,
   Keyboard,
   Dimensions,
} from "react-native";
import NewScreen from "../components/NewScreen";
import Input from "../components/Input";
import DropdownPicker from "../components/DropdownPicker";
import MaterialButton from "../components/MaterialButton";
import { addTransaction } from "../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "native-base";
import uuid from "react-native-uuid";

const Income = ({ navigation }) => {
   const [category, setCategory] = React.useState("");
   const [account, setAccount] = React.useState("");
   const [amount, setAmount] = React.useState(0);
   const [description, setDescription] = React.useState("");
   const toast = useToast();

   let { userDb } = useSelector((state) => state.user);

   const handleAddAccount = async () => {
      if (/.{3,}/.test(description.trim()) && category && account && Number(amount)) {
         let id = uuid.v4();
         await addTransaction(
            account,
            id,
            type = "income",
            Number(amount),
            description.trim(),
            category,
            balance = userDb.accounts[account].balance
         );

         navigation.navigate("Tab");
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
      { label: "Salary", value: "Salary" },
      { label: "Sales", value: "Sales" },
      { label: "Scholarship", value: "Scholarship" },
      { label: "Passive Income", value: "Passive Income" },
      { label: "Tips", value: "Tips" },
      { label: "Prize or Award", value: "Prize or Award" },
      { label: "Refunds", value: "Refunds" },
   ];
   return (
      <View className="h-full">
         <StatusBar
            backgroundColor="#00A86B"
            animated={true}
            barStyle="default"
         />
         <NewScreen
            color="#00A86B"
            text="How much?"
            input={(value) => {
               setAmount(value);
            }}
         >
            {/* Category */}
            <View
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <DropdownPicker
                  label="Category"
                  items={data}
                  selectedList={category}
                  setSelectedList={(val) => {
                     setCategory(val);
                  }}
               />
            </View>

            {/* Description */}
            <Input
               label="Description"
               textContentType="name"
               text
               value={description}
               onChangeText={(e) => {
                  setDescription(e);
               }}
               style={{ marginTop: 8, marginBottom: 12 }}
            />

            {/* Category */}
            <View
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <DropdownPicker
                  label="Account"
                  items={Object.values(userDb.accounts).map((account) => {
                     return { value: account.id, label: account.name };
                  })}
                  selectedList={account}
                  setSelectedList={(val) => {
                     setAccount(val);
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

export default Income;
