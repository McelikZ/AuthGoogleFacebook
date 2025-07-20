import React, { useState } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './CustomTextInput.style';

const CustomTextInput = ({
  textTitle = 'default',
  showLabel = false,
  textStyle = {},
  textInputStyle = {},
  containerStyle = {},
  placeholder = 'Default',
  onChangeText,
  value,
  iconSource = null,
  iconStyle = {},
  isPassword = false, 
  eyeIconOpen = null, 
  eyeIconClosed = null, 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={containerStyle}>
      {showLabel && (
        <Text style={[styles.defaultTextInputText, textStyle]}>
          {textTitle}
        </Text>
      )}

      <View style={styles.inputWrapper}>
        {iconSource && (
          <Image source={iconSource} style={[styles.iconStyle, iconStyle]} />
        )}

        <TextInput
          style={[
            styles.defaultTextInput,
            (iconSource || isPassword) && { marginLeft: 10, flex: 1 },
            textInputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor="black"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isPassword && !showPassword}
        />

        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={{ padding: 5 }}>
            <Image
              source={showPassword ? eyeIconOpen : eyeIconClosed}
              style={{ width: 25, height: 25, tintColor: 'gray',resizeMode:'contain' }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
