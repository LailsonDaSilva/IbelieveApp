import React, { useState } from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import IconPhone from '../../assets/phone.svg';
import IconDate from '../../assets/date.svg';
import IconShow from '../../assets/show_password.svg';
import { Btn } from "../../components/button";
import Svg, { Path } from "react-native-svg"
import { Input } from "../../components/textInput";
import Maskfy from 'maskfy';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import { Formik, Form, Field, ErrorMessage, form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { InputIcon, InputPhone } from "../../components/textInputIcon";
import { InputPassword } from "../../components/inputPassword";

interface Values {
    fullName: string,
    email: string, 
     phone: string,
      cpf:string, 
      date_of_birth: string, 
      password:  string
  }




export function Signup() {

   


    const SignupSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        date_of_birth: Yup.date()
            .default(() => (new Date()))
            .required('Required'),
        phone: Yup.string().min(13, 'Too Short!')
            .max(15, 'Too Long!').required('Required')
    });

    const navigation = useNavigation();
    function handleSignin() {
        navigation.navigate('Signin');
    }

    const [onFocus, setOnFocus] = useState(true);
    const [show, setShow] = useState(true);

    function handleOnFocus() {
        setOnFocus(false);
    }

    function handleblur() {
        setOnFocus(true);
    }
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
                        <Formik
                            validationSchema={SignupSchema}
                            initialValues={{ fullName: '', email: '',  phone: '', cpf:'', date_of_birth: '', password: ''}}
                            onSubmit={async (values) => {
                                handleSignin()
                             await fetch("http://192.168.100.84:3333/users", {
                                method: "POST",
                                headers: {    
                                    Accept: 'application/json',          
                                  'Content-Type': "application/json"
                                },
                                body: JSON.stringify({
                                    "fullName":"LailsonK222K",
                                    "email":"lailsonkazumi@gmail.com",
                                    "phone":"(49)94797-9777",
                                    "cpf":"777",
                                    "date_of_birth":"177",
                                    "password":"zhzhzhz"
                                    })
                              
                          });
                                console.log(JSON.stringify(values, null, 2));
                              }}
                           
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched , setSubmitting }) => (
                                <View>
                                    <Input Name="Nome completo" placeholder="Qual é o seu nome?"
                                        error={errors.fullName}
                                        touched={touched.fullName}
                                        onChangeText={handleChange('fullName')}
                                    />

                                    <Input Name="E-mail" placeholder="Qual é o seu e-mail?" error={errors.email}
                                        touched={touched.email}
                                        onChangeText={handleChange('email')} />


                                    <View style={styles.marginLabel}>
                                        <InputPhone Name="Telefone" value={'phone'}
                                            placeholder="(00) 0000-0000"
                                            error={errors.phone}
                                            touched={touched.phone}
                                            onChangeText={handleChange('phone')} />
                                        <ErrorMessage name="phone" render={msg => <Text style={styles.textError}>{msg}</Text>} />
                                    </View>


                                    <Input keyboardType="decimal-pad" Name="CPF" placeholder="" error={errors.cpf}
                                            touched={touched.cpf} onChangeText={handleChange('cpf')} />



                                    <Input keyboardType="decimal-pad" Name="Data de nascimento" placeholder="" SvgProps={IconDate} error={errors.date_of_birth}
                                        touched={touched.date_of_birth}
                                        onChangeText={handleChange('date_of_birth')} />

                                    <View style={styles.marginLabel}>
                                        <InputPassword Name="Senha"
                                            error={errors.password}
                                            touched={touched.password}
                                            onChangeText={handleChange('password')} />
                                    </View>
                                    {/* <Input Name="Quem te recomendou"
                                            error={errors.indicationEmail}
                                            touched={touched.indicationEmail}
                                            onChangeText={handleChange('indicationEmail')}
                                            placeholder="Digite o e-mail de quem te recomendou." /> */}

                                    <Btn onPress={handleSubmit} title="Avançar"  />
                                </View>
                            )}
                        </Formik>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

function sleep(arg0: number) {
    throw new Error("Function not implemented.");
}
