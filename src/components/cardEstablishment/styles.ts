
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  containerCard:{
    backgroundColor:'#fff',
    borderRadius:5,
    padding:8,
    marginBottom:20
},
headerCard:{
    flexDirection:'row',
    justifyContent:'space-between'
},
closeDown:{
    backgroundColor:theme.color.background,
    paddingVertical:1,
    paddingHorizontal:6,
    borderRadius:6,
},

imageCard:{
    backgroundColor: '#adadad',
    width:80,
    height:80,
    borderRadius: 5,
    marginRight:8,
},
titleCard:{
    fontSize:16,
    fontWeight:'bold',
    marginRight:8,
},
discountCard:{
  fontSize:16,
  color: theme.color.secundary,
  fontWeight:'800',
},
miniTags:{
  flexDirection:'row',
  alignItems:'center',
  maxWidth:'100%',
},
miniTag:{
 backgroundColor: '#0097a7',/* ,'#FAFAFA','#7FB800', */
  borderRadius:20,
  paddingVertical:4,
  paddingHorizontal:16,
  marginRight:4
},
miniTagText:{
    fontSize:12,
    fontWeight:'900',
},
footerCard:{
  /* display:'none', */
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:10,
  paddingVertical:10,
  paddingHorizontal:6,
  borderTopWidth:2,
  borderTopColor: theme.color.background
},
contact:{
  flexDirection:'row',
  alignItems:'center'
},
address:{
    fontSize:11,
    fontWeight:'bold'
},
addressTitle:{
  fontSize:11,
  flexDirection:'row',
  alignItems:'center'
},
addressSpan:{
fontSize:10,
color:theme.color.background

},
openDown:{
  display:'flex',
  justifyContent:"center",
  alignItems:'center',
},
textOpen:{
  color:'#adadad',
}

})
