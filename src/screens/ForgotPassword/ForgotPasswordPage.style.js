import { StyleSheet,StatusBar,Platform } from "react-native";
import {colors,spacing,fonts} from "../../theme/index"

export default StyleSheet.create({
   mainContainer:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   },
   headerContainer:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:spacing.hugeSmall
   },
   contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:spacing.hugeSmall
   },
   footerContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    paddingBottom:spacing.medium
   },
   forgetPasswordText:{
    fontSize:25,
    fontWeight:'bold',
    margin:spacing.medium
   },
   dontWorryText:{
    opacity:0.5,
    fontSize:fonts.sizes.medium,
   }
})
