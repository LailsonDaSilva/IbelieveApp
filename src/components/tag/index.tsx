import React, { useState } from "react";
import { Text, TouchableOpacity, ButtonProps } from "react-native";
import { styles } from "./styles";

type TagProps = ButtonProps & {
  title?: string;
};
export function Tag({ title, ...rest }: TagProps) {
  return (
    <TouchableOpacity {...rest} style={styles.tag}>
      <Text style={styles.tagText}>{title}</Text>
    </TouchableOpacity>
  );
}
