import React, { useState } from "react";
import {
    View,
    Text,
     TouchableOpacity, ButtonProps
} from "react-native";
import IconPhone from '../../assets/phone.svg';
import IconClose from '../../assets/close_down.svg';
import { styles } from "./styles";

interface EnvironmentButtonProps{
    title: string;
    discont: string;
    address: string;
  }
export function CardEstablishment({title, discont, address,...rest}:EnvironmentButtonProps) {



    const [closeDown, setCloseDown] = useState(true);

    return (
        <View style={styles.containerCard}>
            <View style={styles.headerCard}>
                <View style={styles.imageCard} >

                </View>
                <View>
                    <Text style={styles.titleCard}>
                        {title}
                    </Text>
                    <Text style={styles.discountCard}>
                    {discont} %
                    </Text>
                    <View style={styles.miniTags}>
                        <View style={styles.miniTag}>
                            <Text style={styles.miniTagText}>
                                Comércio
                            </Text>
                        </View>
                        <View style={styles.miniTag}>
                            <Text style={styles.miniTagText}>
                                Comércio
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setCloseDown(!closeDown)} style={closeDown ? styles.closeDown : { display: 'none' }}>
                        <IconClose width="16" height="22" />

                    </TouchableOpacity>
                </View>

            </View>
            <TouchableOpacity onPress={() => setCloseDown(!closeDown)} style={!closeDown ? styles.openDown : { display: 'none' }} >
                <Text style={styles.textOpen} >
                    Toque para ver mais
                </Text>
            </TouchableOpacity>

            <View style={closeDown ? styles.footerCard : { display: 'none' }}>
                <View >
                    <View style={styles.contact} >
                        <IconPhone width="10" height="10" />
                        <Text>
                            Telefone
                        </Text>
                    </View>
                    <Text>
                        54455461416
                    </Text>
                </View>

                <View >
                    <View style={styles.contact} >
                        <Text style={styles.addressTitle}>
                            Endereço
                        </Text>
                        <Text>
                        </Text>
                    </View>
                    <Text style={styles.address}>
                        {address}
                    </Text>
                </View>
                <View>
                </View>
            </View>
        </View>
    );
};
