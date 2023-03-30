import React from "react";
import { View } from "react-native";
import { SelectList as SelectListD } from "react-native-dropdown-select-list";
import { HelperText, TouchableRipple } from "react-native-paper";

const SelectList = ({ data, setSelected, label, error }) => {
   return (
      <View>
         <SelectListD
            setSelected={setSelected}
            data={data}
            placeholder={label}
            search={false}
            boxStyles={{
               marginTop: 16,
               borderWidth: 1,
               borderRadius: 16,
               borderColor: "#F1F1FA",
               alignItems: "center",
               
            }}
            inputStyles={{ fontSize: 16, paddingVertical: 8, color: '#212325' }}
            dropdownStyles={{borderWidth: 1, borderRadius: 16, borderColor: "#F1F1FA" }}
            dropdownItemStyles={{ paddingVertical: 12}}
            dropdownTextStyles={{fontSize: 16}}
            save="value"
            
         />
         <HelperText
            style={{ position: "absolute", bottom: -22 }}
            type="error"
            visible={error}
         >
            {error}
         </HelperText>
      </View>
   );
};

export default SelectList;
