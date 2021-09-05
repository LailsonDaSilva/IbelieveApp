import React from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation} from "@react-navigation/core/src";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import { Btn } from "../../components/button";


export function Signin() {

    const navigation = useNavigation();

    function handleSingnin(){
            navigation.navigate('Signup');
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                <View style={styles.content}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent />


                    <Image source={logoSmall} style={styles.icon} />
                    <Text style={styles.welcome}>
                        Bem-Vindo
                    </Text>
                    <Text style={styles.tilte}>
                        Ao clube de vantagens
                        da I Believe
                    </Text>
                    <Text style={styles.label}>
                        Login
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o seu e-mail" />
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput style={styles.input} placeholder="****" />
                    {/* <Button onPress={() => Alert.alert('Cannot press this one')} style={styles.btn} title="submit"/> */}
                    <Btn title="Acessar minha conta"/>
                    <Text style={styles.noCont}>
                        Não tem conta?
                    </Text>
                    <TouchableOpacity onPress={handleSingnin}>
                        <View style={styles.btnSecondy}>
                            <Text style={styles.btnTilte} >
                                Cadastra-se
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}