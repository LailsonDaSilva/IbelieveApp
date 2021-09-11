
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    networkCard:{
        marginTop: 16,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
    },
    photoInvited:{
      backgroundColor: '#adadad',
      width:50,
      height:50,
      borderRadius: 5,
      marginRight:16,
    },
    nameInvited:{
        fontSize:16,
        fontWeight:'bold'
    },
    rowLevel:{
        flex:1, 
        alignItems:'flex-end'
    },
    textLevel:{
      fontSize:16,
      marginRight:10
    }

})
