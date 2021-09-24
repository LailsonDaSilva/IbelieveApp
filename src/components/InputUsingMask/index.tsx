import { ErrorMessage } from "formik";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInputProps,
} from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { styles } from "./styles";
type InputProps = TextInputProps &
  TextInputMaskProps & {
    Name: string;
    error?: string;
    touched?: boolean;
  };

export function InputUsingMask({ Name, error, touched, ...rest }: InputProps) {
  const [onFocus, setOnFocus] = useState(true);
  function handleOnFocus() {
    setOnFocus(false);
  }
  function handleblur() {
    setOnFocus(true);
  }
  return (
    <>
      <Text style={styles.label}>{Name}</Text>
      <View
        style={
          onFocus
            ? styles.sectionStyle
            : error
            ? styles.sectionError
            : styles.sectionTouched
        }
      >
        <TextInputMask
          onBlur={handleblur}
          onFocus={handleOnFocus}
          style={{ flex: 1, fontSize: 18 }}
          underlineColorAndroid="transparent"
          {...rest}
        />
      </View>
    </>
  );
}
