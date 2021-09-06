import React from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation} from "@react-navigation/core/src";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import { Btn } from "../../components/button";
import {Formik} from "formik";
import { Input } from "../../components/textInput";
import  IconShow  from '../../assets/show_password.svg';

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
                    <Input Name="Login" placeholder="Digite seu e-mail"/>
                    <Input Name="Senha" placeholder="*****" SvgProps={IconShow} />
    
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