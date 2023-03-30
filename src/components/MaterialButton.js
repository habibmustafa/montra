import React from "react";
import { TouchableRipple, Text } from "react-native-paper";

const MaterialButton = ({
   title,
   color = "#7F3DFF",
   size = 18,
   style,
   titleColor,
   onPress,
   leading,
   trailing,
}) => {
   return (
      <TouchableRipple
         borderless={true}
         onPress={onPress}
         rippleColor="#434c5445"
         style={{
            backgroundColor: color,
            height: 56,
            paddingVertical: 10,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            ...style,
         }}
      >
         <>
            {leading}
            <Text
               style={{
                  color: titleColor,
                  fontSize: size,
                  fontWeight: "700",
               }}
            >
               {title}
            </Text>
            {trailing}
         </>
      </TouchableRipple>
   );
};

export default MaterialButton;
