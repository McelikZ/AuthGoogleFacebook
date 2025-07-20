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
     paddingBottom:120,
     
    },
    contentContainer:{
     flex:2,
     alignItems:'center',
     justifyContent:'center',
     marginBottom:25,
    },
    firstRowContainer:{
     flexDirection: 'row',
     paddingTop:10,
    },
    secondRowContainer:{
     flexDirection: 'row',
     paddingTop:5
    },
    footerContainer:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:50
    },
    signUpStyle:{
     fontSize:25,
     fontWeight:'bold',
     opacity:0.7,
     marginBottom:10,
    },
    infoTextSyle:{
     fontSize:15,
     fontWeight:'bold',
     opacity:0.5
    },
    
})