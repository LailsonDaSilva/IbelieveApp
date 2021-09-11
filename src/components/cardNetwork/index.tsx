import React from "react";
import { View, Text, ButtonProps } from "react-native";
import { styles } from "./styles";


export function CardNetwork() {
    return (
        <View style={styles.networkCard}>
            <View style={styles.photoInvited}>

            </View>
            <View>
                <Text style={styles.nameInvited}>
                    Nome do usuário
                </Text>
                <Text>
                    Email@email.com
                </Text>
            </View>
            <View style={styles.rowLevel}>
                <Text style={styles.textLevel}>
                    Nivel 1
                </Text>
            </View>
        </View>

    );
};
