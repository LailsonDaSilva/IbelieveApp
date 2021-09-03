import React from "react";
import {View,TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface BntProps {
    title: string;
}


export function Btn({title }: BntProps ){
    return(
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text style={styles.btnTilte} >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>

    );
};