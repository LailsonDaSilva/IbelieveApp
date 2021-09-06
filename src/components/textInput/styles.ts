
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
      label:{
        fontWeight: "bold",
        paddingBottom:5,
        fontSize:16
  },
  iconStyle:{
    width:30, 
    height:30
  }

})
