import React, { memo } from "react";
import { View, Text } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const Input = ({
   label,
   style,
   textContentType = "name",
   secureTextEntry = false,
   onChangeText,
   onBlur,
   value,
   error,
   placeholder=true
}) => {


   return (
      <View>
         <TextInput
            mode="outlined"
            // label={<Text className="text-dark-25 bg-white pb-12">{!placeholder && label}</Text>}
            placeholder={placeholder ? label : false}
            placeholderTextColor="#91919F"
            className="text-base py-1 bg-white mini:py-0 mini:text-sm"
            style={{
               ...style,
            }}
            outlineStyle={{
               borderRadius: 16,
               borderWidth: 1,
               borderColor: "#F1F1FA",
            }}
            outlineColor="#91919F"
            textColor="#222"
            textContentType={textContentType}
            returnKeyType="next"
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            right={secureTextEntry && <TextInput.Icon icon="eye" />}
            onChangeText={onChangeText}
            value={value}
            onBlur={onBlur}
         />
         <HelperText
            style={{ position: "absolute", color: '#FD3C4A' }}
            className="text-xs -bottom-[22px] mini:text-[10px] mini:-bottom-[19px]"
            type="error"
            visible={error}
         >
            {error}
         </HelperText>
      </View>
   );
};

export default memo(Input);
