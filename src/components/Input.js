import React from "react";
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
            
            style={{
               fontSize: 16,
               paddingVertical: 4,
               backgroundColor: "#fff",
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
            style={{ position: "absolute", bottom: -22, color: '#FD3C4A' }}
            type="error"
            visible={error}
         >
            {error}
         </HelperText>
      </View>
   );
};

export default Input;
