import {Text, View,ActivityIndicator} from 'react-native'
import React from 'react'
import styles from "./Loader.style"

const Loader = ({indicatorTextStyle={},loaderText='Loading...'}) => {
  return (
 <View style={styles.indicatorContainer}>
  <Text style={[styles.indicatorTextStyle,indicatorTextStyle]}> {loaderText}</Text>
  <ActivityIndicator
     size="large" color="#242425ff"
  />
 </View>
    
  )
}
export default Loader
