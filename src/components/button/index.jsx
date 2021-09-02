import React from "react";
import {View,TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";


export function Btn(){
    return(
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text style={styles.btnTilte} >
                    Acessar minha conta
                </Text>
            </View>
        </TouchableOpacity>

    );
};