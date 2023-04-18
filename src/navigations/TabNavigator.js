import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home/Home";
import Transaction from "../screen/transaction/Transaction";
import Budget from "../screen/budget/Budget";
import Profile from "../screen/profile/Profile";
import AddButton from "../screen/operation/AddButton";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const getIconColor = (focused) => ({
   tintColor: focused ? "blue" : "#000",
});

const TabNavigator = () => {

   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            lazy: true
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarItemStyle: {
                  height: 0,
               },
               tabBarIcon: ({ focused }) => (
                  <View
                     style={{
                        ...styles.tabIconContainer,
                     }}
                  >
                     <Svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M23.67 9.56L21.67 7.74L14 0.78C13.45 0.288045 12.7379 0.0160675 12 0.0160675C11.2621 0.0160675 10.55 0.288045 10 0.78L2.35 7.78L0.349999 9.6C0.215325 9.73665 0.122804 9.90916 0.0834737 10.0969C0.0441435 10.2847 0.0596646 10.4799 0.128185 10.6591C0.196706 10.8383 0.315334 10.994 0.469916 11.1076C0.624499 11.2213 0.808511 11.2881 1 11.3C1.25329 11.2886 1.49277 11.1813 1.67 11L2 10.7V21C2 21.7956 2.31607 22.5587 2.87868 23.1213C3.44129 23.6839 4.20435 24 5 24H19C19.7956 24 20.5587 23.6839 21.1213 23.1213C21.6839 22.5587 22 21.7956 22 21V10.74L22.33 11.04C22.5134 11.2067 22.7522 11.2994 23 11.3C23.2016 11.2995 23.3984 11.238 23.5644 11.1237C23.7305 11.0094 23.8582 10.8475 23.9306 10.6593C24.0031 10.4712 24.0169 10.2655 23.9704 10.0693C23.9239 9.87315 23.8192 9.69561 23.67 9.56Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                     </Svg>

                     <Text
                        className={`font-medium text-[10px] mt-1 ${
                           !focused ? "text-[#C6C6C6]" : "text-violet-100"
                        }`}
                     >
                        Home
                     </Text>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Transaction"
            component={Transaction}
            options={{
               tabBarItemStyle: {
                  height: 0,
               },
               tabBarIcon: ({ focused }) => (
                  <View
                     style={{
                        ...styles.tabIconContainer,
                     }}
                  >
                     <Svg
                        width="28"
                        height="22"
                        viewBox="0 0 28 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M18.13 12.93V13.93C18.13 14.5866 18.0007 15.2368 17.7494 15.8434C17.4981 16.45 17.1298 17.0012 16.6655 17.4655C16.2012 17.9298 15.65 18.2981 15.0434 18.5494C14.4368 18.8007 13.7866 18.93 13.13 18.93H9.87C9.85458 19.4769 9.6899 20.0091 9.39379 20.4692C9.09767 20.9292 8.6814 21.2995 8.19 21.54C7.78016 21.7448 7.32815 21.8509 6.87 21.85C6.19227 21.854 5.53315 21.6284 5 21.21L1.29 18.3C0.928669 18.0196 0.636241 17.6602 0.435072 17.2495C0.233904 16.8387 0.129322 16.3874 0.129322 15.93C0.129322 15.4726 0.233904 15.0213 0.435072 14.6105C0.636241 14.1998 0.928669 13.8404 1.29 13.56L5 10.65C5.447 10.2933 5.98665 10.0717 6.55538 10.0115C7.1241 9.95123 7.69819 10.0548 8.21 10.31C8.89153 10.636 9.4164 11.2184 9.67 11.93H17.1C17.2338 11.926 17.3671 11.9489 17.4919 11.9973C17.6167 12.0458 17.7305 12.1188 17.8266 12.2121C17.9226 12.3053 17.999 12.4169 18.0511 12.5403C18.1032 12.6636 18.1301 12.7961 18.13 12.93Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                        <Path
                           d="M27.87 6.07001C27.8701 6.52734 27.7656 6.97863 27.5646 7.3894C27.3635 7.80016 27.0712 8.15952 26.71 8.44001L23 11.35C22.4594 11.7701 21.7946 11.9987 21.11 12C20.6519 12.0009 20.1998 11.8948 19.79 11.69C19.1085 11.364 18.5836 10.7817 18.33 10.07H10.87C10.6048 10.07 10.3504 9.96466 10.1629 9.77712C9.97536 9.58959 9.87 9.33523 9.87 9.07001V8.07001C9.87 6.74393 10.3968 5.47216 11.3345 4.53448C12.2722 3.5968 13.5439 3.07001 14.87 3.07001H18.13C18.1422 2.51096 18.3104 1.96644 18.6156 1.4979C18.9208 1.02935 19.3508 0.655434 19.8573 0.418337C20.3637 0.181241 20.9263 0.0904046 21.4816 0.156079C22.0369 0.221754 22.5629 0.441325 23 0.790015L26.71 3.70001C27.0712 3.98051 27.3635 4.33987 27.5646 4.75063C27.7656 5.1614 27.8701 5.61269 27.87 6.07001Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                     </Svg>

                     <Text
                        className={`font-medium text-[10px] mt-1 ${
                           !focused ? "text-[#C6C6C6]" : "text-violet-100"
                        }`}
                     >
                        Transaction
                     </Text>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Add"
            component={Home}
            options={{
               tabBarItemStyle: {
                  height: 0,
               },
               tabBarButton: () => <AddButton />,
            }}
         />
         <Tab.Screen
            name="Budget"
            component={Budget}
            options={{
               tabBarItemStyle: {
                  height: 0,
               },
               tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                     <Svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M24 11H13V0C15.8412 0.228368 18.5083 1.46063 20.5239 3.47614C22.5394 5.49166 23.7716 8.1588 24 11Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                        <Path
                           d="M24 13C23.801 15.2756 22.9565 17.4471 21.566 19.2594C20.1754 21.0716 18.2965 22.4493 16.15 23.2306C14.0035 24.0119 11.6786 24.1643 9.44842 23.6699C7.21829 23.1755 5.17559 22.0549 3.56036 20.4396C1.94513 18.8244 0.824475 16.7817 0.330077 14.5516C-0.164321 12.3214 -0.0119213 9.99652 0.769369 7.85001C1.55066 5.7035 2.92838 3.82457 4.74064 2.43401C6.5529 1.04346 8.72441 0.199045 11 0V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H24Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                     </Svg>

                     <Text
                        className={`font-medium text-[10px] mt-1 ${
                           !focused ? "text-[#C6C6C6]" : "text-violet-100"
                        }`}
                     >
                        Budget
                     </Text>
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarItemStyle: {
                  height: 0,
               },
               tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                     <Svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M10 12.07C13.3137 12.07 16 9.38372 16 6.07001C16 2.7563 13.3137 0.0700073 10 0.0700073C6.68629 0.0700073 4 2.7563 4 6.07001C4 9.38372 6.68629 12.07 10 12.07Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                        <Path
                           d="M13 14H7C5.14348 14 3.36301 14.7375 2.05025 16.0503C0.737498 17.363 0 19.1435 0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21C20 19.1435 19.2625 17.363 17.9497 16.0503C16.637 14.7375 14.8565 14 13 14Z"
                           fill={!focused ? "#C6C6C6" : "#7F3DFF"}
                        />
                     </Svg>

                     <Text
                        className={`font-medium text-[10px] mt-1 ${
                           !focused ? "text-[#C6C6C6]" : "text-violet-100"
                        }`}
                     >
                        Profile
                     </Text>
                  </View>
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   tabBar: {
      position: "absolute",
      padding: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 70,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: "#fff",
      borderTopColor: "transparent",
      shadowOffset: {
         height: 6,
         width: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
   },
   tabIconContainer: {
      position: "absolute",
      top: 0,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 70,
   },
   tabIcon: {
      width: 32,
      height: 32,
   },
});

export default TabNavigator;
