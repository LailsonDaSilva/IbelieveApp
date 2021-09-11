
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import logo from '../../assets/logo.png';
import { Input } from "../../components/textInput";
import IconSearch from '../../assets/search.svg';
import IconNetwork from '../../assets/group.svg';
import { CardEstablishment } from "../../components/cardEstablishment";
 import api from "../../services/api"; 

 interface EstablishmentProps {
    name: string,
    photo: string,
    address: string,
    discount: string,
} 

export function Welcome() {
   const [establishment, setEstablishment] = useState<EstablishmentProps[]>([])
useEffect(()=>{
async function fetchEstablishment() {
        const { data } = await api.get('/establishments')
        setEstablishment(data)
        console.log(data)
      }
      fetchEstablishment() 
    },[]) 
    
    const navigation = useNavigation();
    function handleNetwork() {
        navigation.navigate('Network');
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                 {/*======== header ===========*/}
                <View style={styles.header}>
                    <View>
                        <Image source={logo} style={styles.icon} />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnNetwork} onPress={handleNetwork}>
                            <IconNetwork width="22" height="22" />
                            <Text style={styles.titleNetwork}>
                                30 pessoas
                            </Text>
                            <Text style={styles.subTitleNetwork}>
                                na sua rede
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>
                {/*======== Welcome end button search ===========*/}
                <View>
                <Text style={styles.welcome}>
                    Bem vindo
                </Text>
                <Text style={styles.title}>
                    Conheça os nossos Parceiros
                </Text>
                <View style={styles.sectionStyle}>
                    <TextInput
                        style={styles.inputArea}
                        underlineColorAndroid="transparent"
                        placeholder="Pesquisar Estabelecimento"
                    />
                    <TouchableOpacity>
                        <IconSearch width="22" height="22" />

                    </TouchableOpacity>
                </View>
                </View>
                 {/*======== Tags ===========*/}
                <View style={styles.tags}>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Comércio
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Bem-estar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Serviços
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tags}>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Alimentação
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Educação
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tag}>
                        <Text style={styles.tagText}>
                            Saúde
                        </Text>
                    </TouchableOpacity>
                </View>
                 {/*======== Establishment ===========*/}
                 <View>
        <FlatList
          data={establishment}
          renderItem={({ item }) => (
            <CardEstablishment
              title={item.name}
              discont={item.discount}
              address={item.address}
            />
          )}
          vertical
          showsverticalScrollIndicator={false}
        />
      </View>
               

                
            </View>
        </ScrollView>

    );
}