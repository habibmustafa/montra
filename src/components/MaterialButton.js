import React, { memo } from "react";
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
         className="h-14 rounded-2xl justify-center items-center flex-row mini:h-12"
         style={{
            backgroundColor: color,
            ...style,
         }}
      >
         <>
            {leading}
            <Text
               style={{
                  color: titleColor,
                  fontWeight: "700",
               }}
               className="text-lg  mini:text-base"
            >
               {title}
            </Text>
            {trailing}
         </>
      </TouchableRipple>
   );
};

export default memo(MaterialButton);
