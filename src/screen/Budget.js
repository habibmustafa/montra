import React from "react";
import { StatusBar, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import MaterialButton from "../components/MaterialButton";
import { useFocusEffect } from "@react-navigation/native";

const Budget = () => {

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle('light-content');
         StatusBar.setBackgroundColor('#7F3DFF');
      }, [])
   )

   return (
      <View className="bg-violet-100 flex-1">
         <StatusBar
            backgroundColor="#7F3DFF"
            animated={true}
            barStyle="light-content"
         />
         {/* Date */}
         <View className="date px-4 h-[104px] flex-row justify-between items-center">
            {/* prev */}
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path
                  d="M19.41 25.4898C19.1462 25.486 18.8946 25.3782 18.71 25.1898L13.05 19.5398C12.5844 19.0753 12.2149 18.5236 11.9629 17.9161C11.7108 17.3087 11.5811 16.6575 11.5811 15.9998C11.5811 15.3421 11.7108 14.6909 11.9629 14.0835C12.2149 13.476 12.5844 12.9242 13.05 12.4598L18.71 6.80979C18.9013 6.64597 19.1474 6.56036 19.399 6.57008C19.6507 6.5798 19.8895 6.68414 20.0676 6.86223C20.2457 7.04032 20.35 7.27906 20.3597 7.53074C20.3694 7.78242 20.2838 8.02849 20.12 8.21979L14.46 13.8798C13.8982 14.4423 13.5826 15.2048 13.5826 15.9998C13.5826 16.7948 13.8982 17.5573 14.46 18.1198L20.12 23.7798C20.3062 23.9672 20.4108 24.2206 20.4108 24.4848C20.4108 24.749 20.3062 25.0024 20.12 25.1898C20.0274 25.2843 19.9169 25.3595 19.7951 25.4109C19.6732 25.4624 19.5423 25.4892 19.41 25.4898Z"
                  fill="#FCFCFC" />
            </Svg>

            <Text className="font-medium text-2xl text-light-80">April</Text>

            {/* next */}
            <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path
                  d="M12.59 25.4898C12.4577 25.4892 12.3268 25.4624 12.205 25.4109C12.0831 25.3595 11.9726 25.2843 11.88 25.1898C11.6938 25.0024 11.5892 24.749 11.5892 24.4848C11.5892 24.2206 11.6938 23.9672 11.88 23.7798L17.54 18.1198C18.1018 17.5573 18.4174 16.7948 18.4174 15.9998C18.4174 15.2048 18.1018 14.4423 17.54 13.8798L11.88 8.21979C11.7162 8.02849 11.6306 7.78242 11.6403 7.53074C11.65 7.27906 11.7544 7.04032 11.9325 6.86223C12.1106 6.68414 12.3493 6.5798 12.601 6.57008C12.8526 6.56036 13.0987 6.64597 13.29 6.80979L19 12.4598C19.4657 12.9242 19.8351 13.476 20.0872 14.0835C20.3392 14.6909 20.469 15.3421 20.469 15.9998C20.469 16.6575 20.3392 17.3087 20.0872 17.9161C19.8351 18.5236 19.4657 19.0753 19 19.5398L13.34 25.1898C13.2428 25.2892 13.1258 25.3672 12.9967 25.4189C12.8675 25.4705 12.729 25.4947 12.59 25.4898Z"
                  fill="#FCFCFC" />
            </Svg>
         </View>

         {/* Container */}
         <View className="flex-1 bg-light-80 rounded-tl-3xl rounded-tr-3xl justify-center px-4">
            <View className="flex-1 justify-center items-center">
               <Text className="font-medium text-base text-light-20 text-center">You don’t have a budget. {`\n`}Let’s
                  make
                  one so you in control.</Text>
            </View>

            <MaterialButton title="Create a budget" titleColor="#FCFCFC" color='#ccc' style={{ marginBottom: 94 }}  />
         </View>
      </View>
   );
};

export default Budget;
