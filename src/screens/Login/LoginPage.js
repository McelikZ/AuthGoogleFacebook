import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CustomImage, CustomButton, CustomTextInput, Loader } from "../../components/index";
import { login, autoLogin, googleSignIn,facebookSignIn } from "../../redux/user/userThunks";
import styles from "./LoginPage.style";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  useEffect(() => {
  dispatch(autoLogin());
      }, []);  

   useEffect(() => {
  GoogleSignin.configure({
    webClientId: '299570814041-efg7ppsmsr1mbh4v6f00t3naqmthbmot.apps.googleusercontent.com',
  });
  }, []);
  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && <Loader />}

      <View style={styles.headerContainer}>
        <CustomImage
          source={require("../../../assets/Images/LoginIcon.png")}
          imageStyle={{ width: 225, height: 225 }}
        />
        <Text style={styles.signInStyle}>Sign In</Text>
        <Text style={styles.enterValidStyle}>Enter valid user name & password to continue</Text>
      </View>

      <View style={styles.contentContainer}>
        <CustomTextInput
          placeholder="Email"
          iconSource={require("../../../assets/Images/LoginPlaceIcon.png")}
          onChangeText={setEmail}
          value={email}
        />
        <CustomTextInput
          iconSource={require("../../../assets/Images/LoginKeyIcon.png")}
          placeholder="Password"
          isPassword={true}
          onChangeText={setPassword}
          value={password}
          eyeIconOpen={require("../../../assets/Images/OpenEyeIcon.png")}
          eyeIconClosed={require("../../../assets/Images/CloseEyeIcon.png")}
        />
        <CustomButton
          buttonStyle={{ backgroundColor: "white", alignSelf: "flex-end", paddingHorizontal: 15 }}
          buttonTextStyle={{ color: "#0165ff", fontSize: 15 }}
          buttonText="Forget password"
          onPress={() => navigation.navigate("ForgotPasswordPage")}
        />
        <CustomButton
          buttonStyle={{ backgroundColor: "#0165ff", paddingHorizontal: 115, paddingVertical: 10, borderRadius: 15 }}
          buttonText="Login"
          onPress={() => dispatch(login({ email, password }))}
          
        />
        <Text style={styles.orContinueWithStyle}>Or Continue with</Text>
      </View>

      <View style={styles.footerContainer}>
        <CustomButton
          source={require("../../../assets/Images/GoogleIcon.png")}
          onPress={() => dispatch(googleSignIn())}
          buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0, marginHorizontal: 5 }}
          imageStyle={{ width: 70, height: 65 }}
          showText={false}
        />
        <CustomButton
          source={require("../../../assets/Images/FacebookIcon.png")}
          buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0, marginHorizontal: 20 }}
          onPress={() => dispatch(facebookSignIn())}
          imageStyle={{ width: 45 }}
          showText={false}
        />
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.haventAnyAccountStyle}>Haven't any account</Text>
        <CustomButton
          isTextOnly={true}
          buttonStyle={{}}
          buttonTextStyle={{ color: "#0165ff", paddingHorizontal: 5, fontSize: 15 }}
          buttonText="Sign up?"
          onPress={() => navigation.navigate("SignUpPage")}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
