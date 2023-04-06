import React, { useEffect, useState } from "react";
import {
   Text,
   View,
   ScrollView,
   StatusBar,
   BackHandler,
   TouchableHighlight,
   TouchableWithoutFeedback,
} from "react-native";
import { ActivityIndicator, Avatar, Modal, Portal } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import { prettyPrint } from "../../prettyPrint";
import SpendFrequency from "./SpendFrequency";
import DatePicker from "react-native-modern-datepicker";
import RecentTransaction from "./RecentTransaction";
import Amount from "../../components/Amount";
import { useFocusEffect } from "@react-navigation/native";

function getMonthName(monthNumber) {
   const date = new Date();
   date.setMonth(monthNumber - 1);

   return date.toLocaleString("en-US", {
      month: "long",
   });
}

const Home = ({ navigation }) => {
   const [modal, setModal] = useState(false);
   const [date, setDate] = useState(
      new Date().toISOString().slice(0, 7).split("-").join(" ")
   );
   const { userDb } = useSelector((state) => state.user);
   const { user } = useSelector((state) => state.local);

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle('dark-content');
         StatusBar.setBackgroundColor('#FFF7E6');
      }, [])
   )

   const beforeRemove = (e) => {
      BackHandler.exitApp();
      e.preventDefault();
   };

   useEffect(() => {
      navigation.addListener("beforeRemove", beforeRemove);
      return () => {
         navigation.removeListener("beforeRemove", beforeRemove);
      };
   }, []);

   if (!userDb) {
      return (
         <View className="h-full pb-[70px] bg-[#F7F7F7] justify-center items-center flex-row gap-x-2">
            <ActivityIndicator animating={true} color="#7F3DFF" size="small" />
            <Text className="text-base">Loading</Text>
         </View>
      );
   } else
      return (
         <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
            <LinearGradient
               // Background Linear Gradient
               colors={["#FFF7E6", "#FFFFFF", "#FFFFFF"]}
               className="pb-20"
            >
               {/*<StatusBar*/}
               {/*   backgroundColor="#FFF7E6"*/}
               {/*   animated={true}*/}
               {/*   barStyle="dark-content"*/}
               {/*/>*/}
               <View className="bg-[#FFF7E6] pb-6 mb-3 rounded-bl-[32px] rounded-br-[32px]">
                  {/* Head */}
                  <View className="head py-3 my-2 px-4">
                     <View className="title flex-row justify-between items-center">
                        <TouchableWithoutFeedback
                           onPress={() => {
                              navigation.navigate("Profile");
                           }}
                        >
                           <Avatar.Text size={34} label="HM" />
                        </TouchableWithoutFeedback>

                        <TouchableHighlight
                           activeOpacity={0.99}
                           underlayColor="#FCEED4"
                           onPress={() => {
                              setModal(!modal);
                           }}
                           className="flex-row justify-center items-center px-4 py-2 border-[1px] border-light-60 rounded-[40px]"
                        >
                           <>
                              <Svg
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <Path
                                    d="M12.009 14.5575L12.0001 15.3075L11.9912 14.5575C11.2017 14.5669 10.4405 14.2647 9.87244 13.7166L6.2345 10.0401L9.87976 13.6853L9.88672 13.6923L9.89386 13.6991C10.4624 14.2385 11.2163 14.5393 12.0001 14.5393C12.7839 14.5393 13.5378 14.2385 14.1063 13.6991L14.1135 13.6923L14.1204 13.6853L17.7657 10.0401L14.1277 13.7166C13.5597 14.2647 12.7985 14.5669 12.009 14.5575Z"
                                    fill="black"
                                    stroke="#7F3DFF"
                                    stroke-width="1.5"
                                 />
                              </Svg>

                              <Text className="font-medium ml-1">
                                 {getMonthName(date.split(" ").splice(-1))}
                              </Text>
                           </>
                        </TouchableHighlight>

                        <TouchableHighlight
                           activeOpacity={0.99}
                           underlayColor="#FCEED4"
                           className="rounded-full"
                           onPress={() => {
                              navigation.navigate("Notification");
                           }}
                        >
                           <Svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <Path
                                 d="M26 21.5C25.8608 22.2171 25.472 22.8616 24.9026 23.3193C24.3333 23.777 23.6203 24.0181 22.89 24H9.11001C8.37977 24.0181 7.66671 23.777 7.09738 23.3193C6.52805 22.8616 6.13927 22.2171 6.00001 21.5C5.89663 20.885 5.98746 20.2531 6.25988 19.6921C6.5323 19.1312 6.97276 18.669 7.52001 18.37C7.66786 18.2883 7.79065 18.1679 7.87522 18.0216C7.95979 17.8754 8.00293 17.7089 8.00001 17.54V14C7.99726 12.4041 8.4719 10.8438 9.3629 9.51978C10.2539 8.19575 11.5206 7.16847 13 6.57C13.004 5.77435 13.3239 5.01287 13.8893 4.45307C14.4547 3.89328 15.2194 3.58102 16.015 3.585C16.8107 3.58898 17.5721 3.90886 18.1319 4.47428C18.6917 5.03971 19.004 5.80435 19 6.6C20.4923 7.25496 21.7605 8.33179 22.6489 9.69803C23.5372 11.0643 24.0068 12.6604 24 14.29V17.54C23.9931 17.7049 24.0302 17.8688 24.1075 18.0146C24.1848 18.1605 24.2996 18.2832 24.44 18.37C24.9946 18.6631 25.4434 19.1227 25.7233 19.6842C26.0031 20.2456 26.0999 20.8807 26 21.5V21.5Z"
                                 fill="#7F3DFF"
                              />
                              <Path
                                 d="M16.0001 28C16.6981 27.9958 17.3829 27.809 17.9864 27.4581C18.5899 27.1072 19.091 26.6046 19.4401 26H12.5601C12.9091 26.6046 13.4102 27.1072 14.0137 27.4581C14.6172 27.809 15.302 27.9958 16.0001 28Z"
                                 fill="#7F3DFF"
                              />
                           </Svg>
                        </TouchableHighlight>
                     </View>
                  </View>

                  <Portal>
                     <Modal
                        visible={modal}
                        onDismiss={() => {
                           setModal(false);
                        }}
                        contentContainerStyle={{
                           width: "85%",
                           alignSelf: "center",
                           backgroundColor: "white",
                           borderRadius: 10,
                           height: 340,
                        }}
                     >
                        <DatePicker
                           mode="monthYear"
                           minimumDate={new Date(
                              JSON.parse(user).metadata.creationTime
                           )
                              .toISOString()
                              .slice(0, 10)}
                           maximumDate={new Date().toISOString().slice(0, 10)}
                           onMonthYearChange={(selectedDate) => {
                              setDate(selectedDate);
                              setModal(false);
                           }}
                           style={{ borderRadius: 10, marginBottom: -20 }}
                           options={{
                              backgroundColor: "transparent",
                           }}
                           current={`${date.split(" ").join("/")}/01`}
                        />
                     </Modal>
                  </Portal>

                  {/* Amount */}
                  <Amount
                     year={date.split(" ")[0]}
                     month={date.split(" ")[1].replace(/^0+/, "") - 1}
                  />
               </View>

               {/* Chart */}
               <SpendFrequency />

               {/* Recent Transaction */}
               <RecentTransaction />
            </LinearGradient>
         </ScrollView>
      );
};

export default Home;
