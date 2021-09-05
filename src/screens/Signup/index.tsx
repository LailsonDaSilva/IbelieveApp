import React from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles';
import { useNavigation} from "@react-navigation/core";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import { Btn } from "../../components/button";


export function Signup() {

    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <View style={styles.content}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent />
                    <View style={styles.header}>
                    <Text style={styles.welcome}>
                        Cadastro na rede
                    </Text>
                    <Image source={logoSmall} style={styles.icon} />
                    </View>

                    <View>
                    <Text style={styles.label}>
                        Nome completo
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>

                    <View>
                    <Text style={styles.label}>
                        E-mail
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>

                    <View>
                    <Text style={styles.label}>
                        Telefone
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>

                    <View>
                    <Text style={styles.label}>
                        CPF
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>

                    <View>
                    <Text style={styles.label}>
                    Data de nascimento
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>
                    <View>
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>
                    <View>
                    <Text style={styles.label}>
                        Quem te recomendou?
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    </View>
                   
                     <Btn title="Avançar"/>
                </View>
            </ImageBackground>
        </View>
        </ScrollView>
    );
}