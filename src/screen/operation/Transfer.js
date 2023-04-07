import React from "react";
import {
   View, StatusBar, Keyboard, Dimensions, TouchableHighlight,
} from "react-native";
import NewScreen from "../../components/NewScreen";
import Input from "../../components/Input";
import DropdownPicker from "../../components/DropdownPicker";
import MaterialButton from "../../components/MaterialButton";
import { useSelector } from "react-redux";
import { useToast } from "native-base";
import uuid from "react-native-uuid";
import Svg, { Path } from "react-native-svg";
import { addTransaction, editTransaction } from "../../firebaseConfig/montraDB";
import Modal from "../../components/Modal";

const Transfer = ({ navigation, route }) => {
   const [from, setFrom] = React.useState(route.params?.from || "");
   const [to, setTo] = React.useState(route.params?.to || "");
   const [amount, setAmount] = React.useState(route.params?.amount || 0);
   const [description, setDescription] = React.useState(route.params?.description || "");
   const [visible, setVisible] = React.useState(false);
   const toast = useToast();

   let { userDb } = useSelector((state) => state.user);

   const handleAddAccount = async () => {
      if (/.{3,}/.test(description.trim()) && from && to && Number(amount)) {

         const data = {
            id: route.params?.id ? route.params.id : uuid.v4(),
            from,
            to,
            amount: Number(amount),
            description: description.trim(),
            category: "Transfer",
            type: "transfer",
         };
         if(route.params?.amount) {
            await editTransaction(data, route.params.amount)
         } else {
            const res = await addTransaction(data);
            console.log("RES: ", res);
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

   return (<View className="h-full">
      <StatusBar
         backgroundColor="#0077FF"
         animated={true}
         barStyle="default"
      />
      <NewScreen
         color="#0077FF"
         text="How much?"
         input={(value) => {
            setAmount(value);
         }}
         value={route.params?.amount.toFixed(2).toString()}
      >
         {/* From && To */}
         <View className="flex-row justify-between">
            <View
               className="w-[48%]"
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <DropdownPicker
                  label="From"
                  items={Object.values(userDb.accounts).map((account) => {
                     return {
                        value: account.id, label: account.name, disabled: account.id == to ? true : false,
                     };
                  })}
                  selectedList={from}
                  setSelectedList={(val) => {
                     setFrom(val);
                  }}
                  style={{ paddingRight: 20 }}
               />
            </View>
            <TouchableHighlight
               ctiveOpacity={0.99}
               underlayColor="#eee"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  setFrom(to);
                  setTo(from);
               }}
               className="p-2 absolute left-1/2 top-1/2 z-20 -translate-x-5 -translate-y-5 bg-light-80 border-[1px] border-light-60 rounded-full"
            >
               <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <Path
                     d="M15.0975 13.4475V14.1975C15.0975 14.69 15.0005 15.1776 14.812 15.6326C14.6236 16.0875 14.3474 16.5009 13.9991 16.8492C13.6509 17.1974 13.2375 17.4736 12.7826 17.6621C12.3276 17.8505 11.84 17.9475 11.3475 17.9475H8.90249C8.89093 18.3577 8.76742 18.7569 8.54533 19.1019C8.32325 19.4469 8.01104 19.7246 7.64249 19.905C7.33512 20.0586 6.9961 20.1382 6.65249 20.1375C6.1442 20.1405 5.64985 19.9713 5.24999 19.6575L2.46749 17.475C2.1965 17.2647 1.97717 16.9952 1.8263 16.6871C1.67542 16.379 1.59698 16.0405 1.59698 15.6975C1.59698 15.3545 1.67542 15.016 1.8263 14.7079C1.97717 14.3998 2.1965 14.1303 2.46749 13.92L5.24999 11.7375C5.58524 11.4699 5.98998 11.3038 6.41652 11.2586C6.84307 11.2134 7.27363 11.2911 7.65749 11.4825C8.16864 11.727 8.56229 12.1638 8.75249 12.6975H14.325C14.4254 12.6945 14.5253 12.7117 14.6189 12.748C14.7125 12.7843 14.7979 12.8391 14.8699 12.9091C14.942 12.979 14.9992 13.0627 15.0383 13.1552C15.0774 13.2477 15.0975 13.3471 15.0975 13.4475Z"
                     fill="#D3BDFF"
                  />
                  <Path
                     d="M22.4025 8.30253C22.4026 8.64552 22.3242 8.98399 22.1734 9.29206C22.0226 9.60013 21.8034 9.86966 21.5325 10.08L18.75 12.2625C18.3445 12.5776 17.846 12.749 17.3325 12.75C16.9889 12.7507 16.6499 12.6711 16.3425 12.5175C15.8314 12.273 15.4377 11.8363 15.2475 11.3025H9.6525C9.45358 11.3025 9.26282 11.2235 9.12217 11.0829C8.98151 10.9422 8.9025 10.7514 8.9025 10.5525V9.80253C8.9025 8.80796 9.29758 7.85414 10.0008 7.15088C10.7041 6.44761 11.6579 6.05253 12.6525 6.05253H15.0975C15.1066 5.63324 15.2328 5.22485 15.4617 4.87344C15.6906 4.52203 16.0131 4.24159 16.393 4.06377C16.7728 3.88595 17.1947 3.81782 17.6112 3.86707C18.0277 3.91633 18.4221 4.08101 18.75 4.34253L21.5325 6.52503C21.8034 6.7354 22.0226 7.00492 22.1734 7.31299C22.3242 7.62106 22.4026 7.95953 22.4025 8.30253Z"
                     fill="#7F3DFF"
                  />
               </Svg>
            </TouchableHighlight>
            <View
               className="w-[48%]"
               onTouchStart={() => {
                  Keyboard.dismiss();
               }}
            >
               <DropdownPicker
                  label="To"
                  items={Object.values(userDb.accounts).map((account) => {
                     return {
                        value: account.id, label: account.name, disabled: account.id == from ? true : false,
                     };
                  })}
                  selectedList={to}
                  setSelectedList={(val) => {
                     setTo(val);
                  }}
                  style={{ paddingHorizontal: 20 }}
               />
            </View>
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
   </View>);
};

export default Transfer;
