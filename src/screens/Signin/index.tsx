import React, { useState } from "react";
import { View, Text, StatusBar, ImageBackground, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView, TextInputProps } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core/src";
import background from '../../assets/background.png';
import logoSmall from '../../assets/logo_small.png';
import { Btn } from "../../components/button";

import { Input } from "../../components/textInput";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import IconShow from '../../assets/show_password.svg';
import IconHide from '../../assets/hide_password.svg';
import { InputIcon } from "../../components/textInputIcon";
import { InputPassword } from "../../components/inputPassword";

type InputProps = TextInputProps & {
    Name: string;
    error?: string;
    touched?: boolean;
}


/*   async function sendForm({email, password}:Values) {
      let response = await fetch('exp://192.168.100.84:19000/Signin',{ 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
  } */

export function Signin() {
    const navigation = useNavigation();
    function handleSignup() {
        navigation.navigate('Signup');
    }
    function handleWelcome() {
        navigation.navigate('Welcome');
    }
    const SigninSchema = Yup.object().shape({
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

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


                        <Image source={logoSmall} style={styles.icon} />
                        <Text style={styles.welcome}>
                            Bem-Vindo
                        </Text>
                        <Text style={styles.tilte}>
                            Ao clube de vantagens
                            da I Believe
                        </Text>
                        <Formik
                            validationSchema={SigninSchema}
                            initialValues={{ email: '', password: '' }}
                          
                            onSubmit={ async (values) => {
                              const response =  await fetch('http://192.168.100.84:3333/users/login',{ 
                                    method: 'POST',
                                    headers: {
                                      Accept: 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "email":"lailsonkazumi@gmail.com",
                                        "password":"zhzhzhz"
                                    })
                                  });
                               const res = await response.json()
                               console.log(res)
                               if(res === 'error'){
                                alert(JSON.stringify("Email ou senha inválido"));
 
                               }else{
                                handleWelcome()
                               }
                              }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View>
                                  
                                        <Input Name="Login"
                                            error={errors.email}
                                            touched={touched.email}
                                            onChangeText={handleChange('email')}
                                            placeholder="Digite seu e-mail" />
                                        <ErrorMessage name="email" render={msg => <Text style={styles.textError}>{msg}</Text>} />
                    
                                    <View style={styles.marginLabel}>          
                                           <InputPassword Name="Senha" 
                                            error={errors.password}
                                            touched={touched.password}
                                             onChangeText={handleChange('password')}/>
                                    </View>
                                    <Btn onPress={handleSubmit} title="Acessar minha conta" />
                                    
                                </View>
                            )}
                        </Formik>
                        

                        <Text style={styles.noCont}>
                            Não tem conta?
                        </Text>
                        <TouchableOpacity onPress={handleSignup}>
                            <View style={styles.btnSecondy}>
                                <Text style={styles.btnTilte} >
                                    Cadastra-se
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}