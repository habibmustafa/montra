import React from "react";
import {
   View,
   StatusBar,
   Keyboard,
   Dimensions,
} from "react-native";
import NewScreen from "../../components/NewScreen";
import Input from "../../components/Input";
import DropdownPicker from "../../components/DropdownPicker";
import MaterialButton from "../../components/MaterialButton";
import { addTransaction, editTransaction } from "../../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "native-base";
import uuid from "react-native-uuid";
import Modal from "../../components/Modal";

const Income = ({ navigation, route }) => {
   const [category, setCategory] = React.useState(route.params?.category || "");
   const [account, setAccount] = React.useState(route.params?.account_id || "");
   const [amount, setAmount] = React.useState(route.params?.amount || 0);
   const [description, setDescription] = React.useState(route.params?.description || "");
   const [visible, setVisible] = React.useState(false);
   const toast = useToast();

   let { userDb } = useSelector((state) => state.user);

   const handleAddAccount = () => {
      if (/.{3,}/.test(description.trim()) && category && account && Number(amount)) {
         const data = {
            id: route.params?.id ? route.params.id : uuid.v4(),
            account_id: account,
            amount: Number(amount),
            description: description.trim(),
            category,
            type: "income",
         };
         const balance = {
            accountBalance: userDb.accounts[account].balance,
            transactionAmount: route.params?.amount
         }
         if(route.params?.amount) {
            editTransaction(data, balance)
         } else {
            addTransaction(data, balance);
         }

         setVisible(true);
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

   React.useEffect(() => {
      let timeOut;

      if (visible) {
         timeOut = setTimeout(() => {
            navigation.goBack();
         }, 1700);
      }

      return () => {
         clearTimeout(timeOut);
      };
   }, [visible]);

   const data = [
      { label: "Salary", value: "Salary" },
      { label: "Sales", value: "Sales" },
      { label: "Scholarship", value: "Scholarship" },
      { label: "Refunds", value: "Refunds" },
      { label: "Prize or Award", value: "Prize or Award" },
      { label: "Passive Income", value: "Passive Income" },
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
            value={route.params?.amount.toFixed(2).toString()}
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
         <Modal
            visible={visible}
            text={`Transaction has been successfully ${route.params ? "updated" : "added"} `}
         />
      </View>
   );
};

export default Income;
