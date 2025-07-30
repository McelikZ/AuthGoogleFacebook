import { StyleSheet,StatusBar,Platform } from "react-native";
import {colors,spacing,fonts} from "../../theme/index"

export default StyleSheet.create({
    mainContainer:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerContainer:{
     flex:2,
     alignItems:'center',
     justifyContent:'center',
     paddingBottom:spacing.huge,
     
    },
    contentContainer:{
     flex:2,
     alignItems:'center',
     justifyContent:'center',
     marginBottom:spacing.mediumLarge,
    },
    firstRowContainer:{
     flexDirection: 'row',
     paddingTop:spacing.small,
    },
    secondRowContainer:{
     flexDirection: 'row',
     paddingTop:spacing.tiny
    },
    footerContainer:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:spacing.xlarge
    },
    signUpStyle:{
     fontSize:fonts.sizes.large,
     fontWeight:'bold',
     opacity:0.7,
     marginBottom:spacing.small,
    },
    infoTextSyle:{
     fontSize:fonts.sizes.medium,
     fontWeight:'bold',
     opacity:0.5
    },
    
})
