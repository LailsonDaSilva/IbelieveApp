import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import IconDate from '../../assets/phone.svg';
import { placeholder } from "sequelize/types/lib/operators";
import { SvgProps } from "react-native-svg";
import IconShow from '../../assets/show_password.svg';
import IconHide from '../../assets/hide_password.svg';

type InputProps = TextInputProps & {
    Name: string;
    SvgProps?: React.FC<SvgProps>;
    error?: string;
    touched?: boolean;
}


export function InputPassword({ Name, SvgProps: SvgProps, error, touched, ...rest }: InputProps) {
    const [onFocus, setOnFocus] = useState(true);
    function handleOnFocus() {
        setOnFocus(false);
    }
    function handleblur() {
        setOnFocus(true);
    }
    const [show, setShow] = useState(true);
    return (
        <View style={styles.marginLabel}>
            <Text style={styles.label}>
                {Name}
            </Text>
            <View style={onFocus ? styles.sectionStyle : error ? styles.sectionError : styles.sectionTouched}>
                <TextInput onBlur={handleblur} onFocus={handleOnFocus}
                    style={{ flex: 1, fontSize: 18 }}
                    underlineColorAndroid="transparent"
                    secureTextEntry={show}
                    placeholder="****"
                    {...rest}

                />
                <TouchableOpacity onPress={() => setShow(!show)}>
                    {show ? <IconShow width="22" height="22" /> : <IconHide width="22" height="22" />}

                </TouchableOpacity>
            </View>
        </View>
    );
};