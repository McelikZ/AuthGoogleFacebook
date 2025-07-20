import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../theme/index';

export default StyleSheet.create({
  defaultButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: colors.textSecondary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.huge, 
  },
  defaultButtonText: {
    color: colors.secondary,
    fontSize: fonts.sizes.large,
  },
  defaultButtonImageStyle:{
    width: 60,       
    height: 60,       
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain',
  }

});
