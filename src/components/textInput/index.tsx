import React from "react";
import {View,TouchableOpacity, Text, TextInput } from "react-native";
import { styles } from "./styles";
import  IconDate  from '../../assets/phone.svg';
import { placeholder } from "sequelize/types/lib/operators";
import { SvgProps } from "react-native-svg";
import Maskfy from "react-maskfy";
interface InputProps {
    Name: string;
    placeholder:string;
    SvgProps?:React.FC<SvgProps>;
}


export function Input({Name, placeholder, SvgProps:SvgProps}: InputProps ){
    return(
        
        <View>
        
        
        <Text style={styles.label}>
        {Name}
    </Text>
        <View style={styles.sectionStyle}>    
        <TextInput
       style={{flex: 1, fontSize:18}}
       placeholder={placeholder}
       underlineColorAndroid="transparent"
           />  
           <View>
           {SvgProps && <SvgProps  width="22" height="22"/>}
           </View>
           
        </View>
        </View>
    );
};