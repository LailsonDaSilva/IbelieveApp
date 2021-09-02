import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      
      },
      content:{
          marginTop:80,
        backgroundColor: '#fff',
        paddingVertical:40,
        paddingHorizontal: 30,
        margin:10,
        borderRadius: 15,
        height:"100%",
      },
      image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
      },
      icon:{
        marginBottom: 10,
      },
      welcome:{
          textTransform: "uppercase",
          fontSize: 20,
          fontWeight: "800",
      },
      tilte:{
          fontSize:30,
          fontWeight: "bold",
          paddingBottom:50,
        
      },
      label:{
            fontWeight: "bold",
            paddingBottom:5,
      },
      input:{
          fontSize: 20,
          width: "100%",
          height: 48,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: theme.color.background,
          marginBottom:30,
          paddingHorizontal: 20,
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