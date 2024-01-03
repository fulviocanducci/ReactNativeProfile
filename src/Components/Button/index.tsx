import React from "react";
import { Pressable, Text, View } from "react-native";

import { styles } from "./styles";
interface IButton {
  label?: string;
  onPress?: () => void;
}
export function Button({ label, onPress }: IButton) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.text}>{label || "undefined"}</Text>
      </Pressable>
    </View>
  );
}
