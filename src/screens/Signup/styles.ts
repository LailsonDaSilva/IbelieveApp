import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      
      },
      content:{
        marginTop:80,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        margin:10,
        borderRadius: 15,
        height:"100%",
        paddingBottom:40,

      },
      header:{   
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        borderBottomWidth: 2,
        paddingVertical:10,
        marginTop: 4,
        borderColor: theme.color.background,
        marginBottom: 40,
      },
      image: {
        flex: 1,  
        width: '100%',
        height: '100%',
      },
      icon:{
        width: 34,
        height: 30,
      },
      welcome:{
          textTransform: "uppercase",
          fontSize: 24,
          fontWeight: "bold",
          padding: 4,
          flex:1,
      },
      tilte:{
          fontSize:30,
          fontWeight: "bold",
          paddingBottom:50,
        
      },
      label:{
            fontWeight: "bold",
            paddingBottom:5,
            fontSize:16
      },
      input:{
          fontSize: 20,
          width: "100%",
          height: 48,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: theme.color.background,
          marginBottom:30,
          padding: 12,
      },
      iconInput:{
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: theme.color.background,
        marginBottom:30,
        padding: 12,
      },
      noCont:{
          textAlign:"center",
          marginTop:70,
          fontSize:15,
          margin: 10
      },
      btnSecondy:{
        height: 50,
        width: "100%",    
        alignItems: "center",
        justifyContent:"center",
        borderWidth:2,
        borderColor: theme.color.background,
        borderRadius:5,
    },
    btnTilte:{
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
       
    }
     /*  text:{
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"  
      } */
});