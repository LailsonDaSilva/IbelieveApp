import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.color.background,
        marginTop:80,
        paddingHorizontal: 20,
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom: 40,
      },
      image: {
        width: '100%',
        height: '100%',
      },
      icon:{
        width: 150,
        height: 44,
        margin:2,
      },
      btnNetwork:{
        width: 90,
        height: 60,
        borderRadius:4,
        backgroundColor:'#fff',
        paddingVertical:2,
        paddingHorizontal:10
      },
      titleNetwork:{
        fontSize:12,
        fontWeight:'bold'
      },
      subTitleNetwork:{
        fontSize:12,
        
      },
      welcome:{
          textAlign:"center",
          textTransform:"uppercase",
          fontSize: 20,
      },
      title:{
          textAlign:'center',
          fontWeight: "bold",
          fontSize: 20,
      },
      sectionStyle: {
        marginVertical:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 12,
      },
      inputArea:{
         flex: 1, 
         fontSize: 16 
      }, 
       


      


});