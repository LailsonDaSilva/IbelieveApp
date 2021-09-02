
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    btn:{
        backgroundColor: theme.color.primary,
        height: 48,
        width: "100%",    
        alignItems: "center",
        justifyContent:"center",
        borderRadius:5,
    },
    btnTilte:{
        textAlign:"center",
        fontSize: 16,
        fontWeight: "bold",
       
    }

})
