import { Dropdown as DropdownElement } from "react-native-element-dropdown";
import { memo } from "react";

const Dropdown = ({data, value = '', placeholder='', onChange, position = 'auto', style }) => {
   return (
      <DropdownElement
         autoScroll={false}
         data={data}
         value={value}
         placeholder={placeholder}
         labelField="label"
         valueField="value"
         onChange={onChange}
         dropdownPosition={position}
         style={{
            width: '100%',
            borderWidth: 1,
            borderColor: "#F1F1FA",
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 8,
            ...style
         }}
         selectedTextStyle={{color: "#000"}}
         containerStyle={{ borderRadius: 12 }}
         itemContainerStyle={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#F1F1FA" }}
         itemTextStyle={{ color: '#000', fontSize: 16}}
         maxHeight={170}
      />
   );
};

export default memo(Dropdown);
