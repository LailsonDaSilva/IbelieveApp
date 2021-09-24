import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core/src";
import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow.svg";
import Photo from "../../assets/camera.svg";
import IconNetwork from "../../assets/group.svg";
import { styles } from "./styles";
import { CardNetwork } from "../../components/cardNetwork";

export function Network() {
  const navigation = useNavigation();
  function handleBack() {
    navigation.navigate("Welcome");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/*======== header ===========*/}
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={handleBack}>
            <Arrow height="16" width="16" />
            <Text style={styles.textBack}>Voltar</Text>
          </TouchableOpacity>
          <View>
            <Image source={Logo} style={styles.logo} />
          </View>
        </View>
        {/*======== profile details ===========*/}
        <View style={styles.profile}>
          <View style={styles.photo}>
            <TouchableOpacity>
              <View style={styles.iconPhoto}>
                <Photo height="14" width="14" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.rowNetwork}>
              <IconNetwork height="22" width="22" />
              <Text style={styles.primaryText}>Essa é a rede de</Text>
            </View>
            <Text style={styles.nameProfile}>Paulo Vinicius</Text>
            <Text style={styles.peoples}>30 pessoas convidadas</Text>
          </View>
        </View>
        {/*======== profile Network ===========*/}
        <CardNetwork />
        <CardNetwork />
        <CardNetwork />
        <CardNetwork />
      </View>
    </ScrollView>
  );
}


