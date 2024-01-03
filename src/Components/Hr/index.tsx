import React from "react";
import { DimensionValue, Text, View } from "react-native";

import { styles } from "./styles";
interface IHr {
  marginBottom?: DimensionValue;
}
export function Hr({ marginBottom }: IHr) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: marginBottom }]} />
    </View>
  );
}
