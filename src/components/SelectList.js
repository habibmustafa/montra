import React from "react";
import { View, Dimensions } from "react-native";
import { SelectList as SelectListD } from "react-native-dropdown-select-list";
import { HelperText } from "react-native-paper";

const SelectList = ({ data, setSelected, label, error }) => {
   return (
      <View>
         <SelectListD
            setSelected={setSelected}
            data={data}
            placeholder={label}
            search={false}
            boxStyles={{
               marginTop: Dimensions.get("window").width < 385 ? 14 : 16,
               borderWidth: 1,
               borderRadius: 16,
               borderColor: "#F1F1FA",
               alignItems: "center",
               
            }}
            inputStyles={Dimensions.get("window").width < 385 ? { fontSize: 14, paddingVertical: 4, color: '#212325' } : { fontSize: 16, paddingVertical: 8, color: '#212325' }}
            dropdownStyles={{borderWidth: 1, borderRadius: 16, borderColor: "#F1F1FA" }}
            dropdownItemStyles={{ paddingVertical: Dimensions.get("window").width < 385 ? 8 : 12}}
            dropdownTextStyles={{fontSize: Dimensions.get("window").width < 385 ? 14 : 16}}
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
