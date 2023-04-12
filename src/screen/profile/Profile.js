import React, { useRef } from "react";
import { StatusBar, Text, TouchableHighlight, View } from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";
import { logout } from "../../firebaseConfig/auth";
import Svg, { Path, Rect } from "react-native-svg";
import { useFocusEffect } from "@react-navigation/native";
import Dialog from "../../components/Dialog";

const Profile = ({ navigation }) => {
   const actionSheetRef = useRef(null);
   let { user } = useSelector((state) => state.local);
   user = JSON.parse(user);

   useFocusEffect(
      React.useCallback(() => {
         StatusBar.setBarStyle("dark-content");
      }, []),
   );

   return (
      <View className="h-full px-4 bg-[#F7F7F7]" style={{paddingTop: StatusBar.currentHeight}}>
         {/* Header */}
         <View className="header mt-8 mb-10 flex-row justify-between items-center">
            <Avatar.Text label="HM" className="w-20 h-20 ml-2 rounded-full" />
            <View className="flex-1 ml-5">
               <Text className="font-medium text-sm text-light-20">
                  Username
               </Text>
               <Text className="font-semibold text-2xl text-dark-75">
                  {user.displayName}
               </Text>
            </View>
            <Svg
               width="40"
               height="40"
               viewBox="0 0 40 40"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <Path
                  d="M29.19 16.46L17.19 28.46C16.9139 28.7302 16.5673 28.9173 16.19 29L12.65 29.71C12.3277 29.7737 11.9947 29.7571 11.6803 29.6615C11.366 29.566 11.0801 29.3945 10.8477 29.1622C10.6154 28.9299 10.4439 28.6439 10.3484 28.3296C10.2529 28.0153 10.2362 27.6823 10.3 27.36L11 23.85C11.0826 23.4726 11.2698 23.1261 11.54 22.85L23.38 11C23.7665 10.6039 24.2285 10.2891 24.7385 10.0742C25.2486 9.85925 25.7965 9.74854 26.35 9.74854C26.9034 9.74854 27.4513 9.85925 27.9614 10.0742C28.4715 10.2891 28.9334 10.6039 29.32 11C30.0089 11.7599 30.3796 12.7555 30.3554 13.7809C30.3312 14.8064 29.914 15.7834 29.19 16.51V16.46Z"
                  stroke="#212325"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <Rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="7.5"
                  stroke="#F1F1FA"
               />
            </Svg>
         </View>

         {/* Content */}
         <View className="content bg-white rounded-3xl mx-1">
            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#eee"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  navigation.navigate("Account");
               }}
            >
               <View className="flex-row items-center px-4 py-3.5 border-b-[1px] border-[#F7F7F7]">
                  {/* svg */}
                  <View className="bg-[#EEE5FF] p-2.5 mr-2.5 justify-center items-center rounded-2xl">
                     <Svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M23.91 8.09C23.6104 8.02985 23.3056 7.9997 23 8H11C10.7348 8 10.4805 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4805 6.10536 10.7348 6 11 6H23C22.5343 5.37902 21.9304 4.875 21.2361 4.52786C20.5418 4.18073 19.7763 4 19 4H9.00004C8.22381 4 7.45825 4.18073 6.76397 4.52786C6.0697 4.875 5.46578 5.37902 5.00004 6C4.347 6.86342 3.99565 7.91744 4.00004 9V23C4.00004 24.3261 4.52682 25.5979 5.46451 26.5355C6.40219 27.4732 7.67396 28 9.00004 28H23C24.3261 28 25.5979 27.4732 26.5356 26.5355C27.4733 25.5979 28 24.3261 28 23V13C27.9985 11.8329 27.5888 10.7031 26.8418 9.80634C26.0948 8.90959 25.0577 8.30241 23.91 8.09ZM21.24 21C21.1603 21.0096 21.0798 21.0096 21 21C20.2044 21 19.4413 20.6839 18.8787 20.1213C18.3161 19.5587 18 18.7956 18 18C18 17.2044 18.3161 16.4413 18.8787 15.8787C19.4413 15.3161 20.2044 15 21 15C21.3416 14.9978 21.6807 15.0589 22 15.18C22.6374 15.416 23.1757 15.8615 23.5268 16.4434C23.8779 17.0253 24.021 17.7092 23.9327 18.383C23.8444 19.0569 23.5299 19.6808 23.0408 20.1526C22.5516 20.6244 21.9167 20.9161 21.24 20.98V21Z"
                           fill="#7F3DFF"
                        />
                        <Path
                           d="M21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17C20.4477 17 20 17.4477 20 18C20 18.5523 20.4477 19 21 19Z"
                           fill="#7F3DFF"
                        />
                     </Svg>
                  </View>

                  {/* text */}
                  <Text className="font-medium text-base text-dark-25">
                     Account
                  </Text>
               </View>
            </TouchableHighlight>

            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#eee"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  navigation.navigate("Settings")
               }}
            >
               <View className="flex-row items-center px-4 py-3.5 border-b-[1px] border-[#F7F7F7]">
                  {/* svg */}
                  <View className="bg-[#EEE5FF] p-2.5 mr-2.5 justify-center items-center rounded-2xl">
                     <Svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
                           fill="#7F3DFF"
                        />
                        <Path
                           d="M25.79 17L25.41 16.77C25.269 16.687 25.1521 16.5686 25.0709 16.4265C24.9897 16.2844 24.947 16.1236 24.947 15.96C24.947 15.7964 24.9897 15.6356 25.0709 15.4935C25.1521 15.3514 25.269 15.233 25.41 15.15L25.79 14.92C26.4772 14.5225 26.9788 13.8689 27.185 13.1023C27.3912 12.3356 27.2851 11.5186 26.89 10.83L25.89 9.09C25.4908 8.4018 24.8346 7.90034 24.0657 7.69593C23.2969 7.49151 22.4783 7.60089 21.79 8L21.47 8.18C21.3223 8.25909 21.157 8.29977 20.9894 8.29831C20.8218 8.29685 20.6573 8.2533 20.511 8.17166C20.3646 8.09002 20.2411 7.97291 20.1518 7.83108C20.0625 7.68926 20.0103 7.52727 20 7.36V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7957 4 17 4H15C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7V7.36C11.9971 7.53212 11.9497 7.70057 11.8626 7.84903C11.7754 7.99749 11.6514 8.12095 11.5026 8.20744C11.3537 8.29393 11.1851 8.34053 11.0129 8.34273C10.8408 8.34493 10.671 8.30266 10.52 8.22L10.21 8C9.52177 7.60089 8.70317 7.49151 7.93428 7.69593C7.1654 7.90034 6.50919 8.4018 6.11001 9.09L5.11001 10.83C4.90172 11.1743 4.76481 11.5569 4.70742 11.9552C4.65004 12.3534 4.67336 12.7591 4.77599 13.1482C4.87861 13.5373 5.05846 13.9017 5.30482 14.2198C5.55118 14.538 5.85902 14.8033 6.21001 15L6.59001 15.23C6.73102 15.313 6.84791 15.4314 6.92912 15.5735C7.01033 15.7156 7.05304 15.8764 7.05304 16.04C7.05304 16.2036 7.01033 16.3644 6.92912 16.5065C6.84791 16.6486 6.73102 16.767 6.59001 16.85L6.21001 17C5.52282 17.3975 5.02119 18.0511 4.81501 18.8177C4.60882 19.5844 4.71491 20.4014 5.11001 21.09L6.11001 22.83C6.30095 23.1775 6.55886 23.4837 6.86885 23.7308C7.17883 23.978 7.53474 24.1613 7.91599 24.2701C8.29725 24.3789 8.69629 24.4111 9.09004 24.3647C9.4838 24.3183 9.86446 24.1944 10.21 24L10.52 23.83C10.672 23.7422 10.8445 23.696 11.02 23.696C11.1956 23.696 11.368 23.7422 11.52 23.83C11.6664 23.9168 11.7883 24.0394 11.874 24.1864C11.9597 24.3334 12.0066 24.4999 12.01 24.67V25C12.01 25.7956 12.3261 26.5587 12.8887 27.1213C13.4513 27.6839 14.2144 28 15.01 28H17.01C17.8057 28 18.5687 27.6839 19.1313 27.1213C19.6939 26.5587 20.01 25.7956 20.01 25V24.63C20.0145 24.4589 20.0628 24.2918 20.1504 24.1447C20.2379 23.9977 20.3618 23.8755 20.51 23.79C20.662 23.7022 20.8345 23.656 21.01 23.656C21.1856 23.656 21.358 23.7022 21.51 23.79L21.82 23.97C22.5083 24.3691 23.3269 24.4785 24.0957 24.2741C24.8646 24.0697 25.5208 23.5682 25.92 22.88L26.92 21.14C27.1223 20.7951 27.2536 20.4133 27.3063 20.017C27.3589 19.6207 27.3318 19.2178 27.2265 18.8321C27.1212 18.4464 26.9399 18.0857 26.6932 17.771C26.4465 17.4564 26.1395 17.1943 25.79 17ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2197 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2617 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z"
                           fill="#7F3DFF"
                        />
                     </Svg>
                  </View>

                  {/* text */}
                  <Text className="font-medium text-base text-dark-25">
                     Settings
                  </Text>
               </View>
            </TouchableHighlight>

            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#eee"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  navigation.navigate("ExportData")
               }}
            >
               <View className="flex-row items-center px-4 py-3.5 border-b-[1px] border-[#F7F7F7]">
                  {/* svg */}
                  <View className="bg-[#EEE5FF] p-2.5 mr-2.5 justify-center items-center rounded-2xl">
                     <Svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M16 20.9997V5.23975"
                           stroke="#7F3DFF"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <Path
                           d="M8.92993 11.2399L14.5899 5.58989C14.9647 5.21738 15.4716 5.0083 15.9999 5.0083C16.5283 5.0083 17.0352 5.21738 17.4099 5.58989L23.0699 11.2399"
                           stroke="#7F3DFF"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <Path
                           d="M27 21V25C27 25.5304 26.7893 26.0391 26.4142 26.4142C26.0391 26.7893 25.5304 27 25 27H7C6.46957 27 5.96086 26.7893 5.58579 26.4142C5.21071 26.0391 5 25.5304 5 25V21"
                           stroke="#7F3DFF"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </Svg>
                  </View>

                  {/* text */}
                  <Text className="font-medium text-base text-dark-25">
                     Export Data
                  </Text>
               </View>
            </TouchableHighlight>

            <TouchableHighlight
               activeOpacity={0.99}
               underlayColor="#eee"
               style={{ borderRadius: 24 }}
               onPress={() => {
                  actionSheetRef.current?.show();
               }}
            >
               <View className="flex-row items-center px-4 py-3.5">
                  {/* svg */}
                  <View className="bg-[#FFE2E4] p-2.5 mr-2.5 justify-center items-center rounded-2xl">
                     <Svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <Path
                           d="M19 8V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V25C5 25.5304 5.21071 26.0391 5.58579 26.4142C5.96086 26.7893 6.46957 27 7 27H17C17.5304 27 18.0391 26.7893 18.4142 26.4142C18.7893 26.0391 19 25.5304 19 25V24"
                           stroke="#FD3C4A"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <Path
                           d="M11 16H26.83"
                           stroke="#FD3C4A"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                        <Path
                           d="M23.5901 11.7598L26.4101 14.5898C26.7826 14.9645 26.9917 15.4714 26.9917 15.9998C26.9917 16.5281 26.7826 17.035 26.4101 17.4098L23.5901 20.2398"
                           stroke="#FD3C4A"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </Svg>
                  </View>

                  {/* text */}
                  <Text className="font-medium text-base text-dark-25">
                     Logout
                  </Text>
               </View>
            </TouchableHighlight>
         </View>

         {/* Dialog */}
         <Dialog ref={actionSheetRef}
                 id="logout"
                 title="Logout?"
                 description={`Are you sure do you wanna logout?`}
         />
      </View>
   );
};

export default Profile;
