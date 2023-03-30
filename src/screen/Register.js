import React, { useState } from "react";
import { View, Text, Image, ToastAndroid } from "react-native";
import Input from "../components/Input";
import { Checkbox } from "react-native-paper";
import MaterialButton from "../components/MaterialButton";
import { register } from "../firebaseConfig/auth";
import { Formik } from "formik";

const Register = ({ navigation }) => {
   const [checked, setChecked] = useState(true);

   return (
      <View className="px-4 bg-white h-full">
         {/* Inputs */}
         <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={async (values, { resetForm }) => {
               console.log(values.checkbox);
               const user = await register(
                  values.email.trim(),
                  values.password,
                  values.name.trim()
               );
               if (user) {
                  console.log(user);
                  navigation.navigate("Dashboard")
               }
               resetForm();
            }}
            validateOnChange={false}
            validate={(values) => {
               const errors = {};
               if (!values.name) {
                  errors.name = "Required";
               } else if (
                  !/^(?=.{3,16}$)[\p{L}\s]*\S[\p{L}\s]*$/u.test(values.name.trim())
               ) {
                  errors.name = "Enter a name of 3-16 letters [A-Z]-[a-z]";
               }
               if (!values.email) {
                  errors.email = "Required";
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())
               ) {
                  errors.email = "Enter a valid email address";
               }
               if (!values.password) {
                  errors.password = "Required";
               } else if (!/^.{6,16}$/.test(values.password)) {
                  errors.password = "Enter a password of 3-16 characters";
               }

               return errors;
            }}
         >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
               <View className="inputs pt-14 pb-6">
                  <Input
                     label="Name"
                     textContentType="name"
                     value={values.name}
                     onChangeText={handleChange("name")}
                     onBlur={handleBlur("name")}
                     error={errors.name}
                  />
                  <Input
                     label="Email"
                     textContentType="emailAddress"
                     style={{ marginTop: 24 }}
                     value={values.email}
                     onChangeText={handleChange("email")}
                     onBlur={handleBlur("email")}
                     error={errors.email}
                  />
                  <Input
                     label="Password"
                     textContentType="password"
                     style={{ marginTop: 24 }}
                     value={values.password}
                     onChangeText={handleChange("password")}
                     onBlur={handleBlur("password")}
                     error={errors.password}
                     secureTextEntry={true}
                  />

                  {/* Terms of Service */}
                  <View className="flex-row my-7">
                     <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                           setChecked(!checked);
                        }}
                     />
                     <Text className="ml-2.5 mr-4 text-sm font-medium">
                        By signing up, you agree to the{" "}
                        <Text className="text-[#7F3DFF]">
                           Terms of Service and Privacy Policy
                        </Text>
                     </Text>
                  </View>

                  <MaterialButton
                     onPress={handleSubmit}
                     title="Sign Up"
                     titleColor="#fff"
                  />
               </View>
            )}
         </Formik>

         {/* Sign up with Google */}
         <View>
            <Text className="my-3 text-center font-bold text-light-20">
               Or with
            </Text>
            <MaterialButton
               leading={
                  <Image
                     style={{ width: 32, height: 32 }}
                     source={require("../assets/google.png")}
                  />
               }
               title="Sign Up with Google"
               titleColor="#212325"
               color="#fff"
               style={{ borderWidth: 1, borderColor: "#F1F1FA" }}
               onPress={() => {
                  ToastAndroid.showWithGravity("Not active yet", 200, 10);
               }}
            />
            <Text className="font-medium text-base text-light-20 text-center mt-8">
               Already have an account?{" "}
               <Text
                  onPress={() => {
                     navigation.navigate("Login");
                  }}
                  className="underline text-violet-100"
               >
                  Login
               </Text>
            </Text>
         </View>
      </View>
   );
};

export default Register;
