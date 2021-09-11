import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: theme.color.background,
    },
    content:{
        marginTop:60,
        paddingHorizontal: 6,
        margin:10,
        paddingBottom:40,
      },
      header:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
      },
      logo:{
        width: 150,
        height: 44,
        margin:2,
      },
      back:{
        flexDirection:'row',
        alignItems:'center'
      },
      textBack:{
          fontSize:18
      },
      profile:{
          flexDirection:'row',
          marginVertical: 40,

      },
      photo:{
        backgroundColor: '#adadad',
        width:90,
        height:90,
        borderRadius: 5,
        marginRight:16,
        alignItems:'flex-end',
        justifyContent:'flex-end',
      },
      iconPhoto:{
          position:'relative',
          bottom:-5,
          right:-5,
          padding:6,
        backgroundColor:'#fff',
        borderRadius:50

      },
      rowNetwork:{
        flexDirection:'row',
        alignItems:'center',
        fontSize:16,
        
      },
      primaryText:{
        fontSize:16,
        margin:2
      },
      nameProfile:{
          fontSize:24,
          fontWeight:'bold'
      }, 
      peoples:{
        fontSize:16,
      },

})