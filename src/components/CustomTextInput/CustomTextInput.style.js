import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, fonts } from '../../theme/index';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: colors.textPrimary,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: spacing.medium,
    height: 55,
    width: SCREEN_WIDTH * 0.8,
    maxWidth: 400,
    marginVertical: 8,
  },
  defaultTextInput: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: fonts.sizes.medium,
    color: colors.textPrimary,
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.textPrimary,
  },
  defaultTextInputText: {
    color: colors.primary,
    fontSize: fonts.sizes.large,
    marginBottom: 5,
  },
});
