import React from "react";
import { Dimensions, StatusBar, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const ReportIntro = () => {
   return (
      <>
         <StatusBar backgroundColor="#FD3C4A" animated={true} barStyle="light-content" />
         <Swiper
            loadMinimal={true}
            loop={false}
            style={{backgroundColor: 'yellow'}}
            paginationStyle={{bottom: Dimensions.get("window").height-50}}
            dotStyle={{ height: 3, width: Dimensions.get("window").width / 3.5, borderRadius: 10, backgroundColor: "#FFFFFF24" }}
            activeDotStyle={{ height: 3, width: Dimensions.get("window").width / 3.5, borderRadius: 10, backgroundColor: '#FFF' }}
         >
            <View className="bg-red-100 h-full w-full">
               <StatusBar backgroundColor="#FD3C4A" animated={true} barStyle="light-content" />
            </View>
            <View className="bg-green-100 h-full w-full">
               <StatusBar backgroundColor="#00A86B" animated={true} barStyle="light-content" />
            </View>
            <View className="bg-violet-100 h-full w-full">
               <StatusBar backgroundColor="#7F3DFF" animated={true} barStyle="light-content" />

            </View>
         </Swiper>
      </>
   );
};

export default ReportIntro;
