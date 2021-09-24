import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInputProps,
} from "react-native";
import { styles } from "./styles";
import IconDate from "../../assets/date.svg";
import { SvgProps } from "react-native-svg";

import { TextInputMask } from "react-native-masked-text";

type InputProps = TextInputProps & {
  Name: string;
  SvgProps?: React.FC<SvgProps>;
  error?: string;
  touched?: boolean;
};

export function InputDate({
  Name,
  SvgProps: SvgProps,
  error,
  touched,
  ...rest
}: InputProps) {
  const [onFocus, setOnFocus] = useState(true);
  const [date, setDate] = useState(new Date());
  function handleOnFocus() {
    setOnFocus(false);
  }
  function handleblur() {
    setOnFocus(true);
  }
  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };

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
          type={"datetime"}
          options={{ format: "DD-MM-YYYY" }}
          onBlur={handleblur}
          onFocus={handleOnFocus}
          style={{ flex: 1, fontSize: 18 }}
          underlineColorAndroid="transparent"
          {...rest}
        />

        <TouchableOpacity>
          {<IconDate width="22" height="22" />}
        </TouchableOpacity>
      </View>
    </>
  );
}
