import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, TextInputProps } from "react-native";
import IconDate from '../../assets/phone.svg';
import { placeholder } from "sequelize/types/lib/operators";
import { SvgProps } from "react-native-svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { styles } from "./styles";
import { TextInputMask } from "react-native-masked-text";

type InputProps = TextInputProps & {
    Name: string;
    error?: string;
    touched?: boolean;
}


export function InputPhone({ Name, error, touched, ...rest }: InputProps) {
    const [onFocus, setOnFocus] = useState(true);
    function handleOnFocus() {
        setOnFocus(false);
    }
    function handleblur() {
        setOnFocus(true);
    }
    return (
        <View >
            <Text style={styles.label}>
                {Name}
            </Text>
            <View style={onFocus ? styles.sectionStyle : error ? styles.sectionError : styles.sectionTouched}>
                <TextInputMask type={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99)' }} onBlur={handleblur} onFocus={handleOnFocus}
                    style={{ flex: 1, fontSize: 18 }}
                    underlineColorAndroid="transparent"  {...rest}
                     />

            </View>
        </View>
    );
};
/*  */