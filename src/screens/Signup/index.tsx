import React, { useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import background from "../../assets/background.png";
import logoSmall from "../../assets/logo_small.png";
import { Btn } from "../../components/button";
import { Input } from "../../components/textInput";
import { Formik, ErrorMessage } from "formik";

import { InputUsingMask } from "../../components/InputUsingMask";
import { InputPassword } from "../../components/inputPassword";
import api from "../../services/api";
import { InputDate } from "../../components/inputDate";
import { SignupSchema } from "../../schema";


interface UserProps {
  full_name: string;
  email: string;
  phone: string;
  cpf: string;
  date_of_birth: string;
  password: string;
}

export function Signup() {
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: UserProps) => {
      try {
        await api.post("/Users", JSON.stringify(data, null, 2));
        Alert.alert(
          "Cadastro realizado com sucesso!",
          "Você já pode fazer login na aplicação."
        );

        navigation.goBack();
      } catch (err) {
        Alert.alert(
          "Erro no cadastro",
          "Ocorreu um erro ao fazer cadastro, tente novamente."
        );
      }
    },
    [navigation]
  );



  return (
    <>
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
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
                <View style={styles.header}>
                  <Text style={styles.welcome}>Cadastro na rede</Text>
                  <Image source={logoSmall} style={styles.icon} />
                </View>
                <Formik
                  validationSchema={SignupSchema}
                  initialValues={{
                    full_name: "",
                    email: "",
                    phone: "",
                    cpf: "",
                    date_of_birth: "",
                    password: "",
                  }}
                  onSubmit={handleSignUp}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <>
                      <View style={styles.marginLabel}>
                        <Input
                          Name="Nome completo"
                          placeholder="Qual é o seu nome?"
                          value={values.full_name}
                          error={errors.full_name}
                          touched={touched.full_name}
                          onChangeText={handleChange("full_name")}
                        />
                        <ErrorMessage
                          name="full_name"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>

                      <View style={styles.marginLabel}>
                        <Input
                          Name="E-mail"
                          placeholder="Qual é o seu e-mail?"
                          value={values.email}
                          error={errors.email}
                          touched={touched.email}
                          onChangeText={handleChange("email")}
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>
                      <View style={styles.marginLabel}>
                        <InputUsingMask
                          type={"cel-phone"}
                          Name="Telefone"
                          value={values.phone}
                          options={{
                            maskType: "BRL",
                            withDDD: true,
                            dddMask: "(99)",
                          }}
                          placeholder="(00) 0000-0000"
                          error={errors.phone}
                          touched={touched.phone}
                          onChangeText={handleChange("phone")}
                        />

                        <ErrorMessage
                          name="phone"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>
                      <View style={styles.marginLabel}>
                        <InputUsingMask
                          type={"cpf"}
                          Name="CPF"
                          value={values.cpf}
                          options={{
                            maskType: "BRL",
                            withDDD: true,
                            dddMask: "(99)",
                          }}
                          placeholder="000.000.000-00"
                          error={errors.cpf}
                          touched={touched.cpf}
                          onChangeText={handleChange("cpf")}
                        />
                        <ErrorMessage
                          name="cpf"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>
                      <View style={styles.marginLabel}>
                        <InputDate
                          placeholder="DD/MM/AAAA"
                          value={values.date_of_birth}
                          Name="Data de nascimento"
                          error={errors.date_of_birth}
                          touched={touched.date_of_birth}
                          onChangeText={handleChange("date_of_birth")}
                        />
                        <ErrorMessage
                          name="date_of_birth"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>
                      <View style={styles.marginLabel}>
                        <InputPassword
                          placeholder="*****"
                          value={values.password}
                          Name="Senha"
                          error={errors.password}
                          touched={touched.password}
                          onChangeText={handleChange("password")}
                        />
                        <ErrorMessage
                          name="password"
                          render={(msg) => (
                            <Text style={styles.textError}>{msg}</Text>
                          )}
                        />
                      </View>
                      {/* <Input Name="Quem te recomendou"
                                            error={errors.indicationEmail}
                                            touched={touched.indicationEmail}
                                            onChangeText={handleChange('indicationEmail')}
                                            placeholder="Digite o e-mail de quem te recomendou." /> */}

                      <Btn onPress={() => handleSubmit()} title="Avançar" />
                    </>
                  )}
                </Formik>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

function sleep(arg0: number) {
  throw new Error("Function not implemented.");
}
