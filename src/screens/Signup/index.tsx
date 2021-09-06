import React from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles';
import { useNavigation} from "@react-navigation/core";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import  IconPhone  from '../../assets/phone.svg';
import  IconDate  from '../../assets/date.svg';
import  IconShow  from '../../assets/show_password.svg';
import { Btn } from "../../components/button";
import Svg, { Path } from "react-native-svg"
import { Input } from "../../components/textInput";
import Maskfy from 'react-maskfy';
import { TextInputMask } from 'react-native-masked-text';
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
                    <Input Name="Nome completo" placeholder="Qual é o seu nome?"  />
                    <Input Name="E-mail" placeholder="Qual é o seu e-mail?"  />      
                    <Input Name="Telefone" placeholder="" SvgProps={IconPhone} />       
                    <Input Name="CPF" placeholder=""  />
                    <Input Name="Data de nascimento" placeholder="" SvgProps={IconDate} />
                    <Input Name="Senha" placeholder="" SvgProps={IconShow} />
                    <Input Name="Quem te recomendou" placeholder="Digite o e-mail de quem te recomendou."  />
                    <Btn title="Avançar"/>
                </View>
            </ImageBackground>
        </View>
        </ScrollView>
    );
}