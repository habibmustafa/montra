import { Formik } from "formik";
import React from "react";
import { View, Text, Dimensions, Image, StatusBar } from "react-native";
import Input from "../../components/Input";
import MaterialButton from "../../components/MaterialButton";
import { login } from "../../firebaseConfig/auth";
import { signInWithGoogle } from "../../firebaseConfig/auth";

const Login = ({ navigation }) => {

   return (
      <View className="px-4 bg-white h-full">
         <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, { setErrors, resetForm }) => {
               const data = { ...values }
               const user = await login(data);
               if (user) {
                  // navigation.navigate("SetupPin");
                  resetForm();
               } else {
                  setErrors({
                     email: "Incorrect email or password",
                     password: "Incorrect email or password",
                  });
               }
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
               if (!values.password) {
                  errors.password = "Required";
               } else if (!/^.{6,16}$/.test(values.password)) {
                  errors.password = "Enter a password of 6-16 characters";
               }

               return errors;
            }}
         >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
               <View className="inputs pt-14 mini:pt-8">
                  <Input
                     label="Email"
                     textContentType="emailAddress"
                     value={values.email}
                     onChangeText={handleChange("email")}
                     onBlur={handleBlur("email")}
                     error={errors.email}
                  />
                  <Input
                     label="Password"
                     textContentType="password"
                     style={{
                        marginTop:
                           Dimensions.get("window").width < 385 ? 20 : 24,
                     }}
                     value={values.password}
                     onChangeText={handleChange("password")}
                     onBlur={handleBlur("password")}
                     error={errors.password}
                     secureTextEntry={true}
                  />
                  <MaterialButton
                     onPress={handleSubmit}
                     title="Login"
                     titleColor="#fff"
                     style={{
                        marginTop:
                           Dimensions.get("window").width < 385 ? 32 : 40,
                     }}
                  />

                  {/* Google */}
                  <Text className="my-4 text-center font-bold text-light-20 mini:text-xs">
                     Or with
                  </Text>
                  <MaterialButton
                     leading={
                        <Image
                           style={{ width: 32, height: 32 }}
                           source={require("../../assets/google.png")}
                        />
                     }
                     title="Sign Up with Google"
                     titleColor="#212325"
                     color="#fff"
                     style={{ borderWidth: 1, borderColor: "#F1F1FA" }}
                     onPress={async () => {
                        // ToastAndroid.showWithGravity("Not active yet", 200, 10);
                        const user = await signInWithGoogle();
                     }}
                  />
               </View>
            )}
         </Formik>

         {/* Buttons */}
         <View>
            <Text
               onPress={() => {
                  navigation.navigate("ForgotPassword");
               }}
               className="my-10 text-center font-semibold text-lg text-violet-100 mini:my-8 mini:text-base"
            >
               Forgot Password?
            </Text>
            <Text className="font-medium text-base text-light-20 text-center mini:text-sm">
               Don’t have an account yet?{" "}
               <Text
                  onPress={() => {
                     navigation.navigate("Register");
                  }}
                  className="underline text-violet-100"
               >
                  Sign Up
               </Text>
            </Text>
         </View>
      </View>
   );
};

export default Login;
