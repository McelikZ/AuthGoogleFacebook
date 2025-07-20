import { Text, View } from 'react-native'
import React from 'react'
import styles from './HomePage.style'
import { CustomButton } from '../../components/index'
import { logout } from '../../redux/user/userThunks'
import { useDispatch } from 'react-redux'
const HomePage = () => {
  const dispatch=useDispatch();
  return (
    <View style={styles.mainContainer}>
      <CustomButton
      buttonText='Logout'
      buttonStyle={{backgroundColor:'red'}}
      onPress={()=> dispatch(logout())}
      />

      
    </View>
  )
}

export default HomePage