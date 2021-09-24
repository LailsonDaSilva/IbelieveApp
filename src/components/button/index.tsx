import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ButtonProps,
} from "react-native";
import { styles } from "./styles";

type BntProps = ButtonProps & {
  title?: string;
};

export function Btn({ title, ...rest }: BntProps) {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.btn}>
        <Text style={styles.btnTilte}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
