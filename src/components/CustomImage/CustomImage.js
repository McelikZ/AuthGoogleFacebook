import {Text,View,Image } from 'react-native'
import styles from './CustomImage.style'

const CustomImage = ({imageStyle={},source}) => {
  return (
     <Image
     source={source}
     style={[styles.defaultCustomImage,imageStyle]}
     />
  )
}

export default CustomImage
