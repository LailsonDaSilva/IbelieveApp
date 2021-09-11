import React from "react";
import {View,TouchableOpacity, Text, ButtonProps, TouchableOpacityProps, Button} from "react-native";
import { styles } from "./styles";

type BntProps =  ButtonProps &  {
    title?: string; 
}


export function Btn({title, ...rest}: BntProps ){
    return(
       
        <TouchableOpacity {...rest}>
            <View style={styles.btn}>
                <Text style={styles.btnTilte} >
                    {title} 
                </Text>
            </View>
        </TouchableOpacity>

    );
};
/* export function Btn({title, ...rest}: BntProps ){
    return(
       
        <TouchableOpacity {...rest}>
            <View style={styles.btn}>
                <Text style={styles.btnTilte} >
                    {title} <Button/>
                </Text>
            </View>
        </TouchableOpacity>

    );
}; */


/* export function Btn({...rest}: BntProps ){
    return(
       
     
            <View >
             
             <Button  {...rest} />
    
            </View>
     

    );
}; */