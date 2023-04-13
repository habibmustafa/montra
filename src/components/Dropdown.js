import { Dropdown as DropdownElement } from "react-native-element-dropdown";
import { memo, useState } from "react";

const Dropdown = ({data, defaultValue = '', placeholder='', onChange, style }) => {
   const [value, setValue] = useState(null);
   return (
      <DropdownElement
         data={data}
         value={defaultValue}
         placeholder={placeholder}
         labelField="label"
         valueField="value"
         onChange={onChange}
         dropdownPosition="auto"
         style={{
            width: 120,
            borderWidth: 1,
            borderColor: "#F1F1FA",
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 8,
            ...style
         }}
         containerStyle={{ borderRadius: 12 }}
         itemContainerStyle={{ padding: 10 }}
         itemTextStyle={{}}
         maxHeight={170}
      />
   );
};

export default memo(Dropdown);
