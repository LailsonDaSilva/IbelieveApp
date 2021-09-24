import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import logo from "../../assets/logo.png";
import IconSearch from "../../assets/search.svg";
import IconNetwork from "../../assets/group.svg";
import { CardEstablishment } from "../../components/cardEstablishment";
import api from "../../services/api";
import { Tag } from "../../components/tag";

interface EstablishmentProps {
  id: string;
  name: string;
  photo: string;
  address: string;
  discount: string;
  categories: String[];
}
interface TagCategoryProps {
  name: string;
  establishment_id: string;
}

export function Welcome() {
  const [establishment, setEstablishment] = useState<EstablishmentProps[]>([]);
  const [tagCategory, setTagCategory] = useState<TagCategoryProps[]>([]);
  const [filterEstablishment, setFilterEstablishment] = useState<
    EstablishmentProps[]
  >([]);
  const [tagCategorySelected, setTagCategorySelected] = useState("");
  function hanbleCategorySelected(tagCategory: string) {
    setTagCategorySelected(tagCategory);

    const filter = establishment?.filter((establishment) =>
      establishment.categories.includes(tagCategory)
    );
    setFilterEstablishment(filter);
  }
  useEffect(() => {
    async function fetchEstablishment() {
      const { data } = await api.get("/establishments");
      setEstablishment(data);
    }
    fetchEstablishment();
  }, []);

  useEffect(() => {
    async function fetchCategory() {
      const { data } = await api.get("/categories");
      setTagCategory(data);
    }
    fetchCategory();
  }, []);

  const navigation = useNavigation();
  function handleNetwork() {
    navigation.navigate("Network");
  }

  return (
    <View style={styles.container}>
      {/*======== header ===========*/}
      <View style={styles.header}>
        <View>
          <Image source={logo} style={styles.icon} />
        </View>
        <View>
          <TouchableOpacity style={styles.btnNetwork} onPress={handleNetwork}>
            <IconNetwork width="22" height="22" />
            <Text style={styles.titleNetwork}>30 pessoas</Text>
            <Text style={styles.subTitleNetwork}>na sua rede</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*======== Text Welcome end button search ===========*/}
      <View>
        <Text style={styles.welcome}>Bem vindo</Text>
        <Text style={styles.title}>Conheça os nossos Parceiros</Text>
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
      {/*======== Categories  Tags  ===========*/}
      <View>
        <FlatList
          data={tagCategory}
          keyExtractor={(item) => String(item.establishment_id)}
          renderItem={({ item }) => (
            <Tag
              title={item.name}
              onPress={() => hanbleCategorySelected(item.establishment_id)}
            />
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/*========  Establishments List ===========*/}
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={establishment}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardEstablishment
              title={item.name}
              discont={item.discount}
              address={item.address}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
