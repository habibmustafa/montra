import React from "react";
import { View, Text } from "react-native";
import Input from "../components/Input";
import MaterialButton from "../components/MaterialButton";
import { Formik } from "formik";
import { passwordReset } from "../firebaseConfig/auth";

const ForgotPassword = ({ navigation }) => {
   const handleSubmit = async () => {
      navigation.navigate("ForgotPasswordEmailSent");
   };

   return (
      <View className="px-4 bg-white h-full">
         {/* Text */}
         <View className="pt-16">
            <Text className="font-semibold text-3xl text-dark-25">
               Don’t worry.{"\n"}Enter your email and we’ll send you a link to
               reset your password.
            </Text>
         </View>

         {/* Form */}
         <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values, { resetForm }) => {
               
               const res = await passwordReset(values.email)
               console.log(res);
               // resetForm();

            }}
            validateOnChange={false}
            validate={(values) => {
               const errors = {};
               if (!values.email) {
                  errors.email = "Required";
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = "Enter a valid email address";
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
                  <View className="mt-12">
                     <MaterialButton
                        onPress={handleSubmit}
                        title="Continue"
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
