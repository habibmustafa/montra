import React from "react";
import { View, Text, StatusBar } from "react-native";
import Input from "../../components/Input";
import MaterialButton from "../../components/MaterialButton";
import { Formik } from "formik";
import { passwordReset } from "../../firebaseConfig/auth";
import { l } from "../../localication";

const ForgotPassword = ({ navigation }) => {

   return (
      <View className="px-4 bg-white h-full">
         {/* Text */}
         <View className="pt-16 mini:pt-10">
            <Text className="font-semibold text-[28px] text-dark-25 mini:text-xl">
               {l('dontworry')}
            </Text>
         </View>

         {/* Form */}
         <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values, { resetForm }) => {
               navigation.navigate("ForgotPasswordEmailSent");
               // const res = await passwordReset(values.email)
               // console.log(res);
               // resetForm();

            }}
            validateOnChange={false}
            validate={(values) => {
               const errors = {};
               if (!values.email) {
                  errors.email = l('required');
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = l('erroremail');
               }
               return errors;
            }}
         >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
               <View className="input pt-14">
                  <Input
                     label="Email"
                     textContentType="emailAddress"
                     value={values.email}
                     onChangeText={handleChange("email")}
                     onBlur={handleBlur("email")}
                     error={errors.email}
                  />
                  {/* Button */}
                  <View className="mt-12 mini:mt-10">
                     <MaterialButton
                        onPress={handleSubmit}
                        title={l("continue")}
                        titleColor="#fff"
                     />
                  </View>
               </View>
            )}
         </Formik>
      </View>
   );
};

export default ForgotPassword;
