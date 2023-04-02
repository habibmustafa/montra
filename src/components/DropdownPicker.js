import React, { memo, useState } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SelectList = ({ items, selectedList, setSelectedList, label, style }) => {
   const [open, setOpen] = useState(false);

   return (
      <DropDownPicker
         open={open}
         setOpen={setOpen}
         maxHeight={500}
         value={selectedList}
         items={items}
         setValue={setSelectedList}
         placeholder={label}
         placeholderStyle={{ color: "#91919F" }}
         style={{ borderRadius: 16, borderColor: "#F1F1FA", height: 56, ...style }}
         textStyle={{ marginHorizontal: 4, fontSize: 16 }}
         dropDownContainerStyle={{
            paddingVertical: 4,
            borderRadius: 16,
            borderColor: "#F1F1FA",
         }}
         listItemContainerStyle={{borderBottomWidth: 1, borderBottomColor: '#F1F1FA', height: 45}}
         disabledItemLabelStyle={{color: "#bbb"}}
         listMode="FLATLIST"
         scrollViewProps={{
            nestedScrollEnabled: true,
         }}
      />
   );
};

export default memo(SelectList);

{
   /* <SelectListD
            setSelected={setSelected}
            data={data}
            placeholder={label}
            search={false}
            boxStyles={{
               borderWidth: 1,
               borderRadius: 16,
               borderColor: "#F1F1FA",
               alignItems: "center",
            }}
            inputStyles={
               Dimensions.get("window").width < 385
                  ? { fontSize: 14, paddingVertical: 4, color: "#212325" }
                  : { fontSize: 16, paddingVertical: 8, color: "#212325" }
            }
            dropdownStyles={{
               borderWidth: 1,
               borderRadius: 16,
               borderColor: "#F1F1FA",
            }}
            dropdownItemStyles={{
               paddingVertical: Dimensions.get("window").width < 385 ? 8 : 12,
            }}
            dropdownTextStyles={{
               fontSize: Dimensions.get("window").width < 385 ? 14 : 16,
            }}
            save={save}
         />
         <HelperText
            style={{ position: "absolute", bottom: -22 }}
            type="error"
            visible={error}
         >
            {error}
         </HelperText> */
}
