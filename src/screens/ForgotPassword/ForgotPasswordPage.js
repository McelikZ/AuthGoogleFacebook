import { Text, View, SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import styles from './ForgotPasswordPage.style';
import { CustomButton, CustomImage, CustomTextInput,Loader } from '../../components/index';
import { useDispatch,useSelector } from 'react-redux';
import { resetPassword } from '../../redux/user/userThunks';
import { setIsLoading } from '../../redux/user/userSlice';

const ForgotPasswordPage = ({navigation}) => {
  const [email, setEmail] = useState('')
  const dispatch=useDispatch();
  const {isLoading}=useSelector((state)=> state.user)
  const handlePress=()=>{
    dispatch(resetPassword(email));
    navigation.navigate("LoginPage")
  };
  return (
    <SafeAreaView
    style={styles.mainContainer}
    >
       {isLoading && <Loader
       loaderText='OTP Sent.'
       /> }
      <View style={styles.mainContainer}>

        <View style={styles.headerContainer}>
          <CustomImage
            source={require('../../../assets/Images/ForgotPasswordIcon.png')}
            imageStyle={{ width: 200, height: 220 }}
          />
          <Text style={styles.forgetPasswordText}>
            Forget Password
          </Text>

          <Text style={styles.dontWorryText}>
            Don't worry it happens. Please enter the address
          </Text>

          <Text style={styles.dontWorryText}>
            associated with your account.
          </Text>
        </View>
        
        <View style={styles.contentContainer}>
          <CustomTextInput
          iconSource={require('../../../assets/Images/EmailIcon.png')}
          placeholder='Email Address'
          onChangeText={setEmail}
          value={email}
          />
          <CustomButton
            onPress={handlePress}
            buttonStyle={{
              paddingHorizontal: 113,
              paddingVertical: 17,
              backgroundColor: '#0165ff',
            }}
            buttonTextStyle={{ fontSize: 15 }}
            buttonText='Send OTP'
          />
        </View>

        <View style={styles.footerContainer}>
          <Text>You remember your password?</Text>
          <CustomButton
         
           onPress={()=> navigation.navigate("LoginPage")}
            buttonTextStyle={{
              color: '#0165ff',
              paddingHorizontal: 5,
              fontSize: 15,
            }}
            buttonText='Sign in'
            isTextOnly={true}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordPage;
