import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TextInputProps,
} from "react-native";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";


type InputProps = TextInputProps & {
  Name?: string;
  SvgProps?: React.FC<SvgProps>;
  error?: string;
  touched?: boolean;
};
export function Input({
  Name,
  SvgProps: SvgProps,
  error,
  touched,
  ...rest
}: InputProps) {
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
        <TextInput
          onBlur={handleblur}
          onFocus={handleOnFocus}
          {...rest}
          style={{ flex: 1, fontSize: 18 }}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity>{SvgProps}</TouchableOpacity>
    </>
  );
}
