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
    paddingBottom:100
   },
   contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:100
   },
   footerContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    paddingBottom:10
   },
   forgetPasswordText:{
    fontSize:25,
    fontWeight:'bold',
    margin:10
   },
   dontWorryText:{
    opacity:0.5,
    fontSize:14,
   }
})