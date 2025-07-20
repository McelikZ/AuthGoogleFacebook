import { Pressable, Text, Image } from 'react-native';
import React from 'react';
import styles from './CustomButton.style';

const CustomButton = ({
  onPress,
  buttonText = 'default',
  showText=true,
  buttonStyle = {},
  buttonTextStyle = {},
  imageStyle = {},
  source,
  isTextOnly = false, 
}) => {
  if (isTextOnly) {
    return (
      <Text onPress={onPress} style={buttonTextStyle}>
        {buttonText}
      </Text>
    );
  }

  return (
    <Pressable onPress={onPress} style={[styles.defaultButton, buttonStyle]}>
      {source && (
        <Image
          style={[styles.defaultButtonImageStyle, imageStyle]}
          source={source}
        />
      )}
      
      {showText &&(
        <Text style={[styles.defaultButtonText, buttonTextStyle]}>
        {buttonText}
      </Text>

      )}
    </Pressable>
  );
};

export default CustomButton;
