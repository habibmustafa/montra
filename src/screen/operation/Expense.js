import React from "react";
import { View, StatusBar, Keyboard, Dimensions } from "react-native";
import NewScreen from "../../components/NewScreen";
import Input from "../../components/Input";
import MaterialButton from "../../components/MaterialButton";
import { addTransaction, editTransaction } from "../../firebaseConfig/montraDB";
import { useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import uuid from "react-native-uuid";
import Modal from "../../components/Modal";
import { useFocusEffect } from "@react-navigation/native";
import Dropdown from "../../components/Dropdown";
import strings from "../../utils/Localization";

const Expense = ({ navigation, route }) => {
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
            type: "expense",
         };
         const balance = {
            accountBalance: userDb.accounts[account].balance,
            transactionAmount: route.params?.amount,
         };
         if (route.params?.amount) {
            editTransaction(data, balance);
         } else {
            addTransaction(data, balance);
         }

         setVisible(true);
      } else {
         toast.show("Choose a minimum 3-character name and type for the account");
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
      { label: strings.foodanddrink, value: "Food and Drink" }, {
         label: strings.transportation,
         value: "Transportation",
      }, { label: strings.shopping, value: "Shopping" }, { label: strings.entertainment, value: "Entertainment" }, {
         label: strings.personalcareandhealth,
         value: "Personal care and Health",
      }, { label: strings.housing, value: "Housing" }, {
         label: strings.creditanddebt,
         value: "Credit and Debt",
      }, {
         label: strings.education,
         value: "Education",
      }, { label: strings.savingsandinvestments, value: "Savings and Investments" }];

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("light-content");
         navigation.setOptions({
            title: strings.expense
         })
      }, []),
   );

   return (
      <View className="h-full">
         <NewScreen
            color="#FD3C4A"
            text={strings.howmuch}
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
               <Dropdown
                  placeholder={strings.category}
                  data={data}
                  value={category}
                  onChange={(val) => {
                     setCategory(val.value);
                  }}
               />
            </View>

            {/* Description */}
            <Input
               label={strings.description}
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
               <Dropdown
                  placeholder={strings.account}
                  position='top'
                  data={Object.values(userDb.accounts).map((account) => {
                     return { value: account.id, label: account.name };
                  })}
                  value={account}
                  onChange={(val) => {
                     setAccount(val.value);
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
               disabled
            />
         </NewScreen>
         <Modal
            visible={visible}
            text={`${strings.transactionsuccess} ${route.params ? strings.updated : strings.added} `}
         />
      </View>);
};

export default Expense;
