import React, { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView, Linking } from "react-native";
import Input from "../../components/Input";
import { Checkbox } from "react-native-paper";
import MaterialButton from "../../components/MaterialButton";
import { register, signInWithGoogle } from "../../firebaseConfig/auth";
import { Formik } from "formik";
import strings from "../../utils/Localization";

const Register = ({ navigation }) => {

   return (<ScrollView keyboardShouldPersistTaps="handled" className="px-4 bg-white h-full">
      {/* Inputs */}
      <Formik
         initialValues={{ name: "", email: "", password: "", checked: false }}
         onSubmit={async (values, { resetForm }) => {
            const data = { email: values.email.trim(), name: values.name.trim(), password: values.password };

            // check
            const user = await register(data);
            if (user) {
               navigation.navigate("SetupPin");
            }
            resetForm();
         }}

         validateOnChange={false}
         validate={(values) => {
            const errors = {};
            if (!values.name) {
               errors.name = strings.required;
            } else if (!/^(?=.{3,16}$)[\p{L}\s]*\S[\p{L}\s]*$/u.test(values.name.trim())) {
               errors.name = strings.errorname;
            }
            if (!values.email) {
               errors.email = strings.required;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.trim())) {
               errors.email = strings.erroremail;
            }
            if (!values.password) {
               errors.password = strings.required;
            } else if (!/^.{6,16}$/.test(values.password)) {
               errors.password = strings.errorpassword;
            }

            if (!values.checked) {
               errors.checked = true;
            }

            return errors;
         }}
      >
         {({ handleSubmit, setFieldValue, handleChange, handleBlur, values, errors }) => (
            <View className="inputs pt-14 mini:pt-8">
               <Input
                  label={strings.name}
                  textContentType="name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={errors.name}
               />
               <Input
                  label="Email"
                  textContentType="emailAddress"
                  style={{ marginTop: Dimensions.get("window").width < 385 ? 20 : 24 }}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
               />
               <Input
                  label={strings.password}
                  textContentType="password"
                  style={{ marginTop: Dimensions.get("window").width < 385 ? 20 : 24 }}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  secureTextEntry={true}
               />

               {/* Terms of Service */}
               <View className="flex-row my-7 mini:mb-5">
                  <Checkbox
                     status={values.checked ? "checked" : "unchecked"}
                     color="#7F3DFF"
                     uncheckedColor={errors.checked ? "#FD3C4A" : "#91919F"}
                     onPress={() => {
                        setFieldValue("checked", !values.checked);
                     }}
                  />
                  <Text className="ml-2.5 mr-4 text-sm font-medium mini:text-[13px]">
                     {strings.termsofservices1}{" "}
                     <Text onPress={async () => {
                        await Linking.openURL("https://habibmustafa.netlify.app/");
                     }} className="text-[#7F3DFF]">
                        {strings.termsofservices2}
                     </Text>
                  </Text>
               </View>

               <MaterialButton
                  onPress={handleSubmit}
                  title={strings.signup}
                  titleColor="#fff"
               />
            </View>)}
      </Formik>

      {/* Sign up with Google */}
      <View>
         <Text className="my-4 text-center font-bold text-light-20 mini:text-xs">
            {strings.orwith}
         </Text>
         <MaterialButton
            leading={<Image
               style={{ width: 32, height: 32 }}
               source={require("../../assets/google.png")}
            />}
            title={strings.signupwithgoogle}
            titleColor="#212325"
            color="#fff"
            style={{ borderWidth: 1, borderColor: "#F1F1FA" }}
            onPress={async () => {
               const user = await signInWithGoogle();
            }}
         />
         <Text className="font-medium text-base text-light-20 text-center mt-8 mb-6 mini:mt-6 mini:text-sm mini:mb-6">
            {strings.haveaccount}{" "}
            <Text
               onPress={() => {
                  navigation.navigate("Login");
               }}
               className="underline text-violet-100"
            >
               {strings.login}
            </Text>
         </Text>
      </View>
   </ScrollView>);
};

export default Register;
