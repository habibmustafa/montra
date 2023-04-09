import React from 'react'
import { StatusBar, Text, TouchableNativeFeedback, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Theme = () => {
   const [data, setData] = React.useState({
      value: [
         { id: 1, name: "Light", key: "light" },
         { id: 2, name: "Dark", key: "dark" },
         { id: 3, name: "Use device theme", key: "light" },
      ],
      isActive: 1,
   });

   return (
      <View className="h-full bg-white">
         <StatusBar backgroundColor="#fff" animated={true} barStyle="dark-content" />
         {data.value.map(item => (
            <TouchableNativeFeedback key={item.id} background={TouchableNativeFeedback.Ripple("#eee")}
                                     onPress={() => {
                                        setData({ ...data, isActive: item.id });
                                     }}>
               <View className="flex-row items-center justify-between h-14 px-4 ">
                  <Text className="font-medium text-sm text-dark-100">{item.name}</Text>
                  {item.id === data.isActive && <SvgXml xml={`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 4C13.6266 4 11.3066 4.70379 9.33316 6.02236C7.35977 7.34094 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.6936 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2324 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76515 24.4853 7.51472C22.2348 5.26428 19.1826 4 16 4ZM21.66 13.59L16 19.24C15.4375 19.8018 14.675 20.1174 13.88 20.1174C13.085 20.1174 12.3225 19.8018 11.76 19.24L10.34 17.83C10.2468 17.7368 10.1728 17.6261 10.1223 17.5042C10.0719 17.3824 10.0459 17.2519 10.0459 17.12C10.0459 16.9881 10.0719 16.8576 10.1223 16.7358C10.1728 16.6139 10.2468 16.5032 10.34 16.41C10.4332 16.3168 10.5439 16.2428 10.6658 16.1923C10.7876 16.1419 10.9181 16.1159 11.05 16.1159C11.1819 16.1159 11.3124 16.1419 11.4343 16.1923C11.5561 16.2428 11.6668 16.3168 11.76 16.41L13.17 17.83C13.263 17.9237 13.3736 17.9981 13.4954 18.0489C13.6173 18.0997 13.748 18.1258 13.88 18.1258C14.012 18.1258 14.1427 18.0997 14.2646 18.0489C14.3864 17.9981 14.497 17.9237 14.59 17.83L20.24 12.17C20.3332 12.0768 20.4439 12.0028 20.5658 11.9523C20.6876 11.9019 20.8181 11.8759 20.95 11.8759C21.0819 11.8759 21.2124 11.9019 21.3343 11.9523C21.4561 12.0028 21.5668 12.0768 21.66 12.17C21.7532 12.2632 21.8272 12.3739 21.8777 12.4958C21.9281 12.6176 21.9541 12.7481 21.9541 12.88C21.9541 13.0119 21.9281 13.1424 21.8777 13.2642C21.8272 13.3861 21.7532 13.4968 21.66 13.59Z" fill="#5233FF"/>
                              </svg>
                           `} />}
               </View>
            </TouchableNativeFeedback>
         ))}

      </View>
   );
};

export default  Theme