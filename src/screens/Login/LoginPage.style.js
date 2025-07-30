import { StyleSheet,StatusBar,Platform } from "react-native";
import {colors,spacing,fonts} from "../../theme/index"

export default StyleSheet.create({
   mainContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:'white'
   },
   headerContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    marginTop:spacing.medium
   },
   contentContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop:spacing.huge,
   },
   footerContainer:{
    flex:1,
    alignItems:'center',
    flexDirection: 'row',
    paddingTop:spacing.huge,
   },
   bottomTextContainer:{
    flexDirection: 'row',
    paddingBottom:spacing.medium,
   },
   signInStyle:{
    fontWeight:'bold',
    fontSize:fonts.sizes.xlarge,
    marginBottom:spacing.medium,
    opacity:0.8,
   },
   enterValidStyle:{
     opacity:0.7,
   },
   orContinueWithStyle:{
    margin:spacing.medium,
    opacity:0.5,
   },
   haventAnyAccountStyle:{
   opacity: 0.8,     
   fontSize: fonts.sizes.smallMedium,  
   }
})
