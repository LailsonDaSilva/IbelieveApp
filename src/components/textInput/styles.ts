
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
  },
  sectionError:{
    flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: theme.color.secundary,

        padding: 12,
  },
  sectionTouched:{
    flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: theme.color.primary,

        padding: 12,
  },
})
