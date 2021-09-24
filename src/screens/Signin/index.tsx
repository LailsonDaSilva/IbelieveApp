import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core/src";
import background from "../../assets/background.png";
import logoSmall from "../../assets/logo_small.png";
import { Btn } from "../../components/button";

import { Input } from "../../components/textInput";
import { Formik, ErrorMessage } from "formik";
import { InputPassword } from "../../components/inputPassword";
import api from "../../services/api";
import { SigninSchema } from "../../schema";

interface UserProps {
  email: string;
  password: string;
}

export function Signin() {
    
  const navigation = useNavigation();

  function handleSignup() {
    navigation.navigate("Signup");
  }
  function handleWelcome() {
    navigation.navigate("Welcome");
  }



  const handleSignUp = useCallback(
    async (values: UserProps) => {
      const { data } = await api.post(
        "/users/login",
        JSON.stringify(values, null, 2)
      );
      if (data === "error") {
        Alert.alert(
          "Erro no login",
          "Email ou senha incorreto, tente novamente."
        );
      } else {
        handleWelcome();
      }
    },
    [navigation]
  );


  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.content}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <Image source={logoSmall} style={styles.icon} />
            <Text style={styles.welcome}>Bem-Vindo</Text>
            <Text style={styles.tilte}>Ao clube de vantagens da I Believe</Text>
            <Formik
              validationSchema={SigninSchema}
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSignUp}
            >
              {({
                handleChange,
                handleSubmit,
                errors,
                touched,
              }) => (
                <View>
                  <Input
                    Name="Login"
                    error={errors.email}
                    touched={touched.email}
                    onChangeText={handleChange("email")}
                    placeholder="Digite seu e-mail"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <Text style={styles.textError}>{msg}</Text>
                    )}
                  />

                  <View style={styles.marginLabel}>
                    <InputPassword
                      Name="Senha"
                      error={errors.password}
                      touched={touched.password}
                      onChangeText={handleChange("password")}
                    />
                  </View>
                  <Btn
                    onPress={() => handleSubmit()}
                    title="Acessar minha conta"
                  />
                </View>
              )}
            </Formik>

            <Text style={styles.noCont}>Não tem conta?</Text>
            <TouchableOpacity onPress={handleSignup}>
              <View style={styles.btnSecondy}>
                <Text style={styles.btnTilte}>Cadastra-se</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
