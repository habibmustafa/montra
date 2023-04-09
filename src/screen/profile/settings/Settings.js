import React, { useState } from "react";
import { StatusBar, Text, TouchableNativeFeedback, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Settings = ({navigation}) => {
   const [data, setData] = useState([
      { name: "Currency", value: "AZN", navigate: "Currency" },
      { name: "Language", value: "English", navigate: "Language" },
      { name: "Theme", value: "Light", navigate: "Theme" },
      { name: "Notification", value: "", navigate: "NotificationSettings" },
      { name: "About", value: "", navigate: false },
      { name: "Help", value: "", navigate: false },
   ]);
   return (
      <View className="bg-white h-full">
         <StatusBar backgroundColor="#fff" animated={true} barStyle="dark-content" />

         {data.map(item => (
            <TouchableNativeFeedback key={item.name} background={TouchableNativeFeedback.Ripple("#eee")}
                                     onPress={() => {
                                        if(item.navigate) {
                                           navigation.navigate(item.navigate)
                                        } else {
                                           console.log("FAQ");
                                        }
                                     }}>
               <View className={`flex-row justify-between py-4 px-4 ${item.name === "About" && "mt-8"}`}>
                  <Text className="font-medium text-base text-dark-25">{item.name}</Text>
                  <View className="flex-row items-center">
                     <Text className="font-medium text-sm text-light-20">{item.value}</Text>
                     <SvgXml xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.44249 19.1176C9.34326 19.1172 9.2451 19.0971 9.15369 19.0585C9.06228 19.0198 8.97945 18.9635 8.90999 18.8926C8.7703 18.7521 8.69189 18.562 8.69189 18.3638C8.69189 18.1657 8.7703 17.9756 8.90999 17.8351L13.155 13.5901C13.5763 13.1682 13.813 12.5963 13.813 12.0001C13.813 11.4038 13.5763 10.832 13.155 10.4101L8.90999 6.16509C8.78712 6.02161 8.72291 5.83706 8.73021 5.6483C8.7375 5.45954 8.81575 5.28049 8.94932 5.14692C9.08289 5.01335 9.26194 4.9351 9.4507 4.92781C9.63946 4.92051 9.82401 4.98472 9.96749 5.10759L14.25 9.34509C14.5992 9.69343 14.8763 10.1072 15.0653 10.5628C15.2544 11.0184 15.3517 11.5068 15.3517 12.0001C15.3517 12.4933 15.2544 12.9818 15.0653 13.4373C14.8763 13.8929 14.5992 14.3067 14.25 14.6551L10.005 18.8926C9.93203 18.9672 9.84432 19.0257 9.74747 19.0644C9.65061 19.1032 9.54674 19.1213 9.44249 19.1176V19.1176Z" fill="#7F3DFF"/>
                              </svg>
                           `} />
                  </View>
               </View>
            </TouchableNativeFeedback>
         ))}


      </View>
   );
};

export default Settings;
